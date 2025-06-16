import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
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

    const serviceID = 'service_wrp0yyr';
    const templateID = 'template_4k539tv';
    const publicKey = 'fFDFAjnJOBsA2FTB0';

  
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      });
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
                      <a style={{ color:"#2c3e50",textDecoration:"none"}} href='mailto:info@finytive.com'>info@finytive.com</a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="icon-wrapper">
                      <FaPhone />
                    </div>
                    <div className="method-details">
                      <h3>Call Us</h3>
                      <a href='tel:9876543210' style={{ color:"#2c3e50",textDecoration:"none"}}>+91-9876543210</a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="icon-wrapper">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="method-details">
                      <h3>Visit Us</h3>
                      <p>New no:30, Old no:16, Akbarabad 1st St, China Raji Thottam, Kodambakkam, Chennai, Tamil Nadu 600024</p>
                    </div>
                  </div>
                </div>

                <div className="social-links">
                  <h3>Follow Us</h3>
                  <div className="social-icons">
                    <a href="https://www.linkedin.com/company/finytiveprivatelimited" className="social-icon"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/finytiveprivatelimited?igsh=d2R1eXlib2g4NnQx" className="social-icon"><FaInstagram /></a>
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
      </Container>
    </div>
  );
};

export default Contact;
