import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";
import "../index.css";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_gnanesh",
        "template_3yhb0xi",
        form.current,
        "83uv0IvcS4tpke3bP"
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus(null), 5000);
        },
        (error) => {
          console.error("Emailjs error:", error);
          setStatus("error");
          setTimeout(() => setStatus(null), 5000);
        }
      );
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="contact" className="section">
      <motion.div
        className="contact-layout"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
      >
        {/* Left Side: Typography & Info */}
        <motion.div variants={fadeUp} className="flex-column gap-3">
          <div>
            <h2 className="hero-title" style={{ fontSize: "clamp(3.6rem, 5vw, 4.8rem)" }}>
              Let's build something.
            </h2>
            <p className="hero-subtitle">
              I am actively seeking opportunities, internships, and collaborations. If you have a project in mind or just want to say hi, my inbox is open.
            </p>
          </div>

          <div className="flex-column gap-2 mt-4">
            <div>
              <h3 className="text-muted" style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Email</h3>
              <a href="mailto:gnaneshkhandavilli@gmail.com" className="text-primary" style={{ fontSize: "1.8rem", textDecoration: "underline", textUnderlineOffset: "4px" }}>
                gnaneshkhandavilli@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-muted" style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Phone</h3>
              <p className="text-primary" style={{ fontSize: "1.8rem" }}>+91 9701685880</p>
            </div>
            <div>
              <h3 className="text-muted" style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Location</h3>
              <p className="text-primary" style={{ fontSize: "1.8rem" }}>Hyderabad, India</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Clean Form */}
        <motion.div variants={fadeUp}>
          <form ref={form} onSubmit={sendEmail} className="flex-column gap-2">
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="from_name" placeholder="Jane Doe" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="from_email" placeholder="jane@example.com" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="How can I help you?" required></textarea>
            </div>

            <button
              className="btn-primary"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"} <ArrowRight size={16} />
            </button>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{ display: "flex", alignItems: "center", gap: "1rem", color: "#10b981", marginTop: "1rem", fontSize: "1.4rem" }}
                >
                  <CheckCircle size={18} /> Message sent successfully.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{ display: "flex", alignItems: "center", gap: "1rem", color: "#ef4444", marginTop: "1rem", fontSize: "1.4rem" }}
                >
                  <XCircle size={18} /> Something went wrong. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
