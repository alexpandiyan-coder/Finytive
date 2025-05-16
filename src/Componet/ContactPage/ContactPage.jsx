import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <Container>
          <div className="hero-content">
            <h1>Let's Connect</h1>
            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
        </Container>
      </div>

      <Container className="contact-content">
        <Row className="g-4">
          <Col lg={5}>
            <div className="contact-info">
              <div className="info-section">
                <h2>Get in Touch</h2>
                <p className="info-description">
                  Have questions about our services? We're here to help and answer any questions you might have.
                </p>
                
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="icon-wrapper">
                      <FaEnvelope />
                    </div>
                    <div className="method-details">
                      <h3>Email Us</h3>
                      <p>Fiinytive@gmil.com</p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="icon-wrapper">
                      <FaPhone />
                    </div>
                    <div className="method-details">
                      <h3>Call Us</h3>
                      <p></p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="icon-wrapper">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="method-details">
                      <h3>Visit Us</h3>
                      <p>123 Innovation Street<br />Tech City, TC 12345</p>
                    </div>
                  </div>
                </div>

                <div className="social-links">
                  <h3>Follow Us</h3>
                  <div className="social-icons">
                    <a href="#" className="social-icon"><FaLinkedin /></a>
                    <a href="#" className="social-icon"><FaTwitter /></a>
                    <a href="#" className="social-icon"><FaFacebook /></a>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="contact-form-wrapper">
              <Form onSubmit={handleSubmit} className="contact-form">
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Your Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Button type="submit" className="submit-btn">
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>

        {/* <div className="map-section">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564750981!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Company Location"
            ></iframe>
          </div>
        </div> */}
      </Container>
    </div>
  );
};

export default Contact;