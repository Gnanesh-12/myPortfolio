import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import "../index.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gnanesh",
        "template_3yhb0xi",
        form.current,
        "83uv0IvcS4tpke3bP"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Something went wrong: " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="section">
      <motion.h2
        className="section-title"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="highlight">G</span>et In Touch
      </motion.h2>

      <div className="contact-wrapper">
        {/* Left Side */}
        <motion.div
          className="contact-info"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Let's Connect</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.8rem" }}>
              I'm actively seeking opportunities, projects, and collaborations.
              Feel free to reach out to me!
            </p>
          </div>

          <a href="tel:+919701685880" className="info-card glass-panel">
            <div className="icon-box"><Phone size={24} /></div>
            <div className="info-text">
              <h3>Phone</h3>
              <p>+91 9701685880</p>
            </div>
          </a>

          <a href="mailto:gnaneshkhandavilli@gmail.com" className="info-card glass-panel">
            <div className="icon-box"><Mail size={24} /></div>
            <div className="info-text">
              <h3>Email</h3>
              <p>gnaneshkhandavilli@gmail.com</p>
            </div>
          </a>

          <div className="info-card glass-panel">
            <div className="icon-box"><MapPin size={24} /></div>
            <div className="info-text">
              <h3>Location</h3>
              <p>Hyderabad, India</p>
            </div>
          </div>

          <div className="info-card glass-panel" style={{ background: "rgba(16, 185, 129, 0.1)", borderColor: "rgba(16, 185, 129, 0.2)" }}>
            <div style={{ width: "12px", height: "12px", background: "#10b981", borderRadius: "50%", boxShadow: "0 0 10px #10b981" }}></div>
            <div className="info-text">
              <h3 style={{ color: "#10b981" }}>Available for Opportunities</h3>
              <p style={{ fontSize: "1.4rem" }}>Open to internships, part-time roles, and collaborations.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side (Form) */}
        <motion.div
          className="glass-panel contact-form"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Send a Message</h2>
          <form ref={form} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="from_name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="from_email" placeholder="john@example.com" required />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" placeholder="Project inquiry..." required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="Hello, I'd like to talk about..." required></textarea>
            </div>

            <button className="btn-primary" type="submit" style={{ alignSelf: "flex-start", marginTop: "1rem" }}>
              <Send size={18} /> Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
