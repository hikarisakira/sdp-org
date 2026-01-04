<script lang="ts">
  import config from '../../content/config/config.json';

  // 只顯示有下拉選單的導航項目
  const navWithSubmenu = config.nav.filter(item => item.type === 'submenu');
</script>

<div style="display: flex; gap: 3rem; flex-wrap: wrap;">
  {#each navWithSubmenu as navItem}
    <nav>
      <div>
        <h6 class="footer-title" style="color: white; font-weight: 700; margin-bottom: 1rem; font-size: 1.1rem;">{navItem.label}</h6>
      </div>

      <div class="flex flex-col gap-2" style="color: rgba(255, 255, 255, 0.95);">
        {#each navItem.submenu as subItem}
          <a href={subItem.href} class="link link-hover" style="color: rgba(255, 255, 255, 0.9); text-decoration: none; transition: color 0.2s;">{subItem.label}</a>
        {/each}
      </div>
    </nav>
  {/each}
</div>

<style>
  a:hover {
    color: white !important;
    text-decoration: underline;
  }
</style>
