import React from "react";
import "../index.css";
import profileImg from "../assets/home.jpg";
import resumePDF from "../assets/Gnanesh_resume.pdf";

function Home() {
  return (
    <section id="home" className="section">
      <div className="home-content">
        <div className="text-content">
          <h1>
            <span className="typewriter line1">Hello Connections,</span>
          </h1>
          <h1>
            <span className="typewriter line2">
              I'm <span className="highlight">GNANESH KHANDAVILLI</span>
            </span>
          </h1>

          <div className="social-media">
            <a
              href="https://www.instagram.com/gnan_esh_khandavilli?igsh=cnpmZDRrcGo1ODA3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/gnanesh-khandavilli-521a3729a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://x.com/Khandav1Gnanesh?s=08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/share/14DRxcvCafr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>

          <div className="resume">
            <a href={resumePDF} target="_blank" rel="noopener noreferrer">
              <button aria-label="Download Resume">Download CV</button>
            </a>
          </div>
        </div>

        <div className="image-container">
          <img
            src={profileImg}
            alt="Gnanesh Khandavilli"
            className="responsive-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
