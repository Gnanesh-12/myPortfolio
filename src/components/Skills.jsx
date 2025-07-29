import React, { useEffect } from "react";
import "../index.css";

function Skills() {
  useEffect(() => {
    const showSkill = (skillId) => {
      document.querySelectorAll(".skill-box").forEach((box) =>
        box.classList.remove("active-box")
      );
      const selectedBox = document.getElementById(skillId);
      if (selectedBox) selectedBox.classList.add("active-box");

      document.querySelectorAll(".skillstype button").forEach((btn) => {
        btn.classList.remove("active-tab");
        if (btn.getAttribute("data-target") === skillId) {
          btn.classList.add("active-tab");
        }
      });
    };

    document.querySelectorAll(".skillstype button").forEach((btn) => {
      btn.addEventListener("click", () =>
        showSkill(btn.getAttribute("data-target"))
      );
    });

    showSkill("programming");

    return () => {
      document.querySelectorAll(".skillstype button").forEach((btn) => {
        btn.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <section id="skills" className="section">
      <div className="skill-container">
        <h1>Skills</h1>
        <div className="skillstype">
          <button className="tab-button active-tab" data-target="programming">
            Programming
          </button>
          <button className="tab-button" data-target="frontend">
            Frontend
          </button>
          <button className="tab-button" data-target="backend">
            Backend
          </button>
          <button className="tab-button" data-target="database">
            Database
          </button>
          <button className="tab-button" data-target="frameworks">
            Frameworks
          </button>
          <button className="tab-button" data-target="os">OS</button>
        </div>

        <div className="skills-container">
          {/* Programming */}
          <div className="skill-box active-box" id="programming">
            <SkillItem img="https://img.icons8.com/color/96/c-programming.png" name="C" />
            <SkillItem img="https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png" name="Java" />
            <SkillItem img="https://img.icons8.com/color/96/python.png" name="Python" />
          </div>

          {/* Frontend */}
          <div className="skill-box" id="frontend">
            <SkillItem img="https://img.icons8.com/color/96/html-5--v1.png" name="HTML" />
            <SkillItem img="https://img.icons8.com/color/96/css3.png" name="CSS" />
            <SkillItem img="https://img.icons8.com/color/96/javascript.png" name="JavaScript" />
            <SkillItem img="https://img.icons8.com/color/96/react-native.png" name="ReactJS" />
          </div>

          {/* Backend */}
          <div className="skill-box" id="backend">
            <SkillItem img="https://img.icons8.com/color/96/nodejs.png" name="NodeJS" />
          </div>

          {/* Database */}
          <div className="skill-box" id="database">
            <SkillItem img="https://img.icons8.com/color/96/mysql-logo.png" name="MySQL" />
            <SkillItem img="https://img.icons8.com/color/96/mongodb.png" name="MongoDB" />
          </div>

          {/* Frameworks */}
          <div className="skill-box" id="frameworks">
            <SkillItem img="https://www.cisworld.lk/storage/technologies/express-js-1.jpg" name="ExpressJS" />
          </div>

          {/* OS */}
          <div className="skill-box" id="os">
            <SkillItem img="https://img.icons8.com/color/96/windows-10.png" name="Windows" />
            <SkillItem img="https://img.icons8.com/color/96/linux.png" name="Linux" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillItem({ img, name }) {
  return (
    <div className="skill-item">
      <img src={img} alt={name} />
      <span>
        <h2>{name}</h2>
      </span>
    </div>
  );
}

export default Skills;
