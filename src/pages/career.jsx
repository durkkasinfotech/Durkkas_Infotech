import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/career.css";

const CareerPage = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleApplyClick = () => {
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Inject current time into hidden input before sending
    formRef.current.time.value = new Date().toLocaleString();

    emailjs
      .sendForm(
        "service_scb88bd", // ✅ Your EmailJS Service ID
        "template_vqjv0f2", // ✅ Your EmailJS Template ID
        formRef.current, // ✅ Form reference
        "iTVRB1Q97TK1ApnXt" // ✅ Your EmailJS Public Key
      )
      .then(() => {
        alert("✅ Application sent successfully!");
        e.target.reset(); // Reset form after success
        setShowForm(false);
      })
      .catch((error) => {
        console.error("❌ Email sending failed:", error);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="career-container">
      {/* Hero Section */}
      <section className="career-hero">
        <h1>Join Our Team</h1>
        <p>
          Be a part of our journey to create innovative solutions for businesses
          worldwide. We are always looking for passionate individuals who want
          to make an impact.
        </p>
      </section>

      {/* Apply Now Button */}
      {!showForm && (
        <div className="apply-section">
          <button className="apply-btn" onClick={handleApplyClick}>
            Apply Now
          </button>
        </div>
      )}

      {/* Application Form */}
      {showForm && (
        <section className="apply-form-section">
          <h2>Job Application Form</h2>
          <form ref={formRef} className="apply-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="resume_link">Resume Link:</label>
            <input
              type="url"
              id="resume_link"
              name="resume_link"
              placeholder="Paste your Google Drive / Dropbox link"
              required
            />

            <label htmlFor="cover">Cover Letter:</label>
            <textarea id="cover" name="cover" rows="4" required></textarea>

            {/* Hidden Time Field */}
            <input type="hidden" name="time" />

            <div className="form-buttons">
              <button type="submit" className="submit-btn">
                Submit
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      )}
    </div>
  );
};

export default CareerPage;
