import React from "react";
import "../index.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* Description + Social Icons */}
        <div className="footer-column description">
          <p>
            Computer Science Engineering Student passionate about technology,
            innovation, and creating impactful solutions. Currently pursuing
            B.Tech and actively seeking opportunities in software development
            and IoT.
          </p>
          <div className="social-icons">
            <a href="https://github.com/gnanesh" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/gnanesh" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:gnaneshkhandavilli@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:+919701685880">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footer-column links">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-column contact">
          <p><strong>Email:</strong> gnaneshkhandavilli@gmail.com</p>
          <p><strong>Phone:</strong> +91 9701685880</p>
          <p><strong>Location:</strong> Hyderabad, India</p>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2025 Gnanesh Khandavilli. All rights reserved.</p>
        <p>Made with <span className="heart">❤</span> using HTML, CSS & JS</p>
      </div>
    </footer>
  );
}

export default Footer;
