# 現代化導航欄实現指南

這個導航欄系統整合了你提出的四個設計需求：

1. **得正官網風格** - 簡約的 Menu 按鈕，多裝置自適應
2. **全畫面選單** - 點擊 Menu 後的全螢幕覆蓋選單
3. **嘉宏遊艇風格** - Logo 居中設計
4. **芬蘭社會民主黨風格** - 透明 navbar，內容可在其下方

## 檔案結構

```
src/
├── components/
│   └── navbar/
│       ├── ModernNavbar.astro          # 主導航欄組件
│       └── ModernNavbarClient.svelte   # 互動部分
├── layouts/
│   └── TransparentLayout.astro     # 透明導航欄佈局
└── pages/
    └── demo.astro                  # 示範頁面
```

## 功能特性

### 🎨 透明背景
- 導航欄預設為透明背景
- 滾動時自動切換為半透明白色/深色
- 支援 backdrop-filter 模糊效果

### ⚙️ Logo 居中
- Logo 位於導航欄中央
- 支援兩個 Logo 圖片（主圖標 + 文字）
- 響應式尺寸調整

### 🗺️ 全畫面選單
- 點擊 Menu 按鈕後全螢幕覆蓋選單
- 優雅的淡入淡出動畫
- 支援 ESC 鍵關閉
- 選單項目包含名稱和描述

### 📱 響應式設計
- 完全適應手機、平板、桌電
- 動態字體大小調整
- 觸控友善的交互設計

### 🌊 滾動檢測
- 自動檢測頁面滾動
- 滾動時導航欄背景變化
- 平滑的過渡動畫

### ♾️ 無障礙支持
- ARIA 標籤支持
- 鍵盤導航支持
- 螢幕閱讀器相容
- 減少動畫選項支持

## 安裝和使用

### 1. 更新現有導航欄

在 `src/layouts/Layout.astro` 中，將原本的導航欄更換：

```astro
---
// 原本
import Navbar from '../components/Navbar.astro';

// 更換為
import ModernNavbar from '../components/navbar/ModernNavbar.astro';
---

<!-- 在 body 中 -->
<ModernNavbar transition:persist="modern-navbar"/>
```

### 2. 使用透明佈局

對於需要透明導航欄的頁面，使用 `TransparentLayout`：

```astro
---
import TransparentLayout from '../layouts/TransparentLayout.astro';
---

<TransparentLayout title="頁面標題">
  <!-- 你的內容 -->
  <section class="full-height-section">
    <!-- Hero 內容 -->
  </section>
</TransparentLayout>
```

### 3. 自定義選單項目

在 `src/components/navbar/ModernNavbarClient.svelte` 中，修改 `menuItems` 配置：

```javascript
const menuItems = [
  { name: '選單項目1', href: '/page1', description: '描述文字' },
  { name: '選單項目2', href: '/page2', description: '描述文字' },
  // 更多項目...
];
```

### 4. 自定義社交鏈結

同樣在 `ModernNavbarClient.svelte` 中修改 `socialLinks`：

```javascript
const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/yourpage', icon: 'facebook' },
  { name: 'Instagram', href: 'https://instagram.com/yourpage', icon: 'instagram' },
  // 更多鏈結...
];
```

## CSS 類別說明

### 佈局相關
- `.full-height-section` - 滿版高度的區段
- `.content-container` - 內容容器，有最大寬度和左右內間距

### 導航欄狀態
- `[data-scrolled="true"]` - 滾動時的樣式
- `[data-navbar="transparent"]` - 透明模式

## 設計令牌 (Design Tokens)

在 `uno.config.ts` 中定義的設計變数：

```typescript
theme: {
  colors: {
    brand: '#1C1C19',      // 主色
    accent: '#D3AA70',     // 強調色
  },
}
```

## 效能優化

1. **懶加載** - Svelte 組件使用 `client:load`
2. **資源預加載** - Logo 圖片使用 preload
3. **事件監聽器優化** - passive 滾動事件
4. **CSS 優化** - 使用 transform 和 opacity 進行動畫

## 測試和預覽

1. **本地開發**：
   ```bash
   pnpm dev
   ```
   然後訪問 `http://localhost:4321/demo`

2. **測試檢查項目**：
   - [ ] 導航欄透明效果
   - [ ] Logo 居中展示
   - [ ] Menu 按鈕功能
   - [ ] 全畫面選單展開/收合
   - [ ] 滾動時背景變化
   - [ ] 響應式設計在各種尺寸上的表現
   - [ ] ESC 鍵關閉選單
   - [ ] 鍵盤焦點管理

## 故障排除

### 常見問題

1. **導航欄不是透明的**
   - 確保使用 `TransparentLayout` 而不是一般的 `Layout`
   - 檢查是否有其他 CSS 覆蓋了導航欄樣式

2. **選單不能打開**
   - 確保 Svelte 組件正常加載
   - 檢查浏覽器控制台是否有錯誤信息

3. **Logo 不显示**
   - 確保 `/public/logo.svg` 和 `/public/logo-font.svg` 存在
   - 檢查檔案路徑是否正確

4. **滾動效果不正常**
   - 確保 JavaScript 沒有被禁用
   - 檢查是否有其他腳本干擾滾動事件

### 性能問題

1. **選單打開緩慢**
   - 檢查是否使用了 `client:load` 而不是 `client:visible`
   - 考慮使用 `client:idle` 來延遲加載

2. **動畫不平順**
   - 確保使用了 CSS `transform` 和 `opacity` 進行動畫
   - 檢查是否開啟了硬體加速

## 定制化

### 顏色主題

在 `uno.config.ts` 中修改顏色配置：

```typescript
theme: {
  colors: {
    brand: '#your-brand-color',
    accent: '#your-accent-color',
  },
}
```

### 動畫效果

在 `ModernNavbarClient.svelte` 中修改 CSS transition 時長：

```css
transition: all 0.3s ease; /* 修改為你希望的時長 */
```

### 選單結構

修改 `menuItems` 配置來自定義選單結構，每個項目需要包含：
- `name`：選單項目名稱
- `href`：連結地址
- `description`：描述文字（可選）

## 浏覽器支持

- **Chrome/Edge**: 88+
- **Firefox**: 84+
- **Safari**: 14+
- **Mobile Safari**: 14+
- **Chrome Mobile**: 88+

## 許可證

這個導航欄系統遵循MIT許可證，可以自由使用和修改。