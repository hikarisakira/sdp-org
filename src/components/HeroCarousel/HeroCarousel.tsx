import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";

interface HeroSlide {
  title: string;
  description: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoplay?: boolean;
  autoplayDelay?: number;
}

export default function HeroCarousel({
  slides = [],
  autoplay = true,
  autoplayDelay = 5000,
}: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  if (!slides || slides.length === 0) {
    return (
      <section className="hero h-[600px] lg:h-[700px] bg-base-200">
        <div className="hero-content text-center">
          <p className="text-base-content/60">請在 TinaCMS 中添加輪播內容</p>
        </div>
      </section>
    );
  }

  const currentSlide = slides[activeIndex] || slides[0];

  return (
    <section className="hero min-h-[600px] lg:h-[700px] bg-gradient-to-br from-base-100 to-base-200">
      <div className="hero-content w-full max-w-7xl px-4 lg:px-8 py-8 lg:py-0">
        {/* Grid 容器 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">
          {/* 左側:文字內容 */}
          <div className="order-2 lg:order-1 flex flex-col gap-4 lg:gap-6 text-center lg:text-left">
            {/* 標題與描述 */}
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-base-content line-clamp-2">
                {currentSlide.title}
              </h1>

              <p className="text-base lg:text-xl text-base-content/70 max-w-xl mx-auto lg:mx-0 line-clamp-3">
                {currentSlide.description}
              </p>
            </div>

            {/* 按鈕 */}
            {currentSlide.buttonText && currentSlide.buttonLink && (
              <div className="flex justify-center lg:justify-start">
                <a
                  href={currentSlide.buttonLink}
                  className="btn btn-primary btn-md lg:btn-lg rounded-full px-6 lg:px-8 shadow-lg hover:shadow-xl transition-all"
                >
                  {currentSlide.buttonText}
                </a>
              </div>
            )}

            {/* 導航按鈕 */}
            <div className="flex gap-3 justify-center lg:justify-start">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="btn btn-sm lg:btn-md btn-circle btn-outline btn-primary"
                aria-label="上一張"
              >
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="btn btn-sm lg:btn-md btn-circle btn-outline btn-primary"
                aria-label="下一張"
              >
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* 分頁指示器 */}
            <div className="flex gap-2 justify-center lg:justify-start pb-4 lg:pb-0">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => swiperRef.current?.slideTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-base-300 hover:bg-base-400"
                  }`}
                  aria-label={`前往第 ${index + 1} 張`}
                />
              ))}
            </div>
          </div>

          {/* 右側:圖片輪播 - 移除所有多餘容器 */}
          <div className="order-1">
            {/* 圖片容器:直接設定固定高度,無中間層 */}
            <div className="relative pentagon-image-container shadow-2xl rounded-2xl lg:rounded-none overflow-hidden w-full  mx-auto max-w-md lg:max-w-lg">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                slidesPerView={1}
                loop={slides.length > 1}
                autoplay={
                  autoplay
                    ? {
                        delay: autoplayDelay,
                        disableOnInteraction: false,
                      }
                    : false
                }
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.realIndex);
                }}
                className="w-full h-full"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
