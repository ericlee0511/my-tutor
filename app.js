const LEVELS = ["n5", "n4", "n3", "n2", "n1", "t1", "t2", "t3", "t4", "t5", "t6", "toeic", "gept", "da1", "da2", "db1", "db2", "dc1", "dc2"];
const LANGS = ["en", "ja"];
const STORAGE_KEY = "jp_tutor_state";

const KOREAN_STORIES = [
  { key: "topik001", title: "카페에서의 하루", title_zh: "咖啡廳的一天" },
  { key: "topik002", title: "학교에서의 첫날", title_zh: "在學校的第一天" },
  { key: "topik003", title: "친구 집 방문", title_zh: "拜訪朋友家" },
  { key: "topik004", title: "시장에서 쇼핑", title_zh: "在市場購物" },
  { key: "topik005", title: "한국 음식 만들기", title_zh: "製作韓國料理" },
  { key: "topik006", title: "우리 가족 소개", title_zh: "介紹我的家人" },
  { key: "topik007", title: "주말 계획", title_zh: "週末計畫" },
  { key: "topik008", title: "한국어 수업", title_zh: "韓語課" },
  { key: "topik009", title: "카페에서의 만남", title_zh: "咖啡廳的相遇" },
  { key: "topik010", title: "도서관에서", title_zh: "在圖書館" },
  { key: "topik011", title: "영화 보러 가는 날", title_zh: "去看電影的日子" },
  { key: "topik012", title: "생일 파티", title_zh: "生日派對" },
  { key: "topik013", title: "비 오는 날", title_zh: "下雨天" },
  { key: "topik014", title: "공원 산책", title_zh: "公園散步" },
  { key: "topik015", title: "새 친구 만나기", title_zh: "結交新朋友" },
  { key: "topik016", title: "동물원 가기", title_zh: "去動物園" },
  { key: "topik017", title: "한국 슈퍼마켓", title_zh: "韓國超市" },
  { key: "topik018", title: "길 물어보기", title_zh: "問路" },
  { key: "topik019", title: "미용실에서", title_zh: "在美髮院" },
  { key: "topik020", title: "병원 방문", title_zh: "看醫生" },
  { key: "topik021", title: "식당 예약", title_zh: "餐廳訂位" },
  { key: "topik022", title: "첫 출근", title_zh: "第一天上班" },
  { key: "topik023", title: "한국에서 집 찾기", title_zh: "在韓國找房子" },
  { key: "topik024", title: "동대문 야시장", title_zh: "東大門夜市" },
  { key: "topik025", title: "한강 자전거 라이딩", title_zh: "漢江騎單車" },
  { key: "topik026", title: "친구의 결혼식", title_zh: "朋友的婚禮" },
  { key: "topik027", title: "처음 가는 한국 사우나", title_zh: "初次體驗韓國汗蒸幕" },
  { key: "topik028", title: "한국 대학 시험 준비", title_zh: "準備韓國大學考試" },
  { key: "topik029", title: "동물병원에 강아지 데려가기", title_zh: "帶小狗去動物醫院" },
  { key: "topik030", title: "한국 마트에서 길 잃기", title_zh: "在韓國大賣場迷路" },
  { key: "topik031", title: "외국인 등록증 발급받기", title_zh: "辦理外國人登錄證" },
  { key: "topik032", title: "한복 입어보기", title_zh: "試穿韓服" },
  { key: "topik033", title: "한국 영화 동호회", title_zh: "韓國電影同好會" },
  { key: "topik034", title: "부산 1박 2일 여행", title_zh: "釜山兩天一夜之旅" },
  { key: "topik035", title: "한국 도서관 카드 만들기", title_zh: "辦理韓國圖書館借閱證" },
  { key: "topik036", title: "첫 TOPIK 시험", title_zh: "第一次考TOPIK" },
  { key: "topik037", title: "헬스장 등록", title_zh: "報名健身房" },
  { key: "topik038", title: "처음 만난 룸메이트", title_zh: "初次見面的室友" },
  { key: "topik039", title: "잃어버린 카드 다시 발급받기", title_zh: "補辦遺失的卡片" },
  { key: "topik040", title: "한국 약국에서 약 사기", title_zh: "在韓國藥局買藥" },
  { key: "topik041", title: "비행기 놓칠 뻔한 날", title_zh: "差點趕不上飛機的一天" },
  { key: "topik042", title: "첫 직장 회식", title_zh: "第一份工作的聚餐" },
  { key: "topik043", title: "한국에서 운전면허 따기", title_zh: "在韓國考駕照" },
  { key: "topik044", title: "처음 가는 시댁", title_zh: "第一次去婆家" },
  { key: "topik045", title: "한국 전통 시장의 하루", title_zh: "韓國傳統市場的一天" },
  { key: "topik046", title: "한국 카페 창업 도전", title_zh: "挑戰開一家韓國咖啡廳" },
  { key: "topik047", title: "친한 친구의 결혼식 준비 도와주기", title_zh: "幫好友籌備婚禮" },
  { key: "topik048", title: "한국 명절 풍습 체험", title_zh: "體驗韓國節慶習俗" },
  { key: "topik049", title: "K-드라마 촬영지 투어", title_zh: "韓劇拍攝地巡禮" },
  { key: "topik050", title: "직장 동료와의 갈등 해결", title_zh: "化解與同事的衝突" },
  { key: "topik051", title: "한국에서 자취 시작하기", title_zh: "在韓國開始獨居生活" },
  { key: "topik052", title: "한국 영화관에서 영화 보기", title_zh: "在韓國電影院看電影" },
  { key: "topik053", title: "휴대폰 분실과 찾기", title_zh: "手機遺失與尋回" },
  { key: "topik054", title: "미용실에서 새 헤어스타일 도전", title_zh: "在美髮院挑戰新髮型" },
  { key: "topik055", title: "한국 술집에서 회식과 2차", title_zh: "在韓國酒館聚餐與續攤" },
  { key: "topik056", title: "한복 입고 궁궐 관람", title_zh: "穿韓服參觀宮殿" },
  { key: "topik057", title: "회사 회의에서 첫 발표", title_zh: "公司會議上的初次報告" },
  { key: "topik058", title: "한국 친구 집에 초대받기", title_zh: "受邀到韓國朋友家作客" },
  { key: "topik059", title: "대학교 동아리 활동 참여", title_zh: "參加大學社團活動" },
  { key: "topik060", title: "한국 카페에서 친구와 깊은 이야기", title_zh: "在韓國咖啡廳與朋友深談" },
  { key: "topik061", title: "봉사 활동에 처음 참여하기", title_zh: "初次參與志工活動" },
  { key: "topik062", title: "제주도 3박 4일 여행", title_zh: "濟州島四天三夜之旅" },
  { key: "topik063", title: "한국 회사에서 프로젝트 매니저로 일하기", title_zh: "在韓國公司擔任專案經理" },
  { key: "topik064", title: "한국 대학원 입학 면접", title_zh: "韓國研究所入學面試" },
  { key: "topik065", title: "한국에서 부동산 매매 계약", title_zh: "在韓國簽訂房地產買賣合約" },
  { key: "topik066", title: "외국인 등록증 갱신과 비자 변경", title_zh: "外國人登錄證更新與簽證變更" },
  { key: "topik067", title: "친구들과 정치 토론", title_zh: "與朋友的政治辯論" },
  { key: "topik068", title: "환경 보호 캠페인 기획", title_zh: "策劃環保宣導活動" },
  { key: "topik069", title: "스타트업 창업 도전", title_zh: "挑戰新創創業" },
  { key: "topik070", title: "국제 학회에서 논문 발표", title_zh: "在國際學會發表論文" },
  { key: "topik071", title: "의료 분쟁 해결", title_zh: "醫療糾紛的解決" },
  { key: "topik072", title: "한국 드라마 제작 현장 인턴십", title_zh: "韓劇製作現場實習" },
  { key: "topik073", title: "비영리 단체 봉사 활동 운영", title_zh: "經營非營利組織志工活動" },
  { key: "topik074", title: "탐사 보도 기자의 권력 비리 추적", title_zh: "調查報導記者追查權貴弊案" },
  { key: "topik075", title: "박물관 큐레이터의 특별 전시 기획", title_zh: "博物館策展人的特展企劃" },
  { key: "topik076", title: "법정 공판 첫 출석 경험", title_zh: "初次出庭的經驗" },
  { key: "topik077", title: "첫 단행본 출간과 작가 데뷔", title_zh: "首部著作出版與作家出道" },
  { key: "topik078", title: "클래식 연주자의 국제 콩쿠르 도전", title_zh: "古典樂演奏家挑戰國際大賽" },
  { key: "topik079", title: "사회 문제 다큐멘터리 제작", title_zh: "社會議題紀錄片製作" },
  { key: "topik080", title: "인공지능 윤리 국제 컨퍼런스", title_zh: "人工智慧倫理國際會議" },
  { key: "topik081", title: "싱크탱크 정책 연구원의 보고서 작성", title_zh: "智庫政策研究員撰寫報告" },
  { key: "topik082", title: "고고학 발굴 현장 참여", title_zh: "參與考古發掘現場" },
  { key: "topik083", title: "심리 상담사의 어려운 내담자 만남", title_zh: "心理諮商師與棘手個案的會談" },
  { key: "topik084", title: "한국형 발사체 발사 통제실 현장", title_zh: "韓國運載火箭發射控制室現場" },
  { key: "topik085", title: "한국은행 금융통화위원회 회의 현장", title_zh: "韓國銀行金融貨幣委員會會議現場" },
  { key: "topik086", title: "기업 인공지능 윤리위원회 심의 현장", title_zh: "企業人工智慧倫理委員會審議現場" },
  { key: "topik087", title: "박사 학위 논문 공개 심사 현장", title_zh: "博士學位論文公開審查現場" },
  { key: "topik088", title: "양자 무역 협정 외교 협상 현장", title_zh: "雙邊貿易協定外交談判現場" },
  { key: "topik089", title: "노벨상 수상자 단독 인터뷰", title_zh: "諾貝爾獎得主獨家專訪" },
  { key: "topik090", title: "한국 문단 권위 있는 문학상 수상의 밤", title_zh: "韓國文壇權威文學獎頒獎之夜" },
  { key: "topik091", title: "대법원 상고심 변호인 변론", title_zh: "最高法院上訴審辯護人辯論" },
  { key: "topik092", title: "신경외과 전문의의 뇌종양 수술", title_zh: "神經外科專科醫師的腦瘤手術" },
  { key: "topik093", title: "현대 교향곡 세계 초연 지휘자의 무대", title_zh: "現代交響曲世界首演指揮家的舞台" },
  { key: "topik094", title: "청년 농촌 정착 지원 사업 현장 인터뷰", title_zh: "青年返鄉定居扶助計畫現場專訪" },
  { key: "topik095", title: "한국 영화 OTT 글로벌 진출 협상", title_zh: "韓國電影OTT全球發行談判" },
  { key: "topik096", title: "위기 청소년 멘토링 프로그램 운영기", title_zh: "高風險青少年輔導計畫經營紀實" },
  { key: "topik097", title: "인공지능 통번역 서비스 시연회", title_zh: "人工智慧口筆譯服務發表會" },
  { key: "topik098", title: "한국 전통 한지 공방 체험 르포", title_zh: "韓國傳統韓紙工坊體驗報導" },
  { key: "topik099", title: "도심 옥상 텃밭 공동체 이야기", title_zh: "市中心屋頂菜園社群的故事" },
  { key: "topik100", title: "한국 첫 민간 우주인 후보 면접 현장", title_zh: "韓國首位民間太空人候選人面試現場" },
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
  { key: "jap001", title: "修学旅行で仲良くないグループに入りました 1", title_zh: "修學旅行被分進了不熟的小組 1" },
  { key: "jap002", title: "修学旅行で仲良くないグループに入りました 2", title_zh: "修學旅行被分進了不熟的小組 2" },
  { key: "jap003", title: "消えた教室", title_zh: "消失的教室" },
  { key: "jap004", title: "「祝祭村からの脱出」にまつわる記録", title_zh: "關於「逃出祝祭村」的紀錄" },
  { key: "jap005", title: "人から聞いた話 1", title_zh: "聽人說的故事 1" },
  { key: "jap006", title: "人から聞いた話 2", title_zh: "聽人說的故事 2" },
  { key: "jap007", title: "教室に二人っきりなんて聞いてない！", title_zh: "沒聽說要和你兩個人單獨待在教室！" },
  { key: "jap008", title: "水に還る", title_zh: "回歸於水" },
  { key: "jap009", title: "この学校では笑顔が絶えません", title_zh: "這所學校笑容不斷" },
  { key: "jap010", title: "学校の七不思議", title_zh: "學校的七大不可思議" },
  { key: "jap011", title: "メロい恋とエモい言葉図鑑", title_zh: "甜蜜戀情與動人話語圖鑑" },
  { key: "jap012", title: "遊園地は眠らない", title_zh: "遊樂園不眠" },
  { key: "jap013", title: "終電を逃した夜、猫が拾った記憶", title_zh: "錯過末班車的夜晚，貓拾起的記憶" },
  { key: "jap014", title: "猫になった魔法使い", title_zh: "變成貓的魔法師" },
  { key: "jap015", title: "ダブルテイクアウトー氷の王者と万年二位", title_zh: "雙重外帶—冰上王者與萬年第二" },
  { key: "jap016", title: "探偵研究部。ーカケラノセカイー 1 うわさの新入生を追え！", title_zh: "偵探研究部。—碎片的世界— 1 追查傳聞中的新生！" },
  { key: "jap017", title: "探偵研究部。ーカケラノセカイー 2 部室争奪戦！", title_zh: "偵探研究部。—碎片的世界— 2 社辦爭奪戰！" },
  { key: "jap018", title: "行方不明の友人を探しています", title_zh: "尋找下落不明的朋友" },
  { key: "jap019", title: "言の葉の夜", title_zh: "言葉之夜" },
  { key: "jap020", title: "言の葉の涯", title_zh: "言葉之涯" },
  { key: "jap023", title: "先生、近づいても、いいですか", title_zh: "老師，我可以靠近一點嗎" },
  { key: "jap021", title: "言の葉の翠", title_zh: "言葉之翠" },
  { key: "jap022", title: "言の葉の憶", title_zh: "言葉之憶" },
  { key: "jap024", title: "たった二文字の香りと重さ", title_zh: "僅僅兩個字的香氣與重量" },
  { key: "jap025", title: "今日は何の日", title_zh: "今天是什麼日子" },
  { key: "jap026", title: "一年に一度", title_zh: "一年一度" },
  { key: "jap027", title: "私にこの感情の名前を教えてください", title_zh: "請告訴我這份情感的名字" },
  { key: "jap028", title: "キミのココロは何色ですか？", title_zh: "你的心是什麼顏色？" },
  { key: "jap029", title: "死んだ彼女が遺した日記", title_zh: "已故女友留下的日記" },
  { key: "jap030", title: "お見合い結婚しましたーしばらくはセックスレスという約束で！", title_zh: "相親結婚了—說好暫時無性生活！" },
  { key: "jap031", title: "卒業アルバムに写る「知らない生徒」ー取材記録", title_zh: "畢業紀念冊裡的「陌生學生」—採訪記錄" },
  { key: "jap032", title: "料理男子、恋をする", title_zh: "料理男子，墜入愛河" },
  { key: "jap033", title: "事故物件シークレット研究会", title_zh: "凶宅秘密研究會" },
  { key: "jap034", title: "記録ー2025年3月、川瀬家の83日間", title_zh: "記錄—2025年3月，川瀨家的83天" },
  { key: "jap035", title: "〇という名字の人にお気を付けください", title_zh: "請小心姓〇的人" },
  { key: "jap036", title: "名もなき剣に、雪が降るー天文蓮華戦乱記", title_zh: "無名之劍，落雪紛飛—天文蓮華戰亂記" },
  { key: "jap037", title: "名もなき剣に、雪が降るー厳島影譚", title_zh: "無名之劍，落雪紛飛—嚴島影譚" },
  { key: "jap038", title: "サヨナラケイジ", title_zh: "再見了，啟司" },
  { key: "jap039", title: "夏色に溶けた僕らの夢は", title_zh: "融進夏色的我們的夢" },
  { key: "jap040", title: "交換ウソ日記 1", title_zh: "交換謊言日記 1" },
  { key: "jap041", title: "交換ウソ日記 2 〜Erino's Note〜", title_zh: "交換謊言日記 2 〜Erino's Note〜" },
  { key: "jap042", title: "交換ウソ日記 3 〜ふたりのノート〜", title_zh: "交換謊言日記 3 〜兩人的筆記〜" },
  { key: "jap043", title: "交換ウソ日記＊Epsode-0", title_zh: "交換謊言日記＊Episode-0" },
  { key: "jap044", title: "カラダ探し 1", title_zh: "尋找身體 1" },
  { key: "jap045", title: "カラダ探し 2 ～第ニ夜～", title_zh: "尋找身體 2 〜第二夜〜" },
  { key: "jap046", title: "カラダ探し 3 ～第三夜～", title_zh: "尋找身體 3 〜第三夜〜" },
  { key: "jap047", title: "カラダ探し 4 ～最終夜～", title_zh: "尋找身體 4 〜最終夜〜" },
  { key: "jap048", title: "防犯メール", title_zh: "防犯郵件" },
  { key: "jap049", title: "赤門同好会！", title_zh: "赤門同好會！" },
  { key: "jap050", title: "自由研究", title_zh: "自由研究" },
  { key: "jap051", title: "三分間ミステリー", title_zh: "三分鐘推理" },
  { key: "jap052", title: "探偵冷泉深見シリーズ《1》四神村殺人事件", title_zh: "偵探冷泉深見系列《1》四神村殺人事件" },
  { key: "jap053", title: "探偵冷泉深見シリーズ《2》雪女島殺人事件", title_zh: "偵探冷泉深見系列《2》雪女島殺人事件" },
  { key: "jap054", title: "探偵冷泉深見シリーズ《3》恨み島殺人事件", title_zh: "偵探冷泉深見系列《3》怨恨島殺人事件" },
  { key: "jap055", title: "探偵冷泉深見シリーズ《4》九九尾村殺人事件", title_zh: "偵探冷泉深見系列《4》九九尾村殺人事件" },
  { key: "jap056", title: "浦和探偵 ジン", title_zh: "浦和偵探 仁" },
  { key: "jap057", title: "理科室のスミレ ～七星先生の最後の授業～", title_zh: "理科教室的紫羅蘭 〜七星老師的最後一堂課〜" },
  { key: "jap058", title: "深海から見える灯", title_zh: "從深海望見的燈火" },
  { key: "jap059", title: "余命半年の小笠原先輩は、いつも笑顔なんです", title_zh: "只剩半年生命的小笠原學長，總是笑臉迎人" },
  { key: "jap060", title: "優しい音を奏でて…", title_zh: "彈奏溫柔的樂音…" },
  { key: "jap061", title: "青信号は変わらない", title_zh: "綠燈不會改變" },
  { key: "jap062", title: "今年も残り7日", title_zh: "今年只剩7天" },
  { key: "jap063", title: "アイドルは旬が命", title_zh: "偶像當紅趁鮮" },
  { key: "jap064", title: "奈良まち はじまり 朝ごはん", title_zh: "奈良町 起點 早餐" },
  { key: "jap065", title: "青春テロリズム", title_zh: "青春恐怖主義" },
  { key: "jap066", title: "無職のススメ、元社畜の挑戦日記", title_zh: "無業推薦，前社畜的挑戰日記" },
  { key: "jap067", title: "ご懐妊‼ 1", title_zh: "懷孕了‼ 1" },
  { key: "jap068", title: "ご懐妊‼ 2 ～俺様上司は育メン愛妻家になりました～", title_zh: "懷孕了‼ 2 〜霸道上司成了顧家愛妻的奶爸〜" },
  { key: "jap069", title: "鳥居坂署の御堂さん", title_zh: "鳥居坂署的御堂先生" },
  { key: "jap070", title: "フレンチトーストには笑顔", title_zh: "法式吐司配上笑容" },
  { key: "jap071", title: "星空は100年後", title_zh: "星空是百年之後" },
  { key: "jap072", title: "こころ食堂のおもいで御飯 〜あったかお鍋は幸せの味〜", title_zh: "心食堂的回憶料理 〜暖呼呼火鍋是幸福的滋味〜" },
  { key: "jap073", title: "こころ食堂のおもいで御飯 ～仲直りの変わり親子丼～", title_zh: "心食堂的回憶料理 〜和好的特製親子丼〜" },
  { key: "jap074", title: "こころ食堂のおもいで御飯 ～前に進むための肉じゃが定食～", title_zh: "心食堂的回憶料理 〜為了向前邁進的馬鈴薯燉肉定食〜" },
  { key: "jap075", title: "最後のヒーロー", title_zh: "最後的英雄" },
  { key: "jap076", title: "終学旅行", title_zh: "終學旅行" },
  { key: "jap077", title: "古物時計店の「時ほぐし」", title_zh: "古董鐘錶店的「時光鬆解」" },
  { key: "jap078", title: "蜘蛛の終末", title_zh: "蜘蛛的終末" },
  { key: "jap079", title: "愚者の園", title_zh: "愚者之園" },
  { key: "jap080", title: "今日も世界に赤錆色の雨が降る", title_zh: "今天世界依然下著赤鏽色的雨" },
  { key: "jap081", title: "後宮のガリレオ 1", title_zh: "後宮的伽利略 1" },
  { key: "jap082", title: "後宮のガリレオ 2", title_zh: "後宮的伽利略 2" },
  { key: "jap083", title: "麗名高校オカルト研究同好会", title_zh: "麗名高中靈異研究同好會" },
  { key: "jap084", title: "灯火みたいな恋だった", title_zh: "那是如燈火般的戀情" },
  { key: "jap085", title: "好きです、付き合ってください", title_zh: "我喜歡你，請和我交往" },
  { key: "jap086", title: "放課後、三番線ホームにご注意ください", title_zh: "放學後，請小心三號月台" },
  { key: "jap087", title: "事故物件研究会は怪異を信じない", title_zh: "凶宅研究會不相信怪異" },
  { key: "jap088", title: "一瞬の永遠を、きみと", title_zh: "與你共度一瞬的永恆" },
  { key: "jap089", title: "春となりを待つきみへ", title_zh: "致等待春天到來的你" },
  { key: "jap090", title: "初恋の答えは、約束の海で", title_zh: "初戀的答案，在約定之海" },
  { key: "jap091", title: "それでは、お先にごきげんよう", title_zh: "那麼，我先告辭了，祝您安好" },
  { key: "jap092", title: "時間を超えた卒業式", title_zh: "超越時間的畢業典禮" },
  { key: "jap093", title: "交換日記", title_zh: "交換日記" },
  { key: "jap094", title: "忘れられたクラスメイト", title_zh: "被遺忘的同班同學" },
  { key: "jap095", title: "背面黒板の向こう側に、もう一つ教室があることは、僕と彼しか知らない", title_zh: "後方黑板的另一側還有一間教室，只有我和他知道" },
  { key: "jap096", title: "ある公園にまつわる幸せ家族の真相", title_zh: "某座公園裡幸福家庭的真相" },
  { key: "jap097", title: "大学は甘くない 〜女子校上がりの私、先輩の「特別」になりたかった〜", title_zh: "大學沒那麼簡單 〜女校出身的我，想成為學長的「特別」〜" },
  { key: "jap098", title: "未だ青い僕たちは", title_zh: "依然青澀的我們" },
  { key: "jap099", title: "風にキス、君にキス", title_zh: "吻向風，吻向你" },
  { key: "jap100", title: "ポテトチップスのりしおの男", title_zh: "洋芋片鹽味的男人" },
].sort((a, b) => a.title.localeCompare(b.title, "ja"));

const TOEIC_STORIES = [
  { key: "toeic001", title: "Office Relocation Memo", title_zh: "辦公室搬遷備忘錄" },
  { key: "toeic002", title: "Software Product Launch Press Release", title_zh: "軟體產品發表新聞稿" },
  { key: "toeic003", title: "Remote Work Policy Memo", title_zh: "遠距工作政策備忘錄" },
  { key: "toeic004", title: "Article on Sustainable Business Trends", title_zh: "永續經營趨勢專文" },
  { key: "toeic005", title: "Business Trip Itinerary", title_zh: "出差行程表" },
  { key: "toeic006", title: "Hotel Stay Complaint Letter", title_zh: "飯店住宿投訴信" },
  { key: "toeic007", title: "Marketing Manager Job Interview Excerpt", title_zh: "行銷經理面試摘錄" },
  { key: "toeic008", title: "Corporate Merger Announcement", title_zh: "企業合併公告" },
  { key: "toeic009", title: "Leadership Development Workshop Schedule", title_zh: "領導力發展工作坊行程表" },
  { key: "toeic010", title: "Corporate Anniversary Catering Proposal", title_zh: "公司週年慶餐飲服務提案" },
  { key: "toeic011", title: "Building Maintenance and Upgrade Notice", title_zh: "大樓維修與升級通知" },
  { key: "toeic012", title: "Coffee Shop Consumer Preferences Report", title_zh: "咖啡店消費者偏好報告" },
  { key: "toeic013", title: "Electronics Warranty and Refund Policy", title_zh: "電子產品保固與退款政策" },
  { key: "toeic014", title: "Annual Performance Review Summary", title_zh: "年度績效考核摘要" },
  { key: "toeic015", title: "Annual Charity Gala for Literacy Program", title_zh: "識字計畫年度慈善晚會" },
  { key: "toeic016", title: "Q2 All-Hands Meeting Agenda", title_zh: "第二季全員大會議程" },
  { key: "toeic017", title: "Office Relocation Announcement", title_zh: "辦公室搬遷公告" },
  { key: "toeic018", title: "IT System Upgrade Memo", title_zh: "IT系統升級備忘錄" },
  { key: "toeic019", title: "Holiday Office Hours Notice", title_zh: "假日辦公時間通知" },
  { key: "toeic020", title: "New Employee Orientation Guide", title_zh: "新進員工入職指南" },
  { key: "toeic021", title: "Annual Team-Building Retreat Invitation", title_zh: "年度團隊建立度假活動邀請函" },
  { key: "toeic022", title: "Quarterly All-Staff Meeting Minutes", title_zh: "季度全體員工會議紀錄" },
  { key: "toeic023", title: "Performance Bonus Policy Update", title_zh: "績效獎金政策更新" },
  { key: "toeic024", title: "Telework and Remote Work Guidelines", title_zh: "遠端與遠距工作準則" },
  { key: "toeic025", title: "Office Security Badge Policy", title_zh: "辦公室門禁識別證政策" },
  { key: "toeic026", title: "New Product Launch Press Release", title_zh: "新產品發表新聞稿" },
  { key: "toeic027", title: "Customer Satisfaction Survey Introduction", title_zh: "顧客滿意度調查說明" },
  { key: "toeic028", title: "Subscription Renewal Reminder Email", title_zh: "訂閱續約提醒郵件" },
  { key: "toeic029", title: "Service Outage Apology Letter", title_zh: "服務中斷致歉信" },
  { key: "toeic030", title: "Loyalty Program Enrollment Guide", title_zh: "會員忠誠計畫加入指南" },
  { key: "toeic031", title: "Vendor Partnership Announcement", title_zh: "供應商合作公告" },
  { key: "toeic032", title: "Restaurant Reservation Confirmation", title_zh: "餐廳訂位確認" },
  { key: "toeic033", title: "Online Order Shipping Update", title_zh: "線上訂單出貨更新" },
  { key: "toeic034", title: "Flight Delay Notification", title_zh: "航班延誤通知" },
  { key: "toeic035", title: "Hotel Booking Confirmation Email", title_zh: "飯店訂房確認郵件" },
  { key: "toeic036", title: "Asia Pacific Logistics Summit 2026 Invitation", title_zh: "2026亞太物流高峰會邀請函" },
  { key: "toeic037", title: "Spring Sales Training Workshop Schedule", title_zh: "春季銷售培訓工作坊行程表" },
  { key: "toeic038", title: "Webinar Registration Confirmation", title_zh: "網路研討會報名確認" },
  { key: "toeic039", title: "Emerging Leaders Seminar Program Overview", title_zh: "新銳領導者研習營課程概覽" },
  { key: "toeic040", title: "New Project Management Software Training", title_zh: "新專案管理軟體培訓" },
  { key: "toeic041", title: "Certified Financial Analyst Course Brochure", title_zh: "認證財務分析師課程簡介" },
  { key: "toeic042", title: "Annual Trade Show Booth Setup Memo", title_zh: "年度商展攤位佈置備忘錄" },
  { key: "toeic043", title: "Mandatory Cybersecurity Awareness Training", title_zh: "強制性資安意識培訓" },
  { key: "toeic044", title: "Diversity and Inclusion Workshop Announcement", title_zh: "多元與共融工作坊公告" },
  { key: "toeic045", title: "Employee Wellness Program Launch Announcement", title_zh: "員工健康計畫啟動公告" },
  { key: "toeic046", title: "Quarterly Earnings Report Summary", title_zh: "季度財報摘要" },
  { key: "toeic047", title: "Annual Sustainability Report Excerpt", title_zh: "年度永續報告摘錄" },
  { key: "toeic048", title: "Budget Meeting Minutes Excerpt", title_zh: "預算會議紀錄摘錄" },
  { key: "toeic049", title: "M&A Due Diligence Findings Summary", title_zh: "併購盡職調查發現摘要" },
  { key: "toeic050", title: "Vendor Evaluation Report", title_zh: "供應商評估報告" },
  { key: "toeic051", title: "Internal Audit Findings Memo", title_zh: "內部稽核發現備忘錄" },
  { key: "toeic052", title: "Insurance Policy Renewal Letter", title_zh: "保險續保通知信" },
  { key: "toeic053", title: "Tax Filing Reminder", title_zh: "報稅提醒" },
  { key: "toeic054", title: "Product Recall Notice", title_zh: "產品召回通知" },
  { key: "toeic055", title: "Company Code of Conduct Update", title_zh: "公司行為準則更新" },
  { key: "toeic056", title: "Quarterly Sales Report", title_zh: "季度銷售報告" },
  { key: "toeic057", title: "Contract Negotiation Meeting Summary", title_zh: "合約談判會議摘要" },
  { key: "toeic058", title: "Sales Pipeline Review", title_zh: "銷售管道審查" },
  { key: "toeic059", title: "Price Quotation Request", title_zh: "報價請求" },
  { key: "toeic060", title: "Service Level Agreement Excerpt", title_zh: "服務水準協議摘錄" },
  { key: "toeic061", title: "Distributor Agreement Summary", title_zh: "經銷協議摘要" },
  { key: "toeic062", title: "Sales Commission Structure", title_zh: "銷售佣金制度" },
  { key: "toeic063", title: "New Client Onboarding Plan", title_zh: "新客戶導入計畫" },
  { key: "toeic064", title: "Customer Retention Strategy", title_zh: "客戶留存策略" },
  { key: "toeic065", title: "Lead Qualification Training Notes", title_zh: "潛在客戶評估培訓筆記" },
  { key: "toeic066", title: "Software Engineer Job Posting", title_zh: "軟體工程師徵才公告" },
  { key: "toeic067", title: "Reference Check Questionnaire", title_zh: "推薦人查核問卷" },
  { key: "toeic068", title: "Salary Adjustment Letter", title_zh: "薪資調整通知函" },
  { key: "toeic069", title: "Exit Interview Summary", title_zh: "離職面談摘要" },
  { key: "toeic070", title: "Maternity Leave Policy", title_zh: "產假政策" },
  { key: "toeic071", title: "Internship Program Announcement", title_zh: "實習計畫公告" },
  { key: "toeic072", title: "Anti-Harassment Training Notice", title_zh: "反騷擾培訓通知" },
  { key: "toeic073", title: "Employee Handbook Excerpt", title_zh: "員工手冊摘錄" },
  { key: "toeic074", title: "Open Enrollment Benefits Guide", title_zh: "福利開放投保指南" },
  { key: "toeic075", title: "Promotion Announcement Memo", title_zh: "升遷公告備忘錄" },
  { key: "toeic076", title: "Warehouse Safety Inspection Report", title_zh: "倉庫安全檢查報告" },
  { key: "toeic077", title: "Inventory Replenishment Procedure", title_zh: "庫存補貨流程" },
  { key: "toeic078", title: "Quality Assurance Audit Results", title_zh: "品質保證稽核結果" },
  { key: "toeic079", title: "Supplier Code of Conduct", title_zh: "供應商行為準則" },
  { key: "toeic080", title: "Manufacturing Line Maintenance Plan", title_zh: "生產線維護計畫" },
  { key: "toeic081", title: "Logistics Carrier Comparison", title_zh: "物流業者比較" },
  { key: "toeic082", title: "Shipment Delay Incident Report", title_zh: "出貨延誤事件報告" },
  { key: "toeic083", title: "ISO Certification Renewal Notice", title_zh: "ISO 認證續展通知" },
  { key: "toeic084", title: "Production Capacity Expansion Proposal", title_zh: "產能擴充提案" },
  { key: "toeic085", title: "Cross Docking Workflow Guide", title_zh: "越庫作業流程指南" },
  { key: "toeic086", title: "Expense Reimbursement Policy", title_zh: "費用核銷政策" },
  { key: "toeic087", title: "Invoice Payment Terms Reminder", title_zh: "發票付款條件提醒" },
  { key: "toeic088", title: "Annual Financial Audit Notice", title_zh: "年度財務稽核通知" },
  { key: "toeic089", title: "Bank Account Statement Notification", title_zh: "銀行帳戶對帳單通知" },
  { key: "toeic090", title: "Loan Application Status Update", title_zh: "貸款申請進度更新" },
  { key: "toeic091", title: "Investment Portfolio Review", title_zh: "投資組合檢視" },
  { key: "toeic092", title: "Tax Deduction Guide for Employees", title_zh: "員工節稅指南" },
  { key: "toeic093", title: "Budget Reallocation Request", title_zh: "預算重新分配申請" },
  { key: "toeic094", title: "Year End Closing Schedule", title_zh: "年終結算時程" },
  { key: "toeic095", title: "Treasury Operations Memo", title_zh: "資金調度備忘錄" },
  { key: "toeic096", title: "Social Media Campaign Brief", title_zh: "社群媒體行銷企劃綱要" },
  { key: "toeic097", title: "Email Marketing Performance Report", title_zh: "電子郵件行銷成效報告" },
  { key: "toeic098", title: "SEO Audit Findings", title_zh: "SEO 稽核結果" },
  { key: "toeic099", title: "Influencer Partnership Proposal", title_zh: "網紅合作提案" },
  { key: "toeic100", title: "Brand Style Guide Excerpt", title_zh: "品牌風格指南摘錄" },
  { key: "toeic101", title: "Customer Journey Mapping Workshop", title_zh: "顧客旅程地圖工作坊" },
  { key: "toeic102", title: "A B Test Results Memo", title_zh: "A/B 測試結果備忘錄" },
  { key: "toeic103", title: "Content Calendar Planning Meeting", title_zh: "內容行事曆規劃會議" },
  { key: "toeic104", title: "Public Relations Crisis Response", title_zh: "公關危機應對" },
  { key: "toeic105", title: "Annual Marketing Budget Plan", title_zh: "年度行銷預算計畫" },
  { key: "toeic106", title: "IT Helpdesk Ticket Response", title_zh: "IT 服務台工單回覆" },
  { key: "toeic107", title: "Office Expansion Ribbon-Cutting Speech", title_zh: "辦公室擴點剪綵致詞" },
  { key: "toeic108", title: "Service Center Workflow Guide", title_zh: "服務中心作業流程指南" },
  { key: "toeic109", title: "Product Specification Sheet", title_zh: "產品規格表" },
  { key: "toeic110", title: "New Office Equipment Purchase Request", title_zh: "新辦公設備採購申請" },
  { key: "toeic111", title: "Health and Safety Drill Announcement", title_zh: "健康與安全演習公告" },
  { key: "toeic112", title: "Annual Shareholders Meeting Notice", title_zh: "年度股東大會通知" },
  { key: "toeic113", title: "International Office Video Conference Brief", title_zh: "跨國辦公室視訊會議綱要" },
  { key: "toeic114", title: "Cross-Cultural Communication Training", title_zh: "跨文化溝通培訓" },
  { key: "toeic115", title: "Quarterly OKR Review Report", title_zh: "季度 OKR 檢討報告" },
  { key: "toeic116", title: "Travel Reimbursement Claim Form Notes", title_zh: "差旅費核銷申請表須知" },
  { key: "toeic117", title: "After-Sale Service Training Manual Excerpt", title_zh: "售後服務培訓手冊摘錄" },
  { key: "toeic118", title: "New CRM Rollout Schedule", title_zh: "新 CRM 上線時程" },
  { key: "toeic119", title: "Vendor Invoice Dispute Letter", title_zh: "供應商發票爭議函" },
  { key: "toeic120", title: "Cafeteria Menu and Feedback Notice", title_zh: "員工餐廳菜單與意見回饋通知" },
  { key: "toeic121", title: "Budget Approval Request Email", title_zh: "預算核准申請郵件" },
  { key: "toeic122", title: "Q4 Expense Report Dispute", title_zh: "第四季費用報告爭議" },
  { key: "toeic123", title: "Year-End Tax Filing Reminder", title_zh: "年終報稅提醒" },
  { key: "toeic124", title: "Payroll System Migration Notice", title_zh: "薪資系統遷移通知" },
  { key: "toeic125", title: "Audit Findings Preliminary Report", title_zh: "稽核發現初步報告" },
  { key: "toeic126", title: "Petty Cash Reimbursement Process", title_zh: "零用金核銷流程" },
  { key: "toeic127", title: "Password Reset Self-Service Guide", title_zh: "密碼重設自助指南" },
  { key: "toeic128", title: "Phishing Email Awareness Training", title_zh: "釣魚郵件防範訓練" },
  { key: "toeic129", title: "Software License Renewal Alert", title_zh: "軟體授權續約提醒" },
  { key: "toeic130", title: "Network Outage Incident Postmortem", title_zh: "網路中斷事件檢討報告" },
  { key: "toeic131", title: "Cloud Storage Quota Warning", title_zh: "雲端儲存容量警告" },
  { key: "toeic132", title: "BYOD Policy Update", title_zh: "自帶裝置政策更新" },
  { key: "toeic133", title: "Business Class Upgrade Request", title_zh: "商務艙升等申請" },
  { key: "toeic134", title: "Visa Application Status Check", title_zh: "簽證申請進度查詢" },
  { key: "toeic135", title: "Lost Luggage Compensation Claim", title_zh: "行李遺失賠償申請" },
  { key: "toeic136", title: "Conference Venue Site Visit Report", title_zh: "會議場地實地勘查報告" },
  { key: "toeic137", title: "Group Travel Insurance Enrollment", title_zh: "團體旅遊保險投保" },
  { key: "toeic138", title: "Airport Transfer Booking Confirmation", title_zh: "機場接送預訂確認" },
  { key: "toeic139", title: "VIP Client Onboarding Call", title_zh: "重要客戶導入通話" },
  { key: "toeic140", title: "Product Return Authorization Request", title_zh: "商品退貨授權申請" },
  { key: "toeic141", title: "Sales Pipeline Forecast Review", title_zh: "業務管道預測檢討" },
  { key: "toeic142", title: "Customer Satisfaction Survey Results", title_zh: "顧客滿意度調查結果" },
  { key: "toeic143", title: "Promotional Bundle Pricing Proposal", title_zh: "促銷組合定價提案" },
  { key: "toeic144", title: "Distributor Contract Renewal Negotiation", title_zh: "經銷商合約續約談判" },
  { key: "toeic145", title: "Employee Wellness Program Launch", title_zh: "員工健康計畫啟動" },
  { key: "toeic146", title: "Office Plant Care Volunteer Signup", title_zh: "辦公室植物照護志工招募" },
  { key: "toeic147", title: "Lost and Found Office Notice", title_zh: "辦公室失物招領通知" },
  { key: "toeic148", title: "Team Building Escape Room Event", title_zh: "團隊建立密室逃脫活動" },
  { key: "toeic149", title: "Lunchroom Etiquette Reminder", title_zh: "茶水間禮儀提醒" },
  { key: "toeic150", title: "Office Renovation Disruption Notice", title_zh: "辦公室裝修影響通知" },
];

const GEPT_STORIES = [
  { key: "gept001", title: "A Weekend Trip to Kenting", title_zh: "墾丁週末小旅行" },
  { key: "gept002", title: "Studying for the GEPT Exam", title_zh: "準備全民英檢考試" },
  { key: "gept003", title: "Friday Night Family Dinner", title_zh: "週五晚上的家庭聚餐" },
  { key: "gept004", title: "Weekend in the Attic", title_zh: "閣樓裡的週末" },
  { key: "gept005", title: "Grandma's Secret Recipe", title_zh: "外婆的祕傳食譜" },
  { key: "gept006", title: "The Great Chore Negotiation", title_zh: "家務分工大談判" },
  { key: "gept007", title: "A New Member of the Family", title_zh: "家裡的新成員" },
  { key: "gept008", title: "Surprise Party for Dad", title_zh: "給爸爸的驚喜派對" },
  { key: "gept009", title: "Moving Day Chaos", title_zh: "搬家日的兵荒馬亂" },
  { key: "gept010", title: "Helping with Homework", title_zh: "幫忙寫作業" },
  { key: "gept011", title: "A Lazy Sunday Morning", title_zh: "慵懶的星期天早晨" },
  { key: "gept012", title: "Video Call Across the Ocean", title_zh: "跨海視訊通話" },
  { key: "gept013", title: "First Day at a New High School", title_zh: "高中新生第一天" },
  { key: "gept014", title: "Group Project Meeting in the Library", title_zh: "圖書館裡的小組報告會議" },
  { key: "gept015", title: "Cramming for the Final Exam with a Study Buddy", title_zh: "和讀書夥伴一起趕期末考" },
  { key: "gept016", title: "Class Field Trip to a Museum", title_zh: "全班博物館校外教學" },
  { key: "gept017", title: "Joining the School Basketball Team Tryouts", title_zh: "參加校隊籃球選拔" },
  { key: "gept018", title: "Parent-Teacher Conference", title_zh: "親師座談會" },
  { key: "gept019", title: "School Cafeteria Lunch Break Conversation", title_zh: "學校餐廳午休聊天" },
  { key: "gept020", title: "Science Fair Project Presentation", title_zh: "科展專題發表" },
  { key: "gept021", title: "Late Submission and Asking the Teacher for Extension", title_zh: "遲交作業與向老師請求延期" },
  { key: "gept022", title: "Graduation Ceremony Reflections", title_zh: "畢業典禮的感想" },
  { key: "gept023", title: "A Nerve-Wracking Job Interview", title_zh: "緊張的求職面試" },
  { key: "gept024", title: "First Day Onboarding at a New Company", title_zh: "新公司報到第一天" },
  { key: "gept025", title: "Negotiating a Raise with the Manager", title_zh: "與主管談加薪" },
  { key: "gept026", title: "Brainstorming Session for a New Product Idea", title_zh: "新產品點子腦力激盪" },
  { key: "gept027", title: "Dealing with a Difficult Coworker", title_zh: "應對難相處的同事" },
  { key: "gept028", title: "Pulling an All-Nighter to Meet a Deadline", title_zh: "熬夜趕在期限前完工" },
  { key: "gept029", title: "Giving a Presentation to the Team", title_zh: "向團隊進行簡報" },
  { key: "gept030", title: "Office Holiday Party", title_zh: "公司尾牙派對" },
  { key: "gept031", title: "Saying Goodbye on the Last Day before a Job Change", title_zh: "轉職前最後一天的道別" },
  { key: "gept032", title: "Working from Home for the First Week", title_zh: "在家工作的第一週" },
  { key: "gept033", title: "Backpacking Through Southeast Asia", title_zh: "背包客遊東南亞" },
  { key: "gept034", title: "Missing a Flight and Finding a New Route", title_zh: "錯過班機與另尋路線" },
  { key: "gept035", title: "Road Trip Along Taiwan's East Coast", title_zh: "台灣東海岸公路之旅" },
  { key: "gept036", title: "Lost Luggage at the Airport", title_zh: "在機場遺失行李" },
  { key: "gept037", title: "Trying Street Food in Vietnam", title_zh: "品嚐越南街頭小吃" },
  { key: "gept038", title: "Getting Lost in an Unfamiliar City", title_zh: "在陌生城市迷路" },
  { key: "gept039", title: "A Homestay With a Local Family", title_zh: "入住當地家庭民宿" },
  { key: "gept040", title: "Visiting the Great Wall of China", title_zh: "登上萬里長城" },
  { key: "gept041", title: "A Train Journey Through the Mountains", title_zh: "穿越群山的火車之旅" },
  { key: "gept042", title: "Camping in a National Park", title_zh: "在國家公園露營" },
  { key: "gept043", title: "Homemade Pasta Cooking Class", title_zh: "手工義大利麵烹飪課" },
  { key: "gept044", title: "Birthday Dinner at a Fancy Restaurant", title_zh: "在高級餐廳慶生晚餐" },
  { key: "gept045", title: "A Month of Vegetarian Living", title_zh: "吃素的一個月" },
  { key: "gept046", title: "Hosting a Potluck Dinner Party", title_zh: "舉辦一人一菜聚餐派對" },
  { key: "gept047", title: "A Night at the Traditional Market", title_zh: "傳統市場的夜晚" },
  { key: "gept048", title: "Baking Cookies for Charity", title_zh: "為公益烘焙餅乾" },
  { key: "gept049", title: "The Picnic That Went Wrong", title_zh: "出包的野餐" },
  { key: "gept050", title: "Reviewing a Celebrity Chef's Restaurant", title_zh: "評鑑名廚餐廳" },
  { key: "gept051", title: "Grandmother's Secret Recipe", title_zh: "祖母的祕傳食譜" },
  { key: "gept052", title: "Exotic Food at the International Festival", title_zh: "國際美食節上的異國料理" },
  { key: "gept053", title: "Joining a Gym and Meeting a Personal Trainer", title_zh: "加入健身房與結識私人教練" },
  { key: "gept054", title: "Annual Health Checkup at the Clinic", title_zh: "在診所做年度健康檢查" },
  { key: "gept055", title: "Starting a Yoga Routine to Manage Stress", title_zh: "用瑜伽日常紓解壓力" },
  { key: "gept056", title: "Recovering from a Sports Injury", title_zh: "從運動傷害中復原" },
  { key: "gept057", title: "Trying a New Diet to Lose Weight", title_zh: "嘗試新飲食法減重" },
  { key: "gept058", title: "Sleep Problems and Finding Solutions", title_zh: "睡眠問題與尋找解方" },
  { key: "gept059", title: "Running First Half-Marathon Training", title_zh: "首場半程馬拉松的訓練" },
  { key: "gept060", title: "Mental Health and Seeing a Therapist", title_zh: "心理健康與看心理諮商師" },
  { key: "gept061", title: "Quitting a Bad Habit", title_zh: "戒掉壞習慣" },
  { key: "gept062", title: "Helping an Elderly Parent with Mobility Issues", title_zh: "協助行動不便的年邁父母" },
  { key: "gept063", title: "Black Friday Madness at the Mall", title_zh: "賣場裡的黑色星期五瘋狂" },
  { key: "gept064", title: "Asking for a Refund", title_zh: "要求退款" },
  { key: "gept065", title: "My First Monthly Budget", title_zh: "我的第一份每月預算" },
  { key: "gept066", title: "Online Shopping Regret", title_zh: "網購後悔記" },
  { key: "gept067", title: "Saving for a Down Payment", title_zh: "為頭期款存錢" },
  { key: "gept068", title: "Comparing Grocery Prices", title_zh: "比較生鮮雜貨價格" },
  { key: "gept069", title: "The Scam Phone Call", title_zh: "詐騙電話" },
  { key: "gept070", title: "Applying for a Bank Loan", title_zh: "申請銀行貸款" },
  { key: "gept071", title: "Selling at the Flea Market", title_zh: "在跳蚤市場擺攤" },
  { key: "gept072", title: "Splitting the Dinner Bill", title_zh: "晚餐費用大家分攤" },
  { key: "gept073", title: "Learning Guitar from YouTube", title_zh: "跟著 YouTube 學吉他" },
  { key: "gept074", title: "Pickup Basketball at the Park", title_zh: "公園裡的即興籃球賽" },
  { key: "gept075", title: "My First Photography Exhibition", title_zh: "我的第一場攝影展" },
  { key: "gept076", title: "Marathon Training Club", title_zh: "馬拉松訓練社團" },
  { key: "gept077", title: "My First Book Club Meeting", title_zh: "我的第一次讀書會" },
  { key: "gept078", title: "Hiking Yushan Trail", title_zh: "登玉山步道" },
  { key: "gept079", title: "Pottery Class for Stress Relief", title_zh: "紓壓陶藝課" },
  { key: "gept080", title: "Setting Up a Home Garden", title_zh: "打造家庭菜園" },
  { key: "gept081", title: "Board Game Night with Friends", title_zh: "與朋友的桌遊之夜" },
  { key: "gept082", title: "Championship Game at the Stadium", title_zh: "體育館的冠軍爭奪戰" },
  { key: "gept083", title: "The Viral Video", title_zh: "爆紅的影片" },
  { key: "gept084", title: "Locked Out", title_zh: "被鎖在門外" },
  { key: "gept085", title: "First Match", title_zh: "初次對戰" },
  { key: "gept086", title: "New Phone Day", title_zh: "新手機到手的日子" },
  { key: "gept087", title: "The Productivity App", title_zh: "效率 App" },
  { key: "gept088", title: "Smart Home Trouble", title_zh: "智慧家庭出狀況" },
  { key: "gept089", title: "The Wrong Forward", title_zh: "轉錯的訊息" },
  { key: "gept090", title: "Going Live", title_zh: "開始直播" },
  { key: "gept091", title: "Switching Platforms", title_zh: "轉換平台" },
  { key: "gept092", title: "The Long-Distance Call", title_zh: "遠距通話" },
  { key: "gept093", title: "Reuniting with a High School Best Friend", title_zh: "與高中死黨重逢" },
  { key: "gept094", title: "A Long-Distance Friendship Over Video Calls", title_zh: "靠視訊維繫的遠距友誼" },
  { key: "gept095", title: "Apologizing After a Misunderstanding", title_zh: "誤會之後的道歉" },
  { key: "gept096", title: "Helping a Friend Through a Tough Breakup", title_zh: "陪朋友走過分手低潮" },
  { key: "gept097", title: "Making New Friends in a Foreign Country", title_zh: "在異國結交新朋友" },
  { key: "gept098", title: "Asking Someone Out on a First Date", title_zh: "鼓起勇氣約對方第一次約會" },
  { key: "gept099", title: "Discovering an Online Friend Lives in the Same City", title_zh: "發現網友就住在同一座城市" },
  { key: "gept100", title: "A Friendship That Grew from Being Neighbors", title_zh: "從鄰居開始萌芽的友誼" },
  { key: "gept101", title: "Wedding Speech for a Childhood Friend", title_zh: "為兒時好友獻上婚禮致詞" },
  { key: "gept102", title: "Saying Farewell as a Friend Moves Abroad", title_zh: "送別即將出國的朋友" },
  { key: "gept103", title: "Lunar New Year Reunion", title_zh: "農曆新年團圓" },
  { key: "gept104", title: "Adopting a Rescue Dog", title_zh: "領養一隻浪浪" },
  { key: "gept105", title: "The MRT Delay", title_zh: "捷運誤點" },
  { key: "gept106", title: "Getting a Library Card", title_zh: "辦一張借書證" },
  { key: "gept107", title: "Joining the Community Choir", title_zh: "加入社區合唱團" },
  { key: "gept108", title: "Surviving the Typhoon Weekend", title_zh: "撐過颱風週末" },
  { key: "gept109", title: "Mid-Autumn Festival BBQ", title_zh: "中秋節烤肉" },
  { key: "gept110", title: "My First Day at the Soup Kitchen", title_zh: "我在愛心廚房的第一天" },
  { key: "gept111", title: "The Old Toy in the Closet", title_zh: "衣櫥裡的舊玩具" },
  { key: "gept112", title: "Going to the Rock Concert", title_zh: "去看搖滾演唱會" },
  { key: "gept113", title: "Power Outage Movie Night", title_zh: "停電之夜的電影時光" },
  { key: "gept114", title: "The Letter in the Attic", title_zh: "閣樓裡的信" },
  { key: "gept115", title: "My New Houseplant", title_zh: "我的新室內植物" },
  { key: "gept116", title: "Calligraphy Class at the Community Center", title_zh: "社區中心的書法課" },
  { key: "gept117", title: "The Car Breakdown", title_zh: "汽車拋錨" },
  { key: "gept118", title: "The Religious Procession", title_zh: "宗教遶境隊伍" },
  { key: "gept119", title: "Sunrise on the Mountaintop", title_zh: "山頂日出" },
  { key: "gept120", title: "The 7-Eleven Loyalty Program", title_zh: "7-Eleven 集點活動" },
  { key: "gept121", title: "Startup Launch Crunch Week", title_zh: "新創上線衝刺週" },
  { key: "gept122", title: "From Classroom to Code", title_zh: "從教室走進程式世界" },
  { key: "gept123", title: "Mentoring the Summer Intern", title_zh: "帶領暑期實習生" },
  { key: "gept124", title: "The Mountain Lodge Retreat", title_zh: "山中小屋的靜修之旅" },
  { key: "gept125", title: "Winning the Tokyo Client Pitch", title_zh: "拿下東京客戶的提案" },
  { key: "gept126", title: "Solo Backpacking Across Northern Vietnam", title_zh: "獨自背包橫越越南北部" },
  { key: "gept127", title: "Climbing Yushan Before Sunrise", title_zh: "破曉前攻頂玉山" },
  { key: "gept128", title: "A Delayed Flight to Reykjavik", title_zh: "飛往雷克雅維克的延誤班機" },
  { key: "gept129", title: "Scuba Diving Adventure in Green Island", title_zh: "綠島潛水探險" },
  { key: "gept130", title: "Missing the Last Bus in a Small Mountain Town", title_zh: "在山中小鎮錯過末班車" },
  { key: "gept131", title: "Opening Our Tiny Ramen Shop on a Quiet Lane", title_zh: "在僻靜巷弄開起小拉麵店" },
  { key: "gept132", title: "My Aunt Enters the Town Dumpling Competition", title_zh: "阿姨參加鎮上水餃大賽" },
  { key: "gept133", title: "Hunting for the Best Beef Noodles in Taipei", title_zh: "在台北尋找最強牛肉麵" },
  { key: "gept134", title: "Our Family's First Vegan Hot Pot Night", title_zh: "我們家的第一次素食火鍋之夜" },
  { key: "gept135", title: "Learning to Bake Sourdough During a Quiet Weekend", title_zh: "在悠閒週末學做酸種麵包" },
  { key: "gept136", title: "The Exchange Student from Berlin", title_zh: "來自柏林的交換學生" },
  { key: "gept137", title: "The Volcano That Refused to Erupt", title_zh: "拒絕噴發的火山" },
  { key: "gept138", title: "Curtains Up on the Drama Club Musical", title_zh: "戲劇社音樂劇登台" },
  { key: "gept139", title: "The Coding Club's First Real App", title_zh: "程式社的第一個正式 App" },
  { key: "gept140", title: "The Librarian Who Saw Me", title_zh: "看見我的圖書館員" },
  { key: "gept141", title: "Bringing Grandpa Home from the Hospital", title_zh: "帶爺爺出院回家" },
  { key: "gept142", title: "Mediating My Parents' Retirement Argument", title_zh: "調解父母的退休爭執" },
  { key: "gept143", title: "Welcoming a Foster Kitten into Our Apartment", title_zh: "迎接寄養小貓進駐我們家" },
  { key: "gept144", title: "A Blended Family's First Christmas Together", title_zh: "重組家庭的第一個聖誕節" },
  { key: "gept145", title: "The Elderly Neighbor Who Became My Second Grandmother", title_zh: "成為我第二個奶奶的鄰居婆婆" },
  { key: "gept146", title: "Training for My First 10K Race", title_zh: "為我的第一場 10 公里賽事訓練" },
  { key: "gept147", title: "Starting a YouTube Channel About Bonsai", title_zh: "開設一個盆栽 YouTube 頻道" },
  { key: "gept148", title: "Decluttering My Whole Apartment", title_zh: "把整間公寓徹底斷捨離" },
  { key: "gept149", title: "Volunteering at the Animal Shelter", title_zh: "在動物收容所當志工" },
  { key: "gept150", title: "A Year of Daily Journaling", title_zh: "每日寫日記的一年" },
];

const DELE_STORIES = [
  { key: "dele001", title: "Un café en Madrid", title_zh: "馬德里的一杯咖啡" },
  { key: "dele002", title: "Mi primer día en la escuela de idiomas", title_zh: "我在語言學校的第一天" },
  { key: "dele003", title: "Planificando un viaje a Argentina", title_zh: "規劃一趟阿根廷之旅" },
  { key: "dele004", title: "Reportaje: el teletrabajo cinco años después", title_zh: "專題報導：遠距工作五年後" },
  { key: "dele005", title: "Comité estratégico: lanzamiento internacional", title_zh: "策略委員會：國際市場啟動" },
  { key: "dele006", title: "Ensayo: el silencio en la literatura contemporánea", title_zh: "論文：當代文學中的沉默" },
  { key: "dele007", title: "Una visita al supermercado", title_zh: "一趟超市採買" },
  { key: "dele008", title: "Una visita a los abuelos el fin de semana", title_zh: "週末探望祖父母" },
  { key: "dele009", title: "Reflexiones después de una entrevista de trabajo", title_zh: "求職面試後的反思" },
  { key: "dele010", title: "Columna de opinión: el auge del bicing urbano", title_zh: "評論專欄：城市共享單車的興起" },
  { key: "dele011", title: "Reunión extraordinaria del consejo: filtración de datos", title_zh: "董事會臨時會議：資料外洩" },
  { key: "dele012", title: "Ensayo: la soledad en la vida urbana", title_zh: "論文：都市生活中的孤獨" },
  { key: "dele013", title: "En el aeropuerto", title_zh: "在機場" },
  { key: "dele014", title: "Mi primera clase de cocina", title_zh: "我的第一堂烹飪課" },
  { key: "dele015", title: "Decidí aprender a tocar el piano", title_zh: "我決定學鋼琴" },
  { key: "dele016", title: "Reportaje: el auge de los espacios de coworking en ciudades medianas", title_zh: "專題報導：中型城市共享辦公空間的興起" },
  { key: "dele017", title: "Carta formal de reclamación de la comunidad de vecinos", title_zh: "社區管委會的正式申訴信" },
  { key: "dele018", title: "Ensayo: la geografía del duelo", title_zh: "論文：哀悼的地理學" },
  { key: "dele019", title: "Una tarde en la biblioteca", title_zh: "在圖書館的一個下午" },
  { key: "dele020", title: "Reportaje el auge de los podcasts en español", title_zh: "專題報導：西語 Podcast 的興起" },
  { key: "dele021", title: "En el restaurante", title_zh: "在餐廳" },
  { key: "dele022", title: "En la farmacia", title_zh: "在藥局" },
  { key: "dele023", title: "Pidiendo direcciones por la calle", title_zh: "在街上問路" },
  { key: "dele024", title: "Comprando ropa en el centro", title_zh: "在市中心買衣服" },
  { key: "dele025", title: "En la recepción del hotel", title_zh: "在飯店櫃台" },
  { key: "dele026", title: "Una llamada al médico", title_zh: "打電話給醫生" },
  { key: "dele027", title: "Reservando una mesa para cenar", title_zh: "預訂晚餐座位" },
  { key: "dele028", title: "Mi rutina diaria de lunes a viernes", title_zh: "我週一到週五的日常作息" },
  { key: "dele029", title: "Hablando del fin de semana con un amigo", title_zh: "與朋友聊週末" },
  { key: "dele030", title: "Buscando un piso de alquiler", title_zh: "找一間出租公寓" },
  { key: "dele031", title: "Una conversación con un compañero de trabajo nuevo", title_zh: "與新同事的一段對話" },
  { key: "dele032", title: "Experiencias de viaje por Sudamérica", title_zh: "南美洲旅行見聞" },
  { key: "dele033", title: "Reflexiones sobre el aprendizaje de idiomas", title_zh: "關於語言學習的反思" },
  { key: "dele034", title: "Una visita guiada al Museo del Prado", title_zh: "普拉多美術館導覽" },
  { key: "dele035", title: "Voluntariado en un comedor social", title_zh: "在愛心食堂當志工" },
  { key: "dele036", title: "Reportaje: el auge de la cocina sostenible", title_zh: "專題報導：永續料理的興起" },
  { key: "dele037", title: "Columna: las redes sociales y la juventud", title_zh: "專欄：社群媒體與年輕世代" },
  { key: "dele038", title: "Crónica: la huerta urbana en barrios populares", title_zh: "紀實：平民社區裡的都市菜園" },
  { key: "dele039", title: "Entrevista: la transformación digital del comercio", title_zh: "專訪：商業的數位轉型" },
  { key: "dele040", title: "Reportaje: el reto de la conciliación laboral", title_zh: "專題報導：工作與生活平衡的挑戰" },
  { key: "dele041", title: "Ensayo: la nostalgia como motor cultural", title_zh: "論文：作為文化動力的鄉愁" },
  { key: "dele042", title: "Conferencia: bioética y edición genética", title_zh: "講座：生命倫理與基因編輯" },
  { key: "dele043", title: "Análisis: la fragmentación del cine independiente", title_zh: "分析：獨立電影的碎片化" },
  { key: "dele044", title: "Mesa redonda: la economía circular y sus límites", title_zh: "圓桌論壇：循環經濟及其極限" },
  { key: "dele045", title: "Discurso: la memoria histórica en la educación", title_zh: "演講：教育中的歷史記憶" },
  { key: "dele046", title: "Ensayo: la deriva del lenguaje en la era algorítmica", title_zh: "論文：演算法時代的語言漂移" },
  { key: "dele047", title: "Ponencia: epistemología del trabajo creativo", title_zh: "專題演說：創意工作的知識論" },
  { key: "dele048", title: "Crítica: la voz autoral en la narrativa hispanoamericana", title_zh: "評論：西語美洲敘事中的作者聲音" },
  { key: "dele049", title: "Reflexión: la temporalidad en la fenomenología urbana", title_zh: "反思：都市現象學中的時間性" },
  { key: "dele050", title: "Discurso académico: el barroco y la modernidad líquida", title_zh: "學術演講：巴洛克與液態現代性" },
  { key: "dele051", title: "Cena en familia un domingo", title_zh: "週日家庭晚餐" },
  { key: "dele052", title: "Pidiendo comida a domicilio", title_zh: "叫外送餐點" },
  { key: "dele053", title: "En la frutería del barrio", title_zh: "在社區水果店" },
  { key: "dele054", title: "Reservando mesa para una cena especial", title_zh: "預訂特別晚餐的桌位" },
  { key: "dele055", title: "Compras semanales en el supermercado", title_zh: "超市的每週採買" },
  { key: "dele056", title: "Quejándose por un plato frío en el restaurante", title_zh: "在餐廳抱怨菜餚變冷" },
  { key: "dele057", title: "Buscando un café para trabajar", title_zh: "尋找一間能工作的咖啡館" },
  { key: "dele058", title: "Comprando ropa de invierno en rebajas", title_zh: "在特賣會買冬季衣物" },
  { key: "dele059", title: "Devolviendo un producto defectuoso", title_zh: "退回瑕疵商品" },
  { key: "dele060", title: "En el probador de una tienda", title_zh: "在店裡的試衣間" },
  { key: "dele061", title: "En la consulta del médico de cabecera", title_zh: "在家庭醫師的診間" },
  { key: "dele062", title: "Pidiendo cita con el dentista", title_zh: "預約看牙醫" },
  { key: "dele063", title: "En la farmacia con receta", title_zh: "在藥局領處方藥" },
  { key: "dele064", title: "Primera clase en el gimnasio", title_zh: "健身房的第一堂課" },
  { key: "dele065", title: "Hablando con el entrenador personal", title_zh: "與私人教練對談" },
  { key: "dele066", title: "Una urgencia menor en casa", title_zh: "家中的小緊急狀況" },
  { key: "dele067", title: "Llamando al servicio técnico del wifi", title_zh: "致電 Wi-Fi 技術客服" },
  { key: "dele068", title: "Reclamando en el servicio de atención al cliente", title_zh: "向客服中心申訴" },
  { key: "dele069", title: "Llevando el coche al taller", title_zh: "把車送進維修廠" },
  { key: "dele070", title: "Cita con la peluquería", title_zh: "預約美髮沙龍" },
  { key: "dele071", title: "Primera entrevista de trabajo", title_zh: "第一次工作面試" },
  { key: "dele072", title: "El primer día en la oficina nueva", title_zh: "新辦公室的第一天" },
  { key: "dele073", title: "Reunión de equipo semanal", title_zh: "每週團隊會議" },
  { key: "dele074", title: "Pidiendo un día libre al jefe", title_zh: "向主管請假一天" },
  { key: "dele075", title: "Negociando un aumento de sueldo", title_zh: "談判加薪" },
  { key: "dele076", title: "Trabajando desde casa con problemas técnicos", title_zh: "在家工作遇上技術問題" },
  { key: "dele077", title: "Escribiendo un email de seguimiento al cliente", title_zh: "寫一封客戶追蹤郵件" },
  { key: "dele078", title: "Charla del café entre compañeros", title_zh: "同事間的咖啡閒聊" },
  { key: "dele079", title: "Despidiéndose el último día de trabajo", title_zh: "在最後一個工作日道別" },
  { key: "dele080", title: "Conversación tras una presentación", title_zh: "簡報結束後的對談" },
  { key: "dele081", title: "Cumpleaños sorpresa para una amiga", title_zh: "給朋友的驚喜生日派對" },
  { key: "dele082", title: "Llamando a mamá un sábado por la tarde", title_zh: "週六下午打電話給媽媽" },
  { key: "dele083", title: "Discutiendo planes de boda", title_zh: "討論婚禮計畫" },
  { key: "dele084", title: "Cuidando al sobrino una tarde", title_zh: "一個下午照顧姪子" },
  { key: "dele085", title: "Charla entre vecinos en el ascensor", title_zh: "鄰居在電梯裡的閒聊" },
  { key: "dele086", title: "Primera cita por una aplicación", title_zh: "透過交友軟體的初次約會" },
  { key: "dele087", title: "Reencuentro con un viejo amigo", title_zh: "與老朋友重逢" },
  { key: "dele088", title: "Ayudando a mi padre con el móvil", title_zh: "幫爸爸搞懂手機" },
  { key: "dele089", title: "Picnic en el parque", title_zh: "公園野餐" },
  { key: "dele090", title: "Cena improvisada con vecinos", title_zh: "與鄰居的臨時晚餐" },
  { key: "dele091", title: "Reservando un vuelo barato online", title_zh: "上網訂便宜機票" },
  { key: "dele092", title: "Facturación en el aeropuerto", title_zh: "在機場辦理報到" },
  { key: "dele093", title: "Conversación con el taxista en Buenos Aires", title_zh: "在布宜諾斯艾利斯與計程車司機對談" },
  { key: "dele094", title: "Maleta perdida en el aeropuerto", title_zh: "行李在機場遺失" },
  { key: "dele095", title: "Alquilando un coche en otra ciudad", title_zh: "在外地租車" },
  { key: "dele096", title: "Una excursión a la sierra", title_zh: "山區一日遊" },
  { key: "dele097", title: "Visitando un museo con audioguía", title_zh: "用語音導覽參觀博物館" },
  { key: "dele098", title: "Hospedaje en un albergue compartido", title_zh: "入住青年旅館的合住房" },
  { key: "dele099", title: "Comprando una postal en una librería turística", title_zh: "在觀光書店買明信片" },
  { key: "dele100", title: "Llegando tarde a la estación de tren", title_zh: "趕到火車站時遲到了" },
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
// 熱力圖徽章門檻（句子練習 / 記憶複習兩頁統一）：當日數量達標即得徽章。
const BADGE_STAR = 15, BADGE_FIRE = 30, BADGE_CROWN = 50;
const MAX_TIMELINE = 50;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    Object.assign(state, saved);
  } catch {}
  state.history = state.history || {};
  state.streak = Object.assign({ count: 0, lastDay: null, todayCount: 0, history: {} }, state.streak || {});
  ensureSrs();
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
  else fire.textContent = `🗣️ ${n}`;
  fire.classList.toggle("streak-active", active);
  fire.classList.toggle("streak-dim", !active);
  const todayCount = state.streak.lastDay === todayKey() ? (state.streak.todayCount || 0) : 0;
  const pct = Math.min(100, Math.round((todayCount / DAILY_GOAL) * 100));
  if (bar) bar.style.width = pct + "%";
  if (txt) txt.textContent = `${todayCount} / ${DAILY_GOAL}`;
}

function heatmapTier(n) {
  if (!n) return "hm-0";
  if (n <= 15) return "hm-1";
  if (n <= 30) return "hm-2";
  return "hm-3";
}

// Milestone symbol overlaid on a day cell, based on multiples of the daily goal (30).
function heatmapSymbol(n) {
  if (n >= BADGE_CROWN) return "👑"; // 爆發 50+
  if (n >= BADGE_FIRE) return "🔥";  // 雙倍 30+
  if (n >= BADGE_STAR) return "⭐";   // 達標 15+
  return "";
}

function renderHeatmap() {
  const root = document.getElementById("streak-heatmap");
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
  const intro = `<div class="mem-sec-title">句子練習熱力圖</div><div class="hm-intro">最近 30 天句子練習，顏色越鮮明表示練習越多。</div>`;
  const legend =
    `<div class="hm-legend">` +
      `<span>少</span>` +
      `<span class="hm-cell hm-0"></span>` +
      `<span class="hm-cell hm-1"></span>` +
      `<span class="hm-cell hm-2"></span>` +
      `<span class="hm-cell hm-3"></span>` +
      `<span>多</span>` +
      `<span class="hm-legend-detail">（沒學 / 1–15 / 16–30 / 31+ 張）</span>` +
    `</div>`;
  const symLegend =
    `<div class="hm-legend hm-sym-legend">` +
      `<span>⭐ 達標 15</span>` +
      `<span>🔥 雙倍 30</span>` +
      `<span>👑 爆發 50</span>` +
    `</div>`;
  root.innerHTML = intro + `<div class="hm-grid">` + dayHeader + rows.join("") + `</div>` + legend + symLegend;

  // Milestone badge tallies (mutually exclusive, all-time) → header badge row
  const badges = document.getElementById("streak-badges");
  if (badges) {
    let star = 0, fire = 0, crown = 0;
    Object.values(hist).forEach(n => {
      if (n >= BADGE_CROWN) crown++;
      else if (n >= BADGE_FIRE) fire++;
      else if (n >= BADGE_STAR) star++;
    });
    badges.innerHTML = `<span>⭐ ${star}</span><span>🔥 ${fire}</span><span>👑 ${crown}</span>`;
  }

  // Summary line: total cards + total days
  const allKeys = Object.keys(hist);
  const totalCards = allKeys.reduce((s, k) => s + (hist[k] || 0), 0);
  const totalDays = allKeys.filter(k => (hist[k] || 0) > 0).length;
  const { n } = effectiveStreak();
  const todayCnt = state.streak.lastDay === todayK ? (state.streak.todayCount || 0) : 0;
  const statsEl = document.getElementById("streak-stats");
  if (statsEl) statsEl.innerHTML = `<div class="mem-cards">` +
    memStatCard("已學", totalCards, "句") + memStatCard("累計", totalDays, "天") +
    memStatCard("今日練習", todayCnt, "句") + memStatCard("連續", n, "天") + `</div>`;
}

function openStreakPicker(tab) {
  const ov = document.getElementById("streak-picker");
  if (!ov) return;
  renderHeatmap();
  showStreakTab(tab === "memory" ? "memory" : "sentence");
  ov.hidden = false;
}
function closeStreakPicker() {
  const ov = document.getElementById("streak-picker");
  if (ov) ov.hidden = true;
}

let toastTimer = null;
function showToast(msg, ok = true) {
  let t = document.getElementById("toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; document.body.appendChild(t); }
  t.textContent = msg;
  t.className = "toast show" + (ok ? "" : " toast-err");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.className = "toast"; }, 5000);  // 5 秒後自動消失
}

function exportBackup() {
  try {
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
    showToast("匯出成功 ✓");
  } catch (e) {
    showToast("匯出失敗", false);
  }
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
      ensureSrs();
      saveState();
      updateStreakUI();
      renderHeatmap();
      updateMemBar();
      showToast("匯入成功 ✓");
    } catch (e) {
      showToast("匯入失敗：" + e.message, false);
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
  // 情境句「他國語→中」狀態下，外語句一律顯示可查單字（不再由放大鏡 state.lookup 控制）。
  // highlightSentence 僅用於情境句外語側（非 reversed 分支），故此處不需再判斷 state.lookup。
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
  const trans = lang === "ja" ? (item.example_zh || item.example_kana || item.example_en) : item.example_en;
  return `<div class="headword">📖${ttsBtn(item.kanji, "ja-JP")}${escapeHTML(item.kanji)}</div>` +
    `<div class="kana">かな: ${escapeHTML(item.kana)}</div>` +
    `<div><span class="label">Meaning:</span><span class="label-text">${escapeHTML(meaning)}${meaningExtra}</span></div>` +
    `<div class="ex">例:${ttsBtn(item.example_ja, "ja-JP")}${escapeHTML(item.example_ja)}<br>` +
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
    const t = lang === "ja" ? (ex.zh || ex.kana || ex.en) : ex.en;
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
    `<div><span class="spoiler quiz-spoiler" onclick="this.classList.toggle('revealed')">` +
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
    `<div class="ex">例:${ttsBtn(item.example_ko, "ko-KR")}${escapeHTML(item.example_ko)}<br>` +
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
    `<div><span class="spoiler quiz-spoiler" onclick="this.classList.toggle('revealed')">` +
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
    `<div class="ex">例:${ttsBtn(item.example_en, "en-US")}${escapeHTML(item.example_en)}<br>` +
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
    `<div><span class="spoiler quiz-spoiler" onclick="this.classList.toggle('revealed')">` +
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
    `<div class="ex">例:${ttsBtn(item.example_en, "en-US")}${escapeHTML(item.example_en)}<br>` +
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
    `<div><span class="spoiler quiz-spoiler" onclick="this.classList.toggle('revealed')">` +
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
    `<div class="ex">例:${ttsBtn(item.example_es, "es-ES")}${escapeHTML(item.example_es)}<br>` +
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
    `<div><span class="spoiler quiz-spoiler" onclick="this.classList.toggle('revealed')">` +
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
  const cEl = document.getElementById("content");
  cEl.classList.remove("scene-picker-mode");   // 離開故事選單，回復一般捲動版面
  cEl.innerHTML = formatEntry(entry) + renderNav();
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

let storyTitleZh = false;   // 故事清單標題：false=原文(預設) / true=中文翻譯。只影響清單，不影響閱讀頁

function renderStoryPicker() {
  const c = document.getElementById("content");
  c.classList.add("scene-picker-mode");   // 標題固定區塊 + 清單獨立捲動
  storyTitleZh = false;   // 每次進「換故事」清單都重置：永遠原文 +「中文」鈕，不沿用上次切換
  const stories = activeStories();
  const scenesData = activeScenes();
  const toggleLabel = storyTitleZh ? "原文" : "中文";   // 顯示原文時鈕為「中文」，反之
  let html = `<div class="picker-hint"><span>選擇一個故事：</span>` +
    `<button class="title-toggle" type="button">${toggleLabel}</button></div><div class="story-list">`;
  stories.forEach((s, i) => {
    const num = String(i + 1).padStart(3, "0");
    const count = (scenesData?.[s.key] || []).length;
    const titleText = storyTitleZh ? (s.title_zh || s.title) : s.title;
    html += `<button class="story-option" type="button" data-key="${s.key}">` +
      `<span class="story-option-title">` +
        `<span class="story-option-num">${num}.</span>` +
        `<span class="story-option-text">${escapeHTML(titleText)}</span>` +
      `</span>` +
      `<span class="story-option-count">${count} 句</span>` +
      `</button>`;
  });
  html += `</div>`;
  c.innerHTML = html;
  c.querySelector(".title-toggle")?.addEventListener("click", () => {
    storyTitleZh = !storyTitleZh;
    // 就地更新標題文字與鈕字，不重繪清單 → 捲動位置維持不動
    const btn = c.querySelector(".title-toggle");
    if (btn) btn.textContent = storyTitleZh ? "原文" : "中文";
    const titleMap = {};
    activeStories().forEach(s => { titleMap[s.key] = storyTitleZh ? (s.title_zh || s.title) : s.title; });
    c.querySelectorAll(".story-option").forEach(opt => {
      const txt = opt.querySelector(".story-option-text");
      if (txt && titleMap[opt.dataset.key] != null) txt.textContent = titleMap[opt.dataset.key];
    });
  });
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

// 放大鏡按鈕現在永遠可用（點擊開啟「查單字」popup），不再有 disable／active 狀態。
// 舊呼叫點（cycleDir、render 等）保留，但本函式改為 no-op；lookupAllowed/toggleLookup
// 已不再接線，僅留作歷史參考。
function updateLookupBtn() {
  const btn = document.getElementById("lookup-btn");
  if (!btn) return;
  btn.disabled = false;
  btn.classList.remove("disabled", "active");
}

function toggleLookup() {
  if (!lookupAllowed()) return;
  state.lookup = !state.lookup;
  saveState();
  updateLookupBtn();
  const entry = state.timeline[state.timelinePos];
  if (entry) displayEntry(entry);
}

// ===================== 查單字 popup =====================
// 直接掃描「當前模式語言」的 vocab 陣列（非 lookup.index——後者 ja 只用 kanji 當 key，
// 無法用 kana 正向查），可同時比對 kanji/kana/word（正向）與 meaning_zh（反向）。
const LOOKUP_SUGGEST_MAX = 20;
const HAS_KANA = /[぀-ヿ]/;                 // 平假名 + 片假名
const HAS_HAN  = /[㐀-鿿豈-﫿]/;    // CJK 漢字（含相容區）

// 任一「東亞文字」（假名／CJK 漢字／諺文）；用來判斷查詢是否「純拉丁」。
const CJK_OR_KANA = /[぀-ヿ㐀-鿿豈-﫿가-힣]/;

// 將 {level:[...]} 形式的 vocab 物件攤平成單一陣列。
function flattenVocab(obj) {
  if (!obj) return [];
  return Object.values(obj).filter(Array.isArray).flat();
}

// 依當前模式解析 → {lang, pool, latin, fwd}。lang 為 lookupEntryHtml 期望的 key
// （'ja' 顯示 kanji+kana；'ko' 顯示 romanization；其餘顯示 word）。
function lookupSearchPool() {
  const lang = lookupLang || lookupSceneLang();
  if (lang === "es")       return { lang, pool: flattenVocab(DATA.vocab_dele),  latin: true,  fwd: ["word"] };
  if (lang === "en_gept")  return { lang, pool: flattenVocab(DATA.vocab_gept),  latin: true,  fwd: ["word"] };
  if (lang === "en_toeic") return { lang, pool: flattenVocab(DATA.vocab_toeic), latin: true,  fwd: ["word"] };
  if (lang === "ko")       return { lang, pool: flattenVocab(DATA.vocab_ko),    latin: false, fwd: ["word"] };
  return { lang: "ja", pool: flattenVocab(DATA.vocab), latin: false, fwd: ["kanji", "kana"] };
}

// 正向比對：0=完全相符、1=開頭相符、2=包含、null=不符（數字越小越優先）。
// 一律大小寫不分（假名/CJK/諺文無大小寫，不受影響；只讓拉丁字 dna→DNA 也能命中）。
function rankForward(entry, q, fields) {
  const ql = q.toLowerCase();
  let best = null;
  for (const f of fields) {
    const raw = entry[f];
    if (!raw) continue;
    const v = String(raw).toLowerCase();
    const r = v === ql ? 0 : v.startsWith(ql) ? 1 : v.includes(ql) ? 2 : null;
    if (r !== null && (best === null || r < best)) best = r;
  }
  return best;
}

// 反向比對：比對中文意思。先去掉開頭詞類前綴「（…）」/「(...)」，再用 、，；;／/ 拆義項，
// 排序：義項完全相符 > 義項開頭相符 > 整串包含。
function rankReverse(entry, q) {
  let m = displayMeaning(entry.meaning_zh || "");
  m = m.replace(/^[（(][^）)]*[）)]\s*/, "");
  if (!m) return null;
  const senses = m.split(/[、，;；/／]/).map(s => s.trim()).filter(Boolean);
  let best = null;
  for (const s of senses) {
    const r = s === q ? 0 : s.startsWith(q) ? 1 : null;
    if (r !== null && (best === null || r < best)) best = r;
  }
  if (best === null && m.includes(q)) best = 2;
  return best;
}

function headWordOf(entry, lang) {
  return (lang === "ja" ? entry.kanji : entry.word) || "";
}

// 核心查詢 → 依排序回傳 entry 陣列；正/反向方向自動偵測。
function searchVocab(rawQ) {
  const q = (rawQ || "").trim();
  if (!q) return [];
  const { lang, pool, fwd } = lookupSearchPool();
  // 韓/日不支援羅馬拼音：純拉丁（無假名/漢字/諺文）查詢需 ≥2 字才做正向比對，
  // 避免單一字母撈到少數含拉丁字的詞（대상 a、DNA…）。
  const latinOnly = !CJK_OR_KANA.test(q);
  const blockShortLatin = (lang === "ja" || lang === "ko") && latinOnly && q.length < 2;
  const collectFwd = () => blockShortLatin ? []
    : pool.map(e => ({ entry: e, rank: rankForward(e, q, fwd) }))
          .filter(x => x.rank !== null);
  const collectRev = () => pool.map(e => ({ entry: e, rank: rankReverse(e, q) }))
                               .filter(x => x.rank !== null);
  let results;
  if (lang === "ja") {
    if (HAS_KANA.test(q)) {
      results = collectFwd();                            // 含假名 → 正向
    } else {
      results = collectFwd();                            // 純漢字 → 先正向查日語
      // 查無 → 反向查中文；但「純拉丁 <2 字」情況不 fallback（與韓文一致：直接空白）
      if (results.length === 0 && !blockShortLatin) results = collectRev();
    }
  } else {
    results = HAS_HAN.test(q) ? collectRev() : collectFwd();  // 含中文 → 反向；否則正向
  }
  results.sort((a, b) => {
    if (a.rank !== b.rank) return a.rank - b.rank;
    const la = headWordOf(a.entry, lang), lb = headWordOf(b.entry, lang);
    if (la.length !== lb.length) return la.length - lb.length;
    return la < lb ? -1 : la > lb ? 1 : 0;
  });
  return results.map(x => x.entry);
}

function lookupShortMeaning(entry) {
  return displayMeaning(entry.meaning_zh || "").replace(/^[（(][^）)]*[）)]\s*/, "");
}

// autocomplete：輸入框正下方顯示「外語字＋讀音＋簡短中文義」，上限 20 筆，超過捲動。
function renderLookupSuggest(query) {
  const ul = document.getElementById("lookup-suggest");
  if (!ul) return;
  const q = (query || "").trim();
  if (!q) { ul.hidden = true; ul.innerHTML = ""; return; }
  const { lang } = lookupSearchPool();
  const results = searchVocab(q).slice(0, LOOKUP_SUGGEST_MAX);
  if (results.length === 0) { ul.hidden = true; ul.innerHTML = ""; return; }
  ul.innerHTML = results.map(e => {
    const word = headWordOf(e, lang);
    const reading = lang === "ja" && e.kana ? e.kana
                  : lang === "ko" && e.romanization ? e.romanization : "";
    return `<li data-word="${encodeURIComponent(word)}">` +
           `<span class="ls-word">${escapeHTML(word)}</span>` +
           (reading ? `<span class="ls-reading">${escapeHTML(reading)}</span>` : "") +
           `<span class="ls-mean">${escapeHTML(lookupShortMeaning(e))}</span></li>`;
  }).join("");
  ul.hidden = false;
}

// 渲染結果卡（重用 groupAndDedupEntries + lookupEntryHtml，外觀同點詞 popup）。
function renderLookupResults(entries) {
  const box = document.getElementById("lookup-results");
  if (!box) return;
  const { lang } = lookupSearchPool();
  if (!entries || entries.length === 0) {
    box.innerHTML = `<div class="lookup-empty">查無此字</div>`;
    return;
  }
  const groups = groupAndDedupEntries(entries);
  box.innerHTML = groups.map(group =>
    `<div class="lookup-group">${group.map(e => lookupEntryHtml(e, lang)).join("")}</div>`
  ).join("");
}

// 點建議 = 直接出該字的卡（列出同字所有義項／同形異義）。
function showLookupWord(word) {
  const input = document.getElementById("lookup-input");
  if (input) input.value = word;
  const ul = document.getElementById("lookup-suggest");
  if (ul) { ul.hidden = true; ul.innerHTML = ""; }
  const { lang, pool } = lookupSearchPool();
  const entries = pool.filter(e => headWordOf(e, lang) === word);
  renderLookupResults(entries.length ? entries : searchVocab(word));
}

// 按 🔍 / Enter：空輸入顯示提示，否則出結果卡。
function runLookupSearch() {
  const input = document.getElementById("lookup-input");
  const box = document.getElementById("lookup-results");
  const ul = document.getElementById("lookup-suggest");
  if (ul) { ul.hidden = true; ul.innerHTML = ""; }
  const q = (input?.value || "").trim();
  if (!q) {
    if (box) box.innerHTML = `<div class="lookup-empty">請輸入要查的單字，或中文意思</div>`;
    return;
  }
  renderLookupResults(searchVocab(q));
}

// 查單字「語言覆寫」：popup 內可獨立切換查詢語言，不影響右上角 state.level。
// null = 尚未設定（lookupSearchPool 會退回 lookupSceneLang()）；開窗時設為當前級別對應語言。
let lookupLang = null;
function setLookupLang(lang) {
  lookupLang = lang;
  document.querySelectorAll("#lookup-search .lookup-lang[data-llang]")
    .forEach(b => b.classList.toggle("active", b.dataset.llang === lang));
}

function openLookupSearch() {
  const ov = document.getElementById("lookup-search");
  if (!ov) return;
  const input = document.getElementById("lookup-input");
  const box = document.getElementById("lookup-results");
  const ul = document.getElementById("lookup-suggest");
  if (input) input.value = "";
  if (box) box.innerHTML = "";
  if (ul) { ul.hidden = true; ul.innerHTML = ""; }
  setLookupLang(lookupSceneLang());   // 預設＝右上角級別對應語言（被選取，顯示外框）
  ov.hidden = false;
  if (input) setTimeout(() => input.focus(), 0);
}

function closeLookupSearch() {
  const ov = document.getElementById("lookup-search");
  if (ov) ov.hidden = true;
}

// ===================== 記憶複習（Anki SRS）=====================
const SRS_NEW_PER_DAY = 100;    // 全牌組共用每日新卡上限（張）
const SRS_MATURE_IVL = 21;     // 間隔≥21 天視為「熟練」
let srsSession = null;
let srsDir = "f";              // 目前複習方向：'f' 外→中 / 'r' 中→外（一次一個方向）

function ensureSrs() {
  if (!state.srs) state.srs = {};
  const s = state.srs;
  s.newPerDay = SRS_NEW_PER_DAY;   // 以常數為準（同步覆寫舊存值）
  s.cards = s.cards || {};
  s.history = s.history || {};
  s.stats = s.stats || { answered: 0, again: 0 };
  const today = todayKey();
  if (!s.daily || s.daily.date !== today) s.daily = { date: today, newToday: 0, reviewedToday: 0, passed: 0 };
  if (typeof s.daily.passed !== "number") s.daily.passed = 0;
  return s;
}

function srsSetMeta(set) {
  switch (set) {
    case "jap": return { lang: "ja-JP", head: e => e.kanji, reading: e => e.kana || "" };
    case "ko":  return { lang: "ko-KR", head: e => e.word,  reading: e => e.romanization || "" };
    case "dele":return { lang: "es-ES", head: e => e.word,  reading: e => "" };
    default:    return { lang: "en-US", head: e => e.word,  reading: e => "" }; // toeic/gept
  }
}
function srsForeignExample(e) { return e.example_ja || e.example_ko || e.example_es || e.example_en || ""; }
function srsExampleTrans(set, e) { return set === "jap" ? (e.example_en || "") : (e.example_zh || ""); }
function srsBaseKey(set, e) {
  if (set === "jap") return `jap|${e.kanji}|${e.kana}`;
  if (set === "ko")  return `ko|${e.word}|${e.hanja || ""}`;
  return `${set}|${e.word}`;
}

// 孤兒清理：移除 state.srs.cards 中對不到任何現有單字的進度鍵（單字被刪除/改寫後殘留）。
// 已學/熟練為即時由 cards 計算，清掉後自動修正。務必在 loadData 完成後呼叫。
function srsPruneOrphans() {
  if (!state.srs || !state.srs.cards) return 0;
  const valid = new Set();
  const sets = [["jap", DATA.vocab], ["ko", DATA.vocab_ko], ["toeic", DATA.vocab_toeic], ["dele", DATA.vocab_dele], ["gept", DATA.vocab_gept]];
  for (const [set, data] of sets) {
    if (!data) continue;
    for (const lvl in data) {
      const arr = data[lvl];
      if (!Array.isArray(arr)) continue;
      for (const e of arr) { const b = srsBaseKey(set, e); valid.add(b + "|f"); valid.add(b + "|r"); }
    }
  }
  if (valid.size === 0) return 0;   // 資料未載入時保險不清，避免誤刪全部
  let removed = 0;
  for (const k of Object.keys(state.srs.cards)) {
    if (!valid.has(k)) { delete state.srs.cards[k]; removed++; }
  }
  if (removed) saveState();
  return removed;
}
function srsDeckLabel(deck) {
  const [set, lv] = deck.split(":");
  if (set === "jap")   return lv.toUpperCase();
  if (set === "ko")    return "TOPIK " + lv.slice(1);
  if (set === "dele")  return "DELE " + lv.slice(1).toUpperCase();
  if (set === "toeic") return "TOEIC " + lv.replace("級", "");
  if (set === "gept")  return "GEPT " + lv;
  return deck;
}
function srsDeckWords(deck) {
  const [set, lv] = deck.split(":");
  if (set === "jap")   return (DATA.vocab && DATA.vocab[lv]) || [];
  if (set === "ko")    return (DATA.vocab_ko && DATA.vocab_ko[lv]) || [];
  if (set === "dele")  return (DATA.vocab_dele && DATA.vocab_dele[lv]) || [];
  if (set === "toeic") return ((DATA.vocab_toeic && DATA.vocab_toeic.toeic) || []).filter(e => e.level === lv);
  if (set === "gept")  return ((DATA.vocab_gept && DATA.vocab_gept.gept) || []).filter(e => e.level === lv);
  return [];
}
function srsAddDays(n) { const d = new Date(); d.setDate(d.getDate() + n); return dateKey(d); }

// grade: 'again' | 'ok' | 'easy'。回傳 {requeue} 表示本回合稍後是否再考。
function srsGrade(key, isNew, grade) {
  const s = ensureSrs();
  const today = todayKey();
  s.history[today] = s.history[today] || { reviewed: 0, new: 0 };
  s.stats.answered++; if (grade === "again") s.stats.again++;
  if (isNew && grade === "again") {        // 新卡忘了：不畢業、不持久化，本回合再考
    saveState();
    return { requeue: true };
  }
  const c = s.cards[key] || { ivl: 0, reps: 0, lapses: 0 };
  let off;
  if (grade === "again") { c.lapses = (c.lapses || 0) + 1; c.ivl = 1; off = 1; }
  else if (grade === "ok") { c.ivl = c.ivl >= 1 ? Math.round(c.ivl * 2) : 1; off = c.ivl; }
  else { c.ivl = c.ivl >= 1 ? Math.min(365, Math.round(c.ivl * 2.5)) : 2; off = c.ivl; }
  c.reps = (c.reps || 0) + 1;
  c.due = srsAddDays(off);
  s.cards[key] = c;
  if (isNew) { s.daily.newToday++; s.history[today].new++; }
  else { s.daily.reviewedToday++; s.history[today].reviewed++; }
  if (grade === "ok" || grade === "easy") s.daily.passed = (s.daily.passed || 0) + 1;  // 進度分子：普通/熟了才 +1
  saveState();
  return { requeue: grade === "again" };
}

function srsBuildSession(deck, dir) {
  const s = ensureSrs();
  const [set] = deck.split(":");
  const words = srsDeckWords(deck);
  const today = todayKey();
  const due = [], fresh = [];
  for (const e of words) {
    const key = `${srsBaseKey(set, e)}|${dir}`;   // 只取目前方向
    const card = s.cards[key];
    const item = { key, set, entry: e, dir, isNew: !card };
    if (card) { if (card.due <= today) due.push(item); }
    else fresh.push(item);
  }
  const remaining = Math.max(0, s.newPerDay - s.daily.newToday);
  const queue = due.concat(fresh.slice(0, remaining));
  return { deck, dir, label: srsDeckLabel(deck), queue, pos: 0, flipped: false, cleared: 0, totalInitial: queue.length };
}
function srsUpdateDirTabs() {
  document.querySelectorAll("#srs-review [data-dir]").forEach(b => b.classList.toggle("active", b.dataset.dir === srsDir));
}
function srsSwitchDir(dir) {
  srsDir = dir;
  srsUpdateDirTabs();
  if (srsSession && srsSession.dir !== dir) {
    srsSession = srsBuildSession(srsSession.deck, dir);
    srsRenderCard();
  }
}

function srsRenderCard() {
  const ses = srsSession; if (!ses) return;
  const card = document.getElementById("srs-card");
  const ctrl = document.getElementById("srs-controls");
  document.getElementById("srs-rev-title").textContent = ses.label;
  { const tp = srsTodayProgress(); document.getElementById("srs-rev-progress").textContent = `${tp.X} / ${tp.Y}`; }
  const srsHint = `<div class="srs-hint">可換方向；別的牌組也可能有卡</div>`;
  if (ses.totalInitial === 0) {
    const s = ensureSrs();
    const budgetLeft = (s.newPerDay - (s.daily.newToday || 0)) > 0;
    const msg = budgetLeft
      ? `這個方向今天的卡都做完了 🎉`
      : `今日新卡額度 (${s.newPerDay} 張) 已用完 🎉<br>這個方向沒有到期可複習的卡了<br>明天會再出新卡`;
    card.innerHTML = `<div class="srs-done">${msg}</div>${srsHint}`;
    ctrl.innerHTML = `<button class="srs-show" id="srs-finish">結束</button>`;
    return;
  }
  if (ses.pos >= ses.queue.length) {
    card.innerHTML = `<div class="srs-done">本回合完成！🎉<br>共複習 ${ses.cleared} 張卡</div>${srsHint}`;
    ctrl.innerHTML = `<button class="srs-show" id="srs-finish">結束</button>`;
    return;
  }
  const it = ses.queue[ses.pos];
  const meta = srsSetMeta(it.set), e = it.entry;
  const head = meta.head(e) || "", reading = meta.reading(e);
  const meaning = displayMeaning(e.meaning_zh || "");
  const exF = srsForeignExample(e), exT = srsExampleTrans(it.set, e);
  if (!ses.flipped) {
    const front = it.dir === "f" ? escapeHTML(head) : escapeHTML(meaning);
    card.innerHTML = `<div class="srs-front">${front}</div>`;
    ctrl.innerHTML = `<button class="srs-show" id="srs-show">顯示答案</button>`;
  } else {
    let h = `<div class="srs-back"><div class="srs-bhead">${ttsBtn(head, meta.lang)}${escapeHTML(head)}</div>`;
    if (reading) h += `<div class="srs-breading">[${escapeHTML(reading)}]</div>`;
    h += `<div class="srs-bmean">${escapeHTML(meaning)}</div>`;
    if (exF) { h += `<div class="srs-bex">${ttsBtn(exF, meta.lang)}${escapeHTML(exF)}`; if (exT) h += `<br>→ ${escapeHTML(exT)}`; h += `</div>`; }
    h += `</div>`;
    card.innerHTML = h;
    ctrl.innerHTML =
      `<button class="srs-grade srs-again" data-g="again">忘了</button>` +
      `<button class="srs-grade srs-ok" data-g="ok">普通</button>` +
      `<button class="srs-grade srs-easy" data-g="easy">熟了</button>`;
  }
}

function srsStartDeck(deck) {
  closeCardPicker();
  ensureSrs();
  srsSession = srsBuildSession(deck, srsDir);
  document.getElementById("srs-review").hidden = false;
  srsUpdateDirTabs();
  srsRenderCard();
}

function srsHandleClick(e) {
  const dt = e.target.closest("[data-dir]");
  if (dt) { srsSwitchDir(dt.dataset.dir); return; }
  if (e.target.closest("#srs-show")) { srsSession.flipped = true; srsRenderCard(); return; }
  if (e.target.closest("#srs-finish")) { closeSrsReview(); return; }
  const g = e.target.closest(".srs-grade");
  if (g && srsSession) {
    const it = srsSession.queue[srsSession.pos];
    const res = srsGrade(it.key, it.isNew, g.dataset.g);
    if (g.dataset.g !== "again") srsSession.cleared++;
    srsSession.pos++;
    if (res.requeue) {
      const at = Math.min(srsSession.queue.length, srsSession.pos + 3);
      srsSession.queue.splice(at, 0, it);
    }
    srsSession.flipped = false;
    updateMemBar();
    srsRenderCard();
  }
}

// 卡牌 popup 兩個分頁：'study'=字卡(到該級別單字頁) / 'review'=複習(SRS)。預設開在「字卡」。
let cardPickerTab = "study";
// 牌組(set:lv) → 單字頁級別(右上角級別選單的值)。TOEIC/GEPT 對應單一 toeic/gept，
// 其子級別(基礎生活級/初級…)另存於 state.toeicSubLevel / state.geptSubLevel。
function deckToLevel(deck) {
  const [set, lv] = deck.split(":");
  if (set === "toeic") return "toeic";
  if (set === "gept") return "gept";
  return lv;   // jap:n5→n5、ko:t1→t1、dele:da1→da1
}
function setCardPickerTab(tab) {
  cardPickerTab = tab;
  document.querySelectorAll("#card-picker .srs-tab[data-ptab]")
    .forEach(b => b.classList.toggle("active", b.dataset.ptab === tab));
}
function openCardPicker() { ensureSrs(); setCardPickerTab("study"); const ov = document.getElementById("card-picker"); if (ov) ov.hidden = false; }
function closeCardPicker() { const ov = document.getElementById("card-picker"); if (ov) ov.hidden = true; }
function closeSrsReview() {
  const ov = document.getElementById("srs-review"); if (ov) ov.hidden = true;
  srsSession = null;
  updateMemBar();
  if (document.getElementById("streak-picker") && !document.getElementById("streak-picker").hidden
      && document.getElementById("tab-memory") && !document.getElementById("tab-memory").hidden) renderMemoryTab();
}

// ---- 進度條（記憶複習，全牌組加總）----
function srsTodayProgress() {
  const s = ensureSrs();
  // 分子：今日按「普通/熟了」的張數（忘了不算）；分母：每日目標 DAILY_GOAL(30)，與句子練習條一致
  return { X: s.daily.passed || 0, Y: DAILY_GOAL };
}
function updateMemBar() {
  const fill = document.getElementById("mem-bar-fill"), txt = document.getElementById("mem-bar-text");
  if (!fill) return;
  const { X, Y } = srsTodayProgress();
  fill.style.width = Math.min(100, Math.round(X / Y * 100)) + "%";
  if (txt) txt.textContent = `${X} / ${Y}`;
  const memFire = document.getElementById("mem-fire");
  if (memFire) { memFire.classList.toggle("streak-active", X > 0); memFire.classList.toggle("streak-dim", X <= 0); }
}

// ---- 記憶複習分頁內容 ----
function srsReviewStreak() {
  const h = ensureSrs().history; const d = new Date();
  const has = k => { const e = h[k]; return e && (e.reviewed + e.new) > 0; };
  if (!has(dateKey(d))) d.setDate(d.getDate() - 1);
  let n = 0; while (has(dateKey(d))) { n++; d.setDate(d.getDate() - 1); } return n;
}
function countDictWords(d) { let n = 0; if (d) for (const k in d) if (Array.isArray(d[k])) n += d[k].length; return n; }
function srsSetTotalWords(set) {
  if (set === "jap")   return countDictWords(DATA.vocab);
  if (set === "ko")    return countDictWords(DATA.vocab_ko);
  if (set === "dele")  return countDictWords(DATA.vocab_dele);
  if (set === "toeic") return ((DATA.vocab_toeic && DATA.vocab_toeic.toeic) || []).length;
  if (set === "gept")  return ((DATA.vocab_gept && DATA.vocab_gept.gept) || []).length;
  return 0;
}
function buildHeatmapGrid(cntFn, intro) {
  const today = new Date(); today.setHours(0, 0, 0, 0); const todayK = todayKey();
  const earliest = new Date(today); earliest.setDate(today.getDate() - 29); const earliestK = dateKey(earliest);
  const sunday = new Date(today); sunday.setDate(today.getDate() - today.getDay());
  const rows = [];
  for (let w = 4; w >= 0; w--) {
    const ws = new Date(sunday); ws.setDate(sunday.getDate() - 7 * w);
    for (let d = 0; d < 7; d++) {
      const day = new Date(ws); day.setDate(ws.getDate() + d); const key = dateKey(day);
      if (day > today || key < earliestK) rows.push(`<div class="hm-cell hm-empty"></div>`);
      else {
        const c = cntFn(key);
        const sym = heatmapSymbol(c);
        const symHtml = sym ? `<span class="hm-sym">${sym}</span>` : "";
        rows.push(`<div class="hm-cell ${heatmapTier(c)}${key === todayK ? " hm-today" : ""}" title="${key} · ${c} 張">${symHtml}</div>`);
      }
    }
  }
  const dow = ["日","一","二","三","四","五","六"].map(x => `<div class="hm-dow">${x}</div>`).join("");
  const legend =
    `<div class="hm-legend"><span>少</span>` +
    `<span class="hm-cell hm-0"></span><span class="hm-cell hm-1"></span>` +
    `<span class="hm-cell hm-2"></span><span class="hm-cell hm-3"></span><span>多</span>` +
    `<span class="hm-legend-detail">（沒學 / 1–15 / 16–30 / 31+ 張）</span></div>`;
  const symLegend =
    `<div class="hm-legend hm-sym-legend"><span>⭐ 達標 15</span><span>🔥 雙倍 30</span><span>👑 爆發 50</span></div>`;
  return `<div class="hm-intro">${intro}</div><div class="hm-grid">${dow}${rows.join("")}</div>${legend}${symLegend}`;
}
function memStatCard(label, num, unit) {
  return `<div class="mem-card"><div class="mem-card-num">${num}<small>${unit}</small></div><div class="mem-card-label">${label}</div></div>`;
}
function renderMemoryTab() {
  const s = ensureSrs();
  const bases = new Set(); let mature = 0;
  const learnedBySet = {};
  for (const k in s.cards) {
    const base = k.slice(0, k.lastIndexOf("|")); bases.add(base);
    if (s.cards[k].ivl >= SRS_MATURE_IVL) mature++;
    const set = k.split("|")[0]; (learnedBySet[set] = learnedBySet[set] || new Set()).add(base);
  }
  const h = s.history[todayKey()] || { reviewed: 0, new: 0 };
  const statsEl = document.getElementById("mem-stats");
  if (statsEl) statsEl.innerHTML = `<div class="mem-cards">` +
    memStatCard("已學", bases.size, "組") + memStatCard("熟練", mature, "卡") +
    memStatCard("今日複習", h.reviewed + h.new, "張") + memStatCard("連續", srsReviewStreak(), "天") + `</div>`;
  const langsEl = document.getElementById("mem-langs");
  if (langsEl) {
    const order = [["dele","西語"],["ko","韓語"],["jap","日語"],["toeic","多益"],["gept","英檢"]];
    let html = `<div class="mem-sec-title">各語言進度</div>`;
    for (const [set, label] of order) {
      const total = srsSetTotalWords(set), got = learnedBySet[set] ? learnedBySet[set].size : 0;
      const pct = total ? Math.min(100, Math.round(got / total * 100)) : 0;
      html += `<div class="mem-lang"><span class="mem-lang-label">${label}</span>` +
        `<span class="mem-lang-bar"><span style="width:${pct}%"></span></span>` +
        `<span class="mem-lang-num">${got}/${total}</span></div>`;
    }
    langsEl.innerHTML = html;
  }
  const mbEl = document.getElementById("mem-badges");
  if (mbEl) {
    let star = 0, fire = 0, crown = 0;
    for (const k in s.history) {
      const e = s.history[k]; const c = e ? (e.reviewed + e.new) : 0;
      if (c >= BADGE_CROWN) crown++;
      else if (c >= BADGE_FIRE) fire++;
      else if (c >= BADGE_STAR) star++;
    }
    mbEl.innerHTML = `<span>⭐ ${star}</span><span>🔥 ${fire}</span><span>👑 ${crown}</span>`;
  }
  const hmEl = document.getElementById("mem-heatmap");
  if (hmEl) hmEl.innerHTML = `<div class="mem-sec-title">單字複習熱力圖</div>` +
    buildHeatmapGrid(k => { const e = s.history[k]; return e ? (e.reviewed + e.new) : 0; }, "最近 30 天單字複習，顏色越鮮明表示複習越多。");
  const retEl = document.getElementById("mem-retention");
  if (retEl) {
    const rate = s.stats.answered ? Math.round((s.stats.answered - s.stats.again) / s.stats.answered * 100) : 0;
    retEl.innerHTML = `<div class="mem-sec-title">答對率</div><div class="mem-retention"><strong>${rate}%</strong><small>(普通+熟了 ÷ 全部作答)</small></div>`;
  }
}
function showStreakTab(tab) {
  document.querySelectorAll(".srs-tab").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
  const sent = document.getElementById("tab-sentence"), mem = document.getElementById("tab-memory");
  if (sent) sent.hidden = tab !== "sentence";
  if (mem) mem.hidden = tab !== "memory";
  if (tab === "memory") renderMemoryTab();
}

// 申請持久化儲存：降低快取/進度在裝置空間不足或長期未使用時被瀏覽器自動回收的機率。
// 已安裝的 PWA 通常直接核准；使用者手動清資料/解除安裝仍會清除（無法擋）。
async function requestPersistentStorage() {
  try {
    if (!navigator.storage || !navigator.storage.persist) return;
    if (await navigator.storage.persisted()) { console.log("[storage] 已是持久化儲存"); return; }
    const granted = await navigator.storage.persist();
    console.log(granted ? "[storage] 已核准持久化儲存" : "[storage] 未核准持久化（仍為 best-effort）");
  } catch (e) {
    console.log("[storage] persist 申請失敗:", e);
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  requestPersistentStorage();   // fire-and-forget，不阻塞啟動
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
  document.getElementById("lookup-btn").addEventListener("click", openLookupSearch);
  updateLookupBtn();

  // 查單字 popup 接線
  document.getElementById("lookup-search-close")?.addEventListener("click", closeLookupSearch);
  document.getElementById("lookup-search")?.addEventListener("click", e => {
    if (e.target.id === "lookup-search") closeLookupSearch();
  });
  document.getElementById("lookup-go")?.addEventListener("click", runLookupSearch);
  // 語言切換鈕：改查該語言的單字池（不動右上角級別）
  document.querySelectorAll("#lookup-search .lookup-lang[data-llang]").forEach(b => {
    b.addEventListener("click", () => {
      setLookupLang(b.dataset.llang);
      const inp = document.getElementById("lookup-input");
      const box = document.getElementById("lookup-results");
      const ul = document.getElementById("lookup-suggest");
      if (ul) { ul.hidden = true; ul.innerHTML = ""; }
      if (inp && inp.value.trim()) runLookupSearch();   // 有輸入則用新語言重查
      else if (box) box.innerHTML = "";
      if (inp) inp.focus();
    });
  });
  const lookupInput = document.getElementById("lookup-input");
  if (lookupInput) {
    lookupInput.addEventListener("input", () => renderLookupSuggest(lookupInput.value));
    lookupInput.addEventListener("keydown", e => {
      if (e.key === "Enter") { e.preventDefault(); runLookupSearch(); }
    });
  }
  document.getElementById("lookup-suggest")?.addEventListener("click", e => {
    const li = e.target.closest("li[data-word]");
    if (li) showLookupWord(decodeURIComponent(li.dataset.word));
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      const ov = document.getElementById("lookup-search");
      if (ov && !ov.hidden) closeLookupSearch();
    }
  });

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
    b.addEventListener("click", () => {
      if (b.dataset.action === "word") openCardPicker();   // 單字 → 開卡牌 popup
      else render(b.dataset.action);
    })
  );

  // ===== 卡牌 popup（字卡 / 複習）接線 =====
  const cardPicker = document.getElementById("card-picker");
  if (cardPicker) cardPicker.addEventListener("click", e => {
    if (e.target === cardPicker) { closeCardPicker(); return; }
    const tab = e.target.closest(".srs-tab[data-ptab]");
    if (tab) { setCardPickerTab(tab.dataset.ptab); return; }
    const btn = e.target.closest(".picker-btn[data-deck]");
    if (!btn) return;
    if (cardPickerTab === "review") {
      srsStartDeck(btn.dataset.deck);            // 複習 → 該級別 SRS 字卡複習
    } else {
      // 字卡 → 切到該級別單字頁（TOEIC/GEPT 另把子級別設好，等同 單字+級別+子級別）
      const deck = btn.dataset.deck, [set, lv] = deck.split(":");
      if (set === "toeic") state.toeicSubLevel = lv;
      else if (set === "gept") state.geptSubLevel = lv;
      saveState();
      setLevel(deckToLevel(deck));
      updateModeToggles();   // 級別未變時也刷新子級別鈕標籤
      closeCardPicker();
      render("word");
    }
  });
  const srsReview = document.getElementById("srs-review");
  // 只有按叉叉(#srs-rev-close)或「結束」鈕才關閉；點背景不關，避免複習中誤觸。
  if (srsReview) srsReview.addEventListener("click", e => { srsHandleClick(e); });
  document.getElementById("srs-rev-close")?.addEventListener("click", closeSrsReview);
  document.querySelectorAll("#streak-picker .srs-tab").forEach(t =>
    t.addEventListener("click", () => showStreakTab(t.dataset.tab)));
  // 學習成就頁：左右滑動切換句子練習／記憶複習分頁
  {
    const sp = document.querySelector("#streak-picker .stats-body");
    if (sp) {
      let sx = 0, sy = 0, tracking = false;
      sp.addEventListener("touchstart", e => {
        if (e.touches.length !== 1) { tracking = false; return; }
        sx = e.touches[0].clientX; sy = e.touches[0].clientY; tracking = true;
      }, { passive: true });
      sp.addEventListener("touchend", e => {
        if (!tracking) return; tracking = false;
        const t = e.changedTouches[0];
        const dx = t.clientX - sx, dy = t.clientY - sy;
        if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.5) return; // 需明顯水平滑動
        const cur = document.getElementById("tab-memory").hidden ? "sentence" : "memory";
        // 版面：左=單字複習(memory)、右=句子練習(sentence)
        if (dx < 0 && cur === "memory") showStreakTab("sentence");      // 左滑：左→右
        else if (dx > 0 && cur === "sentence") showStreakTab("memory"); // 右滑：右→左
      }, { passive: true });
    }
  }
  document.getElementById("mem-fire")?.addEventListener("click", () => openStreakPicker("memory"));
  document.getElementById("mem-bar")?.addEventListener("click", () => openStreakPicker("memory"));
  document.getElementById("sentence-bar")?.addEventListener("click", () => openStreakPicker("sentence"));
  updateMemBar();

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

    // Normal spoiler (inline onclick already toggled) — count first reveal.
    // 選擇題答案(.quiz-spoiler)不計入句子練習(已學/今日練習/進度條)。
    const sp = e.target.closest(".spoiler");
    if (sp && !sp.classList.contains("quiz-spoiler") && !sp.classList.contains("revealed-counted") && sp.classList.contains("revealed")) {
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

  ensureSrs();
  srsPruneOrphans();   // 清掉對不到現有單字的孤兒進度鍵（已學/熟練自動修正）

  // Restore last viewed card (timeline + position are persisted in localStorage)
  const lastEntry = state.timeline[state.timelinePos];
  if (lastEntry) displayEntry(lastEntry);

  if ("serviceWorker" in navigator) {
    let reloading = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (reloading) return;
      reloading = true;
      window.location.reload();   // 新版 SW 接手 → 自動重載一次套用新檔
    });
    navigator.serviceWorker.register("sw.js", { updateViaCache: "none" })
      .then(reg => {
        // 自動強制檢查更新：載入時 + 每次切回前景時（手機「開啟」常是 resume，不會重新載入）。
        // 節流 20 秒避免頻繁切換時重複檢查；檢查只重抓 ~21KB sw.js（多半 304），流量可忽略。
        let last = 0;
        const check = () => {
          const now = Date.now();
          if (now - last < 20000) return;
          last = now;
          reg.update().catch(() => {});
        };
        check();
        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "visible") check();
        });
        window.addEventListener("focus", check);
      })
      .catch(() => {});
  }
});
