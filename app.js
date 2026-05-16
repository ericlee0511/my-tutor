const LEVELS = ["n5", "n4", "n3", "n2", "n1", "t1", "t2", "t3", "t4", "t5", "t6", "toeic"];
const LANGS = ["en", "ja"];
const STORAGE_KEY = "jp_tutor_state";

const KOREAN_STORIES = [
  { key: "topik01", title: "카페에서의 하루" },
  { key: "topik02", title: "학교에서의 첫날" },
  { key: "topik03", title: "친구 집 방문" },
  { key: "topik04", title: "시장에서 쇼핑" },
  { key: "topik05", title: "한국 음식 만들기" },
  { key: "topik06", title: "우리 가족 소개" },
  { key: "topik07", title: "주말 계획" },
  { key: "topik08", title: "한국어 수업" },
  { key: "topik09", title: "카페에서의 만남" },
  { key: "topik10", title: "도서관에서" },
  { key: "topik11", title: "영화 보러 가는 날" },
  { key: "topik12", title: "생일 파티" },
  { key: "topik13", title: "비 오는 날" },
  { key: "topik14", title: "공원 산책" },
  { key: "topik15", title: "새 친구 만나기" },
  { key: "topik16", title: "동물원 가기" },
  { key: "topik17", title: "한국 슈퍼마켓" },
  { key: "topik18", title: "길 물어보기" },
  { key: "topik19", title: "미용실에서" },
  { key: "topik20", title: "병원 방문" },
  { key: "topik21", title: "식당 예약" },
  { key: "topik22", title: "첫 출근" },
  { key: "topik23", title: "한국에서 집 찾기" },
  { key: "topik24", title: "동대문 야시장" },
  { key: "topik25", title: "한강 자전거 라이딩" },
  { key: "topik26", title: "친구의 결혼식" },
  { key: "topik27", title: "처음 가는 한국 사우나" },
  { key: "topik28", title: "한국 대학 시험 준비" },
  { key: "topik29", title: "동물병원에 강아지 데려가기" },
  { key: "topik30", title: "한국 마트에서 길 잃기" },
  { key: "topik31", title: "외국인 등록증 발급받기" },
  { key: "topik32", title: "한복 입어보기" },
  { key: "topik33", title: "한국 영화 동호회" },
  { key: "topik34", title: "부산 1박 2일 여행" },
  { key: "topik35", title: "한국 도서관 카드 만들기" },
  { key: "topik36", title: "첫 TOPIK 시험" },
  { key: "topik37", title: "헬스장 등록" },
  { key: "topik38", title: "처음 만난 룸메이트" },
  { key: "topik39", title: "잃어버린 카드 다시 발급받기" },
  { key: "topik40", title: "한국 약국에서 약 사기" },
  { key: "topik41", title: "비행기 놓칠 뻔한 날" },
  { key: "topik42", title: "첫 직장 회식" },
  { key: "topik43", title: "한국에서 운전면허 따기" },
  { key: "topik44", title: "처음 가는 시댁" },
  { key: "topik45", title: "한국 전통 시장의 하루" },
  { key: "topik46", title: "한국 카페 창업 도전" },
  { key: "topik47", title: "친한 친구의 결혼식 준비 도와주기" },
  { key: "topik48", title: "한국 명절 풍습 체험" },
  { key: "topik49", title: "K-드라마 촬영지 투어" },
  { key: "topik50", title: "직장 동료와의 갈등 해결" },
  { key: "topik51", title: "한국에서 자취 시작하기" },
  { key: "topik52", title: "한국 영화관에서 영화 보기" },
  { key: "topik53", title: "휴대폰 분실과 찾기" },
  { key: "topik54", title: "미용실에서 새 헤어스타일 도전" },
  { key: "topik55", title: "한국 술집에서 회식과 2차" },
  { key: "topik56", title: "한복 입고 궁궐 관람" },
  { key: "topik57", title: "회사 회의에서 첫 발표" },
  { key: "topik58", title: "한국 친구 집에 초대받기" },
  { key: "topik59", title: "대학교 동아리 활동 참여" },
  { key: "topik60", title: "한국 카페에서 친구와 깊은 이야기" },
  { key: "topik61", title: "봉사 활동에 처음 참여하기" },
  { key: "topik62", title: "제주도 3박 4일 여행" },
  { key: "topik63", title: "한국 회사에서 프로젝트 매니저로 일하기" },
  { key: "topik64", title: "한국 대학원 입학 면접" },
  { key: "topik65", title: "한국에서 부동산 매매 계약" },
  { key: "topik66", title: "외국인 등록증 갱신과 비자 변경" },
  { key: "topik67", title: "친구들과 정치 토론" },
  { key: "topik68", title: "환경 보호 캠페인 기획" },
  { key: "topik69", title: "스타트업 창업 도전" },
  { key: "topik70", title: "국제 학회에서 논문 발표" },
  { key: "topik71", title: "의료 분쟁 해결" },
  { key: "topik72", title: "한국 드라마 제작 현장 인턴십" },
  { key: "topik73", title: "비영리 단체 봉사 활동 운영" },
  { key: "topik74", title: "탐사 보도 기자의 권력 비리 추적" },
  { key: "topik75", title: "박물관 큐레이터의 특별 전시 기획" },
  { key: "topik76", title: "법정 공판 첫 출석 경험" },
  { key: "topik77", title: "첫 단행본 출간과 작가 데뷔" },
  { key: "topik78", title: "클래식 연주자의 국제 콩쿠르 도전" },
  { key: "topik79", title: "사회 문제 다큐멘터리 제작" },
  { key: "topik80", title: "인공지능 윤리 국제 컨퍼런스" },
  { key: "topik81", title: "싱크탱크 정책 연구원의 보고서 작성" },
  { key: "topik82", title: "고고학 발굴 현장 참여" },
  { key: "topik83", title: "심리 상담사의 어려운 내담자 만남" },
  { key: "topik84", title: "한국형 발사체 발사 통제실 현장" },
  { key: "topik85", title: "한국은행 금융통화위원회 회의 현장" },
  { key: "topik86", title: "기업 인공지능 윤리위원회 심의 현장" },
  { key: "topik87", title: "박사 학위 논문 공개 심사 현장" },
  { key: "topik88", title: "양자 무역 협정 외교 협상 현장" },
  { key: "topik89", title: "노벨상 수상자 단독 인터뷰" },
  { key: "topik90", title: "한국 문단 권위 있는 문학상 수상의 밤" },
  { key: "topik91", title: "대법원 상고심 변호인 변론" },
  { key: "topik92", title: "신경외과 전문의의 뇌종양 수술" },
  { key: "topik93", title: "현대 교향곡 세계 초연 지휘자의 무대" },
];

function isToeic() { return state.level === "toeic"; }
function isTopik() { return state.level && state.level.startsWith("t") && !isToeic(); }
function levelLabel(lvl) {
  if (lvl === "toeic") return "TOEIC";
  if (lvl && lvl.startsWith("t")) return "TOPIK " + lvl.slice(1);
  return (lvl || "").toUpperCase();
}
function activeStories() {
  if (isToeic()) return TOEIC_STORIES;
  return isTopik() ? KOREAN_STORIES : STORIES;
}
function activeVocab() {
  if (isToeic()) return DATA.vocab_toeic;
  return isTopik() ? DATA.vocab_ko : DATA.vocab;
}
function activeGrammar() {
  if (isToeic()) return DATA.grammar_toeic;
  return isTopik() ? DATA.grammar_ko : DATA.grammar;
}
function activeQuiz() {
  if (isToeic()) return DATA.quiz_toeic;
  return isTopik() ? DATA.quiz_ko : DATA.quiz;
}
function activeScenes() {
  if (isToeic()) return DATA.scenes_toeic;
  return isTopik() ? DATA.scenes_ko : DATA.scenes;
}

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
  { key: "jap037", title: "名もなき剣に、雪が降るー厳島影譚" },
  { key: "jap038", title: "サヨナラケイジ" },
  { key: "jap039", title: "夏色に溶けた僕らの夢は" },
  { key: "jap040", title: "交換ウソ日記 1" },
  { key: "jap041", title: "交換ウソ日記 2 〜Erino's Note〜" },
  { key: "jap042", title: "交換ウソ日記 3 〜ふたりのノート〜" },
  { key: "jap043", title: "交換ウソ日記＊Epsode-0" },
  { key: "jap044", title: "カラダ探し 1" },
  { key: "jap045", title: "カラダ探し 2 ～第ニ夜～" },
  { key: "jap046", title: "カラダ探し 3 ～第三夜～" },
  { key: "jap047", title: "カラダ探し 4 ～最終夜～" },
  { key: "jap048", title: "防犯メール" },
  { key: "jap049", title: "赤門同好会！" },
  { key: "jap050", title: "自由研究" },
].sort((a, b) => a.title.localeCompare(b.title, "ja"));

const TOEIC_STORIES = [
  { key: "toeic01", title: "Office Relocation Memo" },
  { key: "toeic02", title: "Software Product Launch Press Release" },
  { key: "toeic03", title: "Remote Work Policy Memo" },
  { key: "toeic04", title: "Article on Sustainable Business Trends" },
  { key: "toeic05", title: "Business Trip Itinerary" },
  { key: "toeic06", title: "Hotel Stay Complaint Letter" },
  { key: "toeic07", title: "Marketing Manager Job Interview Excerpt" },
  { key: "toeic08", title: "Corporate Merger Announcement" },
  { key: "toeic09", title: "Leadership Development Workshop Schedule" },
  { key: "toeic10", title: "Corporate Anniversary Catering Proposal" },
  { key: "toeic11", title: "Building Maintenance and Upgrade Notice" },
  { key: "toeic12", title: "Coffee Shop Consumer Preferences Report" },
  { key: "toeic13", title: "Electronics Warranty and Refund Policy" },
  { key: "toeic14", title: "Annual Performance Review Summary" },
  { key: "toeic15", title: "Annual Charity Gala for Literacy Program" },
  { key: "toeic16", title: "Q2 All-Hands Meeting Agenda" },
  { key: "toeic17", title: "Office Relocation Announcement" },
  { key: "toeic18", title: "IT System Upgrade Memo" },
  { key: "toeic19", title: "Holiday Office Hours Notice" },
  { key: "toeic20", title: "New Employee Orientation Guide" },
  { key: "toeic21", title: "Annual Team-Building Retreat Invitation" },
  { key: "toeic22", title: "Quarterly All-Staff Meeting Minutes" },
  { key: "toeic23", title: "Performance Bonus Policy Update" },
  { key: "toeic24", title: "Telework and Remote Work Guidelines" },
  { key: "toeic25", title: "Office Security Badge Policy" },
  { key: "toeic26", title: "New Product Launch Press Release" },
  { key: "toeic27", title: "Customer Satisfaction Survey Introduction" },
  { key: "toeic28", title: "Subscription Renewal Reminder Email" },
  { key: "toeic29", title: "Service Outage Apology Letter" },
  { key: "toeic30", title: "Loyalty Program Enrollment Guide" },
  { key: "toeic31", title: "Vendor Partnership Announcement" },
  { key: "toeic32", title: "Restaurant Reservation Confirmation" },
  { key: "toeic33", title: "Online Order Shipping Update" },
  { key: "toeic34", title: "Flight Delay Notification" },
  { key: "toeic35", title: "Hotel Booking Confirmation Email" },
  { key: "toeic36", title: "Asia Pacific Logistics Summit 2026 Invitation" },
  { key: "toeic37", title: "Spring Sales Training Workshop Schedule" },
  { key: "toeic38", title: "Webinar Registration Confirmation" },
  { key: "toeic39", title: "Emerging Leaders Seminar Program Overview" },
  { key: "toeic40", title: "New Project Management Software Training" },
  { key: "toeic41", title: "Certified Financial Analyst Course Brochure" },
  { key: "toeic42", title: "Annual Trade Show Booth Setup Memo" },
  { key: "toeic43", title: "Mandatory Cybersecurity Awareness Training" },
  { key: "toeic44", title: "Diversity and Inclusion Workshop Announcement" },
  { key: "toeic45", title: "Employee Wellness Program Launch Announcement" },
  { key: "toeic46", title: "Quarterly Earnings Report Summary" },
  { key: "toeic47", title: "Annual Sustainability Report Excerpt" },
  { key: "toeic48", title: "Budget Meeting Minutes Excerpt" },
  { key: "toeic49", title: "M&A Due Diligence Findings Summary" },
  { key: "toeic50", title: "Vendor Evaluation Report" },
  { key: "toeic51", title: "Internal Audit Findings Memo" },
  { key: "toeic52", title: "Insurance Policy Renewal Letter" },
  { key: "toeic53", title: "Tax Filing Reminder" },
  { key: "toeic54", title: "Product Recall Notice" },
  { key: "toeic55", title: "Company Code of Conduct Update" },
  { key: "toeic56", title: "Quarterly Sales Report" },
  { key: "toeic57", title: "Contract Negotiation Meeting Summary" },
  { key: "toeic58", title: "Sales Pipeline Review" },
  { key: "toeic59", title: "Price Quotation Request" },
  { key: "toeic60", title: "Service Level Agreement Excerpt" },
  { key: "toeic61", title: "Distributor Agreement Summary" },
  { key: "toeic62", title: "Sales Commission Structure" },
  { key: "toeic63", title: "New Client Onboarding Plan" },
  { key: "toeic64", title: "Customer Retention Strategy" },
  { key: "toeic65", title: "Lead Qualification Training Notes" },
  { key: "toeic66", title: "Software Engineer Job Posting" },
  { key: "toeic67", title: "Reference Check Questionnaire" },
  { key: "toeic68", title: "Salary Adjustment Letter" },
  { key: "toeic69", title: "Exit Interview Summary" },
  { key: "toeic70", title: "Maternity Leave Policy" },
  { key: "toeic71", title: "Internship Program Announcement" },
  { key: "toeic72", title: "Anti-Harassment Training Notice" },
  { key: "toeic73", title: "Employee Handbook Excerpt" },
  { key: "toeic74", title: "Open Enrollment Benefits Guide" },
  { key: "toeic75", title: "Promotion Announcement Memo" },
  { key: "toeic76", title: "Warehouse Safety Inspection Report" },
  { key: "toeic77", title: "Inventory Replenishment Procedure" },
  { key: "toeic78", title: "Quality Assurance Audit Results" },
  { key: "toeic79", title: "Supplier Code of Conduct" },
  { key: "toeic80", title: "Manufacturing Line Maintenance Plan" },
  { key: "toeic81", title: "Logistics Carrier Comparison" },
  { key: "toeic82", title: "Shipment Delay Incident Report" },
  { key: "toeic83", title: "ISO Certification Renewal Notice" },
  { key: "toeic84", title: "Production Capacity Expansion Proposal" },
  { key: "toeic85", title: "Cross Docking Workflow Guide" },
  { key: "toeic86", title: "Expense Reimbursement Policy" },
  { key: "toeic87", title: "Invoice Payment Terms Reminder" },
  { key: "toeic88", title: "Annual Financial Audit Notice" },
  { key: "toeic89", title: "Bank Account Statement Notification" },
  { key: "toeic90", title: "Loan Application Status Update" },
  { key: "toeic91", title: "Investment Portfolio Review" },
  { key: "toeic92", title: "Tax Deduction Guide for Employees" },
  { key: "toeic93", title: "Budget Reallocation Request" },
  { key: "toeic94", title: "Year End Closing Schedule" },
  { key: "toeic95", title: "Treasury Operations Memo" },
  { key: "toeic96", title: "Social Media Campaign Brief" },
  { key: "toeic97", title: "Email Marketing Performance Report" },
  { key: "toeic98", title: "SEO Audit Findings" },
  { key: "toeic99", title: "Influencer Partnership Proposal" },
  { key: "toeic100", title: "Brand Style Guide Excerpt" },
  { key: "toeic101", title: "Customer Journey Mapping Workshop" },
  { key: "toeic102", title: "A B Test Results Memo" },
  { key: "toeic103", title: "Content Calendar Planning Meeting" },
  { key: "toeic104", title: "Public Relations Crisis Response" },
  { key: "toeic105", title: "Annual Marketing Budget Plan" },
];

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
  const jpFixed = 3;
  const koFixed = 3;
  const toeicFixed = 3;
  const loaded = await Promise.all([
    fetch("data/vocab.json").then(r => r.json()),
    fetch("data/grammar.json").then(r => r.json()),
    fetch("data/quiz.json").then(r => r.json()),
    fetch("data/vocab_ko.json").then(r => r.json()),
    fetch("data/grammar_ko.json").then(r => r.json()),
    fetch("data/quiz_ko.json").then(r => r.json()),
    fetch("data/vocab_toeic.json").then(r => r.json()),
    fetch("data/grammar_toeic.json").then(r => r.json()),
    fetch("data/quiz_toeic.json").then(r => r.json()),
    ...STORIES.map(s => fetch(`data/scenes_${s.key}.json`).then(r => r.json())),
    ...KOREAN_STORIES.map(s => fetch(`data/scenes_${s.key}.json`).then(r => r.json())),
    ...TOEIC_STORIES.map(s => fetch(`data/scenes_${s.key}.json`).then(r => r.json())),
  ]);
  DATA.vocab = loaded[0];
  DATA.grammar = loaded[1];
  DATA.quiz = loaded[2];
  DATA.vocab_ko = loaded[3];
  DATA.grammar_ko = loaded[4];
  DATA.quiz_ko = loaded[5];
  DATA.vocab_toeic = loaded[6];
  DATA.grammar_toeic = loaded[7];
  DATA.quiz_toeic = loaded[8];
  const jpStart = jpFixed + koFixed + toeicFixed;
  const koStart = jpStart + STORIES.length;
  const toeicStart = koStart + KOREAN_STORIES.length;
  DATA.scenes = {};
  STORIES.forEach((s, i) => {
    DATA.scenes[s.key] = loaded[jpStart + i].all || [];
  });
  DATA.scenes_ko = {};
  KOREAN_STORIES.forEach((s, i) => {
    DATA.scenes_ko[s.key] = loaded[koStart + i].all || [];
  });
  DATA.scenes_toeic = {};
  TOEIC_STORIES.forEach((s, i) => {
    DATA.scenes_toeic[s.key] = loaded[toeicStart + i].all || [];
  });
  updateStats();
}

function updateStats() {
  const sum = obj => Object.values(obj || {}).reduce((s, a) => s + a.length, 0);
  const total =
    sum(DATA.vocab) + sum(DATA.grammar) + sum(DATA.quiz) + sum(DATA.scenes) +
    sum(DATA.vocab_ko) + sum(DATA.grammar_ko) + sum(DATA.quiz_ko) + sum(DATA.scenes_ko) +
    sum(DATA.vocab_toeic) + sum(DATA.grammar_toeic) + sum(DATA.quiz_toeic) + sum(DATA.scenes_toeic);
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
    `<div><span class="label">Meaning:</span><span class="label-text">${escapeHTML(meaning)}</span></div>` +
    `<div class="ex">例: ${escapeHTML(item.example_ja)}<br>` +
    `   → ${escapeHTML(trans)}</div>`;
}

function fmtGrammar(item) {
  const lang = state.lang;
  const meaning = item[`meaning_${lang}`] ?? item.meaning_en;
  let html = `<div class="headword">📘 ${escapeHTML(item.pattern)}</div>` +
    `<div><span class="label">Meaning:</span><span class="label-text">${escapeHTML(meaning)}</span></div>` +
    `<div><span class="label">Structure:</span><span class="label-text">${escapeHTML(item.structure)}</span></div>`;
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

function fmtWordKo(item) {
  let html = `<div class="headword">📖 ${escapeHTML(item.word)}</div>`;
  if (item.romanization) html += `<div class="kana">羅馬拼音: ${escapeHTML(item.romanization)}</div>`;
  if (item.hanja && item.hanja !== "" && item.hanja !== "—") {
    html += `<div><span class="label">漢字:</span><span class="label-text">${escapeHTML(item.hanja)}</span></div>`;
  }
  html += `<div><span class="label">意思:</span><span class="label-text">${escapeHTML(item.meaning_zh)}</span></div>` +
    `<div class="ex">例: ${escapeHTML(item.example_ko)}<br>` +
    `   → ${escapeHTML(item.example_zh)}</div>`;
  return html;
}

function fmtGrammarKo(item) {
  let html = `<div class="headword">📘 ${escapeHTML(item.pattern)}</div>` +
    `<div><span class="label">意思:</span><span class="label-text">${escapeHTML(item.meaning_zh)}</span></div>` +
    `<div><span class="label">結構:</span><span class="label-text">${escapeHTML(item.structure)}</span></div>`;
  (item.examples || []).forEach((ex, i) => {
    html += `<div class="ex">例${i + 1}: ${escapeHTML(ex.ko)}<br>` +
      `   → ${escapeHTML(ex.zh)}</div>`;
  });
  return html;
}

function fmtQuizKo(item) {
  const letters = ["A", "B", "C", "D"];
  const ansLetter = letters[item.answer];
  let html = `<div class="headword">❓ ${escapeHTML(item.question_ko)}</div><div class="options">`;
  item.options.forEach((opt, i) => {
    html += `<div class="opt">${letters[i]}) ${escapeHTML(opt)}</div>`;
  });
  html += `</div>` +
    `<div><span class="spoiler" onclick="this.classList.toggle('revealed')">` +
    `答案: ${ansLetter} — ${escapeHTML(item.explanation_zh)}</span></div>`;
  return html;
}

function fmtStoryBanner(num, title) {
  return `<div class="story-banner">` +
    `<div class="story-title">` +
      `<span class="story-prefix">📖 ${escapeHTML(num)}</span>` +
      `<span class="story-text">${escapeHTML(title)}</span>` +
    `</div>` +
    `<button class="story-switch" type="button">換故事</button>` +
    `</div>`;
}

function fmtSceneKo(item, num, title) {
  const reversed = state.dir === "zh";
  let html = fmtStoryBanner(num, title);
  if (reversed) {
    html += `<div class="headword">💬 ${escapeHTML(item.zh)}</div>`;
    html += `<div><span class="spoiler" onclick="this.classList.toggle('revealed')">` +
      `🎭 ${escapeHTML(item.ko)}</span></div>`;
  } else {
    html += `<div class="headword">🎭 ${escapeHTML(item.ko)}</div>`;
    html += `<div><span class="spoiler" onclick="this.classList.toggle('revealed')">` +
      `💬 ${escapeHTML(item.zh)}</span></div>`;
  }
  return html;
}

function fmtWordToeic(item) {
  let html = `<div class="headword">📖 ${escapeHTML(item.word)}</div>`;
  html += `<div><span class="label">意思:</span><span class="label-text">${escapeHTML(item.meaning_zh)}</span></div>` +
    `<div class="ex">例: ${escapeHTML(item.example_en)}<br>` +
    `   → ${escapeHTML(item.example_zh)}</div>`;
  return html;
}

function fmtGrammarToeic(item) {
  let html = `<div class="headword">📘 ${escapeHTML(item.pattern)}</div>` +
    `<div><span class="label">意思:</span><span class="label-text">${escapeHTML(item.meaning_zh)}</span></div>` +
    `<div><span class="label">結構:</span><span class="label-text">${escapeHTML(item.structure)}</span></div>`;
  (item.examples || []).forEach((ex, i) => {
    html += `<div class="ex">例${i + 1}: ${escapeHTML(ex.en)}<br>` +
      `   → ${escapeHTML(ex.zh)}</div>`;
  });
  return html;
}

function fmtQuizToeic(item) {
  const letters = ["A", "B", "C", "D"];
  const ansLetter = letters[item.answer];
  let html = `<div class="headword">❓ ${escapeHTML(item.question_en)}</div><div class="options">`;
  item.options.forEach((opt, i) => {
    html += `<div class="opt">${letters[i]}) ${escapeHTML(opt)}</div>`;
  });
  html += `</div>` +
    `<div><span class="spoiler" onclick="this.classList.toggle('revealed')">` +
    `答案: ${ansLetter} — ${escapeHTML(item.explanation_zh)}</span></div>`;
  return html;
}

function fmtSceneToeic(item, num, title) {
  const reversed = state.dir === "zh";
  let html = fmtStoryBanner(num, title);
  if (reversed) {
    html += `<div class="headword">💬 ${escapeHTML(item.zh)}</div>`;
    html += `<div><span class="spoiler" onclick="this.classList.toggle('revealed')">` +
      `🎭 ${escapeHTML(item.en)}</span></div>`;
  } else {
    html += `<div class="headword">🎭 ${escapeHTML(item.en)}</div>`;
    html += `<div><span class="spoiler" onclick="this.classList.toggle('revealed')">` +
      `💬 ${escapeHTML(item.zh)}</span></div>`;
  }
  return html;
}

function fmtScene(item, num, title) {
  const dir = state.dir === "zh" ? "zh" : "ja";
  let html = fmtStoryBanner(num, title);
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

function currentMode() {
  if (isToeic()) return "toeic";
  if (isTopik()) return "topik";
  return "jp";
}

function pushTimeline(kind, key, item, mode) {
  state.timeline.length = state.timelinePos + 1;
  state.timeline.push({ kind, key, item, mode });
  state.timelinePos = state.timeline.length - 1;
  while (state.timeline.length > MAX_TIMELINE) {
    state.timeline.shift();
    state.timelinePos--;
  }
  saveState();
}

function formatEntry(entry) {
  if (entry.mode === "toeic") {
    if (entry.kind === "word") return fmtWordToeic(entry.item);
    if (entry.kind === "grammar") return fmtGrammarToeic(entry.item);
    if (entry.kind === "quiz") return fmtQuizToeic(entry.item);
    if (entry.kind === "scene") {
      const idx = TOEIC_STORIES.findIndex(s => s.key === entry.key);
      const story = TOEIC_STORIES[idx];
      const num = idx >= 0 ? String(idx + 1).padStart(2, "0") + "." : "";
      return fmtSceneToeic(entry.item, num, story?.title || "");
    }
    return "";
  }
  const ko = entry.mode === "topik" ||
    entry.item?.word || entry.item?.question_ko || entry.item?.ko ||
    (entry.item?.examples && entry.item.examples[0]?.ko);
  if (entry.kind === "word") return ko ? fmtWordKo(entry.item) : fmtWord(entry.item);
  if (entry.kind === "grammar") return ko ? fmtGrammarKo(entry.item) : fmtGrammar(entry.item);
  if (entry.kind === "quiz") return ko ? fmtQuizKo(entry.item) : fmtQuiz(entry.item);
  if (entry.kind === "scene") {
    const list = ko ? KOREAN_STORIES : STORIES;
    const idx = list.findIndex(s => s.key === entry.key);
    const story = list[idx];
    const num = idx >= 0 ? String(idx + 1).padStart(2, "0") + "." : "";
    return ko ? fmtSceneKo(entry.item, num, story?.title || "")
              : fmtScene(entry.item, num, story?.title || "");
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
  const mode = last.mode;
  if (last.kind === "scene") {
    const pool =
      mode === "toeic" ? DATA.scenes_toeic :
      mode === "topik" ? DATA.scenes_ko : DATA.scenes;
    const item = pickRandom(pool, last.key, "scene");
    if (item) { pushTimeline("scene", last.key, item, mode); displayEntry(state.timeline[state.timelinePos]); }
  } else {
    const poolMap =
      mode === "toeic" ? { word: DATA.vocab_toeic, grammar: DATA.grammar_toeic, quiz: DATA.quiz_toeic } :
      mode === "topik" ? { word: DATA.vocab_ko, grammar: DATA.grammar_ko, quiz: DATA.quiz_ko } :
      { word: DATA.vocab, grammar: DATA.grammar, quiz: DATA.quiz };
    const histKind = last.kind === "word" ? "vocab" : last.kind;
    const item = pickRandom(poolMap[last.kind], last.key, histKind);
    if (item) { pushTimeline(last.kind, last.key, item, mode); displayEntry(state.timeline[state.timelinePos]); }
  }
}

function renderStoryPicker() {
  const c = document.getElementById("content");
  const stories = activeStories();
  const scenesData = activeScenes();
  let html = `<div class="picker-hint">選擇一個故事：</div><div class="story-list">`;
  stories.forEach((s, i) => {
    const num = String(i + 1).padStart(2, "0");
    const count = (scenesData?.[s.key] || []).length;
    html += `<button class="story-option" type="button" data-key="${s.key}">` +
      `<span class="story-option-title">` +
        `<span class="story-option-num">${num}.</span>` +
        `<span class="story-option-text">${escapeHTML(s.title)}</span>` +
      `</span>` +
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
  const scenesData = activeScenes();
  if (!state.story || !scenesData?.[state.story]) {
    renderStoryPicker();
    return;
  }
  const item = pickRandom(scenesData, state.story, "scene");
  if (!item) {
    document.getElementById("content").innerHTML = "<div class='hint'>沒有資料</div>";
    return;
  }
  pushTimeline("scene", state.story, item, currentMode());
  displayEntry(state.timeline[state.timelinePos]);
}

function render(action) {
  const c = document.getElementById("content");
  const mode = currentMode();
  const pickLevel = isToeic() ? "toeic" : state.level;
  let item;
  if (action === "word") {
    item = pickRandom(activeVocab(), pickLevel, "vocab");
    if (item) { pushTimeline("word", pickLevel, item, mode); displayEntry(state.timeline[state.timelinePos]); }
    else c.innerHTML = "<div class='hint'>沒有資料</div>";
  } else if (action === "grammar") {
    item = pickRandom(activeGrammar(), pickLevel, "grammar");
    if (item) { pushTimeline("grammar", pickLevel, item, mode); displayEntry(state.timeline[state.timelinePos]); }
    else c.innerHTML = "<div class='hint'>沒有資料</div>";
  } else if (action === "quiz") {
    item = pickRandom(activeQuiz(), pickLevel, "quiz");
    if (item) { pushTimeline("quiz", pickLevel, item, mode); displayEntry(state.timeline[state.timelinePos]); }
    else c.innerHTML = "<div class='hint'>沒有資料</div>";
  } else if (action === "scene") {
    renderScene();
  }
}

function modeOfLevel(lvl) {
  if (lvl === "toeic") return "toeic";
  if (lvl && lvl.startsWith("t")) return "topik";
  return "jp";
}
function setLevel(next) {
  const prev = state.level;
  if (next === prev) return;
  const prevMode = modeOfLevel(prev);
  state.level = next;
  if (modeOfLevel(next) !== prevMode) {
    state.story = null;
  }
  saveState();
  document.getElementById("level-btn").textContent = levelLabel(state.level);
  updateModeToggles();
  const entry = state.timeline[state.timelinePos];
  if (entry && entry.kind !== "scene") {
    render(entry.kind);
  }
}

function openLevelPicker() {
  const overlay = document.getElementById("level-picker");
  overlay.querySelectorAll(".picker-btn[data-level]").forEach(b => {
    b.classList.toggle("picker-current", b.dataset.level === state.level);
  });
  overlay.hidden = false;
}
function closeLevelPicker() {
  document.getElementById("level-picker").hidden = true;
}

function updateModeToggles() {
  const hideLang = isTopik() || isToeic();
  const langBtn = document.getElementById("lang-btn");
  const dirBtn = document.getElementById("dir-btn");
  if (langBtn) langBtn.style.display = hideLang ? "none" : "";
  if (dirBtn) {
    dirBtn.style.display = "";
    dirBtn.textContent = dirLabel();
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
  const reversed = state.dir === "zh";
  if (isToeic()) return reversed ? "中→英" : "英→中";
  if (isTopik()) return reversed ? "中→韓" : "韓→中";
  return reversed ? "中→日" : "日→中";
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
  document.getElementById("level-btn").textContent = levelLabel(state.level);
  document.getElementById("lang-btn").textContent = state.lang.toUpperCase();
  document.getElementById("dir-btn").textContent = dirLabel();
  updateModeToggles();
  document.getElementById("level-btn").addEventListener("click", openLevelPicker);
  const picker = document.getElementById("level-picker");
  picker.addEventListener("click", e => {
    if (e.target === picker) { closeLevelPicker(); return; }
    const btn = e.target.closest(".picker-btn[data-level]");
    if (btn) { setLevel(btn.dataset.level); closeLevelPicker(); }
  });
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
