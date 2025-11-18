<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  // 狀態管理
  let isMenuOpen = false;
  let isScrolled = false;
  let navbarElement: HTMLElement;
  
  // 選單項目配置
  const menuItems = [
    { name: '關於我們', href: '/about', description: '了解社會民主黨的理念與使命' },
    { name: '政策立場', href: '/policies', description: '我們的政策主張與社會願景' },
    { name: '活動資訊', href: '/activities', description: '最新活動與新聞發布' },
    { name: '加入我們', href: '/join', description: '成為社民黨的一員' },
    { name: '聯絡我們', href: '/contact', description: '與我們取得聯繫' }
  ];
  
  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/TaiwanSDP', icon: 'facebook' },
    { name: 'Instagram', href: 'https://www.instagram.com/socialdemocraticparty.tw/', icon: 'instagram' },
    { name: 'LINE', href: 'https://line.me/ti/p/@socialdemocratic', icon: 'line' }
  ];
  
  // 切換選單狀態
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    // 控制頁面滾動
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  
  // 關閉選單
  function closeMenu() {
    isMenuOpen = false;
    document.body.style.overflow = '';
  }
  
  // 處理滾動事件
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    isScrolled = scrollTop > 50;
    
    // 更新導航欄屬性
    if (navbarElement) {
      navbarElement.setAttribute('data-scrolled', isScrolled.toString());
    }
  }
  
  // 處理 ESC 鍵
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && isMenuOpen) {
      closeMenu();
    }
  }
  
  onMount(() => {
    // 找到導航欄元素
    navbarElement = document.querySelector('.modern-navbar') as HTMLElement;
    
    // 加入事件監聽器
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeydown);
    
    // 初始化滾動狀態
    handleScroll();
  });
  
  onDestroy(() => {
    // Check if code is running in browser environment
    if (typeof window !== 'undefined') {
      // 移除事件監聽器
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeydown);
      
      // 恢復頁面滾動
      document.body.style.overflow = '';
    }
  });
</script>

<!-- Menu 按鍵 -->
<button 
  class="menu-toggle"
  class:active={isMenuOpen}
  on:click={toggleMenu}
  aria-label="選單"
  aria-expanded={isMenuOpen}
>
  <span class="menu-text">選單</span>
  <div class="menu-icon">
    <span></span>
    <span></span>
    <span></span>
  </div>
</button>

<!-- 全畫面選單覆蓋 -->
{#if isMenuOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div 
    class="fullscreen-menu-overlay"
    on:click={closeMenu}
  >
    <!-- 選單內容容器 -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="menu-content" on:click|stopPropagation>
      
      <!-- 關閉按鈕 -->
      <button class="close-button" on:click={closeMenu}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <!-- 主選單項目 -->
      <div class="main-menu">
        {#each menuItems as item}
          <a 
            href={item.href} 
            class="menu-item"
            on:click={closeMenu}
          >
            <span class="item-name">{item.name}</span>
            <span class="item-description">{item.description}</span>
          </a>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  /* Menu 按鈕樣式 */
  .menu-toggle {
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 8px;
    transition: all 0.2s ease;
    color: inherit;
    font-size: 14px;
    font-weight: 500;
  }
  
  .menu-toggle:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  
  @media (prefers-color-scheme: dark) {
    .menu-toggle:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
  
  /* Menu 圖示 */
  .menu-icon {
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 20px;
    height: 16px;
  }
  
  .menu-icon span {
    display: block;
    height: 2px;
    background: currentColor;
    border-radius: 1px;
    transition: all 0.3s ease;
    transform-origin: left center;
  }
  
  /* 活躍狀態的 Menu 圖示 */
  .menu-toggle.active .menu-icon span:nth-child(1) {
    transform: rotate(45deg);
  }
  
  .menu-toggle.active .menu-icon span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }
  
  .menu-toggle.active .menu-icon span:nth-child(3) {
    transform: rotate(-45deg);
  }
  
  /* 全畫面選單覆蓋 */
  .fullscreen-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(28, 28, 25, 0.98);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: 9999;
    animation: fadeIn 0.3s ease;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  /* 選單內容 */
  .menu-content {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;
    max-width: 800px;
    margin: 0 auto;
  }
  
  /* 關閉按鈕 */
  .close-button {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: all 0.2s ease;
  }
  
  .close-button:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }
  
  /* 主選單 */
  .main-menu {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .menu-item {
    display: block;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 1rem;
    border-radius: 12px;
  }
  
  .menu-item:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-2px);
  }
  
  .item-name {
    display: block;
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #D3AA70;
  }
  
  .item-description {
    display: block;
    font-size: 0.9rem;
    opacity: 0.7;
    font-weight: 300;
  }
  
  /* 選單底部 */
  .menu-footer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    width: 100%;
  }
  
  /* 社交鏈結 */
  .social-links {
    display: flex;
    gap: 1rem;
  }
  
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.2rem;
  }
  
  .social-link:hover {
    background: #D3AA70;
    transform: translateY(-2px) scale(1.1);
  }
  
  /* 行動按鈕 */
  .action-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .btn {
    padding: 12px 24px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }
  
  .btn-primary {
    background: #D3AA70;
    color: white;
  }
  
  .btn-primary:hover {
    background: transparent;
    border-color: #D3AA70;
    color: #D3AA70;
  }
  
  .btn-secondary {
    background: transparent;
    border-color: white;
    color: white;
  }
  
  .btn-secondary:hover {
    background: white;
    color: #1C1C19;
  }
  
  /* 響應式設計 */
  @media (max-width: 768px) {
    .menu-content {
      padding: 1rem;
    }
    
    .close-button {
      top: 1rem;
      right: 1rem;
    }
    
    .main-menu {
      gap: 1rem;
      margin-bottom: 2rem;
    }
    
    .menu-item {
      padding: 0.75rem;
    }
    
    .item-description {
      font-size: 0.8rem;
    }
    
    .action-buttons {
      flex-direction: column;
      width: 100%;
    }
    
    .btn {
      width: 100%;
      text-align: center;
    }
  }
</style>