import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import "../index.css";

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section" id="projects">
      <motion.h2
        className="section-title"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="highlight">P</span>rojects
      </motion.h2>

      <motion.div
        className="grid-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Snake Game Project */}
        <motion.div className="project-card glass-panel" variants={cardVariants}>
          <h3>Snake Game - Arduino</h3>
          <p>
            A simple implementation of the classic Snake Game using an Arduino
            UNO, a 20x4 I2C LCD, and an IR remote for controlling the snake. The
            game displays the snake and food on the LCD, allows movement in four
            directions, tracks the score, and ends the game when the snake hits
            the wall or itself. Demonstrates embedded game development,
            IR signal decoding, and real-time display updates.
          </p>

          <div className="tags">
            <span className="tag">Arduino</span>
            <span className="tag">C</span>
            <span className="tag">IR Remote</span>
            <span className="tag">LCD Display</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/Gnanesh-12/Snake_Game_Arduino" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> Source Code
            </a>
            <a href="https://www.tinkercad.com/things/5tlQOiRzpHE-snake-game/editel?sharecode=JfB1FTOso6Gd5g--RJb92V5aDSTSZprCuDUICd0cfD4" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={18} /> Live Demo
            </a>
          </div>
        </motion.div>

        {/* Attendance Calculator Project */}
        <motion.div className="project-card glass-panel" variants={cardVariants}>
          <h3>Attendance Percentage Calculator</h3>
          <p>
            Built a simple web-based tool that helps students track and manage
            their class attendance. By entering the number of classes attended
            and the total number of classes, along with a required percentage,
            the app calculates whether the student can afford to miss future classes.
            It provides a descriptive textual summary and an intuitive pie chart visualization.
          </p>

          <div className="tags">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/Gnanesh-12/-Attendance-percentage-calculator" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> Source Code
            </a>
            <a href="https://attendancecalculatorco.on.drv.tw/attendancecalculator.com/attendance.html" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={18} /> Live Demo
            </a>
          </div>
        </motion.div>

        {/* Heart Rate and SpO2 Monitoring System Project */}
        <motion.div className="project-card glass-panel" variants={cardVariants}>
          <h3>Heart Rate & SpO2 Monitoring System</h3>
          <p>
            An embedded healthcare system designed to accurately monitor a patient's heart rate and blood oxygen levels in real-time. This project utilizes an STM32 microcontroller and a MAX30102 sensor, featuring optimized data processing algorithms to ensure reliable readings for critical health metrics.
          </p>

          <div className="tags">
            <span className="tag">STM32</span>
            <span className="tag">C</span>
            <span className="tag">MAX30102</span>
            <span className="tag">Embedded Systems</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/Gnanesh-12/Heart-Rate-and-SpO-Monitoring-System-using-STM32-and-MAX30102" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> Source Code
            </a>
          </div>
        </motion.div>

        {/* Canteen Management App Project */}
        <motion.div className="project-card glass-panel" variants={cardVariants}>
          <h3>Canteen Management App</h3>
          <p>
            A cross-platform mobile application built to streamline canteen operations. It allows users to browse menus, place orders efficiently, and track their history. The app features an intuitive UI and aims to reduce wait times while optimizing digital order management for both customers and staff.
          </p>

          <div className="tags">
            <span className="tag">Flutter</span>
            <span className="tag">Dart</span>
            <span className="tag">Mobile UX</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/Gnanesh-12/flutter_Canteen_Management_App" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> Source Code
            </a>
          </div>
        </motion.div>

        {/* Digital Gold & Silver System Project */}
        <motion.div className="project-card glass-panel" variants={cardVariants}>
          <h3>Digital Gold & Silver System</h3>
          <p>
            A responsive web platform for managing and tracking digital investments in precious metals like gold and silver. It ensures seamless user interactions and provides tailored pricing insights into key market parameters to better support investment decisions.
          </p>

          <div className="tags">
            <span className="tag">JavaScript</span>
            <span className="tag">Web Development</span>
            <span className="tag">UI/UX</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/Gnanesh-12/DIGITAL---GOLD-SILVER" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> Source Code
            </a>
          </div>
        </motion.div>

        {/* Secure Voting System Project */}
        <motion.div className="project-card glass-panel" variants={cardVariants}>
          <h3>Secure Electronic Voting System</h3>
          <p>
            A robust, transparent electronic voting system leveraging cryptographic security and blockchain integration. Designed with an advanced microservices architecture and AI-based anomaly detection to guarantee tamper-proof and democratically sound elections.
          </p>

          <div className="tags">
            <span className="tag">Blockchain</span>
            <span className="tag">Cryptography</span>
            <span className="tag">AI Anomaly Detection</span>
            <span className="tag">Microservices</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/Secure-Voting-Org" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> Source Code
            </a>
          </div>
        </motion.div>

        {/* AtmaYoga Project */}
        <motion.div className="project-card glass-panel" variants={cardVariants}>
          <h3>AtmaYoga Pose Tracker</h3>
          <p>
            A comprehensive yoga pose classification system ensuring precise tracking and validation of user postures. Built with a strong emphasis on continuous integration, software testing, and system verification, employing extensive automated testing methodologies.
          </p>

          <div className="tags">
            <span className="tag">Machine Learning</span>
            <span className="tag">Computer Vision</span>
            <span className="tag">Automated Testing</span>
            <span className="tag">System Verification</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/Gnanesh-12/AtmaYoga-Main" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> Source Code
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
