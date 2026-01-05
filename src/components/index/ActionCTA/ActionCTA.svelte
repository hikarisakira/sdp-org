<script lang="ts">
  import { onMount } from 'svelte';

  interface ActionCard {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    icon: string;
    variant: 'primary' | 'secondary' | 'outline';
  }

  const actionCards: ActionCard[] = [
    {
      title: '成為黨員',
      description: '加入社民黨，與我們一起推動台灣的社會改革，讓政治回歸人民。',
      buttonText: '立即加入',
      buttonLink: 'https://sdpartytw.pse.is/6mhjv3',
      icon: 'user-plus',
      variant: 'primary'
    },
    {
      title: '捐款支持',
      description: '您的支持是我們前進的動力，每一分錢都將用於推動社會正義。',
      buttonText: '捐款支持',
      buttonLink: 'https://sdparty.oen.tw/#',
      icon: 'heart',
      variant: 'secondary'
    },
    {
      title: '志工參與',
      description: '貢獻您的時間與專長，一起為理想的台灣社會努力。',
      buttonText: '加入志工',
      buttonLink: 'https://sdpartytw.pse.is/76ypf3',
      icon: 'hands',
      variant: 'outline'
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
      { threshold: 0.2 }
    );

    if (sectionRef) {
      observer.observe(sectionRef);
    }

    return () => observer.disconnect();
  });

  function getIcon(iconName: string): string {
    const icons: Record<string, string> = {
      'user-plus': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />`,
      'heart': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />`,
      'hands': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />`
    };
    return icons[iconName] || icons['user-plus'];
  }
</script>

<section
  bind:this={sectionRef}
  class="cta-section py-16 md:py-24 px-4 bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5"
>
  <div class="max-w-6xl mx-auto">
    <!-- Section Header -->
    <div class="text-center mb-12 md:mb-16">
      <span
        class="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent mb-4 transition-all duration-700"
        class:opacity-0={!isVisible}
        class:translate-y-4={!isVisible}
      >
        一起行動
      </span>
      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 delay-100"
        class:opacity-0={!isVisible}
        class:translate-y-4={!isVisible}
      >
        捲起袖子，實踐社民
      </h2>
      <p
        class="text-lg text-base-content/70 max-w-2xl mx-auto transition-all duration-700 delay-200"
        class:opacity-0={!isVisible}
        class:translate-y-4={!isVisible}
      >
        改變台灣需要每一個人的參與，選擇適合你的方式加入我們
      </p>
    </div>

    <!-- Action Cards -->
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 transition-all duration-700 delay-300"
      class:opacity-0={!isVisible}
      class:translate-y-8={!isVisible}
    >
      {#each actionCards as card, index}
        <div
          class="action-card relative overflow-hidden rounded-2xl p-6 md:p-8 transition-all duration-300 cursor-pointer group"
          class:bg-primary={card.variant === 'primary'}
          class:text-primary-content={card.variant === 'primary'}
          class:bg-secondary={card.variant === 'secondary'}
          class:text-secondary-content={card.variant === 'secondary'}
          class:bg-base-100={card.variant === 'outline'}
          class:border-2={card.variant === 'outline'}
          class:border-base-300={card.variant === 'outline'}
          class:shadow-lg={true}
          class:hover:shadow-2xl={true}
          style="animation-delay: {index * 150}ms"
        >
          <!-- Background Pattern -->
          <div class="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 rounded-full opacity-10"
            class:bg-primary-content={card.variant === 'primary'}
            class:bg-secondary-content={card.variant === 'secondary'}
            class:bg-primary={card.variant === 'outline'}
          ></div>

          <!-- Icon -->
          <div
            class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 {
              card.variant === 'primary' ? 'bg-primary-content bg-opacity-20' :
              card.variant === 'secondary' ? 'bg-secondary-content bg-opacity-20' :
              'bg-primary bg-opacity-10'
            }"
          >
            <svg
              class="w-7 h-7"
              class:text-primary-content={card.variant === 'primary' || card.variant === 'secondary'}
              class:text-primary={card.variant === 'outline'}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {@html getIcon(card.icon)}
            </svg>
          </div>

          <!-- Content -->
          <h3 class="text-2xl font-bold mb-3">
            {card.title}
          </h3>
          <p
            class="mb-6 leading-relaxed {
              card.variant === 'primary' ? 'text-primary-content opacity-80' :
              card.variant === 'secondary' ? 'text-secondary-content opacity-80' :
              'text-base-content opacity-70'
            }"
          >
            {card.description}
          </p>

          <!-- Button -->
          <a
            href={card.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            class="btn gap-2 hover:gap-3 transition-all duration-200"
            class:btn-outline={card.variant === 'primary' || card.variant === 'secondary'}
            class:border-primary-content={card.variant === 'primary'}
            class:text-primary-content={card.variant === 'primary'}
            class:hover:bg-primary-content={card.variant === 'primary'}
            class:hover:text-primary={card.variant === 'primary'}
            class:border-secondary-content={card.variant === 'secondary'}
            class:text-secondary-content={card.variant === 'secondary'}
            class:hover:bg-secondary-content={card.variant === 'secondary'}
            class:hover:text-secondary={card.variant === 'secondary'}
            class:btn-primary={card.variant === 'outline'}
          >
            {card.buttonText}
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      {/each}
    </div>

    <!-- Social Links -->
    <div
      class="mt-16 text-center transition-all duration-700 delay-500"
      class:opacity-0={!isVisible}
      class:translate-y-4={!isVisible}
    >
      <p class="text-base-content/60 mb-4">追蹤我們的社群媒體</p>
      <div class="flex justify-center gap-4">
        <a
          href="https://www.facebook.com/sdparty.tw"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-circle btn-ghost hover:bg-primary/10 hover:text-primary transition-colors duration-200"
          aria-label="Facebook"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/sdparty.tw/"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-circle btn-ghost hover:bg-primary/10 hover:text-primary transition-colors duration-200"
          aria-label="Instagram"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </a>
        <a
          href="https://www.youtube.com/@sdparty_tw"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-circle btn-ghost hover:bg-primary/10 hover:text-primary transition-colors duration-200"
          aria-label="YouTube"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
        <a
          href="https://line.me/ti/g2/6ZFFCtfxOfjqlzruRQTfKCJ4FLrsTGqjQOQjVQ"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-circle btn-ghost hover:bg-primary/10 hover:text-primary transition-colors duration-200"
          aria-label="LINE"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .cta-section {
    position: relative;
  }

  .action-card:hover {
    transform: translateY(-8px);
  }

  @media (prefers-reduced-motion: reduce) {
    .cta-section * {
      transition: none !important;
      animation: none !important;
    }

    .action-card:hover {
      transform: none;
    }
  }
</style>
