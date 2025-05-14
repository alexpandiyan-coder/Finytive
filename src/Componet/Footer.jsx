import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaYoutube, FaRegCopyright } from 'react-icons/fa';
import footerImg1 from "../assets/Footer/div.pattern-1.png";
import footerImg2 from "../assets/Footer/div.pattern-2.png";
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-dark footer-main-content" style={{ backgroundColor: 'teal' }}>
      <Container>
        <Row className="gy-4">
          <Col md={3}>
            <h1 className="fw-bold text-warning">Finytive</h1>
            <p className="mt-3 text-light">
              Finytive is an independent, leading software firm specialized in Enterprise
              business applications (POS, CRM, ERP for Retail, Manufacturing & Education).
            </p>
          </Col>

          <Col md={2}>
            <h5 className="mb-3 text-white">Products</h5>
            <ul className="list-unstyled lh-lg text-light">
              <li>Finytive BOOKS</li>
              <li>Finytive CRM</li>
              <li>Finytive ERP</li>
              <li>Visitor Management Software</li>
              <li>Parking Management Software</li>
              <li>Helpdesk Management Software</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="mb-3 text-white">Our Services</h5>
            <ul className="list-unstyled lh-lg text-light">
              <li>Invoice Generator</li>
              <li>GST Calculator</li>
              <li>Website Builder</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="mb-3 text-white">About Us</h5>
            <ul className="list-unstyled lh-lg text-light">
              <li>Our Company</li>
              <li>Jobs</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="mb-3 text-white">Contact Us</h5>
            <p className="text-light">Location: Chennai, INDIA.</p>
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
            <a href="https://www.facebook.com" className="text-light me-3">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.linkedin.com" className="text-light me-3">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.youtube.com" className="text-light">
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
