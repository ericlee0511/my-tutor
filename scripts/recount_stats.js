#!/usr/bin/env node
// Recount everything in data/ and rewrite data/statistics.md.
// Run before every `git push` so the picker (which reads statistics.md) is in sync.

const fs = require("fs");
const path = require("path");

const DATA = path.join(__dirname, "..", "data");
const OUT = path.join(DATA, "statistics.md");

const readJSON = (p) => JSON.parse(fs.readFileSync(p, "utf8"));

function countLevels(file, keys) {
  const d = readJSON(path.join(DATA, file));
  const out = {};
  let total = 0;
  for (const k of keys) {
    const arr = d[k] || [];
    out[k] = arr.length;
    total += arr.length;
  }
  out._total = total;
  return out;
}

function countScenes(prefix) {
  const files = fs.readdirSync(DATA)
    .filter(n => new RegExp(`^scenes_${prefix}\\d+\\.json$`).test(n))
    .sort();
  let stories = 0;
  let sentences = 0;
  for (const f of files) {
    const d = readJSON(path.join(DATA, f));
    const arr = Array.isArray(d.all) ? d.all : [];
    stories += 1;
    sentences += arr.length;
  }
  return { stories, sentences };
}

const dele = {
  vocab: countLevels("vocab_dele.json", ["da1","da2","db1","db2","dc1","dc2"]),
  grammar: countLevels("grammar_dele.json", ["da1","da2","db1","db2","dc1","dc2"]),
  quiz: countLevels("quiz_dele.json", ["da1","da2","db1","db2","dc1","dc2"]),
};
const topik = {
  vocab: countLevels("vocab_ko.json", ["t1","t2","t3","t4","t5","t6"]),
  grammar: countLevels("grammar_ko.json", ["t1","t2","t3","t4","t5","t6"]),
  quiz: countLevels("quiz_ko.json", ["t1","t2","t3","t4","t5","t6"]),
};
const jp = {
  vocab: countLevels("vocab_jap.json", ["n5","n4","n3","n2","n1"]),
  grammar: countLevels("grammar_jap.json", ["n5","n4","n3","n2","n1"]),
  quiz: countLevels("quiz_jap.json", ["n5","n4","n3","n2","n1"]),
};
const toeic = {
  vocab: countLevels("vocab_toeic.json", ["toeic"]),
  grammar: countLevels("grammar_toeic.json", ["toeic"]),
  quiz: countLevels("quiz_toeic.json", ["toeic"]),
};
const gept = {
  vocab: countLevels("vocab_gept.json", ["gept"]),
  grammar: countLevels("grammar_gept.json", ["gept"]),
  quiz: countLevels("quiz_gept.json", ["gept"]),
};

const scenes = {
  dele: countScenes("dele"),
  topik: countScenes("topik"),
  jap: countScenes("jap"),
  toeic: countScenes("toeic"),
  gept: countScenes("gept"),
};

// Visual width: CJK (incl. Hangul, full-width punctuation) takes 2 cells, ASCII 1.
function visualWidth(s) {
  let w = 0;
  for (const ch of String(s)) {
    const c = ch.codePointAt(0);
    if (
      (c >= 0x1100 && c <= 0x115F) ||
      (c >= 0x2E80 && c <= 0x303E) ||
      (c >= 0x3041 && c <= 0x33FF) ||
      (c >= 0x3400 && c <= 0x4DB5) ||
      (c >= 0x4E00 && c <= 0x9FFF) ||
      (c >= 0xA000 && c <= 0xA4CF) ||
      (c >= 0xAC00 && c <= 0xD7A3) ||
      (c >= 0xF900 && c <= 0xFAFF) ||
      (c >= 0xFE30 && c <= 0xFE4F) ||
      (c >= 0xFF00 && c <= 0xFF60) ||
      (c >= 0xFFE0 && c <= 0xFFE6)
    ) w += 2; else w += 1;
  }
  return w;
}
function padCell(text, width, align) {
  const gap = width - visualWidth(text);
  if (gap <= 0) return text;
  return align === "right" ? " ".repeat(gap) + text : text + " ".repeat(gap);
}
// Render a markdown table.
// `aligns`: array of "left" | "right" per column.
// `forceWidths`: optional array of widths (number or null). When non-null,
//   that column is rendered at the forced width instead of auto-fit.
function formatTable(headers, aligns, rows, forceWidths) {
  const cols = headers.length;
  const widths = new Array(cols).fill(0);
  for (let i = 0; i < cols; i++) {
    if (forceWidths && typeof forceWidths[i] === "number") {
      widths[i] = forceWidths[i];
      continue;
    }
    widths[i] = visualWidth(headers[i]);
    for (const r of rows) widths[i] = Math.max(widths[i], visualWidth(String(r[i] ?? "")));
  }
  const renderRow = r => "| " + r.map((c, i) => padCell(String(c ?? ""), widths[i], aligns[i])).join(" | ") + " |";
  const separator = "|" + widths.map((w, i) => {
    const dashes = "-".repeat(w + 2);
    if (aligns[i] === "right") return dashes.slice(0, -1) + ":";
    if (aligns[i] === "left")  return ":" + dashes.slice(1);
    return dashes;
  }).join("|") + "|";
  return [renderRow(headers), separator, ...rows.map(renderRow)].join("\n");
}

// ---- Pass 1: collect all table data without rendering -----------------------
// Each entry: { title, headers, aligns, rows, kind }
//   kind: "level" (5 main level tables, share L+V widths)
//         "scenes" (情境句, shares L width only)
//         "totals" (總計, shares L width only)
const tables = [];

function pushLevelTable(title, keys, labels, src) {
  let sv = 0, sg = 0, sq = 0;
  const rows = [];
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    const v = src.vocab[k] || 0;
    const g = src.grammar[k] || 0;
    const q = src.quiz[k] || 0;
    sv += v; sg += g; sq += q;
    rows.push([labels[i], String(v), String(g), String(q)]);
  }
  if (keys.length > 1) rows.push(["**小計**", `**${sv}**`, `**${sg}**`, `**${sq}**`]);
  tables.push({
    title,
    headers: ["等級", "單字", "文法", "選擇題"],
    aligns: ["left", "right", "right", "right"],
    rows,
    kind: "level",
  });
  return { vocab: sv, grammar: sg, quiz: sq };
}

function pushTableWithSubLevels(title, mainLabel, vocabFile, vocabKey, subs, src) {
  const arr = readJSON(path.join(DATA, vocabFile))[vocabKey] || [];
  const subCounts = Object.fromEntries(subs.map(s => [s.key, 0]));
  for (const e of arr) {
    if (subCounts[e.level] !== undefined) subCounts[e.level]++;
  }
  const v = arr.length;
  const g = src.grammar[vocabKey] || 0;
  const q = src.quiz[vocabKey] || 0;
  const rows = [[mainLabel, String(v), String(g), String(q)]];
  for (const s of subs) rows.push([`   ${s.label}`, String(subCounts[s.key]), "--", "--"]);
  tables.push({
    title,
    headers: ["等級", "單字", "文法", "選擇題"],
    aligns: ["left", "right", "right", "right"],
    rows,
    kind: "level",
  });
  return { vocab: v, grammar: g, quiz: q };
}

const deleSum = pushLevelTable(
  "西文 (DELE A1 ~ C2)",
  ["da1","da2","db1","db2","dc1","dc2"],
  ["DELE A1","DELE A2","DELE B1","DELE B2","DELE C1","DELE C2"],
  dele
);
const topikSum = pushLevelTable(
  "韓文 (TOPIK 1 ~ 6)",
  ["t1","t2","t3","t4","t5","t6"],
  ["TOPIK 1","TOPIK 2","TOPIK 3","TOPIK 4","TOPIK 5","TOPIK 6"],
  topik
);
const jpSum = pushLevelTable(
  "日文 (N5 ~ N1)",
  ["n5","n4","n3","n2","n1"],
  ["N5","N4","N3","N2","N1"],
  jp
);
const toeicSum = pushTableWithSubLevels(
  "多益 (TOEIC)", "TOEIC",
  "vocab_toeic.json", "toeic",
  [
    { key: "基礎生活級", label: "基礎生活" },
    { key: "職場日常級", label: "職場日常" },
    { key: "進階商務級", label: "進階商務" },
    { key: "專業頂尖級", label: "專業頂尖" },
  ],
  toeic
);
const geptSum = pushTableWithSubLevels(
  "全民英檢 (GEPT)", "GEPT",
  "vocab_gept.json", "gept",
  [
    { key: "初級",   label: "初級" },
    { key: "中級",   label: "中級" },
    { key: "中高級", label: "中高級" },
    { key: "高級",   label: "高級" },
    { key: "優級",   label: "優級" },
  ],
  gept
);

const sceneSrc = [
  ["西文 (DELE A1 ~ C2)", scenes.dele],
  ["韓文 (TOPIK 1 ~ 6)", scenes.topik],
  ["日文 (N5 ~ N1)", scenes.jap],
  ["多益 (TOEIC)", scenes.toeic],
  ["全民英檢 (GEPT)", scenes.gept],
];
let sStories = 0, sSentences = 0;
const sceneRows = [];
for (const [name, s] of sceneSrc) {
  sStories += s.stories;
  sSentences += s.sentences;
  sceneRows.push([name, String(s.stories), String(s.sentences)]);
}
sceneRows.push(["**合計**", `**${sStories}**`, `**${sSentences}**`]);
tables.push({
  title: "情境句",
  headers: ["系列", "故事數", "總句數"],
  aligns: ["left", "right", "right"],
  rows: sceneRows,
  kind: "scenes",
});

const totalVocab = deleSum.vocab + topikSum.vocab + jpSum.vocab + toeicSum.vocab + geptSum.vocab;
const totalGrammar = deleSum.grammar + topikSum.grammar + jpSum.grammar + toeicSum.grammar + geptSum.grammar;
const totalQuiz = deleSum.quiz + topikSum.quiz + jpSum.quiz + toeicSum.quiz + geptSum.quiz;

tables.push({
  title: "總計",
  headers: ["類型", "數量"],
  aligns: ["left", "right"],
  rows: [
    ["單字", String(totalVocab)],
    ["文法", String(totalGrammar)],
    ["選擇題", String(totalQuiz)],
    ["故事篇數", String(sStories)],
    ["故事句數", String(sSentences)],
  ],
  kind: "totals",
});

// ---- Pass 2: compute shared column widths -----------------------------------
// Group L (leftmost label column): shared by all 7 tables — 等級 / 系列 / 類型
let groupL = 0;
for (const t of tables) {
  groupL = Math.max(groupL, visualWidth(t.headers[0]));
  for (const r of t.rows) groupL = Math.max(groupL, visualWidth(String(r[0] ?? "")));
}
// Group V (right-aligned numeric columns 單字/文法/選擇題): shared across 5 level tables only
let groupV = 0;
for (const t of tables) {
  if (t.kind !== "level") continue;
  for (let ci = 1; ci <= 3; ci++) {
    groupV = Math.max(groupV, visualWidth(t.headers[ci]));
    for (const r of t.rows) groupV = Math.max(groupV, visualWidth(String(r[ci] ?? "")));
  }
}

// ---- Pass 3: render -----------------------------------------------------------
const today = new Date().toISOString().slice(0, 10);

const lines = [];
lines.push("# e-learning 內容統計");
lines.push("");
lines.push(`> generated: ${today} (auto by scripts/recount_stats.js)`);
lines.push("");

for (const t of tables) {
  lines.push(`## ${t.title}`);
  lines.push("");
  let force;
  if (t.kind === "level") {
    force = [groupL, groupV, groupV, groupV];
  } else if (t.kind === "scenes") {
    force = [groupL, null, null];
  } else if (t.kind === "totals") {
    force = [groupL, null];
  }
  lines.push(formatTable(t.headers, t.aligns, t.rows, force));
  lines.push("");
}

fs.writeFileSync(OUT, lines.join("\n"), "utf8");
console.log(`wrote ${OUT}`);
console.log(`totals: vocab=${totalVocab} grammar=${totalGrammar} quiz=${totalQuiz} stories=${sStories} sentences=${sSentences}`);
