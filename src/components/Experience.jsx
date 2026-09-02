import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import "../index.css";
import buzzbrainCert from "../assets/BuzzBrain_Internship_Completion_Certificate)Gnanesh.pdf";

const expData = [
  {
    id: "buzzbrain",
    title: "Intern — AI & Data Operations",
    company: "BuzzBrain Edtech",
    date: "May 2026 - June 2026",
    description: "Reviewed and validated educational content using AI tools to ensure accuracy. Assessed AI-generated responses against quality rubrics, provided structured feedback, and utilized Claude Pro to accelerate review tasks through effective prompting.",
    tags: ["AI Operations", "Data Verification", "Prompt Engineering", "Quality Assurance"],
    link: buzzbrainCert
  }
];

function Experience() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="experience" className="section">
      <motion.h2
        className="section-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        Experience
      </motion.h2>

      <div className="timeline">
        {expData.map((item) => (
          <motion.div
            key={item.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="timeline-item"
          >
            <div className="timeline-date">
              {item.date}
            </div>

            <div className="timeline-content">
              <div className="flex-between">
                <div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <h4 className="timeline-inst" style={{ marginTop: '0.5rem' }}>{item.company}</h4>
                </div>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition" style={{ padding: '0.5rem' }} aria-label="View Certificate">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              <p className="project-description" style={{ marginTop: '1rem' }}>
                {item.description}
              </p>

              <div className="text-muted" style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '1rem' }}>
                {item.tags.join(" • ")}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
