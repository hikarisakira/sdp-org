// src/components/react/FullscreenMenu/FullscreenMenu.tsx
"use client";

import {
  useEffect,
  useState,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import MenuButton from "./MenuButton";
import "./fullscreen-menu.css";

interface MenuItem {
  href: string;
  label: string;
}

interface FullscreenMenuProps {
  menuItems: MenuItem[];
  brandName: string;
  socialLinks?: { name: string; url: string }[];
}

const FullscreenMenu = ({
  menuItems,
  brandName,
  socialLinks = [],
}: FullscreenMenuProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isInitializedRef = useRef(false);

  // 註冊 GSAP 自訂緩動
  useLayoutEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "hop",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1",
    );
  }, []);

  // 初始化選單元素狀態
  useEffect(() => {
    if (menuRef.current) {
      const menu = menuRef.current;
      const links = menu.querySelectorAll(".menu-link");
      const socialLinksEl = menu.querySelectorAll(".menu-social-link");

      gsap.set(menu, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      });
      gsap.set(links, { y: 30, opacity: 0 });
      gsap.set(socialLinksEl, { y: 30, opacity: 0 });

      isInitializedRef.current = true;
    }

    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  // 選單動畫函式
  const animateMenu = useCallback((open: boolean) => {
    if (!menuRef.current) return;

    const menu = menuRef.current;
    const links = menu.querySelectorAll(".menu-link");
    const socialLinksEl = menu.querySelectorAll(".menu-social-link");

    setIsAnimating(true);

    if (open) {
      // 打開選單
      gsap.to(menu, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 1.5,
        onStart: () => {
          menu.style.pointerEvents = "all";
        },
        onComplete: () => {
          setIsAnimating(false);
        },
      });

      gsap.to(links, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 0.85,
        duration: 1,
        ease: "power3.out",
      });

      gsap.to(socialLinksEl, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        delay: 0.85,
        duration: 1,
        ease: "power3.out",
      });
    } else {
      // 關閉選單
      gsap.to(menu, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "hop",
        duration: 1.5,
        onComplete: () => {
          menu.style.pointerEvents = "none";
          gsap.set(menu, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          });
          gsap.set(links, { y: 30, opacity: 0 });
          gsap.set(socialLinksEl, { y: 30, opacity: 0 });
          setIsAnimating(false);
        },
      });
    }
  }, []);

  // 監聽狀態變化並觸發動畫
  useEffect(() => {
    if (isInitializedRef.current) {
      animateMenu(isOpen);
    }
  }, [isOpen, animateMenu]);

  // 切換選單
  const toggleMenu = useCallback(() => {
    if (!isAnimating) {
      setIsOpen((prev) => !prev);
    }
  }, [isAnimating]);

  // 關閉選單(點擊連結時)
  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* 選單按鈕 */}
      <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />

      {/* 全螢幕選單 */}
      <div ref={menuRef} className="fullscreen-menu">
        <div className="fullscreen-menu__content">
          {/* Logo 區域 */}
          <div className="fullscreen-menu__logo">
            <a href="/" onClick={handleLinkClick}>
              {brandName}
            </a>
          </div>

          {/* 導航連結 */}
          <nav className="fullscreen-menu__nav">
            {menuItems.map((item, index) => (
              <div key={index} className="menu-link">
                <a href={item.href} onClick={handleLinkClick}>
                  {item.label}
                </a>
              </div>
            ))}
          </nav>

          {/* 社交連結 */}
          {socialLinks.length > 0 && (
            <div className="fullscreen-menu__socials">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-social-link"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FullscreenMenu;
