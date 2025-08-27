import React from "react";
import "../styles/CreativeDesign.css";

const CreativeDesign = () => {
  return (
    <div className="creative-design-container ">
      <div className="creative-design-content">
        {/* Title */}
        <h1 className="creative-design-title">Creative Design</h1>
        <p className="creative-design-description ">
          We ensure that your brand gets the attention it deserves. Our creative
          design team crafts visually compelling materials—whether it’s posters,
          logos, or advertising creatives—that engage your audience and convert
          them into loyal customers.
        </p>

        {/* Feature Grid */}
        <div className="creative-design-grid">
          <div className="creative-design-card">
            <h3 className="creative-design-card-title">Logo Design</h3>
            <p className="creative-design-card-text">
              Unique and memorable logos that reflect your brand identity and
              values.
            </p>
          </div>
          <div className="creative-design-card">
            <h3 className="creative-design-card-title">Posters & Banners</h3>
            <p className="creative-design-card-text">
              Eye-catching visuals for events, promotions, and advertisements
              designed to captivate your audience.
            </p>
          </div>
          <div className="creative-design-card">
            <h3 className="creative-design-card-title">Advertising Creatives</h3>
            <p className="creative-design-card-text">
              Designs that not only look good but also drive results across
              digital and print campaigns.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="creative-design-cta">
          <a href="/contact" className="creative-design-button">
            Let’s Create Something Amazing
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreativeDesign;
