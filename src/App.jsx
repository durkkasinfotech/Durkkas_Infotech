import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialMediaSidebar from './components/SocialMediaSidebar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import ECommerce from './pages/E-Commerce';
import WebsiteRedesign from './pages/WebsiteRedesign';
import SocialMediaMarketing from './pages/SocialMediaMarketing';
import CreativeDesign from './pages/CreativeDesign';
import Career from "./pages/career";

function App() {
  return (
    // ❌ Remove basename for localhost
    <Router>
      <div className="App">
        <Navbar />
        <SocialMediaSidebar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/website-development" element={<WebsiteDevelopment />} />
            <Route path="/e-commerce" element={<ECommerce />} />
            <Route path="/website-redesign" element={<WebsiteRedesign />} />
            <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/creative-design" element={<CreativeDesign />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
