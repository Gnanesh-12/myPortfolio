import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";

const skillsData = {
  programming: [
    { name: "C", img: "https://img.icons8.com/color/96/c-programming.png" },
    { name: "Java", img: "https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png" },
    { name: "Python", img: "https://img.icons8.com/color/96/python.png" },
  ],
  frontend: [
    { name: "HTML", img: "https://img.icons8.com/color/96/html-5--v1.png" },
    { name: "CSS", img: "https://img.icons8.com/color/96/css3.png" },
    { name: "JavaScript", img: "https://img.icons8.com/color/96/javascript.png" },
    { name: "ReactJS", img: "https://img.icons8.com/color/96/react-native.png" },
  ],
  backend: [
    { name: "NodeJS", img: "https://img.icons8.com/color/96/nodejs.png" },
  ],
  database: [
    { name: "MySQL", img: "https://img.icons8.com/color/96/mysql-logo.png" },
    { name: "MongoDB", img: "https://img.icons8.com/color/96/mongodb.png" },
  ],
  frameworks: [
    { name: "ExpressJS", img: "https://www.cisworld.lk/storage/technologies/express-js-1.jpg" },
  ],
  os: [
    { name: "Windows", img: "https://img.icons8.com/color/96/windows-10.png" },
    { name: "Linux", img: "https://img.icons8.com/color/96/linux.png" },
  ],
};

function Skills() {
  const [activeTab, setActiveTab] = useState("programming");

  return (
    <section id="skills" className="section">
      <motion.h2
        className="section-title"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="highlight">S</span>kills
      </motion.h2>

      <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        <motion.div
          className="glass-panel"
          style={{ padding: "4rem", textAlign: "center" }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
            {Object.keys(skillsData).map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "btn-primary" : "btn-outline"}
                onClick={() => setActiveTab(tab)}
                style={{ textTransform: 'capitalize' }}
              >
                {tab}
              </button>
            ))}
          </div>

          <motion.div layout style={{ minHeight: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem' }}
              >
                {skillsData[activeTab].map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                  >
                    <div style={{ width: '110px', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '20px' }}>
                      <img src={skill.img} alt={skill.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <span style={{ fontSize: '1.6rem', fontWeight: '500', color: 'var(--text-secondary)' }}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
