# 日文學習 PWA → GitHub Pages 部署紀錄

從本地 PWA 推上 GitHub Pages，再裝到手機離線使用的完整流程。

---

## 整體架構

```
┌──────────────┐  git push   ┌──────────────┐  enable Pages  ┌──────────────┐
│  本地開發    │ ──────────▶ │  GitHub Repo │ ─────────────▶ │ GitHub Pages │
│  (PWA 檔案)  │             │  原始碼      │                │  HTTPS 網站  │
└──────────────┘             └──────────────┘                └──────┬───────┘
                                                                    │
                                                                    │ 手機 Chrome 開
                                                                    ▼
                                                            ┌──────────────┐
                                                            │ 手機 PWA App │
                                                            │ (離線可用)   │
                                                            └──────────────┘
```

關鍵概念：
- **GitHub Pages** = 免費的靜態網站託管（HTTPS）
- **PWA** = Progressive Web App，能裝到手機桌面、離線跑
- **PWA 必要元素**：`manifest.json` + `service worker` + 至少一個 192px PNG icon + HTTPS

---

## 專案結構

```
e_learning/
├── index.html        主畫面 HTML
├── app.js            載入資料 + 邏輯
├── style.css         樣式
├── manifest.json     PWA 設定（名字、icon、顏色）
├── sw.js             Service Worker（離線快取）
├── icon-192.png      App icon（小）
├── icon-512.png      App icon（大）
├── .gitignore        排除 source_file/ 等
├── data/             教學內容
│   ├── vocab.json
│   ├── grammar.json
│   ├── quiz.json
│   ├── scenes_jap1.json
│   ├── scenes_jap2.json
│   └── scenes_jap3.json
└── source_file/      原始日文小說（不上傳，版權考量）
```

---

## 完整流程

### Step 0：先決條件

| 項目 | 怎麼確認 |
|---|---|
| Git 已裝 | `git --version` |
| Git Credential Manager 已裝 | `which git-credential-manager` |
| GitHub 帳號 | 開 https://github.com 能登入 |
| Python（可選，產 icon 用） | `python --version` |

### Step 1：建立本地 Git Repo

```bash
cd c:/Users/EricLee/Downloads/TeamT5/Practice/code/claude_code_demo/e_learning

# 初始化（用 main 當預設分支）
git init -b main
```

### Step 2：寫 `.gitignore`

排除不該上傳的東西：

```gitignore
.vscode/
.idea/
*.log
.DS_Store
Thumbs.db
node_modules/

# 原始日文小說素材（未公開內容、可能有版權）
source_file/
```

⚠️ **版權注意**：如果你的 `source_file/` 是有版權的小說/教材，**絕對不要**推到 public repo。

### Step 3：第一次 commit

```bash
git add .
git commit -m "Initial commit: Japanese learning PWA"
```

### Step 4：在 GitHub 上建 Repo

1. 開 https://github.com → 右上 `+` → **New repository**
2. **Repository name**：例如 `my-tutor`（會出現在網址裡）
3. **Public**（GitHub Pages 免費版只能 Public）
4. README、.gitignore、license **都不要勾**（避免衝突）
5. 點 **Create repository**

### Step 5：推到 GitHub

```bash
git remote add origin https://github.com/<你的帳號>/my-tutor.git
git push -u origin main
```

#### 如果認證失敗

GitHub 不接受 password authentication。設定 Git Credential Manager 走瀏覽器授權：

```bash
git config --global credential.helper manager
git push -u origin main
# 會跳出瀏覽器，登入 GitHub → 授權 → 自動記住
```

之後 push 不用再認證。

### Step 6：啟用 GitHub Pages

1. 進 repo 頁面 → **Settings** → 左側 **Pages**
2. **Source**：選 `Deploy from a branch`
3. **Branch**：選 `main`，資料夾選 `/ (root)`
4. 點 **Save**
5. 等 30~60 秒
6. 上方會顯示綠色 ✓ 加上網址：`https://<你的帳號>.github.io/my-tutor/`

### Step 7：手機安裝 PWA

1. 手機 Chrome 開 `https://<你的帳號>.github.io/my-tutor/`
2. 等頁面載入完（~10 秒，第一次需要網路）
3. 右上 ⋮ → **「安裝應用程式」** 或 **「加到主畫面」**
4. 桌面出現 App icon
5. 點 icon → 全螢幕、像 App

### Step 8：驗證離線可用

1. 把手機開**飛航模式**
2. 點桌面 icon
3. 應該能正常開、抽單字、看 quiz
4. 確認真的離線運作

---

## ⚠️ 常見坑與解法

### 坑 1：手機只看到「加到主畫面」沒有「安裝應用程式」

**原因**：icon 不是 PNG，或者 192/512 兩個尺寸沒齊。

**解法**：產 PNG icon 兩種尺寸，更新 manifest。

```python
# 用 Python + Pillow 產 icon
from PIL import Image, ImageDraw, ImageFont

font = ImageFont.truetype("C:/Windows/Fonts/msjh.ttc", 320)  # 微軟正黑體

for size, fs in [(192, 120), (512, 320)]:
    img = Image.new("RGB", (size, size), (26, 26, 46))      # 深色背景
    draw = ImageDraw.Draw(img)
    font = ImageFont.truetype("C:/Windows/Fonts/msjh.ttc", int(size * 0.62))
    text = "日"
    bbox = draw.textbbox((0, 0), text, font=font)
    w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(((size-w)/2 - bbox[0], (size-h)/2 - bbox[1]),
              text, font=font, fill=(129, 140, 248))
    img.save(f"icon-{size}.png")
```

`manifest.json` 要寫成：

```json
"icons": [
  {"src": "icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any"},
  {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"},
  {"src": "icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "maskable"},
  {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}
]
```

`any` 跟 `maskable` 要分兩個 entry，不能寫 `"any maskable"`。

### 坑 2：直接拷貝資料夾到手機，點 index.html 開不了

**原因**：Chrome 在 `file://` 下不允許 `fetch()` 載入本地檔案。

**解法**：必須走 HTTP/HTTPS。GitHub Pages 是最簡單的路。

### 坑 3：手機更新後還是舊版

**原因**：Service Worker 把舊版快取住了。

**解法**：每次改檔案要把 `sw.js` 的 `CACHE` 變數升版號（`v5` → `v6`）。

```javascript
const CACHE = "jp-tutor-v5";  // 改一行就好
```

新版 SW activate 後會自動刪舊快取。

如果使用者那邊還是舊版，請他：
- 手機 Chrome → 設定 → 隱私權 → 清除瀏覽資料
- 或長按桌面 icon → 解除安裝 → 重裝

### 坑 4：GitHub Pages 推上去 404

**原因**：Pages 還沒部署完、分支選錯、或檔名大小寫不一致（GitHub Pages 區分大小寫）。

**解法**：
- 等 1 分鐘
- Settings → Pages 確認 source 是 `main` / `(root)`
- 確認檔名跟引用大小寫一致

### 坑 5：第一次推 push 時 `Repository not found`

**原因**：repo URL 拼錯、或 repo 是 private 但你沒有權限。

**解法**：
```bash
git remote -v       # 確認 URL 正確
git remote set-url origin https://github.com/<正確帳號>/<repo>.git
```

---

## 在 GitHub 哪裡找到你的 PWA 網址

網址規則：

```
https://<你的 GitHub 帳號>.github.io/<repo 名稱>/
       ↑                          ↑
       ericlee0511                my-tutor
```

GitHub 上有三個地方看得到完整網址：

### 1️⃣ Settings → Pages（最權威，設定的地方）

```
你的 repo → Settings → Pages

╔═══════════════════════════════════════════════════════╗
║  ✓ Your site is live at https://ericlee0511.github.io ║
║    /my-tutor/                                          ║
║    [Visit site] ← 點這個按鈕直接開                     ║
╚═══════════════════════════════════════════════════════╝
```

### 2️⃣ Repo 首頁右側「About」區塊

```
https://github.com/ericlee0511/my-tutor

                              ┌─ About ──────────────┐
                              │ No description       │
                              │ 🔗 ericlee0511.github│  ← 點這個
                              │    .io/my-tutor/     │
                              │                      │
                              │ Releases             │
                              └──────────────────────┘
```

如果這欄沒顯示網址，自己加：點 About 右邊的小齒輪 ⚙️ → 勾 **Use your GitHub Pages website** → Save。

### 3️⃣ 首頁右下「Deployments」區塊

```
                              ┌─ Deployments 2 ──────┐
                              │ 🌐 github-pages      │  ← 點這
                              │    Active 2h ago     │
                              └──────────────────────┘
```

進去會看到每次部署的歷史與網址。每次 `git push` 之後 GitHub 都會自動部署一次，這裡可以追蹤狀態（看是 ✅ Success 還是 ❌ Failed）。

---

## 之後更新內容的流程

新增 / 修改檔案 → 推上去 → 手機自動更新：

```bash
cd c:/Users/EricLee/Downloads/TeamT5/Practice/code/claude_code_demo/e_learning

# 1. 改檔案（例如加新句子到 data/scenes_jap4.json）

# 2. 如果是改 data/ 下的檔案，記得：
#    - app.js 的 sceneFiles 陣列加新檔
#    - sw.js 的 ASSETS 陣列加新檔
#    - sw.js 的 CACHE 升版本（v5 → v6）

# 3. 推上去
git add .
git commit -m "新增 jap4 內容"
git push

# 4. 等 30 秒，手機開 App 自動更新
```

---

## 各檔案職責

| 檔案 | 改了之後要做什麼 |
|---|---|
| `index.html` | 升 sw.js 版本 |
| `app.js` | 升 sw.js 版本 |
| `style.css` | 升 sw.js 版本 |
| `manifest.json` | 升 sw.js 版本 |
| `data/*.json`（新增） | 1) `app.js` `sceneFiles` 加；2) `sw.js` `ASSETS` 加；3) `sw.js` 升版本 |
| `data/*.json`（修改） | 升 sw.js 版本 |
| icon | 升 sw.js 版本，可能要等手機重灌 |

**懶人版規則**：每次推之前無腦把 `sw.js` 的 CACHE 升版號就對了。

---

## 指令速查

```bash
# 本地測試（Chrome 開 http://localhost:8000）
cd c:/Users/EricLee/Downloads/TeamT5/Practice/code/claude_code_demo/e_learning
python -m http.server 8000

# 推到 GitHub
git add .
git commit -m "更新內容"
git push

# 看遠端狀態
git remote -v
git log --oneline | head

# 確認 GitHub Pages 上的內容（curl 測試）
curl -s https://ericlee0511.github.io/my-tutor/manifest.json
curl -s -o /dev/null -w "%{http_code}\n" https://ericlee0511.github.io/my-tutor/
```

---

## 相關連結

- 你的 repo: https://github.com/ericlee0511/my-tutor
- 你的 PWA: https://ericlee0511.github.io/my-tutor/
- PWA 官方文件: https://web.dev/learn/pwa/
- GitHub Pages 文件: https://docs.github.com/en/pages
