#!/usr/bin/env node
/*
 * 四語文法 structure / pattern / meaning_zh 一致性稽核。
 * 規則來源：memory project_grammar_structure_{conventions,japanese,korean}。
 * 用法：node scripts/audit_grammar.js   （全綠 exit 0；有違規 exit 1）
 * 新增文法後務必跑一次，0 違規才 commit。
 */
const fs = require("fs");
const path = require("path");
const DATA = path.join(__dirname, "..", "data");

function load(file) {
  const d = JSON.parse(fs.readFileSync(path.join(DATA, file), "utf8"));
  const out = [];
  for (const k of Object.keys(d)) {
    if (Array.isArray(d[k])) d[k].forEach((it, i) => out.push({ lv: k, idx: i, it }));
  }
  return out;
}

const FULLWIDTH = /[（）／＋]/;             // 全形括號/斜線/加號（；不檢，作中文/日文註解分隔符可接受）
const ONE_SIDE_SLASH = s => /\S\/ /.test(s) || / \/\S/.test(s); // / 只有一側空格
const PARTICLE = /^[はがをにのとでもへやかね]$/;      // 日文可省略助詞（括號緊貼）
const EN_META = /\((present|past|future|base form|base|agent|antecedent|back-shifted|active|passive|feeling|characteristic|first mention|one-time action|continuous action|singular|plural|uncountable|countable|now|purpose|parallel form|hearsay|conjecture)\b/i;

// 各語言檢查：回傳 [{rule, sample}]
const CHECKS = {
  "grammar_ko.json": ({ pattern: p, structure: s, meaning_zh: m }) => {
    const v = [];
    if (/\+\s*-/.test(s)) v.push(["接尾詞帶「+ -」", s]);
    if (/子音語幹|母音語幹|有收尾音|無收尾音/.test(s)) v.push(["中文收尾音(應 받침O/X)", s]);
    { const o = s.indexOf("받침 O"), x = s.indexOf("받침 X"); if (o >= 0 && x >= 0 && x < o) v.push(["받침 X 在 O 之前", s]); }
    for (const mm of s.matchAll(/陽性母音\(ㅏ\/ㅗ\)/g)) { if (!s.slice(0, mm.index).endsWith("末音節為")) { v.push(["母音和諧非標準式", s]); break; } }
    if (s.includes("陽性母音(ㅏ/ㅗ)語幹")) v.push(["母音和諧:語幹後置", s]);
    for (const mm of s.matchAll(/語幹/g)) { if (!/(動詞|形容詞)$/.test(s.slice(0, mm.index))) { v.push(["光禿語幹(前無詞性)", s]); break; } }
    if (/動\/形|形\/動/.test(s)) v.push(["詞性縮寫(動/形 漏「詞」字)", s]);  // 動/形容詞→動詞/形容詞(避開「動物」)
    if (FULLWIDTH.test(s)) v.push(["structure 全形符號（）／＋", s]);
    if (ONE_SIDE_SLASH(s)) v.push(["structure / 單側空格", s]);
    if (m.includes("/")) v.push(["meaning_zh 半形 /(應全形／)", m]);
    if (/[A-Za-z]/.test(p)) v.push(["pattern 含英文(應用 名詞/動詞/形容詞)", p]);
    { const e = (s.match(/[A-Za-z]+/g) || []).filter(x => !["O", "X", "A", "B"].includes(x)); if (e.length) v.push(["structure 殘留英文", `${e} :: ${s}`]); }
    return v;
  },
  "grammar_jap.json": ({ pattern: p, structure: s }) => {
    const v = [];
    if (FULLWIDTH.test(s)) v.push(["structure 全形符號（）／＋", s]);
    { const e = (s.match(/[A-Za-z]+/g) || []).filter(x => !["X", "Y"].includes(x)); if (e.length) v.push(["structure 殘留英文(非X/Y)", `${e} :: ${s}`]); }
    if (ONE_SIDE_SLASH(s)) v.push(["structure / 單側空格", s]);
    if (/（|）/.test(p)) v.push(["pattern 全形括號（）", p]);
    for (const mm of p.matchAll(/(\()([^)]*)\)/g)) {           // 註解括號(非單一助詞)前須空格
      if (!PARTICLE.test(mm[2]) && mm.index > 0 && p[mm.index - 1] !== " ") { v.push(["pattern 註解括號前無空格", p]); break; }
    }
    return v;
  },
  "grammar_dele.json": ({ structure: s }) => {
    const v = [];
    if (FULLWIDTH.test(s)) v.push(["structure 全形符號（）／＋", s]);
    if (ONE_SIDE_SLASH(s)) v.push(["structure / 單側空格", s]);
    return v;
  },
  _en: ({ pattern: p, structure: s }) => {                     // TOEIC / GEPT 共用
    const v = [];
    if (FULLWIDTH.test(s)) v.push(["structure 全形符號（）／＋", s]);
    if (EN_META.test(s)) v.push(["structure 英文後設標註(應中文)", s]);
    if (/\S\/|\/\S/.test(s)) v.push(["structure 斜線兩側需各留一空白", s]);  // 比 ONE_SIDE 更嚴:含完全無空白
    if (/\S\(/.test(s)) v.push(["structure ( 前需留一空白", s]);
    if (/\)[A-Za-z0-9一-鿿]/.test(s)) v.push(["structure ) 後接文字需留一空白", s]);
    if (/;\S/.test(s)) v.push(["structure 分號;後需留一空白", s]);
    if (/後設標註中文/.test(s)) v.push(["structure 殘留指示字「後設標註中文」", s]);
    // pattern 命名統一為「English name (繁中名)」:結尾須為含中文的半形括號
    if (!/\([^()]*[一-鿿][^()]*\)\s*$/.test(p)) v.push(["pattern 非「English (中文)」格式", p]);
    if (/[（）／]/.test(p)) v.push(["pattern 全形（）／(應半形)", p]);
    if (/\S\/|\/\S/.test(p)) v.push(["pattern 斜線兩側需各留一空白", p]);
    if (/，/.test(p)) v.push(["pattern 全形逗號，(應半形,)", p]);
    if (/,\S/.test(p)) v.push(["pattern 逗號後需留一空白", p]);
    // 句首式:英文部分除首字外不應有多個一般首字大寫字(縮寫/專有名詞除外)
    {
      const eng = p.replace(/\s*\([^()]*[一-鿿][^()]*\)\s*$/, "");
      const KEEP = new Set(["English", "Chinese", "British", "American", "I", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]);
      const caps = (eng.match(/[A-Za-z][A-Za-z'.\-]*/g) || []).filter(w => /^[A-Z][a-z]+$/.test(w) && !KEEP.has(w));
      if (caps.length > 1) v.push(["pattern 疑 Title Case(應句首式)", `${p} :: ${caps}`]);
    }
    return v;
  },
};
CHECKS["grammar_toeic.json"] = CHECKS._en;
CHECKS["grammar_gept.json"] = CHECKS._en;

let total = 0;
for (const file of ["grammar_jap.json", "grammar_ko.json", "grammar_dele.json", "grammar_toeic.json", "grammar_gept.json"]) {
  const rows = load(file);
  const byRule = {};
  for (const { it } of rows) {
    for (const [rule, sample] of CHECKS[file]({ pattern: it.pattern || "", structure: it.structure || "", meaning_zh: it.meaning_zh || "" })) {
      (byRule[rule] = byRule[rule] || []).push(sample);
    }
  }
  const n = Object.values(byRule).reduce((a, b) => a + b.length, 0);
  total += n;
  console.log(`\n===== ${file}  (${rows.length} 筆) — ${n ? `⚠ ${n} 違規` : "✅ 0"} =====`);
  for (const [rule, list] of Object.entries(byRule)) {
    console.log(`  ▲ ${rule}: ${list.length}`);
    list.slice(0, 6).forEach(x => console.log(`      ${String(x).slice(0, 90)}`));
    if (list.length > 6) console.log(`      …+${list.length - 6}`);
  }
}
console.log(`\n———— 總違規：${total} ————`);
process.exit(total ? 1 : 0);
