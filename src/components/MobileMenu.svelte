<script>
  import { slide } from 'svelte/transition';
  let isMenuOpen = false;
  let currentSubmenu = null;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function openSubmenu(submenu) {
    currentSubmenu = submenu;
  }

  function closeSubmenu() {
    currentSubmenu = null;
  }
</script>

<button class="btn btn-square btn-ghost" on:click={toggleMenu}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
</button>

{#if isMenuOpen}
  <div class="fixed inset-0 bg-black bg-opacity-50 z-40" on:click={toggleMenu}></div>
  <div class="fixed inset-y-0 left-0 w-64 bg-base-100 z-50" transition:slide={{ duration: 300 }}>
    <ul class="menu p-4 w-full">
      {#if !currentSubmenu}
        <li><a href="/" on:click={toggleMenu}>首頁</a></li>
        <li><button on:click={() => openSubmenu('news')}>最新消息</button></li>
        <li><button on:click={() => openSubmenu('about')}>關於社民黨</button></li>
        <li><a href="/join" class="btn btn-primary mt-4">加入我們</a></li>
        <li><a href="/donate" class="btn btn-secondary mt-2">捐款支持</a></li>
      {:else if currentSubmenu === 'news'}
        <li><button on:click={closeSubmenu}>返回</button></li>
        <li><a href="/news/press" on:click={toggleMenu}>新聞稿</a></li>
        <li><a href="/news/events" on:click={toggleMenu}>活動資訊</a></li>
        <li><a href="/news/issues" on:click={toggleMenu}>議題發言</a></li>
        <li><a href="/news/clarification" on:click={toggleMenu}>闢謠專區</a></li>
      {:else if currentSubmenu === 'about'}
        <li><button on:click={closeSubmenu}>返回</button></li>
        <li><a href="/about" on:click={toggleMenu}>簡介</a></li>
        <li><a href="/about/team" on:click={toggleMenu}>組織團隊</a></li>
        <li><a href="/about/officials" on:click={toggleMenu}>黨公職</a></li>
        <li><a href="/about/documents" on:click={toggleMenu}>黨務文件</a></li>
        <li><a href="/about/finance" on:click={toggleMenu}>財報公開專區</a></li>
      {/if}
    </ul>
  </div>
{/if}
