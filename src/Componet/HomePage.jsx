import React, { useState } from 'react';
import './home.css';
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const handleKeyDown = (e, path) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleNavigation(path);
    }
  };

  return (
    <header className="navbar-container">
      <div className="navbar-logo">
        <img className='logoImages' src="..\src\assets\OriginalLogo.png" alt="Finytive Logo  " />
        {/* <Link to="/" className="logo-text">Finytive</Link> */}
      </div>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
        aria-expanded={menuOpen}
        aria-controls="navbar-right"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div id="navbar-right" className={`navbar-right ${menuOpen ? 'open' : ''}`}>
        <nav className="navbar-links" aria-label="Main navigation">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/About' },
            { name: 'Services', path: '/service' },
            { name: 'Products', path: '/ProductsPage' },
            { name: 'Career', path: '/Careers' },
            { name: 'Contact', path: '/contact' },
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleNavigation(item.path)}
              onKeyDown={(e) => handleKeyDown(e, item.path)}
              className="nav-link"
              role="button"
              tabIndex="0"
            >
              {item.name}
              <span className="nav-underline"></span>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default HomePage;