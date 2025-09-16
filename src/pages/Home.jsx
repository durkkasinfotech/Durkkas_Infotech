import React from 'react';
import '../styles/Home.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bootstrap from "../assets/images/bootstrap.png";
import cpanel from "../assets/images/cpanel.png";
import css3 from "../assets/images/css3.png";
import django from "../assets/images/django.png";
import html5 from "../assets/images/html5.png";
import java from "../assets/images/java.png";
import javascript from "../assets/images/javascript.png";
import jquery from "../assets/images/jquery.png";
import nodejs from "../assets/images/nodejs.png";
import npm from "../assets/images/npm.png";
import postgresql from "../assets/images/postgresql.png";
import python from "../assets/images/python.png";
import typescript from "../assets/images/typescript.png";
import vuejs from "../assets/images/vuejs.png";
import wordpress from "../assets/images/wordpress-blue.png";

// Import new technology logos
import canva from "../assets/images/canva.png";
import catalyst from "../assets/images/catalyst.png";
import checkout from "../assets/images/checkout.png";
import coreldraw from "../assets/images/coreldraw.png";
import googleads from "../assets/images/googleads.png";
import icon from "../assets/images/icon.png";
import illustrator from "../assets/images/illustrator.png";
import linkedinad from "../assets/images/linkedinad.png";
import meta from "../assets/images/meta.png";
import paypal from "../assets/images/paypal.jpg";
import ps from "../assets/images/ps.png";
import razorpay from "../assets/images/razorpay.png";
import stripe from "../assets/images/stripe.png";
import zohoforms from "../assets/images/zoho forms.png";
import zohosites from "../assets/images/zohosites.png";

// Import your images
import client1 from "../assets/images/client (1).png";
import client2 from "../assets/images/client (2).png";
import client3 from "../assets/images/client (3).png";
import client4 from "../assets/images/client (4).png";
import client5 from "../assets/images/client (5).png";
import client6 from "../assets/images/client (6).png";
import client7 from "../assets/images/client (7).png";
import client8 from "../assets/images/client (8).png";
import client9 from "../assets/images/client (9).png";


const Home = () => {
  return (
    <div>
      {/* Professional Hero Section */}
      <section className="hero-section bg-primary text-white py-5">
        <div className="container">
          <div className="row min-vh-100 d-flex align-items-center">
            <div className="col-12 text-center fade-in">
              <div className="mb-4">
              {/*   <div className="feature-icon mx-auto mb-4">
                  <i className="fas fa-rocket"></i>
                </div> */}
              </div>
  <h1
  style={{
    animation: "popBlink3Times 3s ease-in-out",
    display: "inline-block",
    color: "white"
  }}
>
  Crafting Websites. Shaping Identities. Driving Growth.
</h1>


              <p className="lead mb-4 fs-4">
                We Durkkas InfoTech offers comprehensive digital solutions, ranging from innovative social media tactics to web building.
              </p>
              <div className="mt-5 d-flex gap-3 justify-content-center flex-wrap">
                <a href="#services" className="btn btn-light btn-lg">
                  <i className="fas fa-arrow-down me-2"></i>
                  Explore Services
                </a>
                <a href="/contact" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-paper-plane me-2"></i>
                  Get In Touch
                </a>
              </div>
              
              {/* Professional Stats Section - White Cards */}
              <div className="row mt-5 justify-content-center">
                <div className="col-md-3 col-6 mb-3">
                  <div className="card stats-card h-100">
                    <div className="card-body text-center">
                      <div className="stats-icon mb-3">
                        <i className="fas fa-project-diagram"></i>
                      </div>
                      <div className="h2 fw-bold mb-2 text-primary">72+</div>
                      <div className="text-muted">Projects Completed</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="card stats-card h-100">
                    <div className="card-body text-center">
                      <div className="stats-icon mb-3">
                        <i className="fas fa-users"></i>
                      </div>
                      <div className="h2 fw-bold mb-2 text-primary">50+</div>
                      <div className="text-muted">Happy Clients</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="card stats-card h-100">
                    <div className="card-body text-center">
                      <div className="stats-icon mb-3">
                        <i className="fas fa-calendar-alt"></i>
                      </div>
                      <div className="h2 fw-bold mb-2 text-primary">12+</div>
                      <div className="text-muted">Years Experience</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="card stats-card h-100">
                    <div className="card-body text-center">
                      <div className="stats-icon mb-3">
                        <i className="fas fa-headset"></i>
                      </div>
                      <div className="h2 fw-bold mb-2 text-primary">24/7</div>
                      <div className="text-muted">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Preview Section */}
      <section id="services" className="py-5">
        <div className="container">
          <div className="section-header slide-in-left">
              <h2 className="display-4 fw-bold">Our Services</h2>
              <p className="lead">Comprehensive digital solutions tailored to your business needs</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm service-card hover-lift">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-laptop-code"></i>
                  </div>
                  <h5 className="card-title fw-bold">Website Development</h5>
                  <p className="card-text text-muted">
                    Modern, responsive websites tailored to your brand and business goals with cutting-edge technology.
                  </p>
                  <div className="mt-3">
                    <span className="badge bg-primary me-1">React</span>
                    <span className="badge bg-secondary me-1">Node.js</span>
                    <span className="badge bg-accent">PHP</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm service-card hover-lift">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <h5 className="card-title fw-bold">E-Commerce Solutions</h5>
                  <p className="card-text text-muted">
                    Robust, performance-driven e-commerce platforms to launch your business online successfully.
                  </p>
                  <div className="mt-3">
                    <span className="badge bg-primary me-1">WooCommerce</span>
                    <span className="badge bg-secondary me-1">Shopify</span>
                    <span className="badge bg-accent">Custom</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm service-card hover-lift">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-sync-alt"></i>
                  </div>
                  <h5 className="card-title fw-bold">Website Redesign</h5>
                  <p className="card-text text-muted">
                    Transform your outdated website with modern design and enhanced functionality.
                  </p>
                  <div className="mt-3">
                    <span className="badge bg-primary me-1">UI/UX</span>
                    <span className="badge bg-secondary me-1">SEO</span>
                    <span className="badge bg-accent">Performance</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm service-card hover-lift">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-share-alt"></i>
                  </div>
                  <h5 className="card-title fw-bold">Social Media Marketing</h5>
                  <p className="card-text text-muted">
                    Strategic social media planning to boost your online presence and engagement.
                  </p>
                  <div className="mt-3">
                    <span className="badge bg-primary me-1">Facebook</span>
                    <span className="badge bg-secondary me-1">Instagram</span>
                    <span className="badge bg-accent">LinkedIn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <a href="/services" className="btn btn-primary btn-lg">
              <i className="fas fa-arrow-right me-2"></i>
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Technologies Carousel Section */}
      <section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center fw-bold mb-4">Technologies We Expertise</h2>
    <Slider
      infinite
      autoplay
      autoplaySpeed={1500}
      speed={800}
      slidesToShow={4}
      slidesToScroll={1}
      arrows={false}
      pauseOnHover={false}
      responsive={[
        { breakpoint: 992, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } }
      ]}
    >
      {[
        bootstrap, cpanel, css3, django, html5, java, javascript,
        jquery, nodejs, npm, postgresql, python, typescript, vuejs, wordpress,
        canva, catalyst, checkout, coreldraw, googleads, icon, illustrator,
        linkedinad, meta, paypal, ps, razorpay, stripe, zohoforms, zohosites
      ].map((logo, index) => (
        <div
          key={index}
          className="d-flex justify-content-center align-items-center px-3"
        >
          <img
            src={logo}
            alt={`Tech Logo ${index + 1}`}
            className="img-fluid"
            style={{ maxHeight: "80px", objectFit: "contain" }}
          />
        </div>
      ))}
    </Slider>
  </div>
      </section>

      {/* Professional Why Choose Us Section */}
      <section className="py-5 bg-primary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 slide-in-left">
              <div className="section-header text-start">
                <h2 className="display-7 fw-bold mb-4 text-white">Why Choose Us?</h2>
                <p className="lead text-white">We deliver excellence through innovation and dedication</p>
              </div>
              <div className="row g-3 text-white">
                <div className="col-md-6 text-white">
                  <div className="d-flex align-items-start">
                    <div className="feature-icon me-3 " style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-bullseye " style={{fontSize: '1.2rem'}}></i>
                    </div>
                    <div>
                      <h6 className="fw-bold text-white">Tailored Solutions</h6>
                      <p className="text-white small text-white">Custom digital solutions for your unique brand</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="feature-icon me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-lightbulb" style={{fontSize: '1.2rem'}}></i>
                    </div>
                    <div>
                      <h6 className="fw-bold">Creative Innovation</h6>
                      <p className="text-white small">Smart development with imaginative designs</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="feature-icon me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-clock" style={{fontSize: '1.2rem'}}></i>
                    </div>
                    <div>
                      <h6 className="fw-bold">Timely Delivery</h6>
                      <p className="text-white small">Prompt delivery with transparent communication</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="feature-icon me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-handshake" style={{fontSize: '1.2rem'}}></i>
                    </div>
                    <div>
                      <h6 className="fw-bold">Full Support</h6>
                      <p className="text-white small">Complete assistance from concept to launch</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 slide-in-right">
  <div className="card shadow-lg h-100" style={{ background: 'white' }}>
    <div className="card-body pt-3 px-5 pb-5"> {/* reduced top padding */}
     
      <h3 className="card-title fw-bold mb-3 text-primary">Our Mission</h3>
      <p className="card-text mb-4 text-dark">
        Our goal is to provide top-notch digital solutions that enable any company to succeed online.
        Our services, which range from creative marketing and content creation to responsive websites 
        and e-commerce businesses, are tailored to each client's specific requirements.
      </p>
      <div className="d-flex align-items-center">
        <div className="me-3">
          <i className="fas fa-check-circle fa-2x text-success"></i>
        </div>
        <div>
          <h6 className="mb-1 text-primary">Quality Assured</h6>
          <p className="mb-0 small text-muted">Every project meets our high standards</p>
        </div>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>
      {/* Our Clients Section */}
<section className="py-5 bg-white">
  <div className="container">
    <h2 className="text-center fw-bold mb-5">OUR CLIENTS</h2>
    <Slider
      infinite
      autoplay
      autoplaySpeed={1500}
      speed={800}
      slidesToShow={4}
      slidesToScroll={1}
      responsive={[
        { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1 } },
        { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } }
      ]}
      arrows={false}
      pauseOnHover={false}
    >
      <div className="px-3 d-flex justify-content-center align-items-center" style={{ height: '120px' }}>
        <img src={client1} className="img-fluid client-logo" alt="Client 1" />
      </div>
      <div className="px-3 d-flex justify-content-center align-items-center" style={{ height: '120px' }}>
        <img src={client2} className="img-fluid client-logo" alt="Client 2" />
      </div>
      <div className="px-3 d-flex justify-content-center align-items-center" style={{ height: '120px' }}>
        <img src={client3} className="img-fluid client-logo" alt="Client 3" />
      </div>
      <div className="px-3 d-flex justify-content-center align-items-center" style={{ height: '120px' }}>
        <img src={client4} className="img-fluid client-logo" alt="Client 4" />
      </div>
      <div className="px-3 d-flex justify-content-center align-items-center" style={{ height: '120px' }}>
        <img src={client5} className="img-fluid client-logo" alt="Client 5" />
      </div>
      <div className="px-3 d-flex justify-content-center align-items-center" style={{ height: '120px' }}>
        <img src={client6} className="img-fluid client-logo" alt="Client 6" />
      </div>
      <div className="px-3 d-flex justify-content-center align-items-center" style={{ height: '120px' }}>
        <img src={client7} className="img-fluid client-logo" alt="Client 7" />
      </div>
      <div className="px-3 d-flex justify-content-center align-items-center" style={{ height: '120px' }}>
        <img src={client8} className="img-fluid client-logo" alt="Client 8" />
      </div>
      <div className="px-3 d-flex justify-content-center align-items-center" style={{ height: '120px' }}>
        <img src={client9} className="img-fluid client-logo" alt="Client 9" />
      </div>
    </Slider>
  </div>
</section>
      {/* Professional CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center fade-in">
              {/* <div className="feature-icon mx-auto mb-4">
                <i className="fas fa-rocket"></i>
              </div> */}
              <h2 className="display-7 fw-bold mb-4 text-white">Ready to Transform Your Digital Presence?</h2>
              <p className="lead mb-4">Let's discuss how we can help your business thrive online</p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <a href="/contact" className="btn btn-secondary btn-lg">
                  <i className="fas fa-paper-plane me-2"></i>
                  Start Your Project
                </a>
                <a href="tel:+919361535050" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-phone me-2"></i>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
