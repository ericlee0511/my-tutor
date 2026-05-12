const LEVELS = ["n5", "n4", "n3", "n2", "n1"];
const LANGS = ["en", "ja"];
const STORAGE_KEY = "jp_tutor_state";

const STORIES = [
  { key: "jap1", title: "修学旅行で仲良くないグループに入りました 1" },
  { key: "jap2", title: "修学旅行で仲良くないグループに入りました 2" },
  { key: "jap3", title: "消えた教室" },
  { key: "jap4", title: "「祝祭村からの脱出」にまつわる記録" },
];

let DATA = {};
let state = {
  level: "n5",
  lang: "en",
  story: null,
  history: {},
};

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
  let html = `<div class="story-banner">` +
    `<span class="story-title">📖 ${escapeHTML(storyTitle)}</span>` +
    `<button class="story-switch" type="button">換故事</button>` +
    `</div>`;
  html += `<div class="headword">🎭 ${escapeHTML(item.ja)}</div>`;
  if (item.kana) html += `<div class="kana">かな: ${escapeHTML(item.kana)}</div>`;
  html += `<div><span class="spoiler" onclick="this.classList.toggle('revealed')">` +
    `💬 ${escapeHTML(item.zh)}</span></div>`;
  return html;
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
  const story = STORIES.find(s => s.key === state.story);
  document.getElementById("content").innerHTML = fmtScene(item, story.title);
  document.querySelector(".story-switch")?.addEventListener("click", () => {
    state.story = null;
    saveState();
    renderStoryPicker();
  });
}

function render(action) {
  const c = document.getElementById("content");
  let item, html;
  if (action === "word") {
    item = pickRandom(DATA.vocab, state.level, "vocab");
    html = item ? fmtWord(item) : "<div class='hint'>沒有資料</div>";
    c.innerHTML = html;
  } else if (action === "grammar") {
    item = pickRandom(DATA.grammar, state.level, "grammar");
    html = item ? fmtGrammar(item) : "<div class='hint'>沒有資料</div>";
    c.innerHTML = html;
  } else if (action === "quiz") {
    item = pickRandom(DATA.quiz, state.level, "quiz");
    html = item ? fmtQuiz(item) : "<div class='hint'>沒有資料</div>";
    c.innerHTML = html;
  } else if (action === "scene") {
    renderScene();
  }
}

function cycleLevel() {
  const i = LEVELS.indexOf(state.level);
  state.level = LEVELS[(i + 1) % LEVELS.length];
  saveState();
  document.getElementById("level-btn").textContent = state.level.toUpperCase();
}
function cycleLang() {
  const i = LANGS.indexOf(state.lang);
  state.lang = LANGS[(i + 1) % LANGS.length];
  saveState();
  document.getElementById("lang-btn").textContent = state.lang.toUpperCase();
}

window.addEventListener("DOMContentLoaded", async () => {
  loadState();
  document.getElementById("level-btn").textContent = state.level.toUpperCase();
  document.getElementById("lang-btn").textContent = state.lang.toUpperCase();
  document.getElementById("level-btn").addEventListener("click", cycleLevel);
  document.getElementById("lang-btn").addEventListener("click", cycleLang);
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
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
});
