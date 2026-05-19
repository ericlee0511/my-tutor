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
  vocab: countLevels("vocab.json", ["n5","n4","n3","n2","n1"]),
  grammar: countLevels("grammar.json", ["n5","n4","n3","n2","n1"]),
  quiz: countLevels("quiz.json", ["n5","n4","n3","n2","n1"]),
};
const toeic = {
  vocab: countLevels("vocab_toeic.json", ["toeic"]),
  grammar: countLevels("grammar_toeic.json", ["toeic"]),
  quiz: countLevels("quiz_toeic.json", ["toeic"]),
};
const gept = {
  vocab: countLevels("vocab_gept.json", ["g1", "g2", "g3", "g4", "g5"]),
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

const pad = (n, w) => String(n).padStart(w, " ");

const today = new Date().toISOString().slice(0, 10);

const lines = [];
lines.push("# e-learning 內容統計");
lines.push("");
lines.push(`> generated: ${today} (auto by scripts/recount_stats.js)`);
lines.push("");

function levelTable(title, keys, labels, src) {
  lines.push(`## ${title}`);
  lines.push("");
  lines.push("| 等級    | 單字 | 文法 | 選擇題 |");
  lines.push("|---------|-----:|-----:|-------:|");
  let sv = 0, sg = 0, sq = 0;
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    const v = src.vocab[k] || 0;
    const g = src.grammar[k] || 0;
    const q = src.quiz[k] || 0;
    sv += v; sg += g; sq += q;
    lines.push(`| ${labels[i]} | ${pad(v, 4)} | ${pad(g, 4)} | ${pad(q, 6)} |`);
  }
  if (keys.length > 1) {
    lines.push(`| **小計** | **${sv}** | **${sg}** | **${sq}** |`);
  }
  lines.push("");
  return { vocab: sv, grammar: sg, quiz: sq };
}

const deleSum = levelTable(
  "西文 (DELE A1 ~ C2)",
  ["da1","da2","db1","db2","dc1","dc2"],
  ["DELE A1","DELE A2","DELE B1","DELE B2","DELE C1","DELE C2"],
  dele
);
const topikSum = levelTable(
  "韓文 (TOPIK 1 ~ 6)",
  ["t1","t2","t3","t4","t5","t6"],
  ["TOPIK 1","TOPIK 2","TOPIK 3","TOPIK 4","TOPIK 5","TOPIK 6"],
  topik
);
const jpSum = levelTable(
  "日文 (N5 ~ N1)",
  ["n5","n4","n3","n2","n1"],
  ["N5","N4","N3","N2","N1"],
  jp
);
const toeicSum = levelTable(
  "多益 (TOEIC)",
  ["toeic"],
  ["TOEIC"],
  toeic
);
// GEPT: vocab is split into 5 sub-levels; grammar/quiz are shared.
// Render with per-level vocab rows and "—" for the shared columns.
const geptKeys = ["g1", "g2", "g3", "g4", "g5"];
const geptLabels = ["GEPT 初級", "GEPT 中級", "GEPT 中高級", "GEPT 高級", "GEPT 優級"];
let geptVocabSum = 0;
const geptGrammar = gept.grammar.gept || 0;
const geptQuiz = gept.quiz.gept || 0;
lines.push("## 全民英檢 (GEPT)");
lines.push("");
lines.push("| 等級        | 單字 | 文法 | 選擇題 |");
lines.push("|-------------|-----:|-----:|-------:|");
for (let i = 0; i < geptKeys.length; i++) {
  const v = gept.vocab[geptKeys[i]] || 0;
  geptVocabSum += v;
  lines.push(`| ${geptLabels[i]} | ${pad(v, 4)} | — | — |`);
}
lines.push(`| **小計** | **${geptVocabSum}** | **${geptGrammar}** | **${geptQuiz}** |`);
lines.push("");
const geptSum = { vocab: geptVocabSum, grammar: geptGrammar, quiz: geptQuiz };

lines.push("## 情境句");
lines.push("");
lines.push("| 系列 | 故事數 | 總句數 |");
lines.push("|------|-------:|-------:|");
const sceneRows = [
  ["西文 (DELE A1 ~ C2)", scenes.dele],
  ["韓文 (TOPIK 1 ~ 6)", scenes.topik],
  ["日文 (N5 ~ N1)", scenes.jap],
  ["多益 (TOEIC)", scenes.toeic],
  ["全民英檢 (GEPT)", scenes.gept],
];
let sStories = 0, sSentences = 0;
for (const [name, s] of sceneRows) {
  sStories += s.stories;
  sSentences += s.sentences;
  lines.push(`| ${name} | ${s.stories} | ${s.sentences} |`);
}
lines.push(`| **合計** | **${sStories}** | **${sSentences}** |`);
lines.push("");

const totalVocab = deleSum.vocab + topikSum.vocab + jpSum.vocab + toeicSum.vocab + geptSum.vocab;
const totalGrammar = deleSum.grammar + topikSum.grammar + jpSum.grammar + toeicSum.grammar + geptSum.grammar;
const totalQuiz = deleSum.quiz + topikSum.quiz + jpSum.quiz + toeicSum.quiz + geptSum.quiz;

lines.push("## 總計");
lines.push("");
lines.push("| 類型   | 數量 |");
lines.push("|--------|-----:|");
lines.push(`| 單字   | ${totalVocab} |`);
lines.push(`| 文法   | ${totalGrammar} |`);
lines.push(`| 選擇題 | ${totalQuiz} |`);
lines.push(`| 故事篇數 | ${sStories} |`);
lines.push(`| 故事句數 | ${sSentences} |`);
lines.push("");

fs.writeFileSync(OUT, lines.join("\n"), "utf8");
console.log(`wrote ${OUT}`);
console.log(`totals: vocab=${totalVocab} grammar=${totalGrammar} quiz=${totalQuiz} stories=${sStories} sentences=${sSentences}`);
