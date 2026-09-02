import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import "../index.css";

const projectsData = [
  {
    title: "Secure Electronic Voting System",
    description: "A robust, transparent electronic voting system leveraging cryptographic security and blockchain integration. Designed with an advanced microservices architecture and AI-based anomaly detection to guarantee tamper-proof and democratically sound elections.",
    tags: ["Blockchain", "Cryptography", "AI", "Microservices"],
    github: "https://github.com/Secure-Voting-Org",
    demo: null,
    featured: true
  },
  {
    title: "AtmaYoga Pose Tracker",
    description: "A comprehensive yoga pose classification system ensuring precise tracking and validation of user postures. Built with a strong emphasis on continuous integration, software testing, and system verification, employing extensive automated testing methodologies.",
    tags: ["Machine Learning", "Computer Vision", "Automated Testing", "CI/CD"],
    github: "https://github.com/Gnanesh-12/AtmaYoga-Main",
    demo: null,
    featured: true
  },
  {
    title: "Heart Rate & SpO2 Monitoring System",
    description: "An embedded healthcare system designed to accurately monitor a patient's heart rate and blood oxygen levels in real-time. This project utilizes an STM32 microcontroller and a MAX30102 sensor, featuring optimized data processing algorithms.",
    tags: ["STM32", "C", "MAX30102", "Embedded Systems"],
    github: "https://github.com/Gnanesh-12/Heart-Rate-and-SpO-Monitoring-System-using-STM32-and-MAX30102",
    demo: null,
    featured: true
  },
  {
    title: "Snake Game - Arduino",
    description: "An implementation of the classic Snake Game using an Arduino UNO, a 20x4 I2C LCD, and an IR remote. Demonstrates embedded game development, IR signal decoding, and real-time display updates.",
    tags: ["Arduino", "C", "Hardware"],
    github: "https://github.com/Gnanesh-12/Snake_Game_Arduino",
    demo: "https://www.tinkercad.com/things/5tlQOiRzpHE-snake-game/editel?sharecode=JfB1FTOso6Gd5g--RJb92V5aDSTSZprCuDUICd0cfD4",
    featured: false
  },
  {
    title: "Canteen Management App",
    description: "A cross-platform mobile application built to streamline canteen operations. Allows users to browse menus, place orders efficiently, and track history, reducing wait times.",
    tags: ["Flutter", "Dart", "Mobile"],
    github: "https://github.com/Gnanesh-12/flutter_Canteen_Management_App",
    demo: null,
    featured: false
  },
  {
    title: "Digital Gold & Silver System",
    description: "A responsive web platform for managing and tracking digital investments in precious metals, providing tailored pricing insights into key market parameters.",
    tags: ["JavaScript", "Web Development", "UI/UX"],
    github: "https://github.com/Gnanesh-12/DIGITAL---GOLD-SILVER",
    demo: null,
    featured: false
  },
  {
    title: "Attendance Percentage Calculator",
    description: "A simple web-based tool helping students track and manage their class attendance. Calculates required percentage and provides intuitive visualizations.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Gnanesh-12/-Attendance-percentage-calculator",
    demo: "https://attendancecalculatorco.on.drv.tw/attendancecalculator.com/attendance.html",
    featured: false
  }
];

function Projects() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="section" id="projects">
      <motion.h2
        className="section-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        Selected Work
      </motion.h2>

      <div className="projects-container">
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="project-card"
          >
            <div className="project-header">
              <h3 className="project-title">
                {project.title}
              </h3>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link project-link-github">
                    <i className="fab fa-github"></i> Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link project-link-demo">
                    <ExternalLink size={18} /> Live Site
                  </a>
                )}
              </div>
            </div>

            <div className="project-body">
              <p className="project-description">
                {project.description}
              </p>
              
              <div className="tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
