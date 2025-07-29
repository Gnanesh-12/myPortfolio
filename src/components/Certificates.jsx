import React from "react";
import "../index.css";

function Certificates() {
  return (
    <section id="certificates" className="section">
      <h1>Certificates</h1>
      <div className="certificates-box">
        {/* Certificate 1 - IBM ML */}
        <div className="certificate-card">
          <div className="cert-header">
            <svg
              width="69"
              height="69"
              viewBox="-4.8 -4.8 57.6 57.6"
              xmlns="http://www.w3.org/2000/svg"
              fill="blue"
              stroke="blue"
              strokeWidth="0"
            >
              <g>
                <rect width="48" height="48" fill="none" />
                <path d="M40,18A16,16,0,1,0,15,31.2V43.9a2,2,0,0,0,3.1,1.7L24,41l5.9,4.6A2,2,0,0,0,33,43.9V31.2A16,16,0,0,0,40,18ZM12,18A12,12,0,1,1,24,30,12,12,0,0,1,12,18Z" />
                <path d="M20.6,23.4l-4-3.9a2.1,2.1,0,0,1-.2-2.7,1.9,1.9,0,0,1,3-.2L22,19.2l6.6-6.6a2,2,0,0,1,2.8,2.8l-8,8A1.9,1.9,0,0,1,20.6,23.4Z" />
              </g>
            </svg>
            <div>
              <h2>Machine Learning with Python</h2>
              <h3>by IBM</h3>
            </div>
            <a
              href="https://coursera.org/verify/YGGECXN3S18A"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Certificate"
            >
              <button>
                <i className="fas fa-external-link-alt"></i>
              </button>
            </a>
          </div>
          <div className="cert-status">
            <span className="completed">✔ Completed</span>
            <span className="platform">Coursera</span>
            <span className="year">📅 June 2025</span>
          </div>
          <p className="cert-description">
            Comprehensive course covering machine learning algorithms, data
            preprocessing, model evaluation, and practical implementation using
            Python libraries.
          </p>
          <div className="cert-skills">
            <strong>Skills Acquired:</strong>
            <div className="skill-tags">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>Data Analysis</span>
              <span>Scikit-learn</span>
              <span>Pandas</span>
              <span>NumPy</span>
            </div>
          </div>
          <p className="cert-id">Credential ID: YGGECXN3S18A</p>
        </div>

        {/* Certificate 2 - Tata Cybersecurity */}
        <div className="certificate-card">
          <div className="cert-header">
            <svg
              width="69"
              height="69"
              viewBox="-4.8 -4.8 57.6 57.6"
              xmlns="http://www.w3.org/2000/svg"
              fill="blue"
              stroke="blue"
              strokeWidth="0"
            >
              <g>
                <rect width="48" height="48" fill="none" />
                <path d="M40,18A16,16,0,1,0,15,31.2V43.9a2,2,0,0,0,3.1,1.7L24,41l5.9,4.6A2,2,0,0,0,33,43.9V31.2A16,16,0,0,0,40,18ZM12,18A12,12,0,1,1,24,30,12,12,0,0,1,12,18Z" />
                <path d="M20.6,23.4l-4-3.9a2.1,2.1,0,0,1-.2-2.7,1.9,1.9,0,0,1,3-.2L22,19.2l6.6-6.6a2,2,0,0,1,2.8,2.8l-8,8A1.9,1.9,0,0,1,20.6,23.4Z" />
              </g>
            </svg>
            <div>
              <h2>Tata Cybersecurity Analyst Simulation</h2>
            </div>
            <a
              href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_qGaQYn27FFXCSrES7_1747067087095_completion_certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Certificate"
            >
              <button>
                <i className="fas fa-external-link-alt"></i>
              </button>
            </a>
          </div>
          <div className="cert-status">
            <span className="completed">✔ Completed</span>
            <span className="platform">Forage</span>
            <span className="year">📅 May 2025</span>
          </div>
          <p className="cert-description">
            Completed a job simulation involving identity and access management
            (IAM) for Tata Consultancy Services. Delivered comprehensive
            documentation and presentations, showcasing the ability to
            communicate complex technical concepts effectively.
          </p>
          <div className="cert-skills">
            <strong>Skills Acquired:</strong>
            <div className="skill-tags">
              <span>IAM Fundamentals</span>
              <span>IAM strategy assessment</span>
              <span>IAM & Solution Design</span>
              <span>Platform integration</span>
            </div>
          </div>
          <p className="cert-id">Credential ID: QrkTGpLqKFWf7CvqG</p>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
