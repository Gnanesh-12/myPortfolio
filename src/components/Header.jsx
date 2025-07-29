import React, { useEffect } from "react";
import "../index.css";

function Header() {
  useEffect(() => {
    const toggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (toggle && navMenu) {
      const handleClick = () => {
        navMenu.classList.toggle("active");
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", !expanded);
      };

      toggle.addEventListener("click", handleClick);
      return () => toggle.removeEventListener("click", handleClick);
    }
  }, []);

  return (
    <header id="header">
      <a href="#home" className="logo" id="logo">
        <span className="highlight">G</span>nanesh{" "}
        <span className="highlight">K</span>handavilli.
      </a>

      <div
        id="menu-toggle"
        className="menu-toggle"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        ☰
      </div>

      <nav id="nav-menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
