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

  return (
    <header className="navbar-container">
     
      <div className="navbar-logo">
        <Link to="/" className="logo-text">Finytive</Link>
      </div>

      
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      
      <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
        <nav className="navbar-links">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/About' },
            { name: 'Services', path: '/service' },
            { name: 'Products', path: '/ProductsPage' },
            { name: 'Career', path: '/Careers' },
            { name: 'Contact', path: '/contact' },
          ].map((item, idx) => (
            <span key={idx} onClick={() => handleNavigation(item.path)} className="nav-link">
              {item.name}
              <div className="nav-underline"></div>
            </span>
          ))}
        </nav>
        <button className="login-btn">Client Login</button>
      </div>
    </header>
  );
}

export default HomePage;
