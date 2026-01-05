<script lang="ts">
  import { onMount } from 'svelte';

  let isVisible = false;
  let sectionRef: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef) {
      observer.observe(sectionRef);
    }

    return () => observer.disconnect();
  });
</script>

<section
  bind:this={sectionRef}
  class="mission-section py-16 md:py-24 px-4 bg-gradient-to-b from-base-100 to-base-200/50"
>
  <div class="max-w-6xl mx-auto">
    <!-- Section Header -->
    <div class="text-center mb-12 md:mb-16">
      <span
        class="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4 transition-all duration-700"
        class:opacity-0={!isVisible}
        class:translate-y-4={!isVisible}
      >
        關於社民黨
      </span>
      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 delay-100"
        class:opacity-0={!isVisible}
        class:translate-y-4={!isVisible}
      >
        政治，是為了更好的生活
      </h2>
      <p
        class="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200"
        class:opacity-0={!isVisible}
        class:translate-y-4={!isVisible}
      >
        社會民主黨成立於 2015 年，我們相信透過民主參與、社會團結與公平正義，
        能為台灣打造更美好的未來。
      </p>
    </div>

    <!-- Stats Grid -->
    <div
      class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 transition-all duration-700 delay-300"
      class:opacity-0={!isVisible}
      class:translate-y-8={!isVisible}
    >
      <div class="stat-card text-center p-6 rounded-2xl bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
        <div class="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">2015</div>
        <div class="text-sm md:text-base text-base-content/60">創黨年份</div>
      </div>

      <div class="stat-card text-center p-6 rounded-2xl bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
        <div class="text-4xl md:text-5xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
        <div class="text-sm md:text-base text-base-content/60">年深耕在地</div>
      </div>

      <div class="stat-card text-center p-6 rounded-2xl bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
        <div class="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">6</div>
        <div class="text-sm md:text-base text-base-content/60">核心價值</div>
      </div>

      <div class="stat-card text-center p-6 rounded-2xl bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
        <div class="text-4xl md:text-5xl font-bold text-info mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
        <div class="text-sm md:text-base text-base-content/60">財務透明</div>
      </div>
    </div>

    <!-- CTA Button -->
    <div
      class="text-center mt-12 transition-all duration-700 delay-500"
      class:opacity-0={!isVisible}
      class:translate-y-4={!isVisible}
    >
      <a
        href="/about"
        class="btn btn-outline btn-primary btn-lg gap-2 hover:gap-3 transition-all duration-200"
      >
        認識我們
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
  </div>
</section>

<style>
  .mission-section {
    position: relative;
    overflow: hidden;
  }

  .stat-card:hover {
    transform: translateY(-4px);
  }

  @media (prefers-reduced-motion: reduce) {
    .mission-section * {
      transition: none !important;
      animation: none !important;
    }
  }
</style>
