# ![Experanto Logo](public/logo.ico) Experanto: Find your language exchange partners in seconds

[簡報](https://docs.google.com/presentation/d/1jem8nBGaHUgObW9SkVWfmt-bH-k772n6/edit?usp=drive_link) | [Vercel](https://rocket-experanto.vercel.app/) | [前端 Repo](https://github.com/Levia6603/rocket_experanto.git/) | [Notion](https://www.notion.so/264bdc206a5c4947805c6591f0946d8c)

## 專案發想

發想初期我們團隊希望可以打造一個能夠交換所有技能的平台，但隨著討論的過程，我們慢慢地將範圍縮小至語言這個單一項目上。並且發現在台灣相對小眾的語言，在學習的管道上，資料還是比較少的。台灣有非常多的新住民以及移工，因此我們希望透過我們的平台，可以為大家提供一個新的選擇。

## 功能介紹

- 發起一個新的交換需求
- 搜尋符合自己需求的配對伙伴
- 多國語系介面
- 即時通訊
- 評價系統

## Git 規範

### Commit

|   類型   |     格式     | 說明                                                     |
| :------: | :----------: | :------------------------------------------------------- |
| 正式版本 |   main/xxx   | 更新專案建置、版本…其他 (不影響程式碼運行的變動)         |
| 測試分支 |   dev/xxx    | 測試分支（開發功能合併到此分支成功後再合併至主分支）     |
| 新增功能 |   feat/xxx   | 新增功能                                                 |
| 樣式相關 |  layout/xxx  | 修改程式碼風格 (不影響程式碼運行的變動)                  |
| 修補錯誤 |   fix/xxx    | 從 feature 分支出去，修復 feature 內的 Bug（合併後刪除） |
| 重構程式 | refactor/xxx | 重組、優化程式(邏輯不變)                                 |
| 維護資料 |  chore/xxx   | 更新專案建置、版本…其他 (不影響程式碼運行的變動)         |

### Branch

|     類型     |     格式     |
| :----------: | :----------: |
|   新增功能   |   feat/xxx   |
|   環境相關   |  chore/xxx   |
|   修正功能   |   fix/xxx    |
| 新增頁面樣式 |  style/xxx   |
|     更新     |  update/xxx  |
|   重構功能   | refactor/xxx |
|   更動文件   |   doc/xxx    |
|   緊急修復   |  hotfix/xxx  |
|    解衝突    |  merge/xxx   |
|     其它     |  other/xxx   |

### 前端技術

![React](https://img.shields.io/badge/-styled--components-DB7093?style=flat&logo=styledcomponents&logoColor=black&color=DB7093) ![React](https://img.shields.io/badge/React-20232A?style=falt&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=flat&logo=npm&logoColor=white) ![VS CODE](https://img.shields.io/badge/VS_Code-%23007ACC?style=flat&logo=visualstudiocode) ![VITE](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) ![GItHUB](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white) ![Git](https://img.shields.io/badge/GIT-E44C30?style=flat&logo=git&logoColor=white) ![Redux](https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white) ![Axios](https://img.shields.io/badge/axios-%235A29E4?style=flat&logo=axios) ![ESlint](https://img.shields.io/badge/eslint-3A33D1?style=flat&logo=eslint&logoColor=white)

- 框架： React.JS 並使用其生態系（ Hooks, ReduxJS/Toolkit toolkit, React-router-dom ）
- 語言： TypeScript 方便程式碼的維護以及可讀性
- 樣式： Styled-Components 為主，並使用少量的 MUI 元件，減少自行寫元件的時間
- 佈署： Vercel 自動化佈署，簡化開發到上線的過程
- 多國語系： i18next, react-i18next
- 即時通訊： firebase
