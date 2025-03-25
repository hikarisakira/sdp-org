<script>
  let isNewsOpen = false;
  let isAboutOpen = false;
</script>

<ul class="menu menu-horizontal px-1">
  <li>
    <details bind:open={isNewsOpen}>
      <summary>最新消息</summary>
      <ul class="p-2 bg-base-100">
        <li><a href="/news/press">新聞稿</a></li>
        <li><a href="/news/events">活動資訊</a></li>
        <li><a href="/news/issues">議題發言</a></li>
        <li><a href="/news/clarification">闢謠專區</a></li>
      </ul>
    </details>
  </li>
  <li>
    <details bind:open={isAboutOpen}>
      <summary>關於社民黨</summary>
      <ul class="p-2 bg-base-100">
        <li><a href="/about">簡介</a></li>
        <li><a href="/about/team">組織團隊</a></li>
        <li><a href="/about/officials">黨公職</a></li>
        <li><a href="/about/documents">黨務文件</a></li>
        <li><a href="/about/finance">財報公開專區</a></li>
      </ul>
    </details>
  </li>
</ul>
