const LEVELS = ["n5", "n4", "n3", "n2", "n1"];
const LANGS = ["en", "ja"];
const STORAGE_KEY = "jp_tutor_state";

const STORIES = [
  { key: "jap001", title: "修学旅行で仲良くないグループに入りました 1" },
  { key: "jap002", title: "修学旅行で仲良くないグループに入りました 2" },
  { key: "jap003", title: "消えた教室" },
  { key: "jap004", title: "「祝祭村からの脱出」にまつわる記録" },
  { key: "jap005", title: "人から聞いた話 1" },
  { key: "jap006", title: "人から聞いた話 2" },
  { key: "jap007", title: "教室に二人っきりなんて聞いてない！" },
  { key: "jap008", title: "水に還る" },
  { key: "jap009", title: "この学校では笑顔が絶えません" },
  { key: "jap010", title: "学校の七不思議" },
  { key: "jap011", title: "メロい恋とエモい言葉図鑑" },
  { key: "jap012", title: "遊園地は眠らない" },
  { key: "jap013", title: "終電を逃した夜、猫が拾った記憶" },
  { key: "jap014", title: "猫になった魔法使い" },
  { key: "jap015", title: "ダブルテイクアウトー氷の王者と万年二位" },
  { key: "jap016", title: "探偵研究部。ーカケラノセカイー 1 うわさの新入生を追え！" },
  { key: "jap017", title: "探偵研究部。ーカケラノセカイー 2 部室争奪戦！" },
  { key: "jap018", title: "行方不明の友人を探しています" },
  { key: "jap019", title: "言の葉の夜" },
  { key: "jap020", title: "言の葉の涯" },
  { key: "jap023", title: "先生、近づいても、いいですか。" },
  { key: "jap021", title: "言の葉の翠" },
  { key: "jap022", title: "言の葉の憶" },
  { key: "jap024", title: "たった二文字の香りと重さ" },
  { key: "jap025", title: "今日は何の日" },
  { key: "jap026", title: "一年に一度" },
  { key: "jap027", title: "私にこの感情の名前を教えてください" },
  { key: "jap028", title: "キミのココロは何色ですか？" },
  { key: "jap029", title: "死んだ彼女が遺した日記" },
  { key: "jap030", title: "お見合い結婚しましたーしばらくはセックスレスという約束で！" },
  { key: "jap031", title: "卒業アルバムに写る「知らない生徒」ー取材記録" },
  { key: "jap032", title: "料理男子、恋をする" },
  { key: "jap033", title: "事故物件シークレット研究会" },
  { key: "jap034", title: "記録ー2025年3月、川瀬家の83日間" },
  { key: "jap035", title: "〇という名字の人にお気を付けください" },
  { key: "jap036", title: "名もなき剣に、雪が降るー天文蓮華戦乱記" },
].sort((a, b) => a.title.localeCompare(b.title, "ja"));

let DATA = {};
let state = {
  level: "n5",
  lang: "en",
  dir: "ja",
  story: null,
  history: {},
  timeline: [],
  timelinePos: -1,
};
const MAX_TIMELINE = 50;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    Object.assign(state, saved);
  } catch {}
  state.history = state.history || {};
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

async function loadData() {
  const loaded = await Promise.all([
    fetch("data/vocab.json").then(r => r.json()),
    fetch("data/grammar.json").then(r => r.json()),
    fetch("data/quiz.json").then(r => r.json()),
    ...STORIES.map(s => fetch(`data/scenes_${s.key}.json`).then(r => r.json())),
  ]);
  DATA.vocab = loaded[0];
  DATA.grammar = loaded[1];
  DATA.quiz = loaded[2];
  DATA.scenes = {};
  STORIES.forEach((s, i) => {
    DATA.scenes[s.key] = loaded[3 + i].all || [];
  });
  updateStats();
}

function updateStats() {
  const total =
    Object.values(DATA.vocab || {}).reduce((s, a) => s + a.length, 0) +
    Object.values(DATA.grammar || {}).reduce((s, a) => s + a.length, 0) +
    Object.values(DATA.quiz || {}).reduce((s, a) => s + a.length, 0) +
    Object.values(DATA.scenes || {}).reduce((s, a) => s + a.length, 0);
  document.getElementById("stats").textContent = `已載入 ${total} 項學習素材 · 離線可用`;
}

function pickRandom(pool, level, kind) {
  const items = pool[level];
  if (!items || !items.length) return null;
  const key = `${kind}_${level}`;
  let history = state.history[key] || [];
  history = history.filter(i => i < items.length);
  let available = [];
  for (let i = 0; i < items.length; i++) if (!history.includes(i)) available.push(i);
  if (!available.length) { history = []; available = items.map((_, i) => i); }
  const idx = available[Math.floor(Math.random() * available.length)];
  history.push(idx);
  const max = items.length <= 4 ? Math.max(1, items.length - 1) : Math.floor(items.length / 2) + 1;
  while (history.length > max) history.shift();
  state.history[key] = history;
  saveState();
  return items[idx];
}

function escapeHTML(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

function fmtWord(item) {
  const lang = state.lang;
  const meaning = item[`meaning_${lang}`] ?? item.meaning_en;
  const trans = lang === "ja" ? (item.example_kana || item.example_en) : item.example_en;
  return `<div class="headword">📖 ${escapeHTML(item.kanji)}</div>` +
    `<div class="kana">かな: ${escapeHTML(item.kana)}</div>` +
    `<div><span class="label">Meaning:</span> ${escapeHTML(meaning)}</div>` +
    `<div class="ex">例: ${escapeHTML(item.example_ja)}<br>` +
    `   → ${escapeHTML(trans)}</div>`;
}

function fmtGrammar(item) {
  const lang = state.lang;
  const meaning = item[`meaning_${lang}`] ?? item.meaning_en;
  let html = `<div class="headword">📘 ${escapeHTML(item.pattern)}</div>` +
    `<div><span class="label">Meaning:</span> ${escapeHTML(meaning)}</div>` +
    `<div><span class="label">Structure:</span> ${escapeHTML(item.structure)}</div>`;
  (item.examples || []).forEach((ex, i) => {
    const t = lang === "ja" ? (ex.kana || ex.en) : ex.en;
    html += `<div class="ex">例${i + 1}: ${escapeHTML(ex.ja)}<br>` +
      `   → ${escapeHTML(t)}</div>`;
  });
  return html;
}

function fmtQuiz(item) {
  const lang = state.lang;
  const q = item[`question_${lang}`] ?? item.question_en;
  const exp = item[`explanation_${lang}`] ?? item.explanation_en;
  const letters = ["A", "B", "C", "D"];
  const ansLetter = letters[item.answer];
  let html = `<div class="headword">❓ ${escapeHTML(q)}</div><div class="options">`;
  item.options.forEach((opt, i) => {
    html += `<div class="opt">${letters[i]}) ${escapeHTML(opt)}</div>`;
  });
  html += `</div>` +
    `<div><span class="spoiler" onclick="this.classList.toggle('revealed')">` +
    `Answer: ${ansLetter} — ${escapeHTML(exp)}</span></div>`;
  return html;
}

function fmtScene(item, storyTitle) {
  const dir = state.dir === "zh" ? "zh" : "ja";
  let html = `<div class="story-banner">` +
    `<span class="story-title">📖 ${escapeHTML(storyTitle)}</span>` +
    `<button class="story-switch" type="button">換故事</button>` +
    `</div>`;
  if (dir === "ja") {
    html += `<div class="headword">🎭 ${escapeHTML(item.ja)}</div>`;
    if (item.kana) html += `<div class="kana">かな: ${escapeHTML(item.kana)}</div>`;
    html += `<div><span class="spoiler" onclick="this.classList.toggle('revealed')">` +
      `💬 ${escapeHTML(item.zh)}</span></div>`;
  } else {
    html += `<div class="headword">💬 ${escapeHTML(item.zh)}</div>`;
    let hidden = `🎭 ${escapeHTML(item.ja)}`;
    if (item.kana) hidden += `<br>かな: ${escapeHTML(item.kana)}`;
    html += `<div><span class="spoiler" onclick="this.classList.toggle('revealed')">` +
      hidden + `</span></div>`;
  }
  return html;
}

function pushTimeline(kind, key, item) {
  state.timeline.length = state.timelinePos + 1;
  state.timeline.push({ kind, key, item });
  state.timelinePos = state.timeline.length - 1;
  while (state.timeline.length > MAX_TIMELINE) {
    state.timeline.shift();
    state.timelinePos--;
  }
  saveState();
}

function formatEntry(entry) {
  if (entry.kind === "word") return fmtWord(entry.item);
  if (entry.kind === "grammar") return fmtGrammar(entry.item);
  if (entry.kind === "quiz") return fmtQuiz(entry.item);
  if (entry.kind === "scene") {
    const story = STORIES.find(s => s.key === entry.key);
    return fmtScene(entry.item, story?.title || "");
  }
  return "";
}

function renderNav() {
  const canPrev = state.timelinePos > 0;
  return `<div class="nav-buttons">` +
    `<button class="nav-btn" id="prev-btn" type="button" ${canPrev ? "" : "disabled"}>← 上一個</button>` +
    `<button class="nav-btn" id="next-btn" type="button">下一個 →</button>` +
    `</div>`;
}

function displayEntry(entry) {
  document.getElementById("content").innerHTML = formatEntry(entry) + renderNav();
  if (entry.kind === "scene") {
    document.querySelector(".story-switch")?.addEventListener("click", () => {
      state.story = null;
      saveState();
      renderStoryPicker();
    });
  }
  document.getElementById("prev-btn")?.addEventListener("click", prevTimeline);
  document.getElementById("next-btn")?.addEventListener("click", nextTimeline);
}

function prevTimeline() {
  if (state.timelinePos > 0) {
    state.timelinePos--;
    saveState();
    displayEntry(state.timeline[state.timelinePos]);
  }
}

function nextTimeline() {
  if (state.timelinePos < state.timeline.length - 1) {
    state.timelinePos++;
    saveState();
    displayEntry(state.timeline[state.timelinePos]);
    return;
  }
  const last = state.timeline[state.timelinePos];
  if (!last) return;
  if (last.kind === "scene") {
    const item = pickRandom(DATA.scenes, last.key, "scene");
    if (item) { pushTimeline("scene", last.key, item); displayEntry(state.timeline[state.timelinePos]); }
  } else {
    const poolName = last.kind === "word" ? "vocab" : last.kind;
    const histKind = last.kind === "word" ? "vocab" : last.kind;
    const item = pickRandom(DATA[poolName], last.key, histKind);
    if (item) { pushTimeline(last.kind, last.key, item); displayEntry(state.timeline[state.timelinePos]); }
  }
}

function renderStoryPicker() {
  const c = document.getElementById("content");
  let html = `<div class="picker-hint">選擇一個故事：</div><div class="story-list">`;
  STORIES.forEach(s => {
    const count = (DATA.scenes?.[s.key] || []).length;
    html += `<button class="story-option" type="button" data-key="${s.key}">` +
      `<span class="story-option-title">${escapeHTML(s.title)}</span>` +
      `<span class="story-option-count">${count} 句</span>` +
      `</button>`;
  });
  html += `</div>`;
  c.innerHTML = html;
  c.querySelectorAll(".story-option").forEach(b => {
    b.addEventListener("click", () => {
      state.story = b.dataset.key;
      saveState();
      renderScene();
    });
  });
}

function renderScene() {
  if (!state.story || !DATA.scenes?.[state.story]) {
    renderStoryPicker();
    return;
  }
  const item = pickRandom(DATA.scenes, state.story, "scene");
  if (!item) {
    document.getElementById("content").innerHTML = "<div class='hint'>沒有資料</div>";
    return;
  }
  pushTimeline("scene", state.story, item);
  displayEntry(state.timeline[state.timelinePos]);
}

function render(action) {
  const c = document.getElementById("content");
  let item;
  if (action === "word") {
    item = pickRandom(DATA.vocab, state.level, "vocab");
    if (item) { pushTimeline("word", state.level, item); displayEntry(state.timeline[state.timelinePos]); }
    else c.innerHTML = "<div class='hint'>沒有資料</div>";
  } else if (action === "grammar") {
    item = pickRandom(DATA.grammar, state.level, "grammar");
    if (item) { pushTimeline("grammar", state.level, item); displayEntry(state.timeline[state.timelinePos]); }
    else c.innerHTML = "<div class='hint'>沒有資料</div>";
  } else if (action === "quiz") {
    item = pickRandom(DATA.quiz, state.level, "quiz");
    if (item) { pushTimeline("quiz", state.level, item); displayEntry(state.timeline[state.timelinePos]); }
    else c.innerHTML = "<div class='hint'>沒有資料</div>";
  } else if (action === "scene") {
    renderScene();
  }
}

function cycleLevel() {
  const i = LEVELS.indexOf(state.level);
  state.level = LEVELS[(i + 1) % LEVELS.length];
  saveState();
  document.getElementById("level-btn").textContent = state.level.toUpperCase();
  const entry = state.timeline[state.timelinePos];
  if (entry && entry.kind !== "scene") {
    render(entry.kind);
  }
}
function cycleLang() {
  const i = LANGS.indexOf(state.lang);
  state.lang = LANGS[(i + 1) % LANGS.length];
  saveState();
  document.getElementById("lang-btn").textContent = state.lang.toUpperCase();
  const entry = state.timeline[state.timelinePos];
  if (entry) displayEntry(entry);
}
function dirLabel() {
  return state.dir === "zh" ? "中→日" : "日→中";
}
function cycleDir() {
  state.dir = state.dir === "zh" ? "ja" : "zh";
  saveState();
  document.getElementById("dir-btn").textContent = dirLabel();
  const entry = state.timeline[state.timelinePos];
  if (entry) displayEntry(entry);
}

window.addEventListener("DOMContentLoaded", async () => {
  loadState();
  document.getElementById("level-btn").textContent = state.level.toUpperCase();
  document.getElementById("lang-btn").textContent = state.lang.toUpperCase();
  document.getElementById("dir-btn").textContent = dirLabel();
  document.getElementById("level-btn").addEventListener("click", cycleLevel);
  document.getElementById("lang-btn").addEventListener("click", cycleLang);
  document.getElementById("dir-btn").addEventListener("click", cycleDir);
  document.querySelectorAll(".action").forEach(b =>
    b.addEventListener("click", () => render(b.dataset.action))
  );

  try {
    await loadData();
  } catch (e) {
    document.getElementById("content").innerHTML =
      `<div class="hint">資料載入失敗：${escapeHTML(e.message)}</div>`;
    return;
  }

  if ("serviceWorker" in navigator) {
    let reloading = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (reloading) return;
      reloading = true;
      window.location.reload();
    });
    navigator.serviceWorker.register("sw.js", { updateViaCache: "none" })
      .then(reg => reg.update())
      .catch(() => {});
  }
});
