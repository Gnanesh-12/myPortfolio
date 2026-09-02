import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import "../index.css";

const certData = [
  {
    title: "Machine Learning with Python",
    issuer: "IBM (Coursera)",
    date: "June 2025",
    description: "Comprehensive course covering machine learning algorithms, data preprocessing, model evaluation, and practical implementation using Python libraries.",
    tags: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn"],
    link: "https://coursera.org/verify/YGGECXN3S18A"
  },
  {
    title: "Cybersecurity Analyst Simulation",
    issuer: "Tata (Forage)",
    date: "May 2025",
    description: "Job simulation involving identity and access management (IAM) for Tata Consultancy Services. Delivered comprehensive documentation and presentations effectively.",
    tags: ["IAM Fundamentals", "IAM Strategy", "Platform Integration"],
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_qGaQYn27FFXCSrES7_1747067087095_completion_certificate.pdf"
  }
];

function Certificates() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="certificates" className="section">
      <motion.h2
        className="section-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        Certificates
      </motion.h2>

      <div className="certificates-container">
        {certData.map((cert, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="panel project-card"
          >
            <div className="project-header">
              <div>
                <h3 className="project-title">{cert.title}</h3>
                <p className="education-date">{cert.issuer} &bull; {cert.date}</p>
              </div>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "0.8rem", borderRadius: "4px" }}>
                <ExternalLink size={18} />
              </a>
            </div>

            <p className="project-description">
              {cert.description}
            </p>

            <div className="tags">
              {cert.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
