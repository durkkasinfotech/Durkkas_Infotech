import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="pt-5 mt-4">
      {/* Contact Hero */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-4 display-4 fw-bold mb-4 text-white">Contact Us</h1>
              <p className="lead text-white">Let's discuss your digital transformation journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-5 gradient-bg text-white">
  <div className="container">
    <div className="row">

      {/* Google Map with clickable link */}
      <div className="col-lg-4 mb-4">
        <div className="card h-100 text-center">
          <a
            href="https://maps.app.goo.gl/DGK1dvb78uWb7wUu7"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", textDecoration: "none" }}
          >
            <div className="card-body p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.8084258408474!2d78.09405167454602!3d9.517828890523952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b013fa3481d9d01%3A0x16f7ff7b2f5b0c9e!2sDurkkas%20InfoTech!5e0!3m2!1sen!2sin!4v1691489234567!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0, pointerEvents: "none" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Durkkas InfoTech Location"
              ></iframe>
            </div>
          </a>
        </div>
      </div>

      {/* Address Card */}
      <div className="col-lg-4 mb-4">
        <div className="card h-100 text-center d-flex justify-content-center align-items-center">
          <div className="card-body p-4">
            <div className="mb-3">
              <i className="fas fa-map-marker-alt fa-3x text-primary"></i>
            </div>
            <h5 className="card-title">Our Location</h5>
            <p className="card-text mb-0">
              Durkkas InfoTech<br />
              58, MDR Nagar North,<br />
              SBK College Road,<br />
              Aruppukottai - 626101<br />
              Virudhunagar District<br />
              Tamil Nadu, India
            </p>
          </div>
        </div>
      </div>

      {/* Email + Phone Card */}
      <div className="col-lg-4 mb-4">
        <div className="card h-100 text-center d-flex justify-content-center align-items-center">
          <div className="card-body p-4">
            <div className="mb-3">
              <i className="fas fa-envelope fa-3x text-primary"></i>
            </div>
            <h5 className="card-title">Get in Touch</h5>
            <p className="card-text">
              <a href="mailto:contact@durkkasinfo.tech" className="text-decoration-none">
              EMAIL:  contact@durkkasinfo.tech
              </a>
            </p>
            <p className="card-text text-muted">We'll respond within 24 hours</p>

            <div className="mb-3 mt-4">
              <i className="fas fa-phone fa-3x text-primary"></i>
            </div>
            <p className="card-text">
              <a href="tel:+919361535050" className="text-decoration-none">
               Mobile Number: +91 93 61 53 50 50 <br/>Tele-Phone No   :  04562690272
              </a>
            </p>
            <p className="card-text text-muted">Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>

    {/* Google Review Button (centered) */}
    <div className="row mt-4">
      <div className="col-12 text-center">
        <a
          href="https://g.page/r/CbRRYM8OOAlGEAE/review"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg"
        >
          Leave us a Google Review
        </a>
      </div>
    </div>
  </div>
</section>



      {/* Contact Form */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow">
                <div className="card-body p-5">
                  <h2 className="card-title text-center mb-4">Send Us a Message</h2>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First Name *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="firstName" 
                          placeholder="Enter your first name"
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last Name *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="lastName" 
                          placeholder="Enter your last name"
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email Address *</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          id="email" 
                          placeholder="your.email@example.com"
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone Number *</label>
                        <input 
                          type="tel" 
                          className="form-control" 
                          id="phone" 
                          placeholder="+91 XXXXX XXXXX"
                          required 
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="company" className="form-label">Company Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="company" 
                          placeholder="Your company name (optional)"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="service" className="form-label">Service Required *</label>
                        <select className="form-select" id="service" required>
                          <option value="">Select a service</option>
                          <option value="website-development">Website Development</option>
                          <option value="ecommerce-solutions">E-Commerce Solutions</option>
                          <option value="website-redesign">Website Redesign</option>
                          <option value="website-maintenance">Website Maintenance</option>
                          <option value="social-media-marketing">Social Media Marketing</option>
                          <option value="creative-design">Creative Design</option>
                          <option value="consultation">Free Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label htmlFor="budget" className="form-label">Project Budget</label>
                        <select className="form-select" id="budget">
                          <option value="">Select budget range (optional)</option>
                          <option value="under-50k">Under ₹50,000</option>
                          <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                          <option value="1l-2l">₹1,00,000 - ₹2,00,000</option>
                          <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
                          <option value="above-5l">Above ₹5,00,000</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label htmlFor="timeline" className="form-label">Project Timeline</label>
                        <select className="form-select" id="timeline">
                          <option value="">Select timeline (optional)</option>
                          <option value="urgent">ASAP (Rush Job)</option>
                          <option value="1-month">Within 1 Month</option>
                          <option value="2-3-months">2-3 Months</option>
                          <option value="3-6-months">3-6 Months</option>
                          <option value="flexible">Flexible Timeline</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">Tell us about your project *</label>
                        <textarea 
                          className="form-control" 
                          id="message" 
                          rows="5" 
                          placeholder="Please describe your project requirements, goals, and any specific features you need..."
                          required
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="newsletter" 
                          />
                          <label className="form-check-label" htmlFor="newsletter">
                            I would like to receive updates about Durkkas InfoTech services and industry insights
                          </label>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary btn-lg px-5">
                          <i className="fas fa-paper-plane me-2"></i>
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="fw-bold">Why Get In Touch?</h2>
              <p className="lead">We're here to help your business thrive in the digital world</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="mb-3">
                  <i className="fas fa-comments fa-3x text-primary"></i>
                </div>
                <h5>Free Consultation</h5>
                <p>Get expert advice on your digital strategy at no cost</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="mb-3">
                  <i className="fas fa-calculator fa-3x text-primary"></i>
                </div>
                <h5>Custom Quote</h5>
                <p>Receive a detailed proposal tailored to your needs</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="mb-3">
                  <i className="fas fa-rocket fa-3x text-primary"></i>
                </div>
                <h5>Quick Response</h5>
                <p>We respond to all inquiries within 24 hours</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="mb-3">
                  <i className="fas fa-handshake fa-3x text-primary"></i>
                </div>
                <h5>Partnership Approach</h5>
                <p>We work as your extended team, not just a vendor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="fw-bold mb-3">Ready to Start Your Digital Journey?</h2>
              <p className="lead mb-4">
                Join an cast where influence and innovation coexist.<br />
                We at Durkkas value innovation, audacity, and ongoing development.<br />
                Together, let's influence the digital future.
              </p>
              <p className="fs-5 mb-4">This is where your trip begins.</p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
