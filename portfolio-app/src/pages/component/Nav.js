import { useState, useEffect } from "react";
import { GiSushis } from "react-icons/gi";

import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <h1
          className={hovered ? "header-hover" : "header"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {hovered ? "SUSHI" : "SUSHANT"}
        </h1>
        <button
          onClick={toggleMenu}
          style={{
            background: "none",
            color: "inherit",
            border: "none",
            padding: 0,
            font: "inherit",
            cursor: "pointer",
            outline: "inherit",
          }}
        >
          <GiSushis size={32} />
        </button>
        {isOpen ? (
          <div className="nav-list">
            <ul>
              <li>Contact</li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};

export default Nav;
