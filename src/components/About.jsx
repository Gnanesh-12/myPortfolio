import React from "react";
import { motion } from "framer-motion";
import "../index.css";
import aboutImg from "../assets/about.jpeg";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="highlight">A</span>bout Me
      </motion.h2>

      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div className="about-img-box" variants={itemVariants}>
          <div className="glass-panel" style={{ padding: "1rem" }}>
            <img
              src={aboutImg}
              alt="Gnanesh Khandavilli formal"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div className="about-text glass-panel" variants={itemVariants} style={{ padding: "4rem" }}>
          <p>
            Hi, I'm Gnanesh Khandavilli. I am a passionate technologist who
            thrives on learning new concepts and finding creative solutions to
            complex problems. My primary interest lies in full-stack
            development. I find immense satisfaction in bridging the gap
            between front-end interfaces and back-end architecture, watching
            individual components seamlessly come together to form impactful,
            user-centric applications.
          </p>
          <p style={{ marginBottom: 0 }}>
            Driven by a commitment to continuous growth, I actively explore
            emerging frameworks, tools, and best practices to refine my skill
            set. Whether collaborating within a team to exchange ideas or
            working independently to overcome a technical challenge, I remain
            focused and adaptable. My ultimate goal is to evolve continuously
            as a developer and build meaningful digital products that drive a
            positive impact.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
