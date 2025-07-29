import React from "react";
import "../index.css";

function Contact() {
  return (
    <section id="contact" className="section">
      <h1>Get In Touch</h1>
      <div className="contact-wrapper">
        {/* Left Side */}
        <div className="contact-left-box">
          <h2>Let's Connect</h2>
          <p>
            I'm currently pursuing my B.Tech in Computer Science and actively
            seeking opportunities, projects, and collaborations. Feel free to
            reach out!
          </p>

          <div className="contact-info-card">
            <a href="tel:+919701685880" className="contact-link">
              <i className="fas fa-phone contact-icon"></i>
              <div>
                <h2>Phone</h2>
                <p>+91 9701685880</p>
              </div>
            </a>
          </div>

          <div className="contact-info-card">
            <a
              href="mailto:gnaneshkhandavilli@gmail.com"
              className="contact-link"
            >
              <i className="fas fa-envelope contact-icon"></i>
              <div>
                <h2>Email</h2>
                <p>gnaneshkhandavilli@gmail.com</p>
              </div>
            </a>
          </div>

          <div className="contact-info-card">
            <i className="fas fa-map-marker-alt contact-icon"></i>
            <div>
              <h3>Location</h3>
              <p>Hyderabad, India</p>
            </div>
          </div>

          <div className="availability-box">
            <span className="dot"></span>
            <div>
              <strong>Available for Opportunities</strong>
              <p>
                Open to internships, part-time roles, and collaborative software
                projects.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="contact-right-box">
          <h2>Send a Message</h2>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="What's this about?" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell me about your project or opportunity..." />
            </div>
            <button className="send-btn" type="submit">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
