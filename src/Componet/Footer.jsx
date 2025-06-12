// Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaYoutube, FaRegCopyright } from 'react-icons/fa';
import footerImg1 from "../assets/Footer/div.pattern-1.png";
import footerImg2 from "../assets/Footer/div.pattern-2.png";
import './footer.css';
import { useNavigate } from 'react-router-dom';
 
const Footer = () => {
  const currentYear = new Date().getFullYear();
     const navigate= useNavigate()
  return (
    <footer className="footer-main-content" >
      <Container>
        <Row className="gy-4">
          <Col md={3}>
            <h1 className="fw-bold text-warning">Finytive</h1>
            <p className="mt-3 text-light">
              Finytive is an independent, leading software firm specialized in Enterprise
              business applications .
            </p>
          </Col>

          <Col md={2}>
            <h5 className="mb-3 text-warning">Products</h5>
            <ul className="list-unstyled lh-lg text-light">
              <li>Finytive CRM</li>
              <li>Tickora</li>
              <li>ITCBC</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="mb-3 text-warning">Our Services</h5>
            <ul className="list-unstyled lh-lg text-light">
              <li>AI Solutions</li>
              <li>Mobile App Development</li>
              <li>Cloud Computing</li>
              <li> Enterprise application development</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="mb-3 text-warning">Company</h5>
            <ul className="list-unstyled lh-lg text-light">
              <li style={{cursor:"pointer"}}  onClick={() => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); 
  }}>Home</li>
  <li style={{cursor:"pointer"}}  onClick={() => {
    navigate('/About');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); 
  }}>About</li>
              <li style={{cursor:"pointer"}} onClick={()=>{navigate("/service")
                setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); 
              }}>Services</li>
              <li style={{cursor:"pointer"}} onClick={()=>{navigate("/ProductsPage")
                setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); 
              }}>Products</li>
              <li style={{cursor:"pointer"}} onClick={()=>{navigate("/Careers")
                setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); 
              }}>Career</li>
              <li style={{cursor:"pointer"}} onClick={()=>{navigate("/Contact")
                setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); 
              }}>Contact Us</li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="mb-3 text-warning">Contact Us</h5>
            <p className="text-light">
              New no:30, Old no: 16, Akbarabad 1st St, China Raji Thottam, Kodambakkam, Chennai, Tamil Nadu 600024
            </p>
            <p className="text-light">+91 44 4853 2233</p>
            <p className="text-light">
              E-mail:{' '}
              <a href="mailto:info@finytive.com" className="text-warning text-decoration-none">
                info@finytive.com
              </a>
            </p>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <a
              href="https://www.facebook.com"
              className="text-light me-3"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-light me-3"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.youtube.com"
              className="text-light"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={24} />
            </a>
          </Col>
        </Row>

        <hr />

        <Row className="mt-3">
          <Col className="text-center text-light">
            <p>
              <FaRegCopyright /> {currentYear} Finytive. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>

      <img src={footerImg1} alt="Decorative Pattern 1" className="footer-img-1" />
      <img src={footerImg2} alt="Decorative Pattern 2" className="footer-img-2" />
    </footer>
  );
};

export default Footer;
