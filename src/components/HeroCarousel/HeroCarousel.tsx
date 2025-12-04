import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./hero-carousel.css";

interface Slide {
    image: string;
    title: string;
    subtitle?: string;
    showButton?: boolean;
    buttonText?: string;
    buttonLink?: string;
    textColor?: string;
}

interface HeroCarouselProps {
    slides: Slide[];
    fullscreen?: boolean;
    autoplay?: boolean;
    delay?: number;
}

export default function HeroCarousel({
    slides,
    fullscreen = true,
    autoplay = true,
    delay = 5000,
}: HeroCarouselProps) {
    return (
        <div
            className={`hero-carousel-wrapper ${fullscreen ? "fullscreen" : ""}`}
        >
            <Swiper
                modules={[Autoplay, EffectFade, Pagination, Navigation]}
                effect="fade"
                speed={1000}
                autoplay={
                    autoplay
                        ? {
                              delay,
                              disableOnInteraction: false,
                          }
                        : false
                }
                pagination={{
                    clickable: true,
                    bulletClass: "hero-carousel-bullet",
                    bulletActiveClass: "hero-carousel-bullet-active",
                }}
                navigation={{
                    nextEl: ".hero-carousel-next",
                    prevEl: ".hero-carousel-prev",
                }}
                loop={true}
                className="hero-carousel"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="hero-slide">
                            {/* 背景圖片 */}
                            <div
                                className="hero-slide-bg"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                }}
                            >
                                <div className="hero-slide-overlay"></div>
                            </div>

                            {/* 內容區域 */}
                            <div className="hero-slide-content">
                                <h1
                                    className="hero-slide-title"
                                    style={{
                                        color: slide.textColor || "#ffffff",
                                    }}
                                >
                                    {slide.title}
                                </h1>

                                {slide.subtitle && (
                                    <p
                                        className="hero-slide-subtitle"
                                        style={{
                                            color: slide.textColor || "#ffffff",
                                        }}
                                    >
                                        {slide.subtitle}
                                    </p>
                                )}

                                {slide.showButton && slide.buttonText && (
                                    <a
                                        href={slide.buttonLink || "#"}
                                        className="hero-slide-button"
                                    >
                                        {slide.buttonText}
                                    </a>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* 自訂導航按鈕 */}
            <button className="hero-carousel-prev" aria-label="Previous slide">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button className="hero-carousel-next" aria-label="Next slide">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    );
}
