// src/components/react/FullscreenMenu/MenuButton.tsx
import React from "react";

interface MenuButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MenuButton = ({ isOpen, toggleMenu }: MenuButtonProps) => {
  return (
    <button
      className={`menu-button ${isOpen ? "menu-button--open" : ""}`}
      onClick={toggleMenu}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <div className="menu-button__text">
        <span>Menu</span>
      </div>
      <div className="menu-button__icon">
        <div className="menu-button__hamburger">
          <div className="menu-button__bar" data-position="top"></div>
          <div className="menu-button__bar" data-position="bottom"></div>
        </div>
      </div>
    </button>
  );
};

export default MenuButton;
