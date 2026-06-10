#!/usr/bin/env node
/*
 * 五語選擇題一致性稽核（機械式格式檢查；題目/誘答品質仍須代理/人審）。
 * 用法：node scripts/audit_quiz.js   （全綠 exit 0；有違規 exit 1）
 * 新增選擇題後務必跑一次，0 違規才 commit。
 * 查得到「格式」(重複題/壞選項/答案索引/缺欄/破折號)，查不到「內容對不對」(考點/誘答合理性)。
 */
const fs = require("fs");
const path = require("path");
const DATA = path.join(__dirname, "..", "data");
const LEAD_DASH = /^\s*[—–―－-]/;

const SPEC = {
  "quiz_jap.json":  { q: ["question_ja", "question_en"], key: "question_ja", expl: ["explanation_ja", "explanation_en"] },
  "quiz_ko.json":   { q: ["question_ko"], key: "question_ko", expl: ["explanation_zh"] },
  "quiz_dele.json": { q: ["question_es"], key: "question_es", expl: ["explanation_zh"] },
  "quiz_toeic.json":{ q: ["question_en"], key: "question_en", expl: ["explanation_zh"] },
  "quiz_gept.json": { q: ["question_en"], key: "question_en", expl: ["explanation_zh"] },
};

let total = 0;
for (const [file, spec] of Object.entries(SPEC)) {
  const d = JSON.parse(fs.readFileSync(path.join(DATA, file), "utf8"));
  const items = [];
  for (const k of Object.keys(d)) if (Array.isArray(d[k])) d[k].forEach((it, i) => items.push({ k, i, it }));
  const byRule = {};
  const push = (r, s) => (byRule[r] = byRule[r] || []).push(s);
  const seen = new Map();
  for (const { k, i, it } of items) {
    const tag = `${k}#${i}`;
    for (const f of spec.q) {
      const v = String(it[f] ?? "");
      if (!v.trim()) push(`缺/空題目 ${f}`, tag);
      if (LEAD_DASH.test(v)) push(`題目開頭破折號 ${f}`, v.slice(0, 45));
      if (/&lt;|&gt;|&amp;|&quot;|&#\d/.test(v)) push(`HTML實體殘留 ${f}(應還原<u>等或去除)`, v.slice(0, 50));
    }
    for (const f of spec.expl) {
      const v = String(it[f] ?? "");
      if (!v.trim()) push(`缺/空解說 ${f}`, tag);
      if (/&lt;|&gt;|&amp;|&quot;|&#\d/.test(v)) push(`HTML實體殘留 ${f}`, v.slice(0, 50));
    }
    const o = it.options, a = it.answer;
    if (!Array.isArray(o) || o.length < 2) push("選項缺/不足", tag);
    else {
      if (o.length !== 4) push(`選項數非4(${o.length})`, tag);
      // 註：空白選項不檢——「不填字/無介系詞」是合法答案(如 calculate ___ 正解為空白)。
      if (new Set(o.map(String)).size !== o.length) push("選項內重複", `${tag} ${JSON.stringify(o)}`);
      if (!Number.isInteger(a) || a < 0 || a >= o.length) push("答案索引無效", `${tag} ans=${a}/len=${o.length}`);
    }
    const kk = String(it[spec.key] ?? "");
    seen.set(kk, (seen.get(kk) || 0) + 1);
  }
  let dup = 0;
  for (const [, n] of seen) if (n > 1) dup += n - 1;
  if (dup) push("重複題幹(同題出現多次)", `共 ${dup} 筆多餘`);
  const cnt = Object.values(byRule).reduce((a, b) => a + b.length, 0);
  total += cnt;
  console.log(`\n===== ${file}  (${items.length} 題) — ${cnt ? `⚠ ${cnt}` : "✅ 0"} =====`);
  for (const [rule, list] of Object.entries(byRule)) {
    console.log(`  ▲ ${rule}: ${list.length}`);
    list.slice(0, 5).forEach(x => console.log(`      ${String(x).slice(0, 80)}`));
    if (list.length > 5) console.log(`      …+${list.length - 5}`);
  }
}
console.log(`\n———— 選擇題總違規：${total} ————`);
process.exit(total ? 1 : 0);
