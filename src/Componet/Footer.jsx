import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const teal = 'teal';

  const socialLinks = [
    { icon: FaFacebook, link: 'https://www.facebook.com' },
    { icon: FaLinkedin, link: 'https://www.linkedin.com' },
    { icon: FaYoutube, link: 'https://www.youtube.com' },
  ];

  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <footer className="bg-white text-dark py-5">
      <Container>
        <Row className="gy-4">
          <Col md={3}>
            <h1 className="fw-bold" style={{ color: teal }}>Finytive</h1>
            <p className="mt-3">
              Finytive is an independent, leading software firm specialized in Enterprise
              business applications (POS, CRM, ERP for Retail, Manufacturing & Education).
            </p>
          </Col>

          <Col md={2}>
            <h5 className="mb-3" style={{ color: teal }}>Products</h5>
            <ul className="list-unstyled lh-lg">
              <li>Finytive BOOKS</li>
              <li>Finytive CRM</li>
              <li>Finytive ERP</li>
              <li>Visitor Management Software</li>
              <li>Parking Management Software</li>
              <li>Helpdesk Management Software</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="mb-3" style={{ color: teal }}>Our Services</h5>
            <ul className="list-unstyled lh-lg">
              <li>Invoice Generator</li>
              <li>GST Calculator</li>
              <li>Website Builder</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="mb-3" style={{ color: teal }}>About Us</h5>
            <ul className="list-unstyled lh-lg">
              <li>Our Company</li>
              <li>Jobs</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="mb-3" style={{ color: teal }}>Contact Us</h5>
            <p>Location: Chennai, INDIA.</p>
            <p>‪+91 44 4853 2233‬</p>
            <p>
              E-mail:{' '}
              <a href="mailto:info@finytive.com" className="text-decoration-none" style={{ color: teal }}>
                info@finytive.com
              </a>
            </p>
          </Col>
        </Row>

        <Row className="mt-5 pt-4 border-top border-secondary-subtle">
          <Col md={6} className="d-flex align-items-center">
            <p className="mb-0">© {currentYear} Finytive. All Rights Reserved.</p>
          </Col>

          <Col md={6} className="d-flex justify-content-end align-items-center gap-3">
            {socialLinks.map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIcon(index)}
                onMouseLeave={() => setHoveredIcon(null)}
                className="d-flex justify-content-center align-items-center rounded-circle"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#ccc',
                  transition: 'all 0.3s ease',
                }}
              >
                <Icon
                  style={{
                    fontSize: '20px',
                    color: hoveredIcon === index ? teal : '#000',
                    transition: 'color 0.3s ease',
                  }}
                />
              </a>
            ))}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;