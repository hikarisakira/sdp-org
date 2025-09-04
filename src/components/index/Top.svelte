<script lang="ts">
function handleClick() {
  alert('按鈕被點擊！');
}
</script>


<div class="relative w-full min-h-[60vh] overflow-hidden flex items-center justify-start">
  <!-- 背景圖片 -->
  <img src="/image.png" alt="背景圖"
    class="absolute inset-0 w-full h-full object-cover z-0" />
  <div class="relative z-10 flex flex-col items-start justify-center min-h-[60vh] px-4 md:px-8 text-white">
    <h1 class="text-3xl md:text-5xl lg:text-7xl font-extrabold px-4 py-2 rounded mb-6 tracking-tight leading-tight">
      凝聚社會．共創民主
    </h1>
    <button
      class="btn btn-primary rounded-full px-auto py-3 text-base md:text-lg font-semibold transition-all hover:scale-105 bg-pink-500 border-none hover:bg-pink-600"
      on:click={handleClick}
    >
      成為社會民主黨的一份子
    </button>
  </div>
</div>