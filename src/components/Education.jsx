import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import "../index.css";

const eduData = [
  {
    id: "college",
    title: "Bachelor of Technology - Computer Science",
    institution: "Amrita Vishwa Vidyapeetham",
    grade: "7.09 / 10.00",
    date: "Aug 2023 – Present",
    links: []
  },
  {
    id: "inter",
    title: "Intermediate XI & XII - MPC",
    institution: "Sri Chaitanya Junior Kalasala",
    grade: "936 / 1000",
    extra: "JEE Mains Percentile - 95.86",
    date: "2021 – 2023",
    links: [
      { label: "12th Marksheet", url: "../12th.pdf" },
      { label: "JEE Scorecard", url: "../JEE.pdf" }
    ]
  },
  {
    id: "school",
    title: "Class X",
    institution: "Slate-The School",
    grade: "10.0 / 10.0",
    date: "2021",
    links: [
      { label: "SSC Marksheet", url: "../SSC.pdf" }
    ]
  }
];

function Education() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="education" className="section">
      <motion.h2
        className="section-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        Education
      </motion.h2>

      <div className="education-container">
        {eduData.map((item) => (
          <motion.div
            key={item.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="education-item"
          >
            <div className="education-header">
              <h3 className="education-title">
                {item.title}
              </h3>
              <span className="education-date">
                {item.date}
              </span>
            </div>
            
            <h4 className="education-institution">
              {item.institution}
            </h4>
            
            <div className="education-grade">
              <p>Grade: {item.grade}</p>
              {item.extra && <p>{item.extra}</p>}
            </div>

            {item.links.length > 0 && (
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
                {item.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    <FileText size={14} /> {link.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
