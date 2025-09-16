import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/About.css';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    requirement: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID',    // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID',   // Replace with your EmailJS template ID
      formData,
      'YOUR_PUBLIC_KEY'     // Replace with your EmailJS public key
    )
    .then((result) => {
      alert('Requirement sent successfully!');
      setFormData({ name: '', contact: '', email: '', requirement: '' });
    })
    .catch((error) => {
      alert('Failed to send. Please try again.');
      console.error(error);
    });
  };

  return (
    <div className="pt-5 mt-4">
      {/* About Hero Section */}
      <section className="py-5 bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-4 text-white">About Durkkas InfoTech</h1>
              <p className="lead text-white">Your extended creative and technical workforce</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center mb-5 who-we-are">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Who We Are</h2>
              <p className="mb-4">
                As an ISO 9001 2015 Certified company, we at Durkkas InfoTech are your extended creative and technical workforce, not just another digital service supplier. 
                We bring digital ideas to life through professional website construction, e-commerce solutions, redesign and maintenance, 
                and innovative digital marketing. We were founded with the mission of empowering startups, small businesses, and expanding brands.
              </p>
              <p className="mb-4">
                What keeps us distinctive? It's how well we balance design, strategy, and execution. We don't provide generic solutions 
                because each company has an own personality, and it's our responsibility to accurately and stylishly represent that online. 
                We ensure that every touchpoint, from the very first pixel on your website to the social media voice of your business, has a purpose.
              </p>
              <p>
                Our team combines technology, creativity, and business acumen to ensure that your online presence does more than just exist—it thrives.
              </p>
            </div>

            <div className="col-lg-6">
              <div className="card bg-primary text-white shadow-lg" style={{ background: 'var(--primary-blue) !important' }}>
                <div className="card-body p-5">
                  <h3 className="card-title mb-4 fw-bold">
                    <i className="fas fa-lightbulb me-2"></i>Our Approach
                  </h3>
                  <p className="card-text lead">
                    We balance design, strategy, and execution to create digital solutions that truly represent your brand's unique personality. 
                    Every touchpoint is crafted with purpose, from your website's first pixel to your social media voice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-3 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="card-title text-primary mb-3">Our Mission</h3>
                  <p className="card-text">
                    Our goal is to provide top-notch digital solutions that enable any company to succeed online.
                    Our services, which range from creative marketing and content creation to responsive websites 
                    and e-commerce businesses, are tailored to each client's specific requirements.
                  </p>
                  <p className="card-text">
                    So that you may concentrate on expanding your main business, we handle the digital hustle. 
                    Durkkas InfoTech is a trustworthy partner in the digital transformation process because of 
                    its commitment to efficiency, creativity, and dependability.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="card-title text-primary mb-3">Our Vision</h3>
                  <p className="card-text">
                    We envision a digital world where every business big or small has a bold online identity. 
                    At Durkkas InfoTech, we strive to redefine how brands engage, perform, and grow online.
                  </p>
                  <p className="card-text">
                    Through smart design, seamless development, and impactful marketing strategies, we bridge 
                    the gap between creativity and technology. Our goal is to lead with ideas, serve with solutions 
                    and create digital experiences that leave a lasting impression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Why Choose Durkkas InfoTech?</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="text-center">
                <div className="mb-3">
                  <i className="fas fa-bullseye fa-3x text-primary"></i>
                </div>
                <h5>Tailored Solutions</h5>
                <p>Digital solutions specifically tailored to your brand and business needs.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="text-center">
                <div className="mb-3">
                  <i className="fas fa-lightbulb fa-3x text-primary"></i>
                </div>
                <h5>Creative Innovation</h5>
                <p>Smart development combined with imaginative designs that stand out.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="text-center">
                <div className="mb-3">
                  <i className="fas fa-clock fa-3x text-primary"></i>
                </div>
                <h5>Timely Delivery</h5>
                <p>Prompt delivery and transparent communication throughout the project.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="text-center">
                <div className="mb-3">
                  <i className="fas fa-handshake fa-3x text-primary"></i>
                </div>
                <h5>Full Support</h5>
                <p>Complete assistance from conception to launch and ongoing maintenance.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="text-center">
                <div className="mb-3">
                  <i className="fas fa-dollar-sign fa-3x text-primary"></i>
                </div>
                <h5>Fair Pricing</h5>
                <p>Reasonable charges with transparent pricing and no hidden costs.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="text-center">
                <div className="mb-3">
                  <i className="fas fa-award fa-3x text-primary"></i>
                </div>
                <h5>Trusted Partner</h5>
                <p>Clients trust us for our reliability, excellence, and long-term partnerships.</p>
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
                  <h3 className="card-title text-white text-center mb-4">Tell Your Requirement</h3>
                  <form onSubmit={sendEmail}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label text-white">Name *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="name" 
                          value={formData.name}
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="contact" className="form-label text-white">Contact Number *</label>
                        <input 
                          type="tel" 
                          className="form-control" 
                          id="contact" 
                          value={formData.contact}
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label text-white">e-Mail ID *</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          id="email" 
                          value={formData.email}
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="requirement" className="form-label text-white">Tell your Requirement *</label>
                        <textarea 
                          className="form-control" 
                          id="requirement" 
                          rows="4" 
                          value={formData.requirement}
                          onChange={handleChange} 
                          required
                        ></textarea>
                      </div>
                      <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary btn-lg">Submit Requirement</button>
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

export default About;
