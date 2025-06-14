import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import { SiSpring, SiAwsamplify, SiGooglecloud, SiDocker } from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import emailjs from "emailjs-com";
import "./JobTitle.css";

const jobList = [
  {
    title: "Java Developer",
    description: "Design and implement Java-based applications for enterprise solutions.",
    icon: <SiSpring style={{ color: 'teal' }} className="fs-4" />,
    skills: ["Java", "Spring Boot", "Microservices"]
  },
  {
    title: "Python Developer",
    description: "Build and maintain efficient, reusable, and reliable Python code for various applications.",
    icon: <SiGooglecloud style={{ color: 'teal' }} className="fs-4" />,
    skills: ["Python", "Django", "Data Science"]
  },
  {
    title: "React Developer",
    description: "Develop and maintain user-facing features using React.js for our web platforms.",
    icon: <SiDocker style={{ color: 'teal' }} className="fs-4" />,
    skills: ["React", "JavaScript", "TypeScript"]
  },
  {
    title: "Angular Developer",
    description: "Create dynamic and modern web applications using the Angular framework.",
    icon: <SiAwsamplify style={{ color: 'teal' }} className="fs-4" />,
    skills: ["Angular", "TypeScript", "RxJS"]
  },
  {
    title: "DevOps Engineer",
    description: "Automate and streamline our operations, infrastructure, and deployment processes.",
    icon: <SiDocker style={{ color: 'teal' }} className="fs-4" />,
    skills: ["Docker", "Kubernetes", "CI/CD"]
  }
];

const JobTitle = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [resume, setResume] = useState(null);

  const handleOpen = (title) => {
    setSelectedJob(title);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setFormData({ name: '', email: '', message: '' });
    setResume(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      job_title: selectedJob,
    };

    emailjs.send('service_wrp0yyr', 'template_4k539tv', templateParams, 'fFDFAjnJOBsA2FTB0')
      .then((response) => {
        alert("Application sent successfully!");
        handleClose();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send application.");
      });
  };

  return (
    <Container className="py-5">
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
          <MdWorkOutline className="fs-3" style={{ color: 'teal' }} />
          <h2 className="fw-bold mb-0" style={{ color: 'teal' }}>Current Openings</h2>
        </div>
        <p className="text-muted mt-3">Join our team and be part of something extraordinary</p>
      </motion.div>

      <Row className="g-4">
        {jobList.map((job, idx) => (
          <Col md={6} lg={4} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="rounded-4 shadow border-0 h-100">
                <Card.Body className="p-4 d-flex flex-column">
                  <div className="mb-4">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="icon-wrapper p-2 rounded-3" style={{ backgroundColor: 'rgba(0, 128, 128, 0.1)' }}>
                        {job.icon}
                      </div>
                      <Card.Title className="fw-semibold mb-0" style={{ color: 'teal' }}>
                        {job.title}
                      </Card.Title>
                    </div>
                    <Card.Text className="text-secondary mb-3" style={{ minHeight: '72px' }}>
                      {job.description}
                    </Card.Text>
                    <div className="skills-wrapper mb-3">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Button 
                      style={{ backgroundColor: 'teal', borderColor: 'teal' }} 
                      className="rounded-pill px-4 py-2 w-100 d-flex align-items-center justify-content-center gap-2"
                      onClick={() => handleOpen(job.title)}
                    >
                      Apply Now <BsArrowRight style={{ color: 'white' }} />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Modal Form */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Apply for {selectedJob}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={sendEmail}>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={4} name="message" value={formData.message} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Upload Resume (PDF, DOC)</Form.Label>
              <Form.Control type="file" onChange={handleResumeChange} />
            </Form.Group>

            <Button type="submit" style={{ backgroundColor: 'teal', borderColor: 'teal' }}>
              Submit Application
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default JobTitle;
