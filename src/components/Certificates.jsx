import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import "../index.css";

function Certificates() {
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
    <section id="certificates" className="section">
      <motion.h2 
        className="section-title"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="highlight">C</span>ertificates
      </motion.h2>

      <motion.div 
        className="grid-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Certificate 1 - IBM ML */}
        <motion.div className="project-card glass-panel" variants={cardVariants}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
              <div className="icon-box" style={{ background: "rgba(59, 130, 246, 0.1)", color: "var(--accent-secondary)", padding: "1rem", borderRadius: "10px" }}>
                <Award size={32} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "2rem" }}>Machine Learning with Python</h3>
                <span style={{ color: "var(--accent-secondary)", fontWeight: 500 }}>IBM</span>
              </div>
            </div>
            <a href="https://coursera.org/verify/YGGECXN3S18A" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "0.8rem", borderRadius: "10px" }}>
              <ExternalLink size={20} />
            </a>
          </div>

          <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", fontSize: "1.3rem" }}>
            <span style={{ background: "rgba(34, 197, 94, 0.1)", color: "#4ade80", padding: "0.4rem 1rem", borderRadius: "20px", fontWeight: "600" }}>✔ Completed</span>
            <span style={{ background: "var(--bg-tertiary)", padding: "0.4rem 1rem", borderRadius: "20px" }}>Coursera</span>
            <span style={{ marginLeft: "auto", color: "var(--text-secondary)" }}>June 2025</span>
          </div>

          <p>
            Comprehensive course covering machine learning algorithms, data
            preprocessing, model evaluation, and practical implementation using
            Python libraries.
          </p>

          <div className="tags" style={{ marginTop: "auto", paddingTop: "2rem" }}>
            <span className="tag">Python</span>
            <span className="tag">Machine Learning</span>
            <span className="tag">Data Analysis</span>
            <span className="tag">Scikit-learn</span>
          </div>
        </motion.div>

        {/* Certificate 2 - Tata Cybersecurity */}
        <motion.div className="project-card glass-panel" variants={cardVariants}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
              <div className="icon-box" style={{ background: "rgba(59, 130, 246, 0.1)", color: "var(--accent-secondary)", padding: "1rem", borderRadius: "10px" }}>
                <Award size={32} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "2rem" }}>Cybersecurity Analyst Simulation</h3>
                <span style={{ color: "var(--accent-secondary)", fontWeight: 500 }}>Tata</span>
              </div>
            </div>
            <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_qGaQYn27FFXCSrES7_1747067087095_completion_certificate.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "0.8rem", borderRadius: "10px" }}>
              <ExternalLink size={20} />
            </a>
          </div>

          <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", fontSize: "1.3rem" }}>
            <span style={{ background: "rgba(34, 197, 94, 0.1)", color: "#4ade80", padding: "0.4rem 1rem", borderRadius: "20px", fontWeight: "600" }}>✔ Completed</span>
            <span style={{ background: "var(--bg-tertiary)", padding: "0.4rem 1rem", borderRadius: "20px" }}>Forage</span>
            <span style={{ marginLeft: "auto", color: "var(--text-secondary)" }}>May 2025</span>
          </div>

          <p>
            Completed a job simulation involving identity and access management
            (IAM) for Tata Consultancy Services. Delivered comprehensive
            documentation and presentations effectively.
          </p>

          <div className="tags" style={{ marginTop: "auto", paddingTop: "2rem" }}>
            <span className="tag">IAM Fundamentals</span>
            <span className="tag">IAM Strategy</span>
            <span className="tag">Platform Integration</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Certificates;
