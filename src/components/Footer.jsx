import React from "react";
import { Mail, Phone } from "lucide-react";
import "../index.css";

function Footer() {
  return (
    <footer className="glass-panel" style={{ margin: "5rem 2rem 2rem 2rem", background: "rgba(3,7,18,0.8)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5rem", justifyContent: "space-between", maxWidth: "1200px", margin: "0 auto", paddingBottom: "3rem" }}>
        
        {/* About Column */}
        <div style={{ flex: "2", minWidth: "300px" }}>
          <h3 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}><span className="highlight">G</span>nanesh</h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "400px" }}>
            Computer Science Engineering Student passionate about technology,
            innovation, and creating impactful solutions. Actively seeking opportunities 
            in full-stack development.
          </p>
          <div className="social-media" style={{ margin: 0, gap: "1rem" }}>
            <a href="https://github.com/gnanesh" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fab fa-github" style={{ fontSize: "2rem" }}></i>
            </a>
            <a href="https://linkedin.com/in/gnanesh-khandavilli-521a3729a" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin" style={{ fontSize: "2rem" }}></i>
            </a>
            <a href="mailto:gnaneshkhandavilli@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div style={{ flex: "1", minWidth: "150px" }}>
          <h4 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Quick Links</h4>
          <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "var(--text-secondary)" }}>
            <li><a href="#about" style={{ transition: "color 0.3s" }} onMouseOver={e=>e.target.style.color="var(--accent-primary)"} onMouseOut={e=>e.target.style.color=""}>About</a></li>
            <li><a href="#skills" style={{ transition: "color 0.3s" }} onMouseOver={e=>e.target.style.color="var(--accent-primary)"} onMouseOut={e=>e.target.style.color=""}>Skills</a></li>
            <li><a href="#projects" style={{ transition: "color 0.3s" }} onMouseOver={e=>e.target.style.color="var(--accent-primary)"} onMouseOut={e=>e.target.style.color=""}>Projects</a></li>
            <li><a href="#contact" style={{ transition: "color 0.3s" }} onMouseOver={e=>e.target.style.color="var(--accent-primary)"} onMouseOut={e=>e.target.style.color=""}>Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h4 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Contact Details</h4>
          <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "var(--text-secondary)" }}>
            <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}><Mail size={16} className="highlight" /> gnaneshkhandavilli@gmail.com</li>
            <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}><Phone size={16} className="highlight" /> +91 9701685880</li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--border-glass)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", fontSize: "1.4rem", color: "var(--text-secondary)" }}>
        <p>© {new Date().getFullYear()} Gnanesh Khandavilli. All rights reserved.</p>
        <p>Built with React & <span className="highlight">Framer Motion</span></p>
      </div>
    </footer>
  );
}

export default Footer;
