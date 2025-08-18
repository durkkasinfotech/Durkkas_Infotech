import React from 'react';
import '../styles/Footer.css';
import isoImage from '../assets/images/iso.png'; // ✅ Import your ISO image

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section with Logo + Text */}
          <div className="col-md-6 d-flex align-items-start">
            <img
              src={isoImage}
              alt="ISO Certification"
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'contain',
                marginRight: '15px'
              }}
            />
            <div>
              <h5>Durkkas InfoTech</h5>
              <p className="mb-0">
                Crafting Websites. Shaping Identities. Driving Growth.
              </p>
            </div>
          </div>

          {/* Right Section Contact Info */}
          <div className="col-md-6">
            <h6>Contact Info</h6>
            <p className="mb-1">
              <i className="fas fa-envelope me-2"></i>
              contact@durkkasinfo.tech
            </p>
            <p className="mb-1">
              <i className="fas fa-phone me-2"></i>
              +91 93 61 53 50 50
            </p>
            <p className="mb-0">
              <i className="fas fa-map-marker-alt me-2"></i>
              Aruppukottai, Tamil Nadu, India
            </p>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <hr className="my-3" />
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">
              © {currentYear} Durkkas InfoTech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
