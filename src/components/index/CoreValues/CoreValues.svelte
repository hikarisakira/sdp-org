<script lang="ts">
  import { onMount } from 'svelte';

  interface Value {
    icon: string;
    title: string;
    description: string;
    color: string;
    size?: 'large' | 'medium' | 'small';
  }

  const coreValues: Value[] = [
    {
      icon: 'democracy',
      title: '民主深化',
      description: '落實直接民主，讓公民有更多參與公共事務的機會，強化地方自治與審議民主。',
      color: 'primary',
      size: 'large'
    },
    {
      icon: 'equality',
      title: '社會平等',
      description: '縮小貧富差距，建立完善的社會安全網，確保每個人都有尊嚴的生活。',
      color: 'secondary',
      size: 'medium'
    },
    {
      icon: 'justice',
      title: '轉型正義',
      description: '面對歷史、追求真相，為威權時期的受害者伸張正義。',
      color: 'accent',
      size: 'medium'
    },
    {
      icon: 'labor',
      title: '勞動權益',
      description: '保障勞工權益，推動合理工時與薪資，建立友善的工作環境。',
      color: 'info',
      size: 'small'
    },
    {
      icon: 'environment',
      title: '環境永續',
      description: '推動綠色能源轉型，保護生態環境，為下一代留下永續的家園。',
      color: 'success',
      size: 'small'
    },
    {
      icon: 'diversity',
      title: '多元共融',
      description: '尊重多元性別、族群與文化，打造一個包容與尊重的社會。',
      color: 'warning',
      size: 'small'
    }
  ];

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
      { threshold: 0.1 }
    );

    if (sectionRef) {
      observer.observe(sectionRef);
    }

    return () => observer.disconnect();
  });

  function getIcon(iconName: string): string {
    const icons: Record<string, string> = {
      democracy: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />`,
      equality: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />`,
      justice: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />`,
      labor: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />`,
      environment: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />`,
      diversity: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />`
    };
    return icons[iconName] || icons.democracy;
  }
</script>

<section
  bind:this={sectionRef}
  class="values-section py-16 md:py-24 px-4 bg-base-200/30"
>
  <div class="max-w-6xl mx-auto">
    <!-- Section Header -->
    <div class="text-center mb-12 md:mb-16">
      <span
        class="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-secondary/10 text-secondary mb-4 transition-all duration-700"
        class:opacity-0={!isVisible}
        class:translate-y-4={!isVisible}
      >
        我們的信念
      </span>
      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 delay-100"
        class:opacity-0={!isVisible}
        class:translate-y-4={!isVisible}
      >
        六大核心價值
      </h2>
      <p
        class="text-lg text-base-content/70 max-w-2xl mx-auto transition-all duration-700 delay-200"
        class:opacity-0={!isVisible}
        class:translate-y-4={!isVisible}
      >
        這些價值引導我們的政策立場與行動方向
      </p>
    </div>

    <!-- Bento Grid -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 transition-all duration-700 delay-300"
      class:opacity-0={!isVisible}
      class:translate-y-8={!isVisible}
    >
      {#each coreValues as value, index}
        <div
          class="value-card rounded-2xl p-6 md:p-8 bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
          class:lg:col-span-2={value.size === 'large'}
          class:lg:row-span-2={value.size === 'large'}
          style="animation-delay: {index * 100}ms"
        >
          <!-- Icon -->
          <div
            class="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300"
            class:bg-primary={value.color === 'primary'}
            class:bg-secondary={value.color === 'secondary'}
            class:bg-accent={value.color === 'accent'}
            class:bg-info={value.color === 'info'}
            class:bg-success={value.color === 'success'}
            class:bg-warning={value.color === 'warning'}
            class:bg-opacity-10={true}
          >
            <svg
              class="w-7 h-7 md:w-8 md:h-8"
              class:text-primary={value.color === 'primary'}
              class:text-secondary={value.color === 'secondary'}
              class:text-accent={value.color === 'accent'}
              class:text-info={value.color === 'info'}
              class:text-success={value.color === 'success'}
              class:text-warning={value.color === 'warning'}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {@html getIcon(value.icon)}
            </svg>
          </div>

          <!-- Content -->
          <h3 class="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
            {value.title}
          </h3>
          <p class="text-base-content/70 leading-relaxed" class:text-lg={value.size === 'large'}>
            {value.description}
          </p>

          {#if value.size === 'large'}
            <div class="mt-6 pt-6 border-t border-base-200">
              <a href="/about" class="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200">
                了解更多
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .values-section {
    position: relative;
  }

  .value-card:hover {
    transform: translateY(-4px);
  }

  @media (prefers-reduced-motion: reduce) {
    .values-section * {
      transition: none !important;
      animation: none !important;
    }

    .value-card:hover {
      transform: none;
    }
  }
</style>
