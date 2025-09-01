// src/pages/ECommerce.jsx
import React from "react";
import "../styles/ECommerce.css";

const ECommerce = () => {
  return (
    <div className="ecommerce-page bg-primary">
      {/* Page Header */}
      <section className="ecommerce-hero">
        <div className="container text-center">
          <h1 className="hero-title">E-Commerce Solutions</h1>
          <p className="hero-subtitle">
            At <span className="highlight">Durkkas InfoTech</span>, we believe
            online selling should be simple, scalable, and highly profitable.  
            Our custom e-commerce solutions go beyond just building an online
            store — we craft immersive shopping experiences that convert visitors
            into loyal customers and fuel your long-term growth.
          </p>
        </div>
      </section>

      {/* Section: Features */}
      <section className="ecommerce-section">
        <div className="container">
          <h2 className="section-title">Core Features We Deliver</h2>
          <p className="section-intro">
            Every successful e-commerce platform requires a strong foundation.  
            Here are the features we integrate to make sure your store not only
            launches successfully but also scales effortlessly as your business
            grows:
          </p>
          <ul className="feature-grid">
            <li className="feature-card">
              <h3>Custom E-Commerce Website Development</h3>
              <p>
                Tailored website designs that reflect your brand’s personality,  
                creating unique and engaging shopping experiences.
              </p>
            </li>

            <li className="feature-card">
              <h3>Secure Payment Gateways</h3>
              <p>
                Integrations with trusted providers like PayPal, Razorpay,  
                Stripe, and UPI — ensuring seamless and secure transactions.
              </p>
            </li>
            <li className="feature-card">
              <h3>Smart Product Management</h3>
              <p>
                Advanced product filtering, categorization, and search tools for
                a streamlined shopping journey.
              </p>
            </li>
            <li className="feature-card">
              <h3>Shopping Cart & Checkout Optimization</h3>
              <p>
                Frictionless checkout processes designed to reduce cart
                abandonment and maximize conversions.
              </p>
            </li>
            <li className="feature-card">
              <h3>Inventory & Order Management</h3>
              <p>
                Real-time stock updates, automated order confirmations, and
                smooth delivery tracking.
              </p>
            </li>
            <li className="feature-card">
              <h3>Mobile-First Experience</h3>
              <p>
                A fully responsive design that ensures your store looks stunning
                and performs seamlessly on all devices.
              </p>
            </li>
            <li className="feature-card">
              <h3>Performance Optimization</h3>
              <p>
                SEO-friendly, lightning-fast, and optimized code for a smooth
                shopping journey that search engines love.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Section: Why Choose Us */}
      <section className="ecommerce-section alt-bg">
        <div className="container">
          <h2 className="section-title">Why Choose Our E-Commerce Solutions?</h2>
          <p className="section-intro">
            Partnering with <span className="highlight">Durkkas InfoTech</span>{" "}
            means you get more than just a website. You gain a digital partner
            committed to your growth, performance, and customer satisfaction.
          </p>
          <ul className="feature-grid">
            <li className="feature-card">
              <h3>User-Centric Design</h3>
              <p>
                We create a frictionless shopping journey that encourages repeat
                purchases and builds loyalty.
              </p>
            </li>
            <li className="feature-card">
              <h3>Scalable Architecture</h3>
              <p>
                Future-ready systems built to handle seasonal spikes, large
                product catalogs, and evolving technologies.
              </p>
            </li>
            <li className="feature-card">
              <h3>Conversion-Focused Approach</h3>
              <p>
                Every detail, from product pages to checkout, is fine-tuned to
                maximize sales and ROI.
              </p>
            </li>
            <li className="feature-card">
              <h3>Ongoing Support & Maintenance</h3>
              <p>
                Regular updates, strong security patches, and dedicated technical
                assistance to keep your store running flawlessly.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Closing */}
      <section className="ecommerce-closing bg-primary">
        <div className="container text-center">
          <h2 className="closing-title">Ready to Elevate Your Online Business?</h2>
          <p className="closing-text">
            With our E-Commerce expertise, your store won’t just exist — it will{" "}
            <span className="highlight">thrive</span>.  
            From intuitive design to powerful back-end systems, we ensure your
            digital storefront delivers unmatched value and an unforgettable
            shopping experience.
          </p>
          {/* <button className="btn-primary">Get Your Free Consultation</button> */}
        </div>
      </section>
    </div>
  );
};

export default ECommerce;
