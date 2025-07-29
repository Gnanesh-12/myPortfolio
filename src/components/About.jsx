import React from "react";
import "../index.css";
import aboutImg from "../assets/about.jpg";

function About() {
  return (
    <section id="about" className="section">
      <div className="container-box">
        <h1>About Me</h1>
        <div className="about">
          <div className="about-image">
            <img
              src={aboutImg}
              alt="Gnanesh Khandavilli formal"
              className="responsive-img"
              loading="lazy"
            />
          </div>
          <div className="about-text">
            <p>
              Hi, I'm Gnanesh Khandavilli. I enjoy learning new things and
              finding creative ways to solve problems. I’m passionate about
              technology and especially interested in full stack development. I
              like working on both the front-end and back-end of websites and
              applications, and I enjoy seeing how all the parts come together
              to create something useful.
            </p>
            <p>
              I'm always eager to improve my skills by exploring new frameworks,
              tools, and technologies. I believe in continuous learning and
              enjoy experimenting with different ideas to create better
              solutions. I enjoy teamwork and love sharing ideas, but I'm also
              comfortable working independently and staying focused on tasks. My
              goal is to grow as a full stack developer and contribute to
              building meaningful digital products that make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
