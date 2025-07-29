import React from "react";
import "../index.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {/* Snake Game Project */}
        <div className="project-card">
          <h3 className="project-title">Snake Game - Arduino</h3>
          <p className="project-desc">
            A simple implementation of the classic Snake Game using an Arduino
            UNO, a 20x4 I2C LCD, and an IR remote for controlling the snake. The
            game displays the snake and food on the LCD, allows movement in four
            directions, tracks the score, and ends the game when the snake hits
            the wall or itself. It demonstrates embedded game development using
            limited hardware resources, IR signal decoding, and real-time
            display updates.
          </p>
          <p><strong>Tech Used:</strong></p>
          <div className="project-tech">
            <span>Arduino</span>
            <span>C</span>
            <span>IR Remote</span>
            <span>LCD Display</span>
          </div>
          <div className="projects-links">
            <a
              href="https://github.com/Gnanesh-12/Snake_Game_Arduino"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.tinkercad.com/things/5tlQOiRzpHE-snake-game/editel?sharecode=JfB1FTOso6Gd5g--RJb92V5aDSTSZprCuDUICd0cfD4"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </div>
        </div>

        {/* Attendance Calculator Project */}
        <div className="project-card">
          <h3 className="project-title">Attendance Percentage Calculator</h3>
          <p className="project-desc">
            Built a simple web-based tool that helps students track and manage
            their class attendance. By entering the number of classes attended
            and the total number of classes, along with a required attendance
            percentage, the app calculates whether the student can afford to
            miss future classes or how many more classes they need to attend to
            meet the target. It provides a clear textual summary and a pie chart
            visualization of present vs. absent days, making it intuitive and
            helpful for academic planning.
          </p>
          <p><strong>Tech Used:</strong></p>
          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
          <div className="projects-links">
            <a
              href="https://github.com/Gnanesh-12/-Attendance-percentage-calculator"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://attendancecalculatorco.on.drv.tw/attendancecalculator.com/attendance.html"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
