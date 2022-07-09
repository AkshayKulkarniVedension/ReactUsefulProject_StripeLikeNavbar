import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  function handleSubmenu(event) {
    const page = event.target.textContent;
    const temp = event.target.getBoundingClientRect();
    const center = (temp.left + temp.right) / 2;
    const bottom = temp.bottom - 3;
    openSubmenu(page, { center, bottom });
  }

  function submenuHandler(event) {
    if (!event.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  }
  return (
    <nav className="nav" onMouseOver={submenuHandler}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="stripe" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={handleSubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={handleSubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={handleSubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn"> Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
