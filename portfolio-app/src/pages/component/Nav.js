import { useState, useEffect } from "react";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <h1>SUSHANT</h1>
        <span>
          <button onClick={toggleMenu}>Click Me</button>
          {isOpen ? (
            <ul className="links">
              <li className="navbtn">UP</li>
              <li className="navbtn">CONTACT</li>
              <li className="navbtn">RESUME</li>
            </ul>
          ) : (
            ""
          )}
        </span>
      </nav>
    </div>
  );
};

export default Nav;
