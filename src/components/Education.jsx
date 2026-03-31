import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, FileText } from "lucide-react";
import "../index.css";

function Education() {
  const eduData = [
    {
      id: "college",
      logo: "https://leavesinternational.com/wp-content/uploads/2022/12/amrita-vishwa.jpg",
      title: "Bachelor of Technology - Computer Science",
      institution: "Amrita Vishwa Vidyapeetham",
      grade: "7.09 / 10.00",
      date: "Aug 2023 – Present",
      links: []
    },
    {
      id: "inter",
      logo: "https://files.prokerala.com/education/imgs/logo/college/sri-chaitanya-degree-college-chityal-44295.jpg",
      title: "Intermediate XI & XII - MPC",
      institution: "Sri Chaitanya",
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
      logo: "https://slateschool.in/wp-content/uploads/2023/10/slate-logo.png",
      title: "Class X",
      institution: "Slate School",
      grade: "10.0 / 10.0",
      date: "2021",
      links: [
        { label: "SSC Marksheet", url: "../SSC.pdf" }
      ]
    }
  ];

  return (
    <section id="education" className="section">
      <motion.h2 
        className="section-title"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="highlight">E</span>ducation
      </motion.h2>

      <div className="timeline">
        {eduData.map((item, index) => (
          <motion.div 
            key={item.id}
            className="timeline-item glass-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}
          >
            <div style={{ width: "90px", height: "90px", flexShrink: 0, background: "#fff", borderRadius: "10px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={item.logo} alt={item.institution} style={{ width: "90%", objectFit: "contain" }} loading="lazy" />
            </div>
            
            <div style={{ flex: 1, minWidth: "250px" }}>
              <h3 style={{ display: "flex", alignItems: "center", gap: "1rem", margin: 0, marginBottom: "1rem" }}>
                <GraduationCap size={24} /> {item.title}
              </h3>
              
              <div style={{ marginBottom: "1rem", display: "flex" }}>
                <span className="date">{item.date}</span>
              </div>

              <h4>{item.institution}</h4>
              <p style={{ color: "var(--text-secondary)", marginBottom: "0.5rem", fontSize: "1.5rem" }}>
                Grade: {item.grade}
              </p>
              {item.extra && (
                <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontSize: "1.5rem" }}>
                  {item.extra}
                </p>
              )}

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
                {item.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "0.6rem 1.5rem", fontSize: "1.3rem", borderRadius: "8px" }}>
                    <FileText size={16} /> {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
