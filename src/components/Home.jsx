import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import "../index.css";
import profileImg from "../assets/home.jpeg";
import resumePDF from "../assets/Gnaneshresume.pdf";

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <section id="home" className="section">
      <div className="home-content">
        <motion.div
          className="text-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 variants={itemVariants}>
            Hello Connections,
          </motion.h1>
          <motion.h1 variants={itemVariants}>
            I'm <span className="highlight">GNANESH KHANDAVILLI</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="typing-text">
            Full-Stack Developer & Innovator
          </motion.p>

          <motion.div className="social-media" variants={itemVariants}>
            <a
              href="https://www.instagram.com/gnan_esh_khandavilli?igsh=cnpmZDRrcGo1ODA3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" style={{ fontSize: "2rem" }}></i>
            </a>
            <a
              href="https://www.linkedin.com/in/gnanesh-khandavilli-521a3729a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" style={{ fontSize: "2rem" }}></i>
            </a>
            <a
              href="https://x.com/Khandav1Gnanesh?s=08"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-x-twitter" style={{ fontSize: "2rem" }}></i>
            </a>
            <a
              href="https://www.facebook.com/share/14DRxcvCafr/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook" style={{ fontSize: "2rem" }}></i>
            </a>
          </motion.div>

          <motion.div className="resume" variants={itemVariants}>
            <a href={resumePDF} target="_blank" rel="noopener noreferrer">
              <button aria-label="Download Resume" className="btn-primary">
                Download CV <Download size={20} />
              </button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="image-container"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={profileImg}
            alt="Gnanesh Khandavilli"
            className="profile-img"
            loading="lazy"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
