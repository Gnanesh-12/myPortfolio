import React from "react";
import { motion } from "framer-motion";
import "../index.css";
import aboutImg from "../assets/about.jpeg";

function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="about" className="section">
      <motion.h2
        className="section-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        About
      </motion.h2>

      <motion.div
        className="about-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        {/* Left Side: Editorial Typography */}
        <motion.div variants={fadeUp} className="flex-column gap-3 text-secondary">
          <p className="project-description">
            I am a full-stack developer and embedded systems enthusiast driven by a deep curiosity for how complex systems operate. I find immense satisfaction in bridging the gap between low-level hardware constraints and high-level, user-centric web applications.
          </p>
          <p className="project-description">
            My approach to engineering is simple: build robustly, design minimally, and prioritize performance. Whether I am architecting a secure voting system using microservices or developing a real-time health monitoring device with an STM32 microcontroller, I remain focused on delivering practical, scalable solutions.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "3rem" }}>
            <div>
              <h3 className="text-primary" style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Focus</h3>
              <p style={{ fontSize: "1.5rem" }}>Full-Stack & Mobile Application</p>
            </div>
            <div>
              <h3 className="text-primary" style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Based in</h3>
              <p style={{ fontSize: "1.5rem" }}>Hyderabad, India</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Clean Image Integration */}
        <motion.div variants={fadeUp}>
          <div className="profile-img-wrap" style={{ maxWidth: "100%", aspectRatio: "3/4" }}>
            <img
              src={aboutImg}
              alt="Gnanesh Khandavilli"
              className="profile-img"
              loading="lazy"
            />
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default About;
