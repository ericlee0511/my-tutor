const LEVELS = ["n5", "n4", "n3", "n2", "n1", "t1", "t2", "t3", "t4", "t5", "t6", "toeic", "gept", "da1", "da2", "db1", "db2", "dc1", "dc2"];
const LANGS = ["en", "ja"];
const STORAGE_KEY = "jp_tutor_state";

const KOREAN_STORIES = [
  { key: "topik001", title: "카페에서의 하루" },
  { key: "topik002", title: "학교에서의 첫날" },
  { key: "topik003", title: "친구 집 방문" },
  { key: "topik004", title: "시장에서 쇼핑" },
  { key: "topik005", title: "한국 음식 만들기" },
  { key: "topik006", title: "우리 가족 소개" },
  { key: "topik007", title: "주말 계획" },
  { key: "topik008", title: "한국어 수업" },
  { key: "topik009", title: "카페에서의 만남" },
  { key: "topik010", title: "도서관에서" },
  { key: "topik011", title: "영화 보러 가는 날" },
  { key: "topik012", title: "생일 파티" },
  { key: "topik013", title: "비 오는 날" },
  { key: "topik014", title: "공원 산책" },
  { key: "topik015", title: "새 친구 만나기" },
  { key: "topik016", title: "동물원 가기" },
  { key: "topik017", title: "한국 슈퍼마켓" },
  { key: "topik018", title: "길 물어보기" },
  { key: "topik019", title: "미용실에서" },
  { key: "topik020", title: "병원 방문" },
  { key: "topik021", title: "식당 예약" },
  { key: "topik022", title: "첫 출근" },
  { key: "topik023", title: "한국에서 집 찾기" },
  { key: "topik024", title: "동대문 야시장" },
  { key: "topik025", title: "한강 자전거 라이딩" },
  { key: "topik026", title: "친구의 결혼식" },
  { key: "topik027", title: "처음 가는 한국 사우나" },
  { key: "topik028", title: "한국 대학 시험 준비" },
  { key: "topik029", title: "동물병원에 강아지 데려가기" },
  { key: "topik030", title: "한국 마트에서 길 잃기" },
  { key: "topik031", title: "외국인 등록증 발급받기" },
  { key: "topik032", title: "한복 입어보기" },
  { key: "topik033", title: "한국 영화 동호회" },
  { key: "topik034", title: "부산 1박 2일 여행" },
  { key: "topik035", title: "한국 도서관 카드 만들기" },
  { key: "topik036", title: "첫 TOPIK 시험" },
  { key: "topik037", title: "헬스장 등록" },
  { key: "topik038", title: "처음 만난 룸메이트" },
  { key: "topik039", title: "잃어버린 카드 다시 발급받기" },
  { key: "topik040", title: "한국 약국에서 약 사기" },
  { key: "topik041", title: "비행기 놓칠 뻔한 날" },
  { key: "topik042", title: "첫 직장 회식" },
  { key: "topik043", title: "한국에서 운전면허 따기" },
  { key: "topik044", title: "처음 가는 시댁" },
  { key: "topik045", title: "한국 전통 시장의 하루" },
  { key: "topik046", title: "한국 카페 창업 도전" },
  { key: "topik047", title: "친한 친구의 결혼식 준비 도와주기" },
  { key: "topik048", title: "한국 명절 풍습 체험" },
  { key: "topik049", title: "K-드라마 촬영지 투어" },
  { key: "topik050", title: "직장 동료와의 갈등 해결" },
  { key: "topik051", title: "한국에서 자취 시작하기" },
  { key: "topik052", title: "한국 영화관에서 영화 보기" },
  { key: "topik053", title: "휴대폰 분실과 찾기" },
  { key: "topik054", title: "미용실에서 새 헤어스타일 도전" },
  { key: "topik055", title: "한국 술집에서 회식과 2차" },
  { key: "topik056", title: "한복 입고 궁궐 관람" },
  { key: "topik057", title: "회사 회의에서 첫 발표" },
  { key: "topik058", title: "한국 친구 집에 초대받기" },
  { key: "topik059", title: "대학교 동아리 활동 참여" },
  { key: "topik060", title: "한국 카페에서 친구와 깊은 이야기" },
  { key: "topik061", title: "봉사 활동에 처음 참여하기" },
  { key: "topik062", title: "제주도 3박 4일 여행" },
  { key: "topik063", title: "한국 회사에서 프로젝트 매니저로 일하기" },
  { key: "topik064", title: "한국 대학원 입학 면접" },
  { key: "topik065", title: "한국에서 부동산 매매 계약" },
  { key: "topik066", title: "외국인 등록증 갱신과 비자 변경" },
  { key: "topik067", title: "친구들과 정치 토론" },
  { key: "topik068", title: "환경 보호 캠페인 기획" },
  { key: "topik069", title: "스타트업 창업 도전" },
  { key: "topik070", title: "국제 학회에서 논문 발표" },
  { key: "topik071", title: "의료 분쟁 해결" },
  { key: "topik072", title: "한국 드라마 제작 현장 인턴십" },
  { key: "topik073", title: "비영리 단체 봉사 활동 운영" },
  { key: "topik074", title: "탐사 보도 기자의 권력 비리 추적" },
  { key: "topik075", title: "박물관 큐레이터의 특별 전시 기획" },
  { key: "topik076", title: "법정 공판 첫 출석 경험" },
  { key: "topik077", title: "첫 단행본 출간과 작가 데뷔" },
  { key: "topik078", title: "클래식 연주자의 국제 콩쿠르 도전" },
  { key: "topik079", title: "사회 문제 다큐멘터리 제작" },
  { key: "topik080", title: "인공지능 윤리 국제 컨퍼런스" },
  { key: "topik081", title: "싱크탱크 정책 연구원의 보고서 작성" },
  { key: "topik082", title: "고고학 발굴 현장 참여" },
  { key: "topik083", title: "심리 상담사의 어려운 내담자 만남" },
  { key: "topik084", title: "한국형 발사체 발사 통제실 현장" },
  { key: "topik085", title: "한국은행 금융통화위원회 회의 현장" },
  { key: "topik086", title: "기업 인공지능 윤리위원회 심의 현장" },
  { key: "topik087", title: "박사 학위 논문 공개 심사 현장" },
  { key: "topik088", title: "양자 무역 협정 외교 협상 현장" },
  { key: "topik089", title: "노벨상 수상자 단독 인터뷰" },
  { key: "topik090", title: "한국 문단 권위 있는 문학상 수상의 밤" },
  { key: "topik091", title: "대법원 상고심 변호인 변론" },
  { key: "topik092", title: "신경외과 전문의의 뇌종양 수술" },
  { key: "topik093", title: "현대 교향곡 세계 초연 지휘자의 무대" },
  { key: "topik094", title: "청년 농촌 정착 지원 사업 현장 인터뷰" },
  { key: "topik095", title: "한국 영화 OTT 글로벌 진출 협상" },
  { key: "topik096", title: "위기 청소년 멘토링 프로그램 운영기" },
  { key: "topik097", title: "인공지능 통번역 서비스 시연회" },
  { key: "topik098", title: "한국 전통 한지 공방 체험 르포" },
  { key: "topik099", title: "도심 옥상 텃밭 공동체 이야기" },
  { key: "topik100", title: "한국 첫 민간 우주인 후보 면접 현장" },
];

function isToeic() { return state.level === "toeic"; }
function isGept() { return state.level === "gept"; }
function isDele() { return !!(state.level && state.level.startsWith("d")); }
function isTopik() { return state.level && state.level.startsWith("t") && !isToeic(); }
function levelLabel(lvl) {
  if (lvl === "toeic") return "TOEIC";
  if (lvl === "gept") return "GEPT";
  if (lvl && lvl.startsWith("d")) return "DELE " + lvl.slice(1).toUpperCase();
  if (lvl && lvl.startsWith("t")) return "TOPIK " + lvl.slice(1);
  return (lvl || "").toUpperCase();
}
function activeStories() {
  if (isDele()) return DELE_STORIES;
  if (isGept()) return GEPT_STORIES;
  if (isToeic()) return TOEIC_STORIES;
  return isTopik() ? KOREAN_STORIES : STORIES;
}
function vocabFor(mode) {
  if (mode === "dele") return DATA.vocab_dele;
  if (mode === "gept") {
    const all = (DATA.vocab_gept && DATA.vocab_gept.gept) || [];
    const sub = state.geptSubLevel || "初級";
    return { gept: all.filter(e => e.level === sub) };
  }
  if (mode === "toeic") {
    const all = (DATA.vocab_toeic && DATA.vocab_toeic.toeic) || [];
    const sub = state.toeicSubLevel || "基礎生活級";
    return { toeic: all.filter(e => e.level === sub) };
  }
  if (mode === "topik") return DATA.vocab_ko;
  return DATA.vocab;
}
function activeVocab() {
  if (isDele()) return vocabFor("dele");
  if (isGept()) return vocabFor("gept");
  if (isToeic()) return vocabFor("toeic");
  return isTopik() ? vocabFor("topik") : vocabFor("jp");
}
function activeGrammar() {
  if (isDele()) return DATA.grammar_dele;
  if (isGept()) return DATA.grammar_gept;
  if (isToeic()) return DATA.grammar_toeic;
  return isTopik() ? DATA.grammar_ko : DATA.grammar;
}
function activeQuiz() {
  if (isDele()) return DATA.quiz_dele;
  if (isGept()) return DATA.quiz_gept;
  if (isToeic()) return DATA.quiz_toeic;
  return isTopik() ? DATA.quiz_ko : DATA.quiz;
}
function activeScenes() {
  if (isDele()) return DATA.scenes_dele;
  if (isGept()) return DATA.scenes_gept;
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
  { key: "jap023", title: "先生、近づいても、いいですか" },
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
  { key: "jap051", title: "三分間ミステリー" },
  { key: "jap052", title: "探偵冷泉深見シリーズ《1》四神村殺人事件" },
  { key: "jap053", title: "探偵冷泉深見シリーズ《2》雪女島殺人事件" },
  { key: "jap054", title: "探偵冷泉深見シリーズ《3》恨み島殺人事件" },
  { key: "jap055", title: "探偵冷泉深見シリーズ《4》九九尾村殺人事件" },
  { key: "jap056", title: "浦和探偵 ジン" },
  { key: "jap057", title: "理科室のスミレ ～七星先生の最後の授業～" },
  { key: "jap058", title: "深海から見える灯" },
  { key: "jap059", title: "余命半年の小笠原先輩は、いつも笑顔なんです" },
  { key: "jap060", title: "優しい音を奏でて…" },
  { key: "jap061", title: "青信号は変わらない" },
  { key: "jap062", title: "今年も残り7日" },
  { key: "jap063", title: "アイドルは旬が命" },
  { key: "jap064", title: "奈良まち はじまり 朝ごはん" },
  { key: "jap065", title: "青春テロリズム" },
  { key: "jap066", title: "無職のススメ、元社畜の挑戦日記" },
  { key: "jap067", title: "ご懐妊‼ 1" },
  { key: "jap068", title: "ご懐妊‼ 2 ～俺様上司は育メン愛妻家になりました～" },
  { key: "jap069", title: "鳥居坂署の御堂さん" },
  { key: "jap070", title: "フレンチトーストには笑顔" },
  { key: "jap071", title: "星空は100年後" },
  { key: "jap072", title: "こころ食堂のおもいで御飯 〜あったかお鍋は幸せの味〜" },
  { key: "jap073", title: "こころ食堂のおもいで御飯 ～仲直りの変わり親子丼～" },
  { key: "jap074", title: "こころ食堂のおもいで御飯 ～前に進むための肉じゃが定食～" },
  { key: "jap075", title: "最後のヒーロー" },
  { key: "jap076", title: "終学旅行" },
  { key: "jap077", title: "古物時計店の「時ほぐし」" },
  { key: "jap078", title: "蜘蛛の終末" },
  { key: "jap079", title: "愚者の園" },
  { key: "jap080", title: "今日も世界に赤錆色の雨が降る" },
  { key: "jap081", title: "後宮のガリレオ 1" },
  { key: "jap082", title: "後宮のガリレオ 2" },
  { key: "jap083", title: "麗名高校オカルト研究同好会" },
  { key: "jap084", title: "灯火みたいな恋だった" },
].sort((a, b) => a.title.localeCompare(b.title, "ja"));

const TOEIC_STORIES = [
  { key: "toeic001", title: "Office Relocation Memo" },
  { key: "toeic002", title: "Software Product Launch Press Release" },
  { key: "toeic003", title: "Remote Work Policy Memo" },
  { key: "toeic004", title: "Article on Sustainable Business Trends" },
  { key: "toeic005", title: "Business Trip Itinerary" },
  { key: "toeic006", title: "Hotel Stay Complaint Letter" },
  { key: "toeic007", title: "Marketing Manager Job Interview Excerpt" },
  { key: "toeic008", title: "Corporate Merger Announcement" },
  { key: "toeic009", title: "Leadership Development Workshop Schedule" },
  { key: "toeic010", title: "Corporate Anniversary Catering Proposal" },
  { key: "toeic011", title: "Building Maintenance and Upgrade Notice" },
  { key: "toeic012", title: "Coffee Shop Consumer Preferences Report" },
  { key: "toeic013", title: "Electronics Warranty and Refund Policy" },
  { key: "toeic014", title: "Annual Performance Review Summary" },
  { key: "toeic015", title: "Annual Charity Gala for Literacy Program" },
  { key: "toeic016", title: "Q2 All-Hands Meeting Agenda" },
  { key: "toeic017", title: "Office Relocation Announcement" },
  { key: "toeic018", title: "IT System Upgrade Memo" },
  { key: "toeic019", title: "Holiday Office Hours Notice" },
  { key: "toeic020", title: "New Employee Orientation Guide" },
  { key: "toeic021", title: "Annual Team-Building Retreat Invitation" },
  { key: "toeic022", title: "Quarterly All-Staff Meeting Minutes" },
  { key: "toeic023", title: "Performance Bonus Policy Update" },
  { key: "toeic024", title: "Telework and Remote Work Guidelines" },
  { key: "toeic025", title: "Office Security Badge Policy" },
  { key: "toeic026", title: "New Product Launch Press Release" },
  { key: "toeic027", title: "Customer Satisfaction Survey Introduction" },
  { key: "toeic028", title: "Subscription Renewal Reminder Email" },
  { key: "toeic029", title: "Service Outage Apology Letter" },
  { key: "toeic030", title: "Loyalty Program Enrollment Guide" },
  { key: "toeic031", title: "Vendor Partnership Announcement" },
  { key: "toeic032", title: "Restaurant Reservation Confirmation" },
  { key: "toeic033", title: "Online Order Shipping Update" },
  { key: "toeic034", title: "Flight Delay Notification" },
  { key: "toeic035", title: "Hotel Booking Confirmation Email" },
  { key: "toeic036", title: "Asia Pacific Logistics Summit 2026 Invitation" },
  { key: "toeic037", title: "Spring Sales Training Workshop Schedule" },
  { key: "toeic038", title: "Webinar Registration Confirmation" },
  { key: "toeic039", title: "Emerging Leaders Seminar Program Overview" },
  { key: "toeic040", title: "New Project Management Software Training" },
  { key: "toeic041", title: "Certified Financial Analyst Course Brochure" },
  { key: "toeic042", title: "Annual Trade Show Booth Setup Memo" },
  { key: "toeic043", title: "Mandatory Cybersecurity Awareness Training" },
  { key: "toeic044", title: "Diversity and Inclusion Workshop Announcement" },
  { key: "toeic045", title: "Employee Wellness Program Launch Announcement" },
  { key: "toeic046", title: "Quarterly Earnings Report Summary" },
  { key: "toeic047", title: "Annual Sustainability Report Excerpt" },
  { key: "toeic048", title: "Budget Meeting Minutes Excerpt" },
  { key: "toeic049", title: "M&A Due Diligence Findings Summary" },
  { key: "toeic050", title: "Vendor Evaluation Report" },
  { key: "toeic051", title: "Internal Audit Findings Memo" },
  { key: "toeic052", title: "Insurance Policy Renewal Letter" },
  { key: "toeic053", title: "Tax Filing Reminder" },
  { key: "toeic054", title: "Product Recall Notice" },
  { key: "toeic055", title: "Company Code of Conduct Update" },
  { key: "toeic056", title: "Quarterly Sales Report" },
  { key: "toeic057", title: "Contract Negotiation Meeting Summary" },
  { key: "toeic058", title: "Sales Pipeline Review" },
  { key: "toeic059", title: "Price Quotation Request" },
  { key: "toeic060", title: "Service Level Agreement Excerpt" },
  { key: "toeic061", title: "Distributor Agreement Summary" },
  { key: "toeic062", title: "Sales Commission Structure" },
  { key: "toeic063", title: "New Client Onboarding Plan" },
  { key: "toeic064", title: "Customer Retention Strategy" },
  { key: "toeic065", title: "Lead Qualification Training Notes" },
  { key: "toeic066", title: "Software Engineer Job Posting" },
  { key: "toeic067", title: "Reference Check Questionnaire" },
  { key: "toeic068", title: "Salary Adjustment Letter" },
  { key: "toeic069", title: "Exit Interview Summary" },
  { key: "toeic070", title: "Maternity Leave Policy" },
  { key: "toeic071", title: "Internship Program Announcement" },
  { key: "toeic072", title: "Anti-Harassment Training Notice" },
  { key: "toeic073", title: "Employee Handbook Excerpt" },
  { key: "toeic074", title: "Open Enrollment Benefits Guide" },
  { key: "toeic075", title: "Promotion Announcement Memo" },
  { key: "toeic076", title: "Warehouse Safety Inspection Report" },
  { key: "toeic077", title: "Inventory Replenishment Procedure" },
  { key: "toeic078", title: "Quality Assurance Audit Results" },
  { key: "toeic079", title: "Supplier Code of Conduct" },
  { key: "toeic080", title: "Manufacturing Line Maintenance Plan" },
  { key: "toeic081", title: "Logistics Carrier Comparison" },
  { key: "toeic082", title: "Shipment Delay Incident Report" },
  { key: "toeic083", title: "ISO Certification Renewal Notice" },
  { key: "toeic084", title: "Production Capacity Expansion Proposal" },
  { key: "toeic085", title: "Cross Docking Workflow Guide" },
  { key: "toeic086", title: "Expense Reimbursement Policy" },
  { key: "toeic087", title: "Invoice Payment Terms Reminder" },
  { key: "toeic088", title: "Annual Financial Audit Notice" },
  { key: "toeic089", title: "Bank Account Statement Notification" },
  { key: "toeic090", title: "Loan Application Status Update" },
  { key: "toeic091", title: "Investment Portfolio Review" },
  { key: "toeic092", title: "Tax Deduction Guide for Employees" },
  { key: "toeic093", title: "Budget Reallocation Request" },
  { key: "toeic094", title: "Year End Closing Schedule" },
  { key: "toeic095", title: "Treasury Operations Memo" },
  { key: "toeic096", title: "Social Media Campaign Brief" },
  { key: "toeic097", title: "Email Marketing Performance Report" },
  { key: "toeic098", title: "SEO Audit Findings" },
  { key: "toeic099", title: "Influencer Partnership Proposal" },
  { key: "toeic100", title: "Brand Style Guide Excerpt" },
  { key: "toeic101", title: "Customer Journey Mapping Workshop" },
  { key: "toeic102", title: "A B Test Results Memo" },
  { key: "toeic103", title: "Content Calendar Planning Meeting" },
  { key: "toeic104", title: "Public Relations Crisis Response" },
  { key: "toeic105", title: "Annual Marketing Budget Plan" },
  { key: "toeic106", title: "IT Helpdesk Ticket Response" },
  { key: "toeic107", title: "Office Expansion Ribbon-Cutting Speech" },
  { key: "toeic108", title: "Service Center Workflow Guide" },
  { key: "toeic109", title: "Product Specification Sheet" },
  { key: "toeic110", title: "New Office Equipment Purchase Request" },
  { key: "toeic111", title: "Health and Safety Drill Announcement" },
  { key: "toeic112", title: "Annual Shareholders Meeting Notice" },
  { key: "toeic113", title: "International Office Video Conference Brief" },
  { key: "toeic114", title: "Cross-Cultural Communication Training" },
  { key: "toeic115", title: "Quarterly OKR Review Report" },
  { key: "toeic116", title: "Travel Reimbursement Claim Form Notes" },
  { key: "toeic117", title: "After-Sale Service Training Manual Excerpt" },
  { key: "toeic118", title: "New CRM Rollout Schedule" },
  { key: "toeic119", title: "Vendor Invoice Dispute Letter" },
  { key: "toeic120", title: "Cafeteria Menu and Feedback Notice" },
];

const GEPT_STORIES = [
  { key: "gept001", title: "A Weekend Trip to Kenting" },
  { key: "gept002", title: "Studying for the GEPT Exam" },
  { key: "gept003", title: "Friday Night Family Dinner" },
  { key: "gept004", title: "Weekend in the Attic" },
  { key: "gept005", title: "Grandma's Secret Recipe" },
  { key: "gept006", title: "The Great Chore Negotiation" },
  { key: "gept007", title: "A New Member of the Family" },
  { key: "gept008", title: "Surprise Party for Dad" },
  { key: "gept009", title: "Moving Day Chaos" },
  { key: "gept010", title: "Helping with Homework" },
  { key: "gept011", title: "A Lazy Sunday Morning" },
  { key: "gept012", title: "Video Call Across the Ocean" },
  { key: "gept013", title: "First Day at a New High School" },
  { key: "gept014", title: "Group Project Meeting in the Library" },
  { key: "gept015", title: "Cramming for the Final Exam with a Study Buddy" },
  { key: "gept016", title: "Class Field Trip to a Museum" },
  { key: "gept017", title: "Joining the School Basketball Team Tryouts" },
  { key: "gept018", title: "Parent-Teacher Conference" },
  { key: "gept019", title: "School Cafeteria Lunch Break Conversation" },
  { key: "gept020", title: "Science Fair Project Presentation" },
  { key: "gept021", title: "Late Submission and Asking the Teacher for Extension" },
  { key: "gept022", title: "Graduation Ceremony Reflections" },
  { key: "gept023", title: "A Nerve-Wracking Job Interview" },
  { key: "gept024", title: "First Day Onboarding at a New Company" },
  { key: "gept025", title: "Negotiating a Raise with the Manager" },
  { key: "gept026", title: "Brainstorming Session for a New Product Idea" },
  { key: "gept027", title: "Dealing with a Difficult Coworker" },
  { key: "gept028", title: "Pulling an All-Nighter to Meet a Deadline" },
  { key: "gept029", title: "Giving a Presentation to the Team" },
  { key: "gept030", title: "Office Holiday Party" },
  { key: "gept031", title: "Saying Goodbye on the Last Day before a Job Change" },
  { key: "gept032", title: "Working from Home for the First Week" },
  { key: "gept033", title: "Backpacking Through Southeast Asia" },
  { key: "gept034", title: "Missing a Flight and Finding a New Route" },
  { key: "gept035", title: "Road Trip Along Taiwan's East Coast" },
  { key: "gept036", title: "Lost Luggage at the Airport" },
  { key: "gept037", title: "Trying Street Food in Vietnam" },
  { key: "gept038", title: "Getting Lost in an Unfamiliar City" },
  { key: "gept039", title: "A Homestay With a Local Family" },
  { key: "gept040", title: "Visiting the Great Wall of China" },
  { key: "gept041", title: "A Train Journey Through the Mountains" },
  { key: "gept042", title: "Camping in a National Park" },
  { key: "gept043", title: "Homemade Pasta Cooking Class" },
  { key: "gept044", title: "Birthday Dinner at a Fancy Restaurant" },
  { key: "gept045", title: "A Month of Vegetarian Living" },
  { key: "gept046", title: "Hosting a Potluck Dinner Party" },
  { key: "gept047", title: "A Night at the Traditional Market" },
  { key: "gept048", title: "Baking Cookies for Charity" },
  { key: "gept049", title: "The Picnic That Went Wrong" },
  { key: "gept050", title: "Reviewing a Celebrity Chef's Restaurant" },
  { key: "gept051", title: "Grandmother's Secret Recipe" },
  { key: "gept052", title: "Exotic Food at the International Festival" },
  { key: "gept053", title: "Joining a Gym and Meeting a Personal Trainer" },
  { key: "gept054", title: "Annual Health Checkup at the Clinic" },
  { key: "gept055", title: "Starting a Yoga Routine to Manage Stress" },
  { key: "gept056", title: "Recovering from a Sports Injury" },
  { key: "gept057", title: "Trying a New Diet to Lose Weight" },
  { key: "gept058", title: "Sleep Problems and Finding Solutions" },
  { key: "gept059", title: "Running First Half-Marathon Training" },
  { key: "gept060", title: "Mental Health and Seeing a Therapist" },
  { key: "gept061", title: "Quitting a Bad Habit" },
  { key: "gept062", title: "Helping an Elderly Parent with Mobility Issues" },
  { key: "gept063", title: "Black Friday Madness at the Mall" },
  { key: "gept064", title: "Asking for a Refund" },
  { key: "gept065", title: "My First Monthly Budget" },
  { key: "gept066", title: "Online Shopping Regret" },
  { key: "gept067", title: "Saving for a Down Payment" },
  { key: "gept068", title: "Comparing Grocery Prices" },
  { key: "gept069", title: "The Scam Phone Call" },
  { key: "gept070", title: "Applying for a Bank Loan" },
  { key: "gept071", title: "Selling at the Flea Market" },
  { key: "gept072", title: "Splitting the Dinner Bill" },
  { key: "gept073", title: "Learning Guitar from YouTube" },
  { key: "gept074", title: "Pickup Basketball at the Park" },
  { key: "gept075", title: "My First Photography Exhibition" },
  { key: "gept076", title: "Marathon Training Club" },
  { key: "gept077", title: "My First Book Club Meeting" },
  { key: "gept078", title: "Hiking Yushan Trail" },
  { key: "gept079", title: "Pottery Class for Stress Relief" },
  { key: "gept080", title: "Setting Up a Home Garden" },
  { key: "gept081", title: "Board Game Night with Friends" },
  { key: "gept082", title: "Championship Game at the Stadium" },
  { key: "gept083", title: "The Viral Video" },
  { key: "gept084", title: "Locked Out" },
  { key: "gept085", title: "First Match" },
  { key: "gept086", title: "New Phone Day" },
  { key: "gept087", title: "The Productivity App" },
  { key: "gept088", title: "Smart Home Trouble" },
  { key: "gept089", title: "The Wrong Forward" },
  { key: "gept090", title: "Going Live" },
  { key: "gept091", title: "Switching Platforms" },
  { key: "gept092", title: "The Long-Distance Call" },
  { key: "gept093", title: "Reuniting with a High School Best Friend" },
  { key: "gept094", title: "A Long-Distance Friendship Over Video Calls" },
  { key: "gept095", title: "Apologizing After a Misunderstanding" },
  { key: "gept096", title: "Helping a Friend Through a Tough Breakup" },
  { key: "gept097", title: "Making New Friends in a Foreign Country" },
  { key: "gept098", title: "Asking Someone Out on a First Date" },
  { key: "gept099", title: "Discovering an Online Friend Lives in the Same City" },
  { key: "gept100", title: "A Friendship That Grew from Being Neighbors" },
  { key: "gept101", title: "Wedding Speech for a Childhood Friend" },
  { key: "gept102", title: "Saying Farewell as a Friend Moves Abroad" },
  { key: "gept103", title: "Lunar New Year Reunion" },
  { key: "gept104", title: "Adopting a Rescue Dog" },
  { key: "gept105", title: "The MRT Delay" },
  { key: "gept106", title: "Getting a Library Card" },
  { key: "gept107", title: "Joining the Community Choir" },
  { key: "gept108", title: "Surviving the Typhoon Weekend" },
  { key: "gept109", title: "Mid-Autumn Festival BBQ" },
  { key: "gept110", title: "My First Day at the Soup Kitchen" },
  { key: "gept111", title: "The Old Toy in the Closet" },
  { key: "gept112", title: "Going to the Rock Concert" },
  { key: "gept113", title: "Power Outage Movie Night" },
  { key: "gept114", title: "The Letter in the Attic" },
  { key: "gept115", title: "My New Houseplant" },
  { key: "gept116", title: "Calligraphy Class at the Community Center" },
  { key: "gept117", title: "The Car Breakdown" },
  { key: "gept118", title: "The Religious Procession" },
  { key: "gept119", title: "Sunrise on the Mountaintop" },
  { key: "gept120", title: "The 7-Eleven Loyalty Program" },
  { key: "gept121", title: "Startup Launch Crunch Week" },
  { key: "gept122", title: "From Classroom to Code" },
  { key: "gept123", title: "Mentoring the Summer Intern" },
  { key: "gept124", title: "The Mountain Lodge Retreat" },
  { key: "gept125", title: "Winning the Tokyo Client Pitch" },
  { key: "gept126", title: "Solo Backpacking Across Northern Vietnam" },
  { key: "gept127", title: "Climbing Yushan Before Sunrise" },
  { key: "gept128", title: "A Delayed Flight to Reykjavik" },
  { key: "gept129", title: "Scuba Diving Adventure in Green Island" },
  { key: "gept130", title: "Missing the Last Bus in a Small Mountain Town" },
  { key: "gept131", title: "Opening Our Tiny Ramen Shop on a Quiet Lane" },
  { key: "gept132", title: "My Aunt Enters the Town Dumpling Competition" },
  { key: "gept133", title: "Hunting for the Best Beef Noodles in Taipei" },
  { key: "gept134", title: "Our Family's First Vegan Hot Pot Night" },
  { key: "gept135", title: "Learning to Bake Sourdough During a Quiet Weekend" },
  { key: "gept136", title: "The Exchange Student from Berlin" },
  { key: "gept137", title: "The Volcano That Refused to Erupt" },
  { key: "gept138", title: "Curtains Up on the Drama Club Musical" },
  { key: "gept139", title: "The Coding Club's First Real App" },
  { key: "gept140", title: "The Librarian Who Saw Me" },
  { key: "gept141", title: "Bringing Grandpa Home from the Hospital" },
  { key: "gept142", title: "Mediating My Parents' Retirement Argument" },
  { key: "gept143", title: "Welcoming a Foster Kitten into Our Apartment" },
  { key: "gept144", title: "A Blended Family's First Christmas Together" },
  { key: "gept145", title: "The Elderly Neighbor Who Became My Second Grandmother" },
  { key: "gept146", title: "Training for My First 10K Race" },
  { key: "gept147", title: "Starting a YouTube Channel About Bonsai" },
  { key: "gept148", title: "Decluttering My Whole Apartment" },
  { key: "gept149", title: "Volunteering at the Animal Shelter" },
  { key: "gept150", title: "A Year of Daily Journaling" },
];

const DELE_STORIES = [
  { key: "dele001", title: "Un café en Madrid" },
  { key: "dele002", title: "Mi primer día en la escuela de idiomas" },
  { key: "dele003", title: "Planificando un viaje a Argentina" },
  { key: "dele004", title: "Reportaje: el teletrabajo cinco años después" },
  { key: "dele005", title: "Comité estratégico: lanzamiento internacional" },
  { key: "dele006", title: "Ensayo: el silencio en la literatura contemporánea" },
  { key: "dele007", title: "Una visita al supermercado" },
  { key: "dele008", title: "Una visita a los abuelos el fin de semana" },
  { key: "dele009", title: "Reflexiones después de una entrevista de trabajo" },
  { key: "dele010", title: "Columna de opinión: el auge del bicing urbano" },
  { key: "dele011", title: "Reunión extraordinaria del consejo: filtración de datos" },
  { key: "dele012", title: "Ensayo: la soledad en la vida urbana" },
  { key: "dele013", title: "En el aeropuerto" },
  { key: "dele014", title: "Mi primera clase de cocina" },
  { key: "dele015", title: "Decidí aprender a tocar el piano" },
  { key: "dele016", title: "Reportaje: el auge de los espacios de coworking en ciudades medianas" },
  { key: "dele017", title: "Carta formal de reclamación de la comunidad de vecinos" },
  { key: "dele018", title: "Ensayo: la geografía del duelo" },
  { key: "dele019", title: "Una tarde en la biblioteca" },
  { key: "dele020", title: "Reportaje el auge de los podcasts en español" },
  { key: "dele021", title: "En el restaurante" },
  { key: "dele022", title: "En la farmacia" },
  { key: "dele023", title: "Pidiendo direcciones por la calle" },
  { key: "dele024", title: "Comprando ropa en el centro" },
  { key: "dele025", title: "En la recepción del hotel" },
  { key: "dele026", title: "Una llamada al médico" },
  { key: "dele027", title: "Reservando una mesa para cenar" },
  { key: "dele028", title: "Mi rutina diaria de lunes a viernes" },
  { key: "dele029", title: "Hablando del fin de semana con un amigo" },
  { key: "dele030", title: "Buscando un piso de alquiler" },
  { key: "dele031", title: "Una conversación con un compañero de trabajo nuevo" },
  { key: "dele032", title: "Experiencias de viaje por Sudamérica" },
  { key: "dele033", title: "Reflexiones sobre el aprendizaje de idiomas" },
  { key: "dele034", title: "Una visita guiada al Museo del Prado" },
  { key: "dele035", title: "Voluntariado en un comedor social" },
  { key: "dele036", title: "Reportaje: el auge de la cocina sostenible" },
  { key: "dele037", title: "Columna: las redes sociales y la juventud" },
  { key: "dele038", title: "Crónica: la huerta urbana en barrios populares" },
  { key: "dele039", title: "Entrevista: la transformación digital del comercio" },
  { key: "dele040", title: "Reportaje: el reto de la conciliación laboral" },
  { key: "dele041", title: "Ensayo: la nostalgia como motor cultural" },
  { key: "dele042", title: "Conferencia: bioética y edición genética" },
  { key: "dele043", title: "Análisis: la fragmentación del cine independiente" },
  { key: "dele044", title: "Mesa redonda: la economía circular y sus límites" },
  { key: "dele045", title: "Discurso: la memoria histórica en la educación" },
  { key: "dele046", title: "Ensayo: la deriva del lenguaje en la era algorítmica" },
  { key: "dele047", title: "Ponencia: epistemología del trabajo creativo" },
  { key: "dele048", title: "Crítica: la voz autoral en la narrativa hispanoamericana" },
  { key: "dele049", title: "Reflexión: la temporalidad en la fenomenología urbana" },
  { key: "dele050", title: "Discurso académico: el barroco y la modernidad líquida" },
];

let DATA = {};
let currentView = null;
const GEPT_SUB_LEVELS = ["初級", "中級", "中高級", "高級", "優級"];
const GEPT_LEGACY_KEY_MAP = { g1: "初級", g2: "中級", g3: "中高級", g4: "高級", g5: "優級" };
const TOEIC_SUB_LABELS = {
  "基礎生活級": "基礎生活",
  "職場日常級": "職場日常",
  "進階商務級": "進階商務",
  "專業頂尖級": "專業頂尖",
};
const TOEIC_SUB_KEYS = Object.keys(TOEIC_SUB_LABELS);

let state = {
  level: "n5",
  lang: "en",
  dir: "ja",
  lookup: true,
  geptSubLevel: "初級",
  toeicSubLevel: "基礎生活級",
  story: null,
  history: {},
  timeline: [],
  timelinePos: -1,
  streak: {
    count: 0,        // consecutive days INCLUDING today (if today studied)
    lastDay: null,   // "YYYY-MM-DD" local; last day with ≥1 reveal
    todayCount: 0,   // reveals on lastDay (used for daily-goal bar)
    history: {},     // { "YYYY-MM-DD": revealsCount } for heatmap
  },
};
const DAILY_GOAL = 30;
const MAX_TIMELINE = 50;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    Object.assign(state, saved);
  } catch {}
  state.history = state.history || {};
  state.streak = Object.assign({ count: 0, lastDay: null, todayCount: 0, history: {} }, state.streak || {});
  // Migrate: if a previous build stored g1-g5 as the main level, fold back to "gept"
  if (state.level && /^g[1-5]$/.test(state.level)) state.level = "gept";
  // Migrate legacy gept sub-level keys (g1-g5) → Chinese labels
  if (GEPT_LEGACY_KEY_MAP[state.geptSubLevel]) state.geptSubLevel = GEPT_LEGACY_KEY_MAP[state.geptSubLevel];
  if (!GEPT_SUB_LEVELS.includes(state.geptSubLevel)) state.geptSubLevel = "初級";
  if (!TOEIC_SUB_KEYS.includes(state.toeicSubLevel)) state.toeicSubLevel = "基礎生活級";
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// ===== Streak tracking =====
function dateKey(d) {
  const dt = d || new Date();
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, "0");
  const day = String(dt.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function todayKey() { return dateKey(); }
function yesterdayKey() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return dateKey(d);
}

function recordReveal() {
  const s = state.streak;
  const today = todayKey();
  s.history[today] = (s.history[today] || 0) + 1;
  if (s.lastDay === today) {
    s.todayCount = (s.todayCount || 0) + 1;
  } else if (s.lastDay === yesterdayKey()) {
    s.count = (s.count || 0) + 1;
    s.lastDay = today;
    s.todayCount = 1;
  } else {
    s.count = 1;
    s.lastDay = today;
    s.todayCount = 1;
  }
  saveState();
  updateStreakUI();
}

function effectiveStreak() {
  const s = state.streak;
  const today = todayKey();
  if (s.lastDay === today) return { n: s.count, active: true };
  if (s.lastDay === yesterdayKey()) return { n: s.count, active: false };
  return { n: 0, active: false };
}

function updateStreakUI() {
  const fire = document.getElementById("streak-fire");
  const num = document.getElementById("streak-num");
  const bar = document.getElementById("streak-bar-fill");
  const txt = document.getElementById("streak-bar-text");
  if (!fire) return;
  const { n, active } = effectiveStreak();
  if (num) num.textContent = String(n);
  else fire.textContent = `🔥 ${n}`;
  fire.classList.toggle("streak-active", active);
  fire.classList.toggle("streak-dim", !active);
  const todayCount = state.streak.lastDay === todayKey() ? (state.streak.todayCount || 0) : 0;
  const pct = Math.min(100, Math.round((todayCount / DAILY_GOAL) * 100));
  if (bar) bar.style.width = pct + "%";
  if (txt) txt.textContent = `${todayCount} / ${DAILY_GOAL}`;
}

function heatmapTier(n) {
  if (!n) return "hm-0";
  if (n <= 10) return "hm-1";
  if (n <= 30) return "hm-2";
  return "hm-3";
}

// Milestone symbol overlaid on a day cell, based on multiples of the daily goal (30).
function heatmapSymbol(n) {
  if (n >= DAILY_GOAL * 3) return "👑"; // 爆發 90+
  if (n >= DAILY_GOAL * 2) return "🔥"; // 雙倍 60+
  if (n >= DAILY_GOAL) return "⭐";      // 達標 30+
  return "";
}

function renderHeatmap() {
  const root = document.getElementById("streak-heatmap");
  const summary = document.getElementById("streak-summary");
  if (!root) return;
  const hist = state.streak.history || {};
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayK = todayKey();
  // Last row = current week (Sunday → today), future days blank.
  // Rows above = older weeks; oldest at top. Show ~30 days back.
  const earliest = new Date(today);
  earliest.setDate(today.getDate() - 29);
  const earliestK = dateKey(earliest);
  const currentSunday = new Date(today);
  currentSunday.setDate(today.getDate() - today.getDay());
  const weeks = 5;
  const rows = [];
  for (let w = weeks - 1; w >= 0; w--) {
    const weekStart = new Date(currentSunday);
    weekStart.setDate(currentSunday.getDate() - 7 * w);
    for (let d = 0; d < 7; d++) {
      const day = new Date(weekStart);
      day.setDate(weekStart.getDate() + d);
      const key = dateKey(day);
      if (day > today || key < earliestK) {
        rows.push(`<div class="hm-cell hm-empty"></div>`);
      } else {
        const cnt = hist[key] || 0;
        const tier = heatmapTier(cnt);
        const isToday = key === todayK ? " hm-today" : "";
        const sym = heatmapSymbol(cnt);
        const symHtml = sym ? `<span class="hm-sym">${sym}</span>` : "";
        rows.push(`<div class="hm-cell ${tier}${isToday}" title="${key} · ${cnt} 張">${symHtml}</div>`);
      }
    }
  }
  const dayHeader = ["日","一","二","三","四","五","六"]
    .map(d => `<div class="hm-dow">${d}</div>`).join("");
  const intro = `<div class="hm-intro">最近 30 天學習記錄，顏色越鮮明表示那天翻越多張卡。</div>`;
  const legend =
    `<div class="hm-legend">` +
      `<span>少</span>` +
      `<span class="hm-cell hm-0"></span>` +
      `<span class="hm-cell hm-1"></span>` +
      `<span class="hm-cell hm-2"></span>` +
      `<span class="hm-cell hm-3"></span>` +
      `<span>多</span>` +
      `<span class="hm-legend-detail">（沒學 / 1–10 / 11–30 / 31+ 張）</span>` +
    `</div>`;
  const symLegend =
    `<div class="hm-legend hm-sym-legend">` +
      `<span>⭐ 達標 30</span>` +
      `<span>🔥 雙倍 60</span>` +
      `<span>👑 爆發 90</span>` +
    `</div>`;
  root.innerHTML = intro + `<div class="hm-grid">` + dayHeader + rows.join("") + `</div>` + legend + symLegend;

  // Milestone badge tallies (mutually exclusive, all-time) → header badge row
  const badges = document.getElementById("streak-badges");
  if (badges) {
    let star = 0, fire = 0, crown = 0;
    Object.values(hist).forEach(n => {
      if (n >= DAILY_GOAL * 3) crown++;
      else if (n >= DAILY_GOAL * 2) fire++;
      else if (n >= DAILY_GOAL) star++;
    });
    badges.innerHTML = `<span>⭐ ${star}</span><span>🔥 ${fire}</span><span>👑 ${crown}</span>`;
  }

  // Summary line: total cards + total days
  const allKeys = Object.keys(hist);
  const totalCards = allKeys.reduce((s, k) => s + (hist[k] || 0), 0);
  const totalDays = allKeys.filter(k => (hist[k] || 0) > 0).length;
  const { n, active } = effectiveStreak();
  if (summary) {
    summary.innerHTML =
      `連續打卡 <strong>${n}</strong> 天 ${active ? "(今日已完成)" : "(今日尚未打卡)"}<br>` +
      `累計學習 <strong>${totalDays}</strong> 天，共翻牌 <strong>${totalCards}</strong> 張`;
  }
}

function openStreakPicker() {
  const ov = document.getElementById("streak-picker");
  if (!ov) return;
  renderHeatmap();
  ov.hidden = false;
}
function closeStreakPicker() {
  const ov = document.getElementById("streak-picker");
  if (ov) ov.hidden = true;
}

function exportBackup() {
  const data = JSON.stringify(state, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "tutor_backup.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 100);
}

function importBackup(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!imported || typeof imported !== "object") throw new Error("Invalid format");
      if (!confirm("匯入備份會覆蓋目前本機資料，確定繼續嗎？")) return;
      Object.assign(state, imported);
      state.streak = Object.assign({ count: 0, lastDay: null, todayCount: 0, history: {} }, state.streak || {});
      saveState();
      updateStreakUI();
      renderHeatmap();
      alert("匯入成功！");
    } catch (e) {
      alert("匯入失敗：" + e.message);
    }
  };
  reader.readAsText(file);
}

async function loadData() {
  const jpFixed = 3;
  const koFixed = 3;
  const toeicFixed = 3;
  const deleFixed = 3;
  const geptFixed = 3;
  const loaded = await Promise.all([
    fetch("data/vocab_jap.json").then(r => r.json()),
    fetch("data/grammar_jap.json").then(r => r.json()),
    fetch("data/quiz_jap.json").then(r => r.json()),
    fetch("data/vocab_ko.json").then(r => r.json()),
    fetch("data/grammar_ko.json").then(r => r.json()),
    fetch("data/quiz_ko.json").then(r => r.json()),
    fetch("data/vocab_toeic.json").then(r => r.json()),
    fetch("data/grammar_toeic.json").then(r => r.json()),
    fetch("data/quiz_toeic.json").then(r => r.json()),
    fetch("data/vocab_dele.json").then(r => r.json()),
    fetch("data/grammar_dele.json").then(r => r.json()),
    fetch("data/quiz_dele.json").then(r => r.json()),
    fetch("data/vocab_gept.json").then(r => r.json()),
    fetch("data/grammar_gept.json").then(r => r.json()),
    fetch("data/quiz_gept.json").then(r => r.json()),
    ...STORIES.map(s => fetch(`data/scenes_${s.key}.json`).then(r => r.json())),
    ...KOREAN_STORIES.map(s => fetch(`data/scenes_${s.key}.json`).then(r => r.json())),
    ...TOEIC_STORIES.map(s => fetch(`data/scenes_${s.key}.json`).then(r => r.json())),
    ...DELE_STORIES.map(s => fetch(`data/scenes_${s.key}.json`).then(r => r.json())),
    ...GEPT_STORIES.map(s => fetch(`data/scenes_${s.key}.json`).then(r => r.json())),
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
  DATA.vocab_dele = loaded[9];
  DATA.grammar_dele = loaded[10];
  DATA.quiz_dele = loaded[11];
  DATA.vocab_gept = loaded[12];
  DATA.grammar_gept = loaded[13];
  DATA.quiz_gept = loaded[14];
  const jpStart = jpFixed + koFixed + toeicFixed + deleFixed + geptFixed;
  const koStart = jpStart + STORIES.length;
  const toeicStart = koStart + KOREAN_STORIES.length;
  const deleStart = toeicStart + TOEIC_STORIES.length;
  const geptStart = deleStart + DELE_STORIES.length;
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
  DATA.scenes_dele = {};
  DELE_STORIES.forEach((s, i) => {
    DATA.scenes_dele[s.key] = loaded[deleStart + i].all || [];
  });
  DATA.scenes_gept = {};
  GEPT_STORIES.forEach((s, i) => {
    DATA.scenes_gept[s.key] = loaded[geptStart + i].all || [];
  });
  buildLookupIndex();
  initJaTokenizer();
  updateStats();
}

function updateStats() {
  const sum = obj => Object.values(obj || {}).reduce((s, a) => s + a.length, 0);
  const total =
    sum(DATA.vocab) + sum(DATA.grammar) + sum(DATA.quiz) + sum(DATA.scenes) +
    sum(DATA.vocab_ko) + sum(DATA.grammar_ko) + sum(DATA.quiz_ko) + sum(DATA.scenes_ko) +
    sum(DATA.vocab_toeic) + sum(DATA.grammar_toeic) + sum(DATA.quiz_toeic) + sum(DATA.scenes_toeic) +
    sum(DATA.vocab_dele) + sum(DATA.grammar_dele) + sum(DATA.quiz_dele) + sum(DATA.scenes_dele) +
    sum(DATA.vocab_gept) + sum(DATA.grammar_gept) + sum(DATA.quiz_gept) + sum(DATA.scenes_gept);
  document.getElementById("stats").textContent = `已載入 ${total} 項學習素材 · 離線可用`;
}

function pickRandom(pool, level, kind) {
  const items = pool[level];
  if (!items || !items.length) return null;
  // GEPT/TOEIC vocab filter by sub-level; track "already shown" history per sub-level so each pool keeps its own rotation.
  let key = `${kind}_${level}`;
  if (level === "gept"  && kind === "vocab") key += `_${state.geptSubLevel  || "初級"}`;
  if (level === "toeic" && kind === "vocab") key += `_${state.toeicSubLevel || "基礎生活級"}`;
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

// ===== Text-to-speech (browser SpeechSynthesis) =====
// Toggleable button: 🔊 → play; clicking again or another 🔊 cancels current.
// Active button shows ⏹ until utterance ends (or is cancelled).
let activeTtsBtn = null;

function resetTtsBtn(btn) {
  if (!btn) return;
  btn.textContent = "🔊";
  btn.setAttribute("aria-label", "播放發音");
  btn.setAttribute("title", "播放發音");
}

function stopTts() {
  // Cancel speech + reset whichever button was showing ⏹
  try { window.speechSynthesis.cancel(); } catch (e) { /* ignore */ }
  if (activeTtsBtn) {
    resetTtsBtn(activeTtsBtn);
    activeTtsBtn = null;
  }
}

function speak(text, langCode, btn) {
  if (!text || typeof window.speechSynthesis === "undefined") return;
  try {
    // Cancel any in-flight speech and reset its button visually (onend may not
    // always fire in some browsers when cancel() is called).
    stopTts();

    const u = new SpeechSynthesisUtterance(text);
    u.lang = langCode;
    const voices = window.speechSynthesis.getVoices() || [];
    const prefix = (langCode || "").slice(0, 2);
    const v = voices.find(x => x.lang === langCode) ||
              voices.find(x => x.lang && x.lang.slice(0, 2) === prefix);
    if (v) u.voice = v;

    if (btn) {
      btn.textContent = "🔇";
      btn.setAttribute("aria-label", "停止發音");
      btn.setAttribute("title", "停止發音");
      activeTtsBtn = btn;
      const cleanup = () => {
        if (activeTtsBtn === btn) activeTtsBtn = null;
        resetTtsBtn(btn);
      };
      u.onend = cleanup;
      u.onerror = cleanup;
    }
    window.speechSynthesis.speak(u);
  } catch (e) { /* speech unavailable — ignore */ }
}
function ttsBtn(text, langCode) {
  return `<button class="tts-btn" data-tts="${encodeURIComponent(text)}" data-ttslang="${langCode}" aria-label="播放發音" title="播放發音">🔊</button>`;
}

// ========== Lookup engine (kuromoji for ja, substring + longest-match for others) ==========
const lookup = {
  built: false,
  index: { ja: null, ko: null, en_toeic: null, en_gept: null, es: null },
  regex: { ja: null, ko: null, en_toeic: null, en_gept: null, es: null },
};
let jaTokenizer = null;
let jaTokenizerLoading = false;
function initJaTokenizer() {
  if (jaTokenizer || jaTokenizerLoading) return;
  if (typeof kuromoji === "undefined") return;
  jaTokenizerLoading = true;
  kuromoji.builder({ dicPath: "vendor/kuromoji/dict" }).build((err, tokenizer) => {
    jaTokenizerLoading = false;
    if (err) { console.warn("[kuromoji] init failed:", err); return; }
    jaTokenizer = tokenizer;
    // Re-render current entry so existing scene card upgrades to tokenized highlight
    const entry = state.timeline[state.timelinePos];
    if (entry) displayEntry(entry);
  });
}

function lookupSceneLang() {
  if (isDele()) return "es";
  if (isGept()) return "en_gept";
  if (isToeic()) return "en_toeic";
  if (isTopik()) return "ko";
  return "ja";
}

// ===== Korean conjugation generator (heuristic, regular conjugation patterns) =====
// Vowel/batchim indices in Hangul syllable composition (lead*588 + vowel*28 + tail + 0xAC00).
const KO_BATCHIM_B = 17;  // ㅂ
const KO_BATCHIM_SS = 20; // ㅆ
const KO_VOWEL_A = 0;     // ㅏ
const KO_VOWEL_EO = 4;    // ㅓ
const KO_VOWEL_YEO = 6;   // ㅕ
const KO_VOWEL_O = 8;     // ㅗ
const KO_VOWEL_WA = 9;    // ㅘ
const KO_VOWEL_U = 13;    // ㅜ
const KO_VOWEL_WO = 14;   // ㅝ
const KO_VOWEL_I = 20;    // ㅣ

function koDecompose(ch) {
  const code = ch.charCodeAt(0);
  if (code < 0xAC00 || code > 0xD7A3) return null;
  const syl = code - 0xAC00;
  return { lead: Math.floor(syl / 588), vowel: Math.floor((syl % 588) / 28), tail: syl % 28 };
}
function koCompose(lead, vowel, tail) {
  return String.fromCharCode(0xAC00 + lead * 588 + vowel * 28 + tail);
}
function koAddBatchim(syl, b) {
  const d = koDecompose(syl);
  if (!d || d.tail !== 0) return null;
  return koCompose(d.lead, d.vowel, b);
}
function koChangeVowel(syl, v) {
  const d = koDecompose(syl);
  if (!d || d.tail !== 0) return null;
  return koCompose(d.lead, v, d.tail);
}

// === Korean noun-particle attachment ===
// Real Korean is agglutinative: nouns attach particles (조사) directly with no space
// inside the eojeol (어절). To find 책 inside 책에서 without falsely matching 책 inside
// 책상, we pre-register noun+particle combinations as lookup keys and match by WHOLE
// EOJEOL. 책상 only matches if 책상 itself is registered (it is — as its own noun).
// 자연스럽게 only matches if 자연스럽다 conjugation form 자연스럽게 is registered (i.e. only
// when 자연스럽다 itself is in vocab) — never falls through to single-char 게.
const KO_PARTICLES_SINGLE = [
  "은", "는", "이", "가", "을", "를", "의",
  "에", "에서", "에게", "에게서", "한테", "한테서", "께", "께서",
  "으로", "로", "으로서", "로서", "으로써", "로써",
  "와", "과", "하고", "랑", "이랑",
  "보다", "처럼", "만큼", "같이",
  "도", "만", "마저", "조차", "까지", "부터", "마다",
  "이나", "나", "이든", "든", "이라도", "라도",
  "이라", "라", "이라고", "라고", "이라는", "라는", "이라며", "라며",
];
const KO_PARTICLE_COMBOS = [
  "에는", "에도", "에서는", "에서도", "에게는", "에게도", "에게서는", "에게서도",
  "으로는", "으로도", "로는", "로도",
  "와는", "와도", "과는", "과도", "하고는", "하고도",
  "보다는", "보다도", "만은", "만이", "만을", "만의",
  "까지는", "까지도", "부터는", "부터도",
  "들", "들이", "들은", "들을", "들의", "들에", "들에서", "들도", "들만", "들까지",
];
const KO_TAIL_RIEUL = 8; // ㄹ batchim index

function koHasBatchim(syl) {
  const d = koDecompose(syl);
  return !!(d && d.tail !== 0);
}
function koTailIsRieul(syl) {
  const d = koDecompose(syl);
  return !!(d && d.tail === KO_TAIL_RIEUL);
}

// Allomorph-aware: only generate forms whose particle actually attaches to this noun's
// final-syllable batchim profile (e.g. 책이 not 책가; 사람이 not 사람가; 로 only after
// no-batchim OR ㄹ batchim).
function generateKoNounForms(word) {
  const out = new Set();
  if (!word) return out;
  out.add(word);
  const last = word.slice(-1);
  const hasB = koHasBatchim(last);
  const isRieul = koTailIsRieul(last);
  // Particles whose allomorph requires batchim:
  const NEEDS_BATCHIM = new Set([
    "이", "은", "을", "으로", "으로서", "으로써",
    "이나", "이든", "이라도", "이라", "이라고", "이라는", "이라며", "이랑",
  ]);
  // Particles whose allomorph requires NO batchim:
  const NEEDS_NO_BATCHIM = new Set([
    "가", "는", "를",
    "나", "든", "라도", "라", "라고", "라는", "라며", "랑",
  ]);
  for (const p of KO_PARTICLES_SINGLE) {
    if (NEEDS_BATCHIM.has(p) && !hasB) continue;
    if (NEEDS_NO_BATCHIM.has(p) && hasB) continue;
    // 로/로서/로써: after no-batchim OR ㄹ batchim only
    if ((p === "로" || p === "로서" || p === "로써") && hasB && !isRieul) continue;
    out.add(word + p);
  }
  for (const p of KO_PARTICLE_COMBOS) {
    out.add(word + p);
  }
  return out;
}

// Given dictionary verb/adjective stem (form minus trailing 다), enumerate common
// surface forms found in actual sentences. Covers regular conjugation + 하 contraction
// + ㅗ→ㅘ / ㅜ→ㅝ / ㅣ→ㅕ vowel coalescence. Does NOT cover ㄷ→ㄹ / 으-drop / 르
// irregulars, ㅂ→우 etc. — those still match only as dictionary form.
function generateKoVerbForms(stem) {
  const out = new Set();
  if (!stem) return out;
  out.add(stem + "다");
  // Suffixes that attach without a linking vowel for ALL stems:
  ["고", "지만", "게", "기", "다가"].forEach(s => out.add(stem + s));

  const lastChar = stem.slice(-1);
  const rest = stem.slice(0, -1);

  // 하 family: 하 + 여 → 해, 하 + ㅂ니다 → 합니다
  if (lastChar === "하") {
    ["해", "해요", "해서", "해도", "했어", "했어요", "했다"].forEach(s => out.add(rest + s));
    // 면/며/면서 attaches directly (vowel-ending stem)
    ["면", "며", "면서"].forEach(s => out.add(stem + s));
    const hap = koAddBatchim("하", KO_BATCHIM_B);
    if (hap) { out.add(rest + hap + "니다"); out.add(rest + hap + "니까"); }
    return out;
  }

  const d = koDecompose(lastChar);
  if (!d) return out;

  if (d.tail !== 0) {
    // Consonant-ending stem: needs linking vowel 으 before -면/-며/-니까/-세요/-신
    const yang = d.vowel === KO_VOWEL_A || d.vowel === KO_VOWEL_O;
    const baseV = yang ? "아" : "어";
    const pastV = yang ? "았" : "었";
    [baseV, baseV + "요", baseV + "서", baseV + "도", baseV + "야"].forEach(s => out.add(stem + s));
    [pastV, pastV + "다", pastV + "어", pastV + "어요"].forEach(s => out.add(stem + s));
    ["으면", "으며", "으면서", "으니까", "으세요", "으셨어요"].forEach(s => out.add(stem + s));
    ["습니다", "습니까"].forEach(s => out.add(stem + s));
    return out;
  }

  // Vowel-ending stem: 면/며/면서/니까/세요 attach directly
  ["면", "며", "면서", "니까"].forEach(s => out.add(stem + s));
  const bSyl = koAddBatchim(lastChar, KO_BATCHIM_B);
  if (bSyl) { out.add(rest + bSyl + "니다"); out.add(rest + bSyl + "니까"); }
  out.add(stem + "세요");

  const addContractedPlus = (newVowel) => {
    const v = koChangeVowel(lastChar, newVowel);
    if (!v) return;
    out.add(rest + v);
    out.add(rest + v + "요");
    out.add(rest + v + "서");
    const vSs = koAddBatchim(v, KO_BATCHIM_SS);
    if (vSs) { out.add(rest + vSs + "다"); out.add(rest + vSs + "어요"); out.add(rest + vSs + "어"); }
  };

  if (d.vowel === KO_VOWEL_A || d.vowel === KO_VOWEL_EO) {
    // ㅏ / ㅓ + 어 → ㅏ / ㅓ (no change); past = stem + ㅆ batchim
    out.add(stem + "요"); out.add(stem + "서"); out.add(stem + "도");
    const ss = koAddBatchim(lastChar, KO_BATCHIM_SS);
    if (ss) { out.add(rest + ss + "다"); out.add(rest + ss + "어요"); out.add(rest + ss + "어"); }
  } else if (d.vowel === KO_VOWEL_O) {
    addContractedPlus(KO_VOWEL_WA); // 오/보 → 와/봐
  } else if (d.vowel === KO_VOWEL_U) {
    addContractedPlus(KO_VOWEL_WO); // 주/배우 → 줘/배워
  } else if (d.vowel === KO_VOWEL_I) {
    addContractedPlus(KO_VOWEL_YEO); // 마시/가르치 → 마셔/가르쳐
  } else {
    out.add(stem + "요"); out.add(stem + "서");
  }
  return out;
}

function buildLookupIndex() {
  if (lookup.built) return;
  const collect = (poolByLevel, getSurface) => {
    const idx = new Map();
    if (!poolByLevel) return idx;
    Object.values(poolByLevel).forEach(arr => {
      if (!Array.isArray(arr)) return;
      arr.forEach(item => {
        const surf = getSurface(item);
        if (!surf) return;
        const list = idx.get(surf) || [];
        list.push(item);
        idx.set(surf, list);
      });
    });
    return idx;
  };
  lookup.index.ja       = collect(DATA.vocab,       it => it && it.kanji);
  // Korean: build eojeol-level lookup map. For each entry, register:
  //   - bare word + all common noun-particle forms (책, 책이, 책을, 책에서, 책들이…)
  //   - if 다-ending: conjugation forms via generateKoVerbForms (갔어요, 합니다…)
  // Highlight then matches WHOLE eojeols only — no substring scan. This kills the
  // 게/말/이 false positives (자연스럽게 → no match; 말씀하셨다 → no match; 사람이 → 사람).
  const koMap = new Map();
  // Pass 1: collect particle entries (e.g. 도 = "也", 에서 = "在/從"). A particle
  // entry is identified by its word matching the particle string AND meaning_zh
  // mentioning 粒子/助詞. We then attach particle entries to every noun+particle
  // eojeol so e.g. 내일도 popup shows both 내일 (tomorrow) and 도 (also/too).
  const PARTICLE_SET = new Set([
    ...KO_PARTICLES_SINGLE,
    ...KO_PARTICLE_COMBOS,
  ]);
  const particleEntries = new Map();  // particle string -> [entry, ...]
  if (DATA.vocab_ko) {
    Object.values(DATA.vocab_ko).forEach(arr => {
      if (!Array.isArray(arr)) return;
      arr.forEach(item => {
        const word = item && item.word;
        if (!word || !PARTICLE_SET.has(word)) return;
        if (!/粒子|助詞|格助/.test(item.meaning_zh || "")) return;
        const list = particleEntries.get(word) || [];
        list.push(item);
        particleEntries.set(word, list);
      });
    });
  }

  // Pass 2: register all keys. For each noun entry's generated forms (noun +
  // particle), also point the form's key list at the matching particle entry.
  function addKeyTo(map, k, item) {
    const list = map.get(k);
    if (list) { if (!list.includes(item)) list.push(item); }
    else map.set(k, [item]);
  }
  if (DATA.vocab_ko) {
    Object.values(DATA.vocab_ko).forEach(arr => {
      if (!Array.isArray(arr)) return;
      arr.forEach(item => {
        const word = item && item.word;
        if (!word) return;
        for (const form of generateKoNounForms(word)) {
          addKeyTo(koMap, form, item);
          if (form !== word) {
            const suffix = form.slice(word.length);
            const ps = particleEntries.get(suffix);
            if (ps) ps.forEach(pe => addKeyTo(koMap, form, pe));
          }
        }
        if (word.length >= 2 && word.endsWith("다")) {
          const stem = word.slice(0, -1);
          if (stem) generateKoVerbForms(stem).forEach(f => addKeyTo(koMap, f, item));
        }
      });
    });
  }
  lookup.index.ko = koMap;
  lookup.index.en_toeic = collect(DATA.vocab_toeic, it => it && it.word ? it.word.toLowerCase() : "");
  lookup.index.en_gept  = collect(DATA.vocab_gept,  it => it && it.word ? it.word.toLowerCase() : "");
  lookup.index.es       = collect(DATA.vocab_dele,  it => it && it.word ? it.word.toLowerCase() : "");
  Object.keys(lookup.index).forEach(lang => {
    // Korean uses whole-eojeol Map lookup (highlightKoBySplit) — regex would either
    // explode (~250k alternatives) or reintroduce the substring false-positives we
    // just fixed. Skip regex build entirely for ko.
    if (lang === "ko") { lookup.regex[lang] = null; return; }
    const isLatin = lang.startsWith("en") || lang === "es";
    const terms = Array.from(lookup.index[lang].keys())
      .filter(t => t && t.length > 0)
      .sort((a, b) => b.length - a.length); // longest first → preferred
    if (terms.length === 0) { lookup.regex[lang] = null; return; }
    const escaped = terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    let pattern = escaped.join("|");
    if (isLatin) pattern = "\\b(?:" + pattern + ")\\b";
    try {
      lookup.regex[lang] = new RegExp(pattern, isLatin ? "gi" : "g");
    } catch (e) {
      console.warn("[lookup] regex build failed for", lang, e.message);
      lookup.regex[lang] = null;
    }
  });
  lookup.built = true;
}

function highlightSentence(text, lang) {
  if (!state.lookup) return escapeHTML(text);
  if (lang === "ja" && jaTokenizer) return highlightJaWithTokenizer(text);
  if (lang === "ko" && lookup.index.ko) return highlightKoBySplit(text);
  if (!lookup.regex[lang]) return escapeHTML(text);
  const isLatin = lang.startsWith("en") || lang === "es";
  const re = lookup.regex[lang];
  re.lastIndex = 0;
  let out = "";
  let cursor = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    out += escapeHTML(text.slice(cursor, m.index));
    const matched = m[0];
    const key = isLatin ? matched.toLowerCase() : matched;
    out += `<span class="lookup-word" data-lang="${lang}" data-w="${encodeURIComponent(key)}">${escapeHTML(matched)}</span>`;
    cursor = m.index + matched.length;
    if (m.index === re.lastIndex) re.lastIndex++;
  }
  out += escapeHTML(text.slice(cursor));
  return out;
}

// Korean: split sentence by whitespace into eojeols (어절), strip surrounding
// punctuation/quotes, then look up each eojeol as a WHOLE KEY in the augmented map
// (which already contains every noun+particle combination and verb conjugation).
// Whole-eojeol match means: 책상 only matches "책상" key (the desk noun), never falls
// through to "책"; 자연스럽게 only matches if 자연스럽다 was registered (else no highlight,
// never the wrong 게=crab); 사람이 matches the 사람 entry via the pre-registered form.
function highlightKoBySplit(text) {
  const koMap = lookup.index.ko;
  if (!koMap) return escapeHTML(text);
  const parts = text.split(/(\s+)/);
  const LEAD_RE  = /^([「『（(\[【“”‘’"'\-——]+)/;
  const TRAIL_RE = /([」』）)\]】“”‘’"'.,!?。;:…\-——]+)$/;
  let out = "";
  for (const part of parts) {
    if (!part) continue;
    if (/^\s+$/.test(part)) { out += escapeHTML(part); continue; }
    let lead = "", core = part, trail = "";
    const ml = core.match(LEAD_RE);
    if (ml) { lead = ml[1]; core = core.slice(lead.length); }
    const mt = core.match(TRAIL_RE);
    if (mt) { trail = mt[1]; core = core.slice(0, core.length - trail.length); }
    if (core && koMap.has(core)) {
      out += escapeHTML(lead);
      out += `<span class="lookup-word" data-lang="ko" data-w="${encodeURIComponent(core)}">${escapeHTML(core)}</span>`;
      out += escapeHTML(trail);
    } else {
      out += escapeHTML(part);
    }
  }
  return out;
}

// Use kuromoji morphological analysis: only tokens whose surface OR base_form
// is a known vocab entry get highlighted. Particles / aux / punctuation skipped.
function highlightJaWithTokenizer(text) {
  if (!lookup.index.ja) return escapeHTML(text);
  let tokens;
  try { tokens = jaTokenizer.tokenize(text); }
  catch (e) { return escapeHTML(text); }
  const SKIP_POS = new Set(["助詞", "助動詞", "記号", "フィラー", "その他"]);
  let out = "";
  for (const t of tokens) {
    const surface = t.surface_form || "";
    const base = t.basic_form && t.basic_form !== "*" ? t.basic_form : surface;
    let matchKey = null;
    if (!SKIP_POS.has(t.pos)) {
      if (lookup.index.ja.has(base)) matchKey = base;
      else if (lookup.index.ja.has(surface)) matchKey = surface;
    }
    if (matchKey) {
      out += `<span class="lookup-word" data-lang="ja" data-w="${encodeURIComponent(matchKey)}">${escapeHTML(surface)}</span>`;
    } else {
      out += escapeHTML(surface);
    }
  }
  return out;
}

// Strip the "（粒子/助詞）" tag that the data uses to flag KO particle entries
// (so buildLookupIndex can spot them). It's a machine-readable hint, not for
// human eyes — clean it off before rendering meaning_zh anywhere.
function displayMeaning(s) {
  if (!s) return "";
  return s.replace(/^[（(][^）)]*(?:粒子|助詞|格助)[^）)]*[）)]\s*/, "");
}

// Group popup entries by "sense" (word + normalized hanja + cleaned meaning) and
// dedup entries that are completely identical within a group (same example pair).
// vocab_ko hanja field has inconsistent formatting across batches: "親切하다",
// "親切-", "親切" all refer to the same root. Strip trailing hangul / hyphens /
// whitespace from hanja before keying so they group together.
function groupAndDedupEntries(entries) {
  const groups = new Map();   // groupKey -> Map(exampleKey -> entry)
  const order = [];
  const normalizeHanja = s => (s || "").replace(/[가-힣\-—\s]+$/u, "").trim();
  for (const e of entries) {
    const word = e.word || e.kanji || "";
    const hanja = normalizeHanja(e.hanja);
    const meaning = displayMeaning(e.meaning_zh || "").trim();
    const groupKey = `${word}|${hanja}|${meaning}`;
    const exampleKey = `${e.example_ko || e.example_ja || e.example_en || e.example_es || ""}|${e.example_zh || ""}`;
    if (!groups.has(groupKey)) {
      groups.set(groupKey, new Map());
      order.push(groupKey);
    }
    const exMap = groups.get(groupKey);
    if (!exMap.has(exampleKey)) exMap.set(exampleKey, e);
  }
  return order.map(k => Array.from(groups.get(k).values()));
}

function lookupEntryHtml(entry, lang) {
  let reading = "";
  if (lang === "ja" && entry.kana) reading = entry.kana;
  else if (lang === "ko" && entry.romanization) reading = entry.romanization;
  const headWord = lang === "ja" ? entry.kanji : entry.word;
  const exampleSrc = entry.example_ja || entry.example_ko || entry.example_en || entry.example_es || "";
  const exampleZh = entry.example_zh || "";
  let html = `<div class="lookup-entry"><div class="lookup-head"><strong>${escapeHTML(headWord || "")}</strong>`;
  if (reading) html += `<span class="lookup-reading">[${escapeHTML(reading)}]</span>`;
  html += `</div>`;
  if (entry.meaning_zh) html += `<div class="lookup-meaning">${escapeHTML(displayMeaning(entry.meaning_zh))}</div>`;
  if (exampleSrc) {
    html += `<div class="lookup-example">${escapeHTML(exampleSrc)}`;
    if (exampleZh) html += `<br>→ ${escapeHTML(exampleZh)}`;
    html += `</div>`;
  }
  html += `</div>`;
  return html;
}

function showLookupPopup(spanEl) {
  const lang = spanEl.dataset.lang;
  const key = decodeURIComponent(spanEl.dataset.w || "");
  const entries = lookup.index[lang]?.get(key) || [];
  if (entries.length === 0) { hideLookupPopup(); return; }
  let popup = document.getElementById("lookup-popup");
  if (!popup) {
    popup = document.createElement("div");
    popup.id = "lookup-popup";
    document.body.appendChild(popup);
  }
  const groups = groupAndDedupEntries(entries);
  popup.innerHTML = groups.map(group =>
    `<div class="lookup-group">${group.map(e => lookupEntryHtml(e, lang)).join("")}</div>`
  ).join("");
  popup.hidden = false;
  // Reset constraints so natural size can be measured before re-applying.
  popup.style.maxHeight = "";
  popup.style.overflowY = "";
  popup.style.visibility = "hidden";
  popup.style.left = "0px";
  popup.style.top = "0px";

  const rect = spanEl.getBoundingClientRect();
  const popupRect = popup.getBoundingClientRect();
  const viewW = document.documentElement.clientWidth;
  // Bound = bottom of the #content card (the framed box above the footer), so
  // popup never crosses below that card's visual edge. Fall back to footer top,
  // then to viewport bottom.
  const contentEl = document.getElementById("content");
  const footerEl = document.querySelector("footer");
  const bottomBound = contentEl
    ? contentEl.getBoundingClientRect().bottom
    : (footerEl ? footerEl.getBoundingClientRect().top : document.documentElement.clientHeight);
  const MARGIN = 8;
  const naturalH = popupRect.height;
  const spaceBelow = Math.max(0, bottomBound - rect.bottom - MARGIN);
  const spaceAbove = Math.max(0, rect.top - MARGIN);

  // Horizontal placement (unchanged)
  let left = rect.left + window.scrollX;
  if (left + popupRect.width > viewW + window.scrollX - 8) {
    left = Math.max(8 + window.scrollX, viewW + window.scrollX - popupRect.width - 8);
  }

  // Vertical: prefer below if room (or at least more than above); cap height to
  // available space and let inner content scroll.
  let top, maxH;
  if (spaceBelow >= naturalH || spaceBelow >= spaceAbove) {
    maxH = Math.max(120, spaceBelow);
    top = rect.bottom + window.scrollY + 4;
  } else {
    maxH = Math.max(120, spaceAbove);
    const useH = Math.min(naturalH, maxH);
    top = rect.top + window.scrollY - useH - 4;
    if (top < window.scrollY + 8) top = window.scrollY + 8;
  }

  popup.style.left = left + "px";
  popup.style.top = top + "px";
  popup.style.maxHeight = maxH + "px";
  popup.style.overflowY = "auto";
  popup.style.visibility = "visible";
}

function hideLookupPopup() {
  const popup = document.getElementById("lookup-popup");
  if (popup) popup.hidden = true;
}

function fmtWord(item) {
  const lang = state.lang;
  const meaning = item[`meaning_${lang}`] ?? item.meaning_en;
  const meaningExtra = lang === "ja" && item.meaning_zh
    ? `<br>${escapeHTML(item.meaning_zh)}` : "";
  const trans = lang === "ja" ? (item.example_kana || item.example_en) : item.example_en;
  return `<div class="headword">📖${ttsBtn(item.kanji, "ja-JP")}${escapeHTML(item.kanji)}</div>` +
    `<div class="kana">かな: ${escapeHTML(item.kana)}</div>` +
    `<div><span class="label">Meaning:</span><span class="label-text">${escapeHTML(meaning)}${meaningExtra}</span></div>` +
    `<div class="ex">例: ${escapeHTML(item.example_ja)}<br>` +
    `   → ${escapeHTML(trans)}</div>`;
}

function fmtGrammar(item) {
  const lang = state.lang;
  const meaning = item[`meaning_${lang}`] ?? item.meaning_en;
  const meaningExtra = lang === "ja" && item.meaning_zh
    ? `<br>${escapeHTML(item.meaning_zh)}` : "";
  let html = `<div class="headword">📘 ${escapeHTML(item.pattern)}</div>` +
    `<div><span class="label">Meaning:</span><span class="label-text">${escapeHTML(meaning)}${meaningExtra}</span></div>` +
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
  let html = `<div class="headword">📖${ttsBtn(item.word, "ko-KR")}${escapeHTML(item.word)}</div>`;
  if (item.romanization) html += `<div class="kana">羅馬拼音: ${escapeHTML(item.romanization)}</div>`;
  if (item.hanja && item.hanja !== "" && item.hanja !== "—") {
    html += `<div><span class="label">漢字:</span><span class="label-text">${escapeHTML(item.hanja)}</span></div>`;
  }
  html += `<div><span class="label">意思:</span><span class="label-text">${escapeHTML(displayMeaning(item.meaning_zh))}</span></div>` +
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
  const tts = ttsBtn(item.ko, "ko-KR");
  if (reversed) {
    html += `<div class="headword">💬 ${escapeHTML(item.zh)}</div>`;
    html += `<div><span class="spoiler scene-spoiler">` +
      `<span class="scene-foreign"><span class="scene-noflip">🎭</span>${tts}${escapeHTML(item.ko)}</span></span></div>`;
  } else {
    html += `<div class="headword">🎭${tts}${highlightSentence(item.ko, "ko")}</div>`;
    html += `<div><span class="spoiler" onclick="this.classList.toggle('revealed')">` +
      `💬 ${escapeHTML(item.zh)}</span></div>`;
  }
  return html;
}

function fmtWordToeic(item) {
  let html = `<div class="headword">📖${ttsBtn(item.word, "en-US")}${escapeHTML(item.word)}</div>`;
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
  const tts = ttsBtn(item.en, "en-US");
  if (reversed) {
    html += `<div class="headword">💬 ${escapeHTML(item.zh)}</div>`;
    html += `<div><span class="spoiler scene-spoiler">` +
      `<span class="scene-foreign"><span class="scene-noflip">🎭</span>${tts}${escapeHTML(item.en)}</span></span></div>`;
  } else {
    html += `<div class="headword">🎭${tts}${highlightSentence(item.en, "en_toeic")}</div>`;
    html += `<div><span class="spoiler" onclick="this.classList.toggle('revealed')">` +
      `💬 ${escapeHTML(item.zh)}</span></div>`;
  }
  return html;
}

function fmtWordGept(item) {
  let html = `<div class="headword">📖${ttsBtn(item.word, "en-US")}${escapeHTML(item.word)}</div>`;
  html += `<div><span class="label">意思:</span><span class="label-text">${escapeHTML(item.meaning_zh)}</span></div>` +
    `<div class="ex">例: ${escapeHTML(item.example_en)}<br>` +
    `   → ${escapeHTML(item.example_zh)}</div>`;
  return html;
}

function fmtGrammarGept(item) {
  let html = `<div class="headword">📘 ${escapeHTML(item.pattern)}</div>` +
    `<div><span class="label">意思:</span><span class="label-text">${escapeHTML(item.meaning_zh)}</span></div>` +
    `<div><span class="label">結構:</span><span class="label-text">${escapeHTML(item.structure)}</span></div>`;
  (item.examples || []).forEach((ex, i) => {
    html += `<div class="ex">例${i + 1}: ${escapeHTML(ex.en)}<br>` +
      `   → ${escapeHTML(ex.zh)}</div>`;
  });
  return html;
}

function fmtQuizGept(item) {
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

function fmtSceneGept(item, num, title) {
  const reversed = state.dir === "zh";
  let html = fmtStoryBanner(num, title);
  const tts = ttsBtn(item.en, "en-US");
  if (reversed) {
    html += `<div class="headword">💬 ${escapeHTML(item.zh)}</div>`;
    html += `<div><span class="spoiler scene-spoiler">` +
      `<span class="scene-foreign"><span class="scene-noflip">🎭</span>${tts}${escapeHTML(item.en)}</span></span></div>`;
  } else {
    html += `<div class="headword">🎭${tts}${highlightSentence(item.en, "en_gept")}</div>`;
    html += `<div><span class="spoiler" onclick="this.classList.toggle('revealed')">` +
      `💬 ${escapeHTML(item.zh)}</span></div>`;
  }
  return html;
}

function fmtWordDele(item) {
  let html = `<div class="headword">📖${ttsBtn(item.word, "es-ES")}${escapeHTML(item.word)}</div>`;
  html += `<div><span class="label">意思:</span><span class="label-text">${escapeHTML(item.meaning_zh)}</span></div>` +
    `<div class="ex">例: ${escapeHTML(item.example_es)}<br>` +
    `   → ${escapeHTML(item.example_zh)}</div>`;
  return html;
}

function fmtGrammarDele(item) {
  let html = `<div class="headword">📘 ${escapeHTML(item.pattern)}</div>` +
    `<div><span class="label">意思:</span><span class="label-text">${escapeHTML(item.meaning_zh)}</span></div>` +
    `<div><span class="label">結構:</span><span class="label-text">${escapeHTML(item.structure)}</span></div>`;
  (item.examples || []).forEach((ex, i) => {
    html += `<div class="ex">例${i + 1}: ${escapeHTML(ex.es)}<br>` +
      `   → ${escapeHTML(ex.zh)}</div>`;
  });
  return html;
}

function fmtQuizDele(item) {
  const letters = ["A", "B", "C", "D"];
  const ansLetter = letters[item.answer];
  let html = `<div class="headword">❓ ${escapeHTML(item.question_es)}</div><div class="options">`;
  item.options.forEach((opt, i) => {
    html += `<div class="opt">${letters[i]}) ${escapeHTML(opt)}</div>`;
  });
  html += `</div>` +
    `<div><span class="spoiler" onclick="this.classList.toggle('revealed')">` +
    `答案: ${ansLetter} — ${escapeHTML(item.explanation_zh)}</span></div>`;
  return html;
}

function fmtSceneDele(item, num, title) {
  const reversed = state.dir === "zh";
  let html = fmtStoryBanner(num, title);
  const tts = ttsBtn(item.es, "es-ES");
  if (reversed) {
    html += `<div class="headword">💬 ${escapeHTML(item.zh)}</div>`;
    html += `<div><span class="spoiler scene-spoiler">` +
      `<span class="scene-foreign"><span class="scene-noflip">🎭</span>${tts}${escapeHTML(item.es)}</span></span></div>`;
  } else {
    html += `<div class="headword">🎭${tts}${highlightSentence(item.es, "es")}</div>`;
    html += `<div><span class="spoiler" onclick="this.classList.toggle('revealed')">` +
      `💬 ${escapeHTML(item.zh)}</span></div>`;
  }
  return html;
}

function fmtScene(item, num, title) {
  const dir = state.dir === "zh" ? "zh" : "ja";
  let html = fmtStoryBanner(num, title);
  const tts = ttsBtn(item.ja, "ja-JP");
  if (dir === "ja") {
    html += `<div class="headword">🎭${tts}${highlightSentence(item.ja, "ja")}</div>`;
    if (item.kana) html += `<div class="kana">かな: ${escapeHTML(item.kana)}</div>`;
    html += `<div><span class="spoiler" onclick="this.classList.toggle('revealed')">` +
      `💬 ${escapeHTML(item.zh)}</span></div>`;
  } else {
    html += `<div class="headword">💬 ${escapeHTML(item.zh)}</div>`;
    let inner = `<span class="scene-noflip">🎭</span>${tts}${escapeHTML(item.ja)}`;
    if (item.kana) inner += `<br>かな: ${escapeHTML(item.kana)}`;
    html += `<div><span class="spoiler scene-spoiler">` +
      `<span class="scene-foreign">${inner}</span></span></div>`;
  }
  return html;
}

function currentMode() {
  if (isDele()) return "dele";
  if (isGept()) return "gept";
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
  if (entry.mode === "dele") {
    if (entry.kind === "word") return fmtWordDele(entry.item);
    if (entry.kind === "grammar") return fmtGrammarDele(entry.item);
    if (entry.kind === "quiz") return fmtQuizDele(entry.item);
    if (entry.kind === "scene") {
      const idx = DELE_STORIES.findIndex(s => s.key === entry.key);
      const story = DELE_STORIES[idx];
      const num = idx >= 0 ? String(idx + 1).padStart(3, "0") + "." : "";
      return fmtSceneDele(entry.item, num, story?.title || "");
    }
    return "";
  }
  if (entry.mode === "gept") {
    if (entry.kind === "word") return fmtWordGept(entry.item);
    if (entry.kind === "grammar") return fmtGrammarGept(entry.item);
    if (entry.kind === "quiz") return fmtQuizGept(entry.item);
    if (entry.kind === "scene") {
      const idx = GEPT_STORIES.findIndex(s => s.key === entry.key);
      const story = GEPT_STORIES[idx];
      const num = idx >= 0 ? String(idx + 1).padStart(3, "0") + "." : "";
      return fmtSceneGept(entry.item, num, story?.title || "");
    }
    return "";
  }
  if (entry.mode === "toeic") {
    if (entry.kind === "word") return fmtWordToeic(entry.item);
    if (entry.kind === "grammar") return fmtGrammarToeic(entry.item);
    if (entry.kind === "quiz") return fmtQuizToeic(entry.item);
    if (entry.kind === "scene") {
      const idx = TOEIC_STORIES.findIndex(s => s.key === entry.key);
      const story = TOEIC_STORIES[idx];
      const num = idx >= 0 ? String(idx + 1).padStart(3, "0") + "." : "";
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
    const num = idx >= 0 ? String(idx + 1).padStart(3, "0") + "." : "";
    return ko ? fmtSceneKo(entry.item, num, story?.title || "")
              : fmtScene(entry.item, num, story?.title || "");
  }
  return "";
}

function canMoveNext() {
  // Already have a next entry in history → always allowed
  if (state.timelinePos < state.timeline.length - 1) return true;
  // At tail — can a new random entry be generated from the current pool?
  const last = state.timeline[state.timelinePos];
  if (!last) return false;
  const mode = last.mode;
  if (last.kind === "scene") {
    const pool =
      mode === "dele"  ? DATA.scenes_dele :
      mode === "gept"  ? DATA.scenes_gept :
      mode === "toeic" ? DATA.scenes_toeic :
      mode === "topik" ? DATA.scenes_ko : DATA.scenes;
    return !!(pool?.[last.key]?.length);
  }
  const poolMap =
    mode === "dele"  ? { word: vocabFor("dele"),  grammar: DATA.grammar_dele,  quiz: DATA.quiz_dele  } :
    mode === "gept"  ? { word: vocabFor("gept"),  grammar: DATA.grammar_gept,  quiz: DATA.quiz_gept  } :
    mode === "toeic" ? { word: vocabFor("toeic"), grammar: DATA.grammar_toeic, quiz: DATA.quiz_toeic } :
    mode === "topik" ? { word: vocabFor("topik"), grammar: DATA.grammar_ko,    quiz: DATA.quiz_ko    } :
                       { word: vocabFor("jp"),    grammar: DATA.grammar,       quiz: DATA.quiz       };
  return !!(poolMap[last.kind]?.[last.key]?.length);
}

function renderNav() {
  const canPrev = state.timelinePos > 0;
  const canNext = canMoveNext();
  return `<div class="nav-buttons">` +
    `<button class="nav-btn" id="prev-btn" type="button" ${canPrev ? "" : "disabled"}>← 上一個</button>` +
    `<button class="nav-btn" id="next-btn" type="button" ${canNext ? "" : "disabled"}>下一個 →</button>` +
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
  updateLookupBtn();
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
      mode === "dele" ? DATA.scenes_dele :
      mode === "gept" ? DATA.scenes_gept :
      mode === "toeic" ? DATA.scenes_toeic :
      mode === "topik" ? DATA.scenes_ko : DATA.scenes;
    const item = pickRandom(pool, last.key, "scene");
    if (item) { pushTimeline("scene", last.key, item, mode); displayEntry(state.timeline[state.timelinePos]); }
  } else {
    const poolMap =
      mode === "dele" ? { word: vocabFor("dele"), grammar: DATA.grammar_dele, quiz: DATA.quiz_dele } :
      mode === "gept" ? { word: vocabFor("gept"), grammar: DATA.grammar_gept, quiz: DATA.quiz_gept } :
      mode === "toeic" ? { word: vocabFor("toeic"), grammar: DATA.grammar_toeic, quiz: DATA.quiz_toeic } :
      mode === "topik" ? { word: vocabFor("topik"), grammar: DATA.grammar_ko, quiz: DATA.quiz_ko } :
      { word: vocabFor("jp"), grammar: DATA.grammar, quiz: DATA.quiz };
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
    const num = String(i + 1).padStart(3, "0");
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
  currentView = action;
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
  if (lvl === "gept") return "gept";
  if (lvl && lvl.startsWith("d")) return "dele";
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
  if (currentView === "scene") {
    render("scene");
    return;
  }
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

function openGeptSubPicker() {
  const overlay = document.getElementById("gept-sub-picker");
  overlay.querySelectorAll(".picker-btn[data-sub]").forEach(b => {
    b.classList.toggle("picker-current", b.dataset.sub === state.geptSubLevel);
  });
  overlay.hidden = false;
}
function closeGeptSubPicker() {
  document.getElementById("gept-sub-picker").hidden = true;
}
function setGeptSubLevel(next) {
  if (!GEPT_SUB_LEVELS.includes(next) || next === state.geptSubLevel) return;
  state.geptSubLevel = next;
  saveState();
  const btn = document.getElementById("gept-sub-btn");
  if (btn) btn.textContent = next;
  // Only the vocab pool depends on sub-level. Re-render if we're currently showing a word.
  const entry = state.timeline[state.timelinePos];
  if (entry && entry.kind === "word") render("word");
}

function openToeicSubPicker() {
  const overlay = document.getElementById("toeic-sub-picker");
  overlay.querySelectorAll(".picker-btn[data-sub]").forEach(b => {
    b.classList.toggle("picker-current", b.dataset.sub === state.toeicSubLevel);
  });
  overlay.hidden = false;
}
function closeToeicSubPicker() {
  document.getElementById("toeic-sub-picker").hidden = true;
}
function setToeicSubLevel(next) {
  if (!TOEIC_SUB_KEYS.includes(next) || next === state.toeicSubLevel) return;
  state.toeicSubLevel = next;
  saveState();
  const btn = document.getElementById("toeic-sub-btn");
  if (btn) btn.textContent = TOEIC_SUB_LABELS[next];
  const entry = state.timeline[state.timelinePos];
  if (entry && entry.kind === "word") render("word");
}

let statsLoaded = false;

function parseStatisticsMd(md) {
  // Returns [{ heading, headers:[...], rows:[{cells:[...], sub:bool}] }]
  const lines = md.split(/\r?\n/);
  const sections = [];
  let cur = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const h = /^##\s+(.+?)\s*$/.exec(line);
    if (h) {
      if (cur) sections.push(cur);
      cur = { heading: h[1].trim(), headers: null, rows: [] };
      continue;
    }
    if (!cur) continue;
    if (!line.startsWith("|")) continue;
    // skip separator rows like |---|---:|
    if (/^\|\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?\s*$/.test(line)) continue;
    const rawCells = line.split("|").slice(1, -1);
    if (!rawCells.length) continue;
    // sub-row: first cell label is indented (leading whitespace before the text)
    const isSub = /^\s{2,}\S/.test(rawCells[0]);
    const cells = rawCells.map(c => c.trim().replace(/^\*\*(.*)\*\*$/, "$1"));
    if (!cur.headers) cur.headers = cells;
    else cur.rows.push({ cells, sub: isSub });
  }
  if (cur) sections.push(cur);
  return sections;
}

function escapeHTMLSafe(s) {
  return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
}

function renderStatsSection(sec) {
  const headerCells = sec.headers.map((h, i) => {
    const cls = i === 0 ? "" : ' class="num"';
    return `<th${cls}>${escapeHTMLSafe(h)}</th>`;
  }).join("");
  const bodyRows = sec.rows.map(r => {
    const cells = r.cells;
    const isSum = /^(小計|合計)$/.test(cells[0]);
    const rowClasses = [];
    if (isSum) rowClasses.push("sum");
    if (r.sub) rowClasses.push("sub");
    const cls = rowClasses.length ? ` class="${rowClasses.join(" ")}"` : "";
    const tds = cells.map((c, i) => {
      const tdCls = i === 0 ? "" : ' class="num"';
      return `<td${tdCls}>${escapeHTMLSafe(c)}</td>`;
    }).join("");
    return `<tr${cls}>${tds}</tr>`;
  }).join("");
  const tableCls = sec.headers.length === 4 ? "stats-table stats-level" : "stats-table";
  return `<h3 class="stats-h3">${escapeHTMLSafe(sec.heading)}</h3>` +
    `<table class="${tableCls}"><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table>`;
}

async function loadStatsIntoPicker() {
  const body = document.getElementById("stats-body");
  if (!body) return;
  try {
    const res = await fetch("./data/statistics.md", { cache: "no-cache" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const md = await res.text();
    const sections = parseStatisticsMd(md).filter(s => s.headers && s.rows.length);
    if (!sections.length) throw new Error("找不到表格");
    body.innerHTML = sections.map(renderStatsSection).join("");
    statsLoaded = true;
  } catch (e) {
    body.innerHTML = `<div class="hint">統計資料載入失敗：${escapeHTMLSafe(e.message)}</div>`;
  }
}

function openStatsPicker() {
  const overlay = document.getElementById("stats-picker");
  overlay.hidden = false;
  const body = overlay.querySelector(".stats-body");
  if (body) body.scrollTop = 0;
  if (!statsLoaded) loadStatsIntoPicker();
}
function closeStatsPicker() {
  document.getElementById("stats-picker").hidden = true;
}

function updateModeToggles() {
  const hideLang = isTopik() || isToeic() || isDele() || isGept();
  const langBtn = document.getElementById("lang-btn");
  const dirBtn = document.getElementById("dir-btn");
  const geptSubBtn = document.getElementById("gept-sub-btn");
  const toeicSubBtn = document.getElementById("toeic-sub-btn");
  if (langBtn) langBtn.style.display = hideLang ? "none" : "";
  if (dirBtn) {
    dirBtn.style.display = "";
    dirBtn.textContent = dirLabel();
  }
  if (geptSubBtn) {
    geptSubBtn.hidden = !isGept();
    geptSubBtn.textContent = state.geptSubLevel || "初級";
  }
  if (toeicSubBtn) {
    toeicSubBtn.hidden = !isToeic();
    toeicSubBtn.textContent = TOEIC_SUB_LABELS[state.toeicSubLevel || "基礎生活級"];
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
  if (isToeic() || isGept()) return reversed ? "中→英" : "英→中";
  if (isDele()) return reversed ? "中→西" : "西→中";
  if (isTopik()) return reversed ? "中→韓" : "韓→中";
  return reversed ? "中→日" : "日→中";
}
function cycleDir() {
  state.dir = state.dir === "zh" ? "ja" : "zh";
  saveState();
  document.getElementById("dir-btn").textContent = dirLabel();
  updateLookupBtn();
  const entry = state.timeline[state.timelinePos];
  if (entry) displayEntry(entry);
}

function lookupAllowed() {
  if (state.dir === "zh") return false;
  const entry = state.timeline[state.timelinePos];
  if (!entry || entry.kind !== "scene") return false;
  return true;
}

function updateLookupBtn() {
  const btn = document.getElementById("lookup-btn");
  if (!btn) return;
  const allowed = lookupAllowed();
  btn.classList.toggle("disabled", !allowed);
  btn.classList.toggle("active", allowed && state.lookup);
  btn.disabled = !allowed;
}

function toggleLookup() {
  if (!lookupAllowed()) return;
  state.lookup = !state.lookup;
  saveState();
  updateLookupBtn();
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
  document.getElementById("lookup-btn").addEventListener("click", toggleLookup);
  updateLookupBtn();

  // Streak UI wiring
  document.getElementById("streak-fire")?.addEventListener("click", openStreakPicker);
  document.getElementById("streak-close")?.addEventListener("click", closeStreakPicker);
  document.getElementById("streak-picker")?.addEventListener("click", e => {
    if (e.target.id === "streak-picker") closeStreakPicker();
  });
  document.getElementById("export-btn")?.addEventListener("click", exportBackup);
  document.getElementById("import-btn")?.addEventListener("click", () => {
    document.getElementById("import-file")?.click();
  });
  document.getElementById("import-file")?.addEventListener("change", e => {
    const f = e.target.files?.[0];
    if (f) importBackup(f);
    e.target.value = "";
  });
  updateStreakUI();
  const geptSubBtn = document.getElementById("gept-sub-btn");
  if (geptSubBtn) geptSubBtn.addEventListener("click", openGeptSubPicker);
  const geptSubPicker = document.getElementById("gept-sub-picker");
  if (geptSubPicker) {
    geptSubPicker.addEventListener("click", e => {
      if (e.target === geptSubPicker) { closeGeptSubPicker(); return; }
      const btn = e.target.closest(".picker-btn[data-sub]");
      if (btn) { setGeptSubLevel(btn.dataset.sub); closeGeptSubPicker(); }
    });
  }
  const toeicSubBtn = document.getElementById("toeic-sub-btn");
  if (toeicSubBtn) toeicSubBtn.addEventListener("click", openToeicSubPicker);
  const toeicSubPicker = document.getElementById("toeic-sub-picker");
  if (toeicSubPicker) {
    toeicSubPicker.addEventListener("click", e => {
      if (e.target === toeicSubPicker) { closeToeicSubPicker(); return; }
      const btn = e.target.closest(".picker-btn[data-sub]");
      if (btn) { setToeicSubLevel(btn.dataset.sub); closeToeicSubPicker(); }
    });
  }
  const titleStats = document.getElementById("title-stats");
  if (titleStats) titleStats.addEventListener("click", openStatsPicker);
  const statsOverlay = document.getElementById("stats-picker");
  if (statsOverlay) {
    statsOverlay.addEventListener("click", e => {
      if (e.target === statsOverlay) closeStatsPicker();
    });
    const closeBtn = document.getElementById("stats-close");
    if (closeBtn) closeBtn.addEventListener("click", closeStatsPicker);
  }
  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    const streakOverlay = document.getElementById("streak-picker");
    if (streakOverlay && !streakOverlay.hidden) closeStreakPicker();
    else if (!statsOverlay.hidden) closeStatsPicker();
    else if (geptSubPicker && !geptSubPicker.hidden) closeGeptSubPicker();
    else if (toeicSubPicker && !toeicSubPicker.hidden) closeToeicSubPicker();
    else if (!document.getElementById("level-picker").hidden) closeLevelPicker();
  });
  document.querySelectorAll(".action").forEach(b =>
    b.addEventListener("click", () => render(b.dataset.action))
  );

  document.addEventListener("click", e => {
    // 🔊 TTS button — toggle: click to speak, click again (or the ⏹ icon) to stop
    const tts = e.target.closest(".tts-btn");
    if (tts) {
      if (tts === activeTtsBtn) { stopTts(); return; }
      speak(decodeURIComponent(tts.dataset.tts || ""), tts.dataset.ttslang || "", tts);
      return;
    }

    // Lookup word → open popup
    const w = e.target.closest(".lookup-word");
    if (w) { e.stopPropagation(); showLookupPopup(w); return; }

    // Scene spoiler (中→他語 foreign sentence): custom reveal/hide.
    // First tap reveals; once revealed, tapping 🎭 (.scene-noflip) or 🔊 does NOT
    // re-hide (guards against mis-tapping near 🔊), but tapping the foreign text or
    // surrounding area does re-hide.
    const sceneSp = e.target.closest(".scene-spoiler");
    if (sceneSp) {
      if (!sceneSp.classList.contains("revealed")) {
        sceneSp.classList.add("revealed");
      } else if (!e.target.closest(".scene-noflip")) {
        sceneSp.classList.remove("revealed");
      }
      if (sceneSp.classList.contains("revealed") && !sceneSp.classList.contains("revealed-counted")) {
        sceneSp.classList.add("revealed-counted");
        recordReveal();
      }
      return;
    }

    // Normal spoiler (inline onclick already toggled) — count first reveal
    const sp = e.target.closest(".spoiler");
    if (sp && !sp.classList.contains("revealed-counted") && sp.classList.contains("revealed")) {
      sp.classList.add("revealed-counted");
      recordReveal();
    }

    hideLookupPopup();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") hideLookupPopup();
  });

  try {
    await loadData();
  } catch (e) {
    document.getElementById("content").innerHTML =
      `<div class="hint">資料載入失敗：${escapeHTML(e.message)}</div>`;
    return;
  }

  // Restore last viewed card (timeline + position are persisted in localStorage)
  const lastEntry = state.timeline[state.timelinePos];
  if (lastEntry) displayEntry(lastEntry);

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
