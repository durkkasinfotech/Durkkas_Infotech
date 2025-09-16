// File: src/pages/WebsiteDevelopment.jsx
import React from "react";
import "../styles/WebsiteDevelopment.css";

const WebsiteDevelopment = () => {
  return (
    <div className="pt-5 mt-4 website-dev-page">
      {/* Hero Section */}
      <section className="website-dev-hero py-5 bg-primary text-white">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3 text-white">Website Development</h1>
          <p className="lead text-white">
            Building modern, adaptable, and scalable websites that grow with your business
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="website-dev-intro py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <h2 className="fw-bold mb-3">Crafting Websites That Deliver</h2>
              <p>
                At <span className="fw-semibold text-primary">Durkkas InfoTech</span>, 
                we don’t just build websites — we create powerful digital platforms 
                that strengthen your brand, engage your audience, and convert visitors 
                into customers. Our team blends creativity with the latest technologies 
                to deliver solutions that are sleek, fast, and user-focused.
              </p>
              <p>
                Whether you are launching a new business, scaling an e-commerce platform, 
                or revamping your corporate identity, we provide tailor-made web solutions 
                designed to meet your goals.
              </p>
            </div>

            <div className="col-lg-6">
              <div className="card shadow-sm border-0 h-100 website-dev-card">
                <div className="card-body p-4">
                  <h3 className="card-title text-primary mb-3">Our Development Approach</h3>
                  <p>
                    From brainstorming to deployment, we follow a structured approach 
                    that guarantees performance, aesthetics, and scalability.
                  </p>
                  <ul className="list-unstyled mt-3">
                    <li><i className="fas fa-check-circle text-success me-2"></i>Clear strategy & roadmap</li>
                    <li><i className="fas fa-check-circle text-success me-2"></i>Mobile-first design principles</li>
                    <li><i className="fas fa-check-circle text-success me-2"></i>SEO & speed optimization</li>
                    <li><i className="fas fa-check-circle text-success me-2"></i>Future-ready tech stack</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="website-dev-focus py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">From Concept to Launch, We Focus On</h2>
          <div className="row g-4">
            {[
              {
                icon: "fas fa-users",
                title: "User-Centric Design",
                text: "Crafting intuitive and engaging interfaces that provide a seamless experience on all devices."
              },
              {
                icon: "fas fa-tachometer-alt",
                title: "High Performance & Speed",
                text: "Every page is optimized for lightning-fast loading and minimal bounce rates."
              },
              {
                icon: "fas fa-mobile-alt",
                title: "Responsive Development",
                text: "Websites that adapt flawlessly across desktops, tablets, and smartphones."
              },
              {
                icon: "fas fa-palette",
                title: "Brand Integration",
                text: "Every visual element, layout, and content reflects your brand identity."
              },
              {
                icon: "fas fa-lock",
                title: "Scalability & Security",
                text: "Robust architecture built to grow with your business, with top-notch security."
              }
            ].map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100 shadow-sm border-0 text-center p-4 website-dev-feature">
                  <div className="mb-3">
                    <i className={`${item.icon} fa-3x text-primary`}></i>
                  </div>
                  <h5 className="fw-semibold">{item.title}</h5>
                  <p className="text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Note Section */}
      <section className="website-dev-final py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why Settle for Just a Website?</h2>
          <p className="lead mb-4">
            With Durkkas InfoTech, your website won’t just exist — it will perform, 
            convert, and grow with your business. We blend design, strategy, and 
            innovation to ensure your digital presence stays one step ahead.
          </p>
          <button className="btn btn-primary btn-lg">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;
