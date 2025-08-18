import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls more than 50px, change navbar style
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        isScrolled ? 'navbar-blue' : 'navbar-white'
      }`}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/src/assets/images/logo.png"
            alt="Durkkas InfoTech Logo"
            className="navbar-logo me-2"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                to="/"
              >
                <i className="fas fa-home me-1"></i>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                to="/about"
              >
                <i className="fas fa-info-circle me-1"></i>
                About
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${
                  location.pathname === '/services' ? 'active' : ''
                }`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-cogs me-1"></i>
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/services#web-development">
                    <i className="fas fa-code me-2"></i>
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services#ecommerce">
                    <i className="fas fa-shopping-cart me-2"></i>
                    E-Commerce Solutions
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services#redesign">
                    <i className="fas fa-paint-brush me-2"></i>
                    Website Redesign
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services#social-media">
                    <i className="fas fa-share-alt me-2"></i>
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services#creatives">
                    <i className="fas fa-palette me-2"></i>
                    Creative Design
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" to="/services">
                    <i className="fas fa-list me-2"></i>
                    View All Services
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                to="/contact"
              >
                <i className="fas fa-envelope me-1"></i>
                Contact
              </Link>
            </li>

            {/* Call Now */}
            <li className="nav-item ms-lg-2">
              <a
                href="tel:+919361535050"
                className="btn btn-accent"
                style={{ backgroundColor: '#dc2626', borderColor: '#dc2626' }}
              >
                <i className="fas fa-phone me-1"></i>
                Call Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
