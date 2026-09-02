import React from "react";
import { motion } from "framer-motion";
import "../index.css";

const skillsData = {
  "Languages": ["C", "Java", "Python", "JavaScript", "Dart", "HTML/CSS"],
  "Frontend": ["ReactJS", "Flutter", "Framer Motion", "Tailwind CSS"],
  "Backend": ["NodeJS", "ExpressJS", "Microservices"],
  "Databases": ["MySQL", "MongoDB"],
  "Embedded / Core": ["STM32", "Arduino", "Embedded C", "Computer Vision"],
  "Tools & OS": ["Windows", "Linux", "Git", "GitHub"]
};

function Skills() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="skills" className="section">
      <motion.h2
        className="section-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        Technical Arsenal
      </motion.h2>

      <motion.div
        className="skills-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
      >
        {Object.entries(skillsData).map(([category, skills]) => (
          <motion.div key={category} variants={fadeUp} className="skill-category">
            <h3 className="skill-category-title">
              {category}
            </h3>
            <ul className="skill-list">
              {skills.map((skill) => (
                <li key={skill} className="tag">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
