// Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaYoutube, FaRegCopyright } from 'react-icons/fa';
import footerImg1 from "../assets/Footer/div.pattern-1.png";
import footerImg2 from "../assets/Footer/div.pattern-2.png";
import './footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate()
  return (
    <footer className="footer-main-content" >
      <Container>
        <Row className="gy-4">
          <Col md={2}>
            <h1 className="fw-bold text-warning">Finytive</h1>
            <p className="mt-3 text-light">
              Finytive is a product-first innovation hub building AI-powered platforms and scalable digital solutions. With deep engineering expertise and a startup mindset, we accelerate your journey from idea to market.
            </p>
          </Col>

          <Col md={2}>
            <h5 className="mb-3 text-warning">Products</h5>
            <ul className="list-unstyled lh-lg text-light">
              <li>Tickora</li>
              <li>Spice Action</li>
              <li>Finytive CRM</li>
            </ul>
          </Col>

          <Col md={3}>
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
              <li style={{ cursor: "pointer" }} onClick={() => {
                navigate('/');
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}>Home</li>
              <li style={{ cursor: "pointer" }} onClick={() => {
                navigate('/About');
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}>About</li>
              <li style={{ cursor: "pointer" }} onClick={() => {
                navigate("/service")
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}>Services</li>
              <li style={{ cursor: "pointer" }} onClick={() => {
                navigate("/ProductsPage")
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}>Products</li>
              <li style={{ cursor: "pointer" }} onClick={() => {
                navigate("/Careers")
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}>Career</li>
              <li style={{ cursor: "pointer" }} onClick={() => {
                navigate("/Contact")
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}>Contact Us</li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="mb-3 text-warning">Contact Us</h5>
            <p>
            <a  href="https://www.google.com/maps?q=New+no:30,+Old+no:16,+Akbarabad+1st+St,+China+Raji+Thottam,+Kodambakkam,+Chennai,+Tamil+Nadu+600024" className="text-light " style={{textDecoration:"none"}}>
              New no:30, Old no: 16, Akbarabad 1st St, China Raji Thottam, Kodambakkam, Chennai, Tamil Nadu 600024
            </a>
            </p>
            <p className="text-light">
              Mobile:{' '}
              <a href="tel:9952996769" className="text-warning text-decoration-none">
                9952996769
              </a>
            </p>
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
              href="https://www.instagram.com/finytiveprivatelimited?igsh=d2R1eXlib2g4NnQx"
              className="text-light me-3"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaInstagram size={24}/>
            </a>
            <a
              href="https://www.linkedin.com/company/finytiveprivatelimited/"
              className="text-light me-3"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
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
