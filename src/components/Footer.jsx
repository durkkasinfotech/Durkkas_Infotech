import React from 'react';
import '../styles/Footer.css';
import isoImage from '../assets/images/iso.png'; // ✅ Import your ISO image

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row align-items-center text-center">
          
          {/* Left Logo */}
          <div className="col-md-4 mb-3 mb-md-0">
            <img
              src={isoImage}
              alt="ISO Certification"
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Center Content */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Durkkas InfoTech</h5>
            <p className="mb-0">Crafting Websites. Shaping Identities. Driving Growth.</p>
          </div>

          {/* Right Content */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h6>Contact Info</h6>
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
