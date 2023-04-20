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
        <div
          styles={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "20%",
          }}
          className="nav-open"
        >
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
              <ul
                style={{
                  listStyle: "none",
                  padding: "1%",
                }}
              >
                <li className="nav-links">
                  <Link href="#intro" legacyBehavior>
                    <a
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    >
                      Introduction
                    </a>
                  </Link>
                </li>
                <li className="nav-links">
                  <Link href="#portfolio" legacyBehavior>
                    <a
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    >
                      Portfolio
                    </a>
                  </Link>
                </li>
                <li className="nav-links">
                  <Link href="#contact" legacyBehavior>
                    <a
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    >
                      Contact
                    </a>
                  </Link>
                </li>
                <li className="nav-links">
                  <Link href={"/Resume"} target="_blank">
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
        <h1
          className={hovered ? "header-hover" : "header"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {hovered ? "SUSHI" : "SUSHANT"}
        </h1>
      </nav>
    </div>
  );
};

export default Nav;
