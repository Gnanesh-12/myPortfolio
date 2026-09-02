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
      <div className="hero-editorial">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 className="hero-title" variants={fadeUp}>
            Gnanesh<br/>Khandavilli.
          </motion.h1>

          <motion.p variants={fadeUp} className="hero-subtitle">
            Software Engineer & Problem Solver. Building robust applications from embedded systems to modern web platforms.
          </motion.p>

          <motion.div className="flex-between" style={{ justifyContent: 'flex-start', gap: '2rem' }} variants={fadeUp}>
            <a href="https://www.linkedin.com/in/gnanesh-khandavilli-521a3729a" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition">
              LinkedIn
            </a>
            <a href="https://github.com/Gnanesh-12" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition">
              GitHub
            </a>
            <a href="https://x.com/Khandav1Gnanesh" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition">
              Twitter
            </a>
            <a href="mailto:gnaneshkhandavilli@gmail.com" className="text-secondary hover:text-primary transition">
              Email
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex-between" style={{ justifyContent: 'flex-start', gap: '1rem', marginTop: '1rem' }}>
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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="hero-image-wrap">
            <img
              src={profileImg}
              alt="Gnanesh Khandavilli"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
