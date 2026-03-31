import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import "../index.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      id="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      style={{
        background: scrolled ? "rgba(3, 7, 18, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <a href="#home" className="logo" id="logo">
        <span className="highlight">G</span>nanesh{" "}
        <span className="highlight">K</span>handavilli.
      </a>

      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <nav className={`nav-menu ${isOpen ? "active" : ""}`} style={{ left: isOpen ? '0' : '-100%' }}>
        {navLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            onClick={() => setIsOpen(false)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.name}
          </motion.a>
        ))}
      </nav>
    </motion.header>
  );
}

export default Header;
