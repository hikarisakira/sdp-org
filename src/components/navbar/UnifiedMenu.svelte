<svelte:options runes={true} />

<script>
  let isMenuOpen = $state(false);
  let currentSubmenu = $state(null);
  let menuOverlay;
  let menuButton;
  let closeButton;
  let lastFocusedElement = null;

  // 選單結構
  const menuStructure = {
    'news': {
      label: '最新消息',
      items: [
        { label: '新聞稿', href: '/news/press' },
        { label: '活動資訊', href: '/news/events' },
        { label: '議題發言', href: '/news/issues' },
        { label: '闢謠專區', href: '/news/clarification' }
      ]
    },
    'about': {
      label: '關於社民黨',
      items: [
        { label: '簡介', href: '/about' },
        { label: '組織團隊', href: '/about/team' },
        { label: '黨公職', href: '/about/officials' },
        { label: '黨務文件', href: '/about/documents' },
        { label: '財報公開專區', href: '/about/finance' }
      ]
    }
  };

  function openMenu() {
    lastFocusedElement = document.activeElement;
    isMenuOpen = true;
    currentSubmenu = null;
    document.body.style.overflow = 'hidden';
    
    // 設置背景為不可聚焦
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    if (main) main.setAttribute('inert', '');
    if (footer) footer.setAttribute('inert', '');
    
    // 延遲聚焦以確保元素已渲染
    requestAnimationFrame(() => {
      closeButton?.focus();
    });
    
    document.addEventListener('keydown', handleKeydown);
  }

  function closeMenu() {
    isMenuOpen = false;
    currentSubmenu = null;
    document.body.style.overflow = '';
    
    // 恢復背景可聚焦
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    if (main) main.removeAttribute('inert');
    if (footer) footer.removeAttribute('inert');
    
    // 返回焦點到觸發按鈕
    lastFocusedElement?.focus();
    document.removeEventListener('keydown', handleKeydown);
  }

  function openSubmenu(submenuId) {
    currentSubmenu = submenuId;
  }

  function goBack() {
    currentSubmenu = null;
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      if (currentSubmenu) {
        goBack();
      } else {
        closeMenu();
      }
    }
    
    // Tab 焦點陷阱
    if (event.key === 'Tab') {
      trapFocus(event);
    }
  }

  function trapFocus(event) {
    if (!menuOverlay) return;
    
    const focusableElements = menuOverlay.querySelectorAll(
      'button:not([disabled]), a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    if (event.shiftKey) {
      if (document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  }

  function handleOverlayClick(event) {
    if (event.target === menuOverlay) {
      closeMenu();
    }
  }
</script>

<!-- 選單按鈕 -->
<button
  bind:this={menuButton}
  class="btn btn-ghost btn-square"
  aria-controls="fullscreen-menu"
  aria-expanded={isMenuOpen}
  aria-label={isMenuOpen ? '關閉選單' : '開啟主選單'}
  onclick={openMenu}
>
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
  </svg>
</button>

<!-- 全螢幕選單覆蓋層 -->
{#if isMenuOpen}
  <div
    bind:this={menuOverlay}
    id="fullscreen-menu"
    class="menu-overlay fixed inset-0 z-[2000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
    role="dialog"
    aria-modal="true"
    aria-labelledby="menu-title"
    onclick={handleOverlayClick}
    transition:fade={{ duration: 200 }}
  >
    <div class="menu-panel bg-base-100 rounded-2xl w-full max-w-md max-h-[85vh] overflow-hidden shadow-2xl" onclick={(e) => e.stopPropagation()}>
      
      <!-- 選單標題與關閉按鈕 -->
      <div class="flex items-center justify-between p-6 border-b border-base-200">
        <h2 id="menu-title" class="text-xl font-bold">主選單</h2>
        <button
          bind:this={closeButton}
          class="btn btn-ghost btn-sm btn-circle"
          aria-label="關閉選單"
          onclick={closeMenu}
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- 選單內容 -->
      <div class="menu-content overflow-y-auto flex-1" style="max-height: calc(85vh - 80px);">
        
        {#if !currentSubmenu}
          <!-- 主選單 -->
          <ul class="menu menu-lg p-4" role="menu">
            {#each Object.entries(menuStructure) as [key, section]}
              <li role="none">
                <button 
                  class="btn btn-ghost justify-start text-left p-4 h-auto min-h-[60px]"
                  role="menuitem"
                  onclick={() => openSubmenu(key)}
                  aria-haspopup="true"
                >
                  <span class="text-lg">{section.label}</span>
                  <svg class="w-5 h-5 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </li>
            {/each}
            
            <!-- 直接連結 -->
            <li class="mt-4 pt-4 border-t border-base-200" role="none">
              <a href="/join" class="btn btn-primary justify-start p-4 h-auto min-h-[50px]" role="menuitem">
                <span class="text-base">加入我們</span>
              </a>
            </li>
            <li role="none">
              <a href="/donate" class="btn btn-outline justify-start p-4 h-auto min-h-[50px]" role="menuitem">
                <span class="text-base">捐款支持</span>
              </a>
            </li>
          </ul>
        {:else}
          <!-- 子選單 -->
          <div class="p-4">
            <button 
              class="btn btn-ghost mb-4 justify-start"
              onclick={goBack}
              aria-label="返回上一層選單"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              返回
            </button>
            
            <h3 class="text-lg font-semibold mb-4">{menuStructure[currentSubmenu].label}</h3>
            
            <ul class="menu menu-lg" role="menu">
              {#each menuStructure[currentSubmenu].items as item}
                <li role="none">
                  <a 
                    href={item.href} 
                    class="btn btn-ghost justify-start text-left p-4 h-auto min-h-[50px]"
                    role="menuitem"
                    onclick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .menu-overlay {
    animation: fadeIn 0.2s ease-out;
  }
  
  .menu-panel {
    animation: slideUp 0.3s ease-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { 
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    to { 
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  /* 減少動效偏好設定 */
  @media (prefers-reduced-motion: reduce) {
    .menu-overlay,
    .menu-panel {
      animation: none;
    }
  }
  
  /* 焦點樣式增強 */
  :global(:focus-visible) {
    outline: 2px solid oklch(var(--p));
    outline-offset: 2px;
  }
</style>
