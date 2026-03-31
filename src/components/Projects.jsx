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
      </motion.div>
    </section>
  );
}

export default Projects;
