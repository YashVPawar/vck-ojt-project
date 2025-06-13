import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Headers.css';

const Headers = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">
          Vivekanand College
        </a>
        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/cources" className="nav-link">
            Cources
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/apply" className="apply-btn">
            Apply Now!
          </Link>
        </nav>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
        <Link to="/" onClick={closeMenu} className="mobile-link">Home</Link>
        <Link to="/about" onClick={closeMenu} className="mobile-link">About</Link>
        <Link to="/cources" onClick={closeMenu} className="mobile-link">Cources</Link>
        <Link to="/contact" onClick={closeMenu} className="mobile-link">Contact</Link>
        <Link to="/apply" onClick={closeMenu} className="mobile-apply">Apply Now!</Link>
      </div>
    </header>
  );
};

export default Headers;
