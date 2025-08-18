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
              <h1 className="display-3 fw-bold mb-4">
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
              
              {/* Professional Stats Section */}
              <div className="row mt-5 pt-5">
                <div className="col-md-3 col-6 mb-3">
                  <div className="text-center">
                    <div className="h2 fw-bold mb-1 text-accent">72+</div>
                    <div className="text-white-50">Projects Completed</div>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="text-center">
                    <div className="h2 fw-bold mb-1 text-accent">50+</div>
                    <div className="text-white-50">Happy Clients</div>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="text-center">
                    <div className="h2 fw-bold mb-1 text-accent">12+</div>
                    <div className="text-white-50">Years Experience</div>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="text-center">
                    <div className="h2 fw-bold mb-1 text-accent">24/7</div>
                    <div className="text-white-50">Support</div>
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
        jquery, nodejs, npm, postgresql, python, typescript, vuejs, wordpress
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
  <div className="card card-primary shadow-lg h-100">
    <div className="card-body pt-3 px-5 pb-5"> {/* reduced top padding */}
     
      <h3 className="card-title fw-bold mb-3">Our Mission</h3>
      <p className="card-text mb-4">
        Our goal is to provide top-notch digital solutions that enable any company to succeed online.
        Our services, which range from creative marketing and content creation to responsive websites 
        and e-commerce businesses, are tailored to each client's specific requirements.
      </p>
      <div className="d-flex align-items-center">
        <div className="me-3">
          <i className="fas fa-check-circle fa-2x text-accent"></i>
        </div>
        <div>
          <h6 className="mb-1">Quality Assured</h6>
          <p className="mb-0 small opacity-75">Every project meets our high standards</p>
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
      autoplaySpeed={1500} // slower & smooth (1.5s per slide)
      speed={800} // smooth animation speed
      slidesToShow={4} // show 4 at a time
      slidesToScroll={1} // scroll one by one
      responsive={[
        { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1 } },
        { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } }
      ]}
      arrows={false}
      pauseOnHover={false} // keeps moving
    >
      <div className="px-3"><img src="/src/assets/images/logo.png" className="img-fluid" alt="Client 1" /></div>
      <div className="px-3"><img src="/src/assets/images/logo.png" className="img-fluid" alt="Client 2" /></div>
      <div className="px-3"><img src="/src/assets/images/logo.png" className="img-fluid" alt="Client 3" /></div>
      <div className="px-3"><img src="/src/assets/images/logo.png" className="img-fluid" alt="Client 4" /></div>
      <div className="px-3"><img src="/src/assets/images/logo.png" className="img-fluid" alt="Client 5" /></div>
      <div className="px-3"><img src="/src/assets/images/logo.png" className="img-fluid" alt="Client 6" /></div>
      <div className="px-3"><img src="/src/assets/images/logo.png" className="img-fluid" alt="Client 7" /></div>
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
