import React from "react";
import "../styles/career.css";

function CareerPage() {
  return (
    <div className="career-container">
      {/* Hero Section */}
      <section className="career-hero">
        <h1>Join Our Team</h1>
        <p>Be a part of our journey to create innovative solutions for businesses worldwide.</p>
      </section>

      {/* Why Work With Us */}
      <section className="career-why">
        <h2>Why Work With Us?</h2>
        <div className="career-grid">
          <div className="career-card">
            <h3>🌍 Global Impact</h3>
            <p>Work on projects that reach people across the world.</p>
          </div>
          <div className="career-card">
            <h3>💡 Innovation First</h3>
            <p>We value creativity and support bold new ideas.</p>
          </div>
          <div className="career-card">
            <h3>📈 Career Growth</h3>
            <p>Grow with training, mentorship, and leadership opportunities.</p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="career-openings">
        <h2>Current Openings</h2>
        <div className="job-listing">
          <div className="job-card">
            <h3>Frontend Developer</h3>
            <p>React / TailwindCSS / Responsive Design</p>
            <button className="apply-btn">Apply Now</button>
          </div>
          <div className="job-card">
            <h3>Backend Developer</h3>
            <p>Django / Node.js / API Development</p>
            <button className="apply-btn">Apply Now</button>
          </div>
          <div className="job-card">
            <h3>UI/UX Designer</h3>
            <p>Figma / Adobe XD / Creative Design</p>
            <button className="apply-btn">Apply Now</button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="career-cta">
        <h2>Ready to Shape the Future?</h2>
        <p>Send your resume to <a href="mailto:careers@mycompany.com">careers@mycompany.com</a></p>
      </section>
    </div>
  );
}

export default CareerPage;
