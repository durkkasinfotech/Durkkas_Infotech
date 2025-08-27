// src/pages/SocialMediaMarketing.jsx
import React from "react";
import "../styles/SocialMediaMarketing.css";

const SocialMediaMarketing = () => {
  return (
    <div className="smm-page">
      {/* HERO */}
      <section className="smm-hero">
        <h1 className="smm-hero-title">Social Media Marketing</h1>
        <p className="smm-hero-subtitle">
          At <span>Durkkas InfoTech</span>, we go beyond just posting — we
           craft strategies that inspire conversations, build
          communities, and drive measurable business growth.
        </p>
      </section>

      {/* WHY SOCIAL MEDIA */}
      <section className="smm-why">
        <h2 className="smm-section-title">Why Social Media Matters?</h2>
        <p className="smm-section-text">
          Social platforms are where your customers spend most of their time. 
          From brand discovery to final purchase, your presence determines how 
          audiences perceive and trust your business. Without a clear plan, 
          your brand risks being invisible in the digital crowd.
        </p>
      </section>

      {/* CORE SERVICES */}
      <section className="smm-services">
        <h2 className="smm-section-title">What We Deliver</h2>
        <div className="smm-grid">
          <div className="smm-card">
            <h3>📊 Social Media Strategy & Planning</h3>
            <p>
              Tailored blueprints aligned with your goals — from awareness to
              conversions. We define KPIs, choose the right platforms, and 
              ensure sustainable growth.
            </p>
          </div>
          <div className="smm-card">
            <h3>🎨 Content Creation & Management</h3>
            <p>
              Posts, reels, carousels, videos, and stories designed to hook 
              your audience. Every piece reflects your brand’s voice and 
              strengthens recognition.
            </p>
          </div>
          <div className="smm-card">
            <h3>💰 Paid Campaigns & Advertisements</h3>
            <p>
              ROI-driven ads across Facebook, Instagram, LinkedIn, and YouTube. 
              We handle audience targeting, creatives, A/B testing, and budget optimization.
            </p>
          </div>
          <div className="smm-card">
            <h3>🤝 Community Engagement</h3>
            <p>
              Build authentic relationships with followers. Through 
              timely interactions, comments, and customer support, we turn 
              fans into loyal advocates.
            </p>
          </div>
        </div>
      </section>

      {/* ANALYTICS */}
      <section className="smm-analytics">
        <h2 className="smm-section-title">📈 Performance Analytics</h2>
        <p className="smm-section-text">
          Every strategy is data-driven. We provide reports with metrics like 
          reach, engagement, conversions, and ROI. Insights help us 
          continuously refine campaigns for maximum results.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="smm-benefits">
        <h2 className="smm-section-title">Why Choose Durkkas InfoTech?</h2>
        <div className="smm-grid smm-benefit-grid">
          <div className="smm-card smm-benefit-card">
            <h3>🌍 Increased Visibility</h3>
            <p>
              Expand your brand presence across platforms and reach the right 
              audience with precision targeting.
            </p>
          </div>
          <div className="smm-card smm-benefit-card">
            <h3>⚡ Faster Growth</h3>
            <p>
              Accelerate brand growth with campaigns that generate leads and 
              boost customer loyalty.
            </p>
          </div>
          <div className="smm-card smm-benefit-card">
            <h3>🔒 Brand Trust</h3>
            <p>
              Build credibility with consistent, engaging messaging that keeps 
              your brand top of mind.
            </p>
          </div>
          <div className="smm-card smm-benefit-card">
            <h3>📊 Data-Driven Results</h3>
            <p>
              We track everything — so you always know the value your campaigns 
              bring to the business.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="smm-cta bg-primary">
        <h2 className="smm-cta-title text-white">
          🚀 Ready to Amplify Your Social Media Presence?
        </h2>
        <p className="smm-cta-text text-white">
          Let’s create strategies that don’t just gain followers but convert 
          them into customers and lifelong brand advocates.
        </p>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;
