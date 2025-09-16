import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Services = () => {
  return (
    <div className="pt-5 mt-4">
      {/* Services Hero */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-4 text-white">Our Services</h1>
              <p className="lead">Comprehensive digital solutions tailored to your business needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm service-card">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="fas fa-laptop-code fa-4x text-primary"></i>
                  </div>
                  <h4 className="card-title">Website Development</h4>
                  <p className="card-text">
                    We design adaptable, contemporary websites that are suited to your company's objectives and brand. 
                    We prioritise a smooth user experience, speed, and clean design from conception to launch.
                  </p>
                  <Link to="/website-development" className="btn btn-outline-primary">Learn More</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm service-card">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="fas fa-shopping-cart fa-4x text-primary"></i>
                  </div>
                  <h4 className="card-title">E-Commerce Solutions</h4>
                  <p className="card-text">
                    Use robust, performance-driven e-commerce platforms to launch your company online. 
                    We guarantee conversion-driven design, safe payment gateways, and easy navigation.
                  </p>
                  <Link to="/e-commerce" className="btn btn-outline-primary">Learn More</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm service-card">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="fas fa-sync-alt fa-4x text-primary"></i>
                  </div>
                  <h4 className="card-title">Website Redesign & Maintenance</h4>
                  <p className="card-text">
                    A website that is outdated? We also take care of routine maintenance and give it a new look. 
                    Maintain complete functionality, security, and updates without exerting any effort.
                  </p>
                  <Link to="/website-redesign" className="btn btn-outline-primary">Learn More</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm service-card">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="fas fa-share-alt fa-4x text-primary"></i>
                  </div>
                  <h4 className="card-title">Social Media Marketing</h4>
                  <p className="card-text">
                    Increase your online visibility by implementing smart social media strategies and planning. 
                    We oversee advertisements, creatives, and content to support the growth and engagement of your business.
                  </p>
                  <Link to="/social-media-marketing" className="btn btn-outline-primary">Learn More</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm service-card">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="fas fa-paint-brush fa-4x text-primary"></i>
                  </div>
                  <h4 className="card-title">Creative Design</h4>
                  <p className="card-text">
                    We ensure that your brand gets the attention it deserves. 
                    We create images that engage and convert, whether they are posters, logos, or advertising creatives.
                  </p>
                  <Link to="/creative-design" className="btn btn-outline-primary">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section id="website-dev" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Website Development</h2>
              <p className="mb-4">
                At Durkkas InfoTech, we think your website represents your brand's digital identity, not just a presence. 
                For this reason, we create and design websites that are both aesthetically pleasing and very functional.
              </p>
              <p className="mb-4">
                Our speciality is developing cutting-edge, mobile-responsive websites that provide consumers with a seamless, 
                intuitive experience, load quickly, and function seamlessly on all devices. We prioritise clear design, 
                easy-to-use navigation, and robust backend performance whether you're starting a new company or updating an old website.
              </p>
              <p>
                Every website we create, from concept to coding, is customised to represent your brand, engage your audience, 
                and confidently and clearly support your business objectives.
              </p>
            </div>
              <div className="col-lg-6">
                <div className="card bg-primary text-white shadow-lg" style={{ background: 'var(--primary-blue) !important' }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">
                      <i className="fas fa-star me-2"></i>Key Features:
                    </h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="fas fa-check me-2 text-white"></i> Mobile-responsive design
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check me-2 text-white"></i> Fast loading speeds
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check me-2 text-white"></i> SEO optimized
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check me-2 text-white"></i> User-friendly navigation
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check me-2 text-white"></i> Custom brand representation
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check me-2 text-white"></i> Secure and reliable
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section id="ecommerce" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <h2 className="fw-bold mb-4">E-Commerce Solutions</h2>
              <p className="mb-4">
                Online sales ought to be easy, and we at Durkkas InfoTech make sure they are. We create distinctive 
                e-commerce systems that are easy to use, client-focused and designed to increase sales.
              </p>
              <p className="mb-4">
                Our solutions range from secure payment gateways and inventory management to cart systems and product 
                listing designs. We design a system that benefits both you and your clients, whether you're just starting 
                out in the internet market or trying to grow.
              </p>
              <p>
                With the help of performance optimisation, mobile responsiveness, and a solid user experience, 
                your online store will convert rather than solely exist.
              </p>
            </div>
              <div className="col-lg-6 order-lg-1">
                <div className="card bg-success text-white shadow-lg" style={{ background: 'var(--bs-success) !important' }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">
                      <i className="fas fa-shopping-cart me-2"></i>E-Commerce Features:
                    </h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="fas fa-check me-2 text-white"></i> Secure payment gateways
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check me-2 text-white"></i> Inventory management
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check me-2 text-white"></i> Shopping cart optimization
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check me-2 text-white"></i> Product catalog design
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check me-2 text-white"></i> Order tracking system
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check me-2 text-white"></i> Mobile commerce ready
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section id="redesign" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Website Redesign & Maintenance</h2>
              <p className="mb-4">
                Your brand can be impacted from a sluggish or antiquated website, but we can help. We at Durkkas InfoTech 
                provide comprehensive website redesign services to give your website a new, contemporary, and useful appearance.
              </p>
              <p className="mb-4">
                We overhaul, optimise loading speed, update structure, and enhance layout while keeping your company and 
                current trends in mind. Not only that, but we also offer continuous website maintenance to keep your site 
                safe, error-free, and current.
              </p>
              <p>
                You prioritise on your business. We'll ensure that your website functions properly at all times.
              </p>
            </div>
              <div className="col-lg-6">
                <div className="card bg-warning text-dark shadow-lg" style={{ background: 'var(--bs-warning) !important' }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">
                      <i className="fas fa-tools me-2"></i>Redesign & Maintenance:
                    </h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="fas fa-check me-2 text-dark"></i> Modern design updates
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check me-2 text-dark"></i> Performance optimization
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check me-2 text-dark"></i> Security updates
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check me-2 text-dark"></i> Content management
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check me-2 text-dark"></i> Regular backups
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check me-2 text-dark"></i> 24/7 monitoring
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Contact Query Box */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card">
                <div className="card-body p-4">
                  <h3 className="card-title text-white text-center mb-4">Get a Quote for Your Project</h3>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label text-white">Name *</label>
                        <input type="text" className="form-control" id="name" required />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="contact" className="form-label text-white">Contact Number *</label>
                        <input type="tel" className="form-control" id="contact" required />
                      </div>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label text-white">e-Mail ID *</label>
                        <input type="email" className="form-control" id="email" required />
                      </div>
                      <div className="col-12">
                        <label htmlFor="service" className="form-label text-white">Service Required *</label>
                        <select className="form-control" id="service" required>
                          <option value="">Select a service</option>
                          <option value="website">Website Development</option>
                          <option value="ecommerce">E-Commerce Solutions</option>
                          <option value="redesign">Website Redesign</option>
                          <option value="maintenance">Website Maintenance</option>
                          <option value="social-media">Social Media Marketing</option>
                          <option value="creative">Creative Design</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label htmlFor="requirement" className="form-label text-white">Tell your Requirement *</label>
                        <textarea className="form-control" id="requirement" rows="4" required></textarea>
                      </div>
                      <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary btn-lg">Get Quote</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
