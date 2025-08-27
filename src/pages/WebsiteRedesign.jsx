import React from "react";
import "../styles/WebsiteRedesign.css";

export default function WebsiteRedesign() {
  return (
    <div className="wr-page">
      {/* HERO */}
      <section className="wr-hero">
        <h1 className="wr-hero-title">Website Redesign & Maintenance</h1>
        <p className="wr-hero-subtitle">
          Got an outdated website?  We specialize in giving it a
          modern look, fixing performance issues, and ensuring <span>security,
          speed, and functionality</span> — so you don’t have to worry.
        </p>
      </section>

      {/* FEATURES */}
      <section className="wr-features">
        <h2 className="wr-section-title">Core Services We Deliver</h2>
        <p className="wr-section-intro">
          From redesign to continuous updates, here’s what we ensure for your
          business growth and smooth online presence:
        </p>

        <div className="wr-grid">
          <div className="wr-card">
            <h3>Modern Website Redesign</h3>
            <p>Clean, responsive layouts with improved navigation and UI/UX.</p>
          </div>
          <div className="wr-card">
            <h3>Performance Optimization</h3>
            <p>Boost loading speeds, mobile responsiveness, and SEO ranking.</p>
          </div>
          <div className="wr-card">
            <h3>Security Updates</h3>
            <p>SSL setup, malware protection, and regular patch updates.</p>
          </div>
          <div className="wr-card">
            <h3>Content & SEO</h3>
            <p>Fresh, optimized content and keyword targeting for visibility.</p>
          </div>
          <div className="wr-card">
            <h3>Bug Fixes</h3>
            <p>Immediate troubleshooting and error resolution with zero downtime.</p>
          </div>
          <div className="wr-card">
            <h3>Ongoing Maintenance</h3>
            <p>Monitoring, backups, and updates without you lifting a finger.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
