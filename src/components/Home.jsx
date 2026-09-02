import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import "../index.css";
import profileImg from "../assets/home.jpeg";
import resumePDF from "../assets/Gnaneshresume.pdf";

function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id="home" className="section">
      <div className="home-content">
        <motion.div
          className="text-content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 className="hero-title" variants={fadeUp}>
            Gnanesh Khandavilli.
          </motion.h1>

          <motion.p variants={fadeUp} className="hero-subtitle">
            Software Engineer & Problem Solver. Building robust applications from embedded systems to modern web platforms.
          </motion.p>

          <motion.div className="hero-social" variants={fadeUp}>
            <a href="https://www.linkedin.com/in/gnanesh-khandavilli-521a3729a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Gnanesh-12" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://x.com/Khandav1Gnanesh" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="mailto:gnaneshkhandavilli@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="hero-actions">
            <a href="#projects">
              <button aria-label="View Projects" className="btn-primary">
                View Work <ArrowRight size={16} />
              </button>
            </a>
            <a href={resumePDF} target="_blank" rel="noopener noreferrer">
              <button aria-label="Download Resume" className="btn-outline">
                Resume <Download size={16} />
              </button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="profile-img-wrap">
            <img
              src={profileImg}
              alt="Gnanesh Khandavilli"
              className="profile-img"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
