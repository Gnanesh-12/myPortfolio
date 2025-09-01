import React from "react";
import "../index.css";


function Education() {
  return (
    <section id="education" className="section">
      <h1>Education</h1>
      <div className="education-box">
        {/* College */}
        <div className="college">
          <img
            src="https://leavesinternational.com/wp-content/uploads/2022/12/amrita-vishwa.jpg"
            alt="Amrita Vishwa Vidyapeetham Logo"
            className="responsive-img"
            loading="lazy"
          />
          <h2>Bachelor of Technology - Computer Science</h2>
          <h3>Grade: 7.09 / 10.00</h3>
          <h4>Aug 2023 – Present</h4>
        </div>

        {/* Intermediate */}
        <div className="inter">
          <img
            src="https://files.prokerala.com/education/imgs/logo/college/sri-chaitanya-degree-college-chityal-44295.jpg"
            alt="Sri Chaitanya Logo"
            className="responsive-img"
            loading="lazy"
          />
          <h2>Intermediate XI & XII - MPC</h2>
          <h3>Grade: 936 / 1000</h3>
          <h3>JEE Mains Percentile - 95.8630053</h3>
          <h4>2021 – 2023</h4>
          <a href="../12th.pdf" target="_blank" rel="noopener noreferrer">
            <button aria-label="12th Marksheet">Intermediate Marksheet</button>
          </a>
          <a href = "../JEE.pdf" target="_blank" rel="noopener noreferrer">
            <button aria-label="JEE Scorecard">JEE Mains Scorecard</button>
          </a>
        </div>

        {/* School */}
        <div className="school">
          <img
            src="https://slateschool.in/wp-content/uploads/2023/10/slate-logo.png"
            alt="Slate School Logo"
            className="responsive-img"
            loading="lazy"
          />
          <h2>Class X</h2>
          <h3>Grade: 10.0 / 10.0</h3>
          <h4>2021</h4>
          <a href="../SSC.pdf" target="_blank" rel="noopener noreferrer">
            <button aria-label="SSC Marksheet">SSC Marksheet</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Education;
