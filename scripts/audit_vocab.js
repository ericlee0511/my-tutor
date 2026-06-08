#!/usr/bin/env node
/*
 * 五語單字一致性稽核（機械式格式檢查；內容品質仍須代理/人審）。
 * 規則來源：memory vocab-mining-and-dedup / vocab-example-composition / 各語言慣例。
 * 用法：node scripts/audit_vocab.js   （全綠 exit 0；有違規 exit 1）
 * 新增單字後務必跑一次，0 違規才 commit。
 * 注意：能查「格式」(缺欄/重複/詞性前綴/破折號)，不能查「內容對不對」(意思/例句/級別/性別)。
 */
const fs = require("fs");
const path = require("path");
const DATA = path.join(__dirname, "..", "data");
const LEAD_DASH = /^\s*[—–―－-]/;

function load(file) {
  const d = JSON.parse(fs.readFileSync(path.join(DATA, file), "utf8"));
  const out = [];
  for (const k of Object.keys(d)) if (Array.isArray(d[k])) d[k].forEach(it => out.push(it));
  return out;
}

// file → {req:[必填欄], exKey:例句外語欄, dupKey:fn, posPrefix:bool}
const SPEC = {
  "vocab_jap.json":  { req: ["kanji", "kana", "meaning_zh", "example_ja", "example_zh"], ex: "example_ja", dup: it => `${it.kanji}|${it.kana}`, pos: false },
  "vocab_ko.json":   { req: ["word", "meaning_zh", "example_ko", "example_zh"], ex: "example_ko", dup: it => `${it.word}|${it.meaning_zh}`, pos: false },
  "vocab_dele.json": { req: ["word", "meaning_zh", "example_es", "example_zh"], ex: "example_es", dup: it => (it.word || "").toLowerCase(), pos: true },
  "vocab_toeic.json":{ req: ["word", "meaning_zh", "example_en", "example_zh"], ex: "example_en", dup: it => (it.word || "").toLowerCase(), pos: true },
  "vocab_gept.json": { req: ["word", "meaning_zh", "example_en", "example_zh"], ex: "example_en", dup: it => (it.word || "").toLowerCase(), pos: true },
};

let total = 0;
for (const [file, spec] of Object.entries(SPEC)) {
  const rows = load(file);
  const byRule = {};
  const push = (rule, sample) => (byRule[rule] = byRule[rule] || []).push(sample);
  const seen = new Map();
  for (const it of rows) {
    for (const f of spec.req) if (!String(it[f] ?? "").trim()) push(`缺/空欄 ${f}`, `${it.word || it.kanji || "?"}`);
    const exv = String(it[spec.ex] ?? ""), zhv = String(it.example_zh ?? "");
    if (LEAD_DASH.test(exv)) push(`例句開頭破折號 ${spec.ex}`, exv.slice(0, 50));
    if (LEAD_DASH.test(zhv)) push("example_zh 開頭破折號", zhv.slice(0, 50));
    if (spec.pos) {
      const m = String(it.meaning_zh ?? "");
      if (/^（/.test(m)) push("meaning_zh 詞性前綴全形（）(應半形)", m.slice(0, 40));
      else if (!/^\([^)]+\)/.test(m)) push("meaning_zh 缺半形詞性前綴 (...)", m.slice(0, 40));
    }
    const k = spec.dup(it);
    seen.set(k, (seen.get(k) || 0) + 1);
  }
  let dup = 0;
  for (const [k, n] of seen) if (n > 1) { dup += n - 1; if (byRule["同鍵重複"]?.length < 6 || !byRule["同鍵重複"]) push("同鍵重複(可刪)", `${k} ×${n}`); }
  const cnt = Object.values(byRule).reduce((a, b) => a + b.length, 0);
  total += cnt;
  console.log(`\n===== ${file}  (${rows.length} 筆) — ${cnt ? `⚠ ${cnt}` : "✅ 0"} =====`);
  for (const [rule, list] of Object.entries(byRule)) {
    console.log(`  ▲ ${rule}: ${list.length}`);
    list.slice(0, 5).forEach(x => console.log(`      ${String(x).slice(0, 80)}`));
    if (list.length > 5) console.log(`      …+${list.length - 5}`);
  }
}
console.log(`\n———— 單字總違規：${total} ————`);
process.exit(total ? 1 : 0);
