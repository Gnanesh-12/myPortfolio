import React from "react";
import { Mail, Phone } from "lucide-react";
import "../index.css";

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        
        {/* About Column */}
        <div className="footer-brand">
          <h3>Gnanesh Khandavilli</h3>
          <p>
            Computer Science Engineering Student passionate about technology,
            innovation, and creating impactful solutions.
          </p>
          <div className="footer-social">
            <a href="https://github.com/Gnanesh-12" target="_blank" rel="noreferrer" aria-label="GitHub">
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
        <div>
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="footer-title">Contact</h4>
          <ul className="footer-links">
            <li className="footer-contact-item"><Mail size={16} /> gnaneshkhandavilli@gmail.com</li>
            <li className="footer-contact-item"><Phone size={16} /> +91 9701685880</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Gnanesh Khandavilli. All rights reserved.</p>
        <p>Built with React</p>
      </div>
    </footer>
  );
}

export default Footer;
