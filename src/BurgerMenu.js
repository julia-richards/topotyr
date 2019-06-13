import React, { useState } from "react";
import { scaleDown as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";

const BurgerIcon = _ => (
  <svg className="burger-icon" viewBox="0 0 32 32">
    <rect x="2" y="4" width="28" height="4" />
    <rect x="2" y="14" width="28" height="4" />
    <rect x="2" y="24" width="22" height="4" />
  </svg>
);

const BurgerMenu = _ => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="Menu-wrap">
      <Menu
        customBurgerIcon={<BurgerIcon />}
        burgerButtonClassName="dan"
        outerContainerId="App"
        pageWrapId="page-wrap"
        isOpen={menuOpen}
        onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
        className="Menu"
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about/" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/maps/" onClick={() => setMenuOpen(false)}>
          Maps
        </Link>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
