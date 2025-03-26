<script>
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  
  // 使用傳統的let聲明來避免一些Runes的反應性問題
  let isMenuOpen = $state(false);
  let windowWidth;
  let currentSubmenu = null;
  
  // 菜單配置，集中管理使代碼更簡潔
  const menus = {
    main: [
      { type: 'submenu', label: '最新消息', id: 'news' },
      { type: 'submenu', label: '關於社民黨', id: 'about' },
      { type: 'link', label: '加入我們', href: '/join', class: 'btn btn-primary mt-4' },
      { type: 'link', label: '捐款支持', href: '/donate', class: 'btn btn-secondary mt-2' }
    ],
    news: [
      { type: 'back' },
      { type: 'link', label: '新聞稿', href: '/news/press' },
      { type: 'link', label: '活動資訊', href: '/news/events' },
      { type: 'link', label: '議題發言', href: '/news/issues' },
      { type: 'link', label: '闢謠專區', href: '/news/clarification' }
    ],
    about: [
      { type: 'back' },
      { type: 'link', label: '簡介', href: '/about' },
      { type: 'link', label: '組織團隊', href: '/about/team' },
      { type: 'link', label: '黨公職', href: '/about/officials' },
      { type: 'link', label: '黨務文件', href: '/about/documents' },
      { type: 'link', label: '財報公開專區', href: '/about/finance' }
    ]
  };
  
  // 混合使用Runes和傳統方法
  // 使用$state來追蹤菜單狀態
  let menuState = $state({
    isOpen: false,
    currentSubmenu: null
  });
  
  // 使用$derived來獲取當前菜單
  let currentMenu = $derived(
    menuState.currentSubmenu ? menus[menuState.currentSubmenu] : menus.main
  );
  
  // 明確的事件處理函數
  function toggleMenu() {
    menuState.isOpen = !menuState.isOpen;
  }
  
  function openSubmenu(id) {
    menuState.currentSubmenu = id;
  }
  
  function closeSubmenu() {
    menuState.currentSubmenu = null;
  }
  
  function closeMenu() {
    menuState.isOpen = false;
  }
  
  // 處理ESC鍵關閉菜單
  function handleKeydown(event) {
    if (event.key === 'Escape' && menuState.isOpen) {
      closeMenu();
    }
  }
  
  onMount(() => {
    // 在這裡安全地訪問 window
    windowWidth = window.innerWidth;
    
    // 添加事件監聽器
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  
  function handleResize() {
    windowWidth = window.innerWidth;
  }
</script>

<button class="btn btn-square btn-ghost" onclick={toggleMenu} aria-label="Toggle menu">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
</button>

{#if menuState.isOpen}
  <button type="button" class="fixed inset-0 bg-black bg-opacity-50 z-40" onclick={closeMenu} aria-label="Close menu"></button>
  <div class="fixed inset-y-0 left-0 w-64 bg-base-100 z-50" transition:slide={{ duration: 300 }}>
    <ul class="menu p-4 w-full">
      {#each currentMenu as item}
        <li>
          {#if item.type === 'submenu'}
            <button onclick={() => openSubmenu(item.id)}>{item.label}</button>
          {:else if item.type === 'link'}
            <a href={item.href} class={item.class} onclick={closeMenu}>{item.label}</a>
          {:else if item.type === 'back'}
            <button onclick={closeSubmenu}>＜返回</button>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
{/if}
