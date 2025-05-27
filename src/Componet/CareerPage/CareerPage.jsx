import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { 
  FaFlask, 
  FaUsers, 
  FaGraduationCap, 
  FaChartLine, 
  FaBalanceScale, 
  FaMedal,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaCheckCircle,
  FaAngleRight,
  FaPlus
} from 'react-icons/fa';
import { 
  SiSpring, 
  SiPython, 
  SiReact, 
  SiAngular, 
  SiDocker,

} from 'react-icons/si';
import { BsArrowRight } from 'react-icons/bs';
import { MdWorkOutline } from 'react-icons/md';
import { motion } from 'framer-motion';
import './Careers.css';

const workWithUsData = [
  {
    icon: <FaFlask style={{ color: '#2ecc71' }} />,
    title: 'Innovative Projects',
    desc: 'Work on cutting-edge projects that redefine industry standards and make a real impact. We foster a culture of creativity and exploration.'
  },
  {
    icon: <FaUsers style={{ color: '#3498db' }} />,
    title: 'Collaborative Environment',
    desc: 'Join a diverse and inclusive team where collaboration and mutual respect are paramount. Your voice will be heard and valued.'
  },
  {
    icon: <FaGraduationCap style={{ color: '#9b59b6' }} />,
    title: 'Learning & Growth',
    desc: 'We invest in your development with continuous learning opportunities, mentorship programs, and challenging assignments.'
  },
  {
    icon: <FaChartLine style={{ color: '#e74c3c' }} />,
    title: 'Career Advancement',
    desc: 'Clear pathways for career progression and ample opportunities to take on new responsibilities and grow with the company.'
  },
  {
    icon: <FaBalanceScale style={{ color: '#f1c40f' }} />,
    title: 'Work-Life Balance',
    desc: 'We promote a healthy work-life balance with flexible work arrangements and wellness initiatives your contributions.'
  },
  {
    icon: <FaMedal style={{ color: '#e67e22' }} />,
    title: 'Competitive Rewards',
    desc: 'Receive competitive salary, comprehensive benefits, performance-based bonuses, and recognition for your contributions.'
  }
];

const jobList = [
  {
    title: "Java Developer",
    description: "Join our team as a Java Developer to build enterprise-level applications. Work on high-volume, low-latency systems using Spring Boot and Microservices.",
    icon: <SiSpring style={{ color: '#2ecc71' }} className="fs-4" />,
    skills: ["Java", "Spring Boot", "Microservices", "Hibernate", "JUnit"],
    details: {
      responsibilities: [
        "Design and develop high-volume, low-latency applications for mission-critical systems",
        "Create well-designed, efficient, and testable code",
        "Participate in all phases of the development lifecycle",
        "Troubleshoot, debug and upgrade existing systems",
        "Ensure designs are in compliance with specifications"
      ],
      requirements: {
        experience: "3-5 years of professional Java development experience",
        education: "Bachelor's degree in Computer Science or related field",
        technical: [
          "Strong knowledge of Java 8+ and Spring Framework",
          "Experience with Spring Boot and Microservices architecture",
          "Proficiency in SQL and database design",
          "Understanding of RESTful APIs and web services",
          "Experience with version control systems (Git)"
        ],
        preferred: [
          "Experience with cloud platforms (AWS/Azure)",
          "Knowledge of containerization (Docker, Kubernetes)",
          "Understanding of CI/CD pipelines"
        ]
      }
    }
  },
  {
    title: "Python Developer",
    description: "Looking for a Python Developer to create scalable applications. Work with Django/Flask frameworks and build efficient, reusable code.",
    icon: <SiPython style={{ color: '#3498db' }} className="fs-4" />,
    skills: ["Python", "Django", "Data Science", "Flask", "SQLAlchemy"],
    details: {
      responsibilities: [
        "Develop and maintain Python-based applications",
        "Design and implement data processing pipelines",
        "Create and maintain RESTful APIs",
        "Write reusable, testable, and efficient code",
        "Implement security and data protection"
      ],
      requirements: {
        experience: "2-4 years of Python development experience",
        education: "Bachelor's degree in Computer Science or related field",
        technical: [
          "Strong proficiency in Python programming",
          "Experience with Django or Flask frameworks",
          "Knowledge of database systems (SQL and NoSQL)",
          "Understanding of RESTful APIs",
          "Experience with version control systems"
        ],
        preferred: [
          "Experience with data science libraries (NumPy, Pandas)",
          "Knowledge of machine learning frameworks",
          "Understanding of cloud platforms"
        ]
      }
    }
  },
  {
    title: "React Developer",
    description: "Seeking a React Developer to build modern web applications. Work with React.js, Redux, and create reusable components.",
    icon: <SiReact style={{ color: '#61dafb' }} className="fs-4" />,
    skills: ["React", "JavaScript", "TypeScript", "Redux", "HTML/CSS"],
    details: {
      responsibilities: [
        "Design, develop, and maintain user-facing features using React.js",
        "Implement state management solutions using Redux.js",
        "Develop reusable, modular, and scalable React components",
        "Create and maintain code snippets for third-party integration",
        "Work with RESTful APIs to fetch and manage data"
      ],
      requirements: {
        experience: "3+ years of professional web development experience",
        education: "Bachelor's degree in Computer Science or related field",
        technical: [
          "Strong proficiency in JavaScript (ES6+) and TypeScript",
          "In-depth knowledge of React.js and Redux.js",
          "Experience with modern frontend build tools (Webpack, Babel)",
          "Understanding of responsive design principles",
          "Proficiency with Git version control"
        ],
        preferred: [
          "Experience with testing frameworks (Jest, React Testing Library)",
          "Knowledge of GraphQL",
          "Understanding of CI/CD pipelines"
        ]
      }
    }
  },
  {
    title: "Angular Developer",
    description: "Join as an Angular Developer to create dynamic web applications. Work with Angular, TypeScript, and build responsive UIs.",
    icon: <SiAngular style={{ color: '#dd0031' }} className="fs-4" />,
    skills: ["Angular", "TypeScript", "RxJS", "HTML/CSS", "Bootstrap"],
    details: {
      responsibilities: [
        "Develop user interfaces using Angular best practices",
        "Implement responsive design principles",
        "Create and maintain reusable components",
        "Integrate with backend services and APIs",
        "Write clean, maintainable, and efficient code"
      ],
      requirements: {
        experience: "2-4 years of Angular development experience",
        education: "Bachelor's degree in Computer Science or related field",
        technical: [
          "Strong proficiency in TypeScript and Angular",
          "Experience with RxJS and state management",
          "Knowledge of HTML5, CSS3, and responsive design",
          "Understanding of RESTful APIs",
          "Experience with version control systems"
        ],
        preferred: [
          "Experience with Angular Material",
          "Knowledge of testing frameworks (Jasmine, Karma)",
          "Understanding of CI/CD practices"
        ]
      }
    }
  },
  {
    title: "DevOps Engineer",
    description: "Looking for a DevOps Engineer to automate and streamline operations. Work with Docker, Kubernetes, and CI/CD pipelines.",
    icon: <SiDocker style={{ color: '#2496ed' }} className="fs-4" />,
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Jenkins"],
    details: {
      responsibilities: [
        "Design and implement CI/CD pipelines",
        "Manage and maintain cloud infrastructure",
        "Automate deployment and scaling processes",
        "Monitor system performance and reliability",
        "Implement security best practices"
      ],
      requirements: {
        experience: "3-5 years of DevOps experience",
        education: "Bachelor's degree in Computer Science or related field",
        technical: [
          "Strong experience with Docker and Kubernetes",
          "Proficiency in cloud platforms (AWS/Azure/GCP)",
          "Experience with CI/CD tools (Jenkins, GitLab CI)",
          "Knowledge of infrastructure as code (Terraform)",
          "Understanding of monitoring tools"
        ],
        preferred: [
          "Experience with microservices architecture",
          "Knowledge of security best practices",
          "Understanding of networking concepts"
        ]
      }
    }
  }
];

const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    resume: null
  });

  const handleApplyClick = (job) => {
    setSelectedJob(job);
  };

  const handleBackToJobs = () => {
    setSelectedJob(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) { 
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    } else {
      alert('Please upload a file smaller than 5MB');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { ...formData, job: selectedJob });
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      resume: null
    });
    setSelectedJob(null);
  };

  if (selectedJob) {
    return (
      <Container fluid className="p-5" style={{ backgroundColor: "#f5f7fa" }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button 
            variant="link" 
            onClick={handleBackToJobs}
            className="mb-4 p-0 text-teal"
            style={{ textDecoration: 'none' }}
          >
            ← Back to Jobs
          </Button>
          <h2 className="mb-2 fw-bold text-teal">Apply for: <strong>{selectedJob.title}</strong></h2>
          <p className="text-muted mb-4">Remote • Full-time</p>
        </motion.div>

        <Row className="g-4">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="rounded-4 shadow-sm border-0">
                <Card.Body className="p-4">
                  <Card.Title className="fw-semibold text-teal">Job Details</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">Department: Technology</Card.Subtitle>
                  <Card.Text className="text-secondary">
                    <strong>Full Description:</strong><br />
                    {selectedJob.description}
                  </Card.Text>
                  
                  <div className="mt-4">
                    <h5 className="fw-semibold text-teal mb-3">Key Responsibilities:</h5>
                    <ul className="list-unstyled">
                      {selectedJob.details.responsibilities.map((resp, index) => (
                        <li key={index} className="mb-2">
                          <FaCheckCircle className="text-teal me-2" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h5 className="fw-semibold text-teal mb-3">Requirements:</h5>
                    <div className="mb-3">
                      <strong>Experience:</strong> {selectedJob.details.requirements.experience}
                    </div>
                    <div className="mb-3">
                      <strong>Education:</strong> {selectedJob.details.requirements.education}
                    </div>
                    
                    <div className="mb-3">
                      <strong>Technical Skills:</strong>
                      <ul className="list-unstyled mt-2">
                        {selectedJob.details.requirements.technical.map((skill, index) => (
                          <li key={index} className="mb-1">
                            <FaAngleRight className="text-teal me-2" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-3">
                      <strong>Preferred Qualifications:</strong>
                      <ul className="list-unstyled mt-2">
                        {selectedJob.details.requirements.preferred.map((pref, index) => (
                          <li key={index} className="mb-1">
                            <FaPlus className="text-teal me-2" />
                            {pref}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-3">
                    <strong>Required Skills:</strong>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      {selectedJob.skills.map((skill, index) => (
                        <span key={index} className="badge bg-light text-dark">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="rounded-4 shadow-sm border-0">
                <Card.Body className="p-4">
                  <Card.Title className="fw-semibold text-teal">Your Application</Card.Title>
                  <p className="text-muted mb-4">Fill in your details below to apply.</p>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe" 
                        className="rounded-pill"
                        required 
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john.doe@example.com" 
                        className="rounded-pill"
                        required 
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Resume/CV</Form.Label>
                      <div 
                        className="border p-4 text-center bg-light rounded-4" 
                        style={{ 
                          borderStyle: 'dashed', 
                          borderColor: '#ccc',
                          cursor: 'pointer'
                        }}
                        onClick={() => document.getElementById('resume-upload').click()}
                      >
                        {formData.resume ? (
                          <div>
                            <span className="fw-semibold">{formData.resume.name}</span><br />
                            <span className="text-muted">Click to change</span>
                          </div>
                        ) : (
                          <>
                            <span className="fw-semibold">Click to upload</span> or drag and drop<br />
                            <span className="text-muted">PDF, DOC, DOCX (MAX. 5MB)</span>
                          </>
                        )}
                        <input
                          type="file"
                          id="resume-upload"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          style={{ display: 'none' }}
                        />
                      </div>
                    </Form.Group>

                    <div className="d-grid">
                      <Button 
                        variant="primary" 
                        type="submit" 
                        className="rounded-pill py-2 px-4" 
                        style={{ backgroundColor: 'teal', borderColor: 'teal' }}
                      >
                        Submit Application
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <>
      <section className="work-with-us-section">
        <Container>
          <h2 className="text-center mb-3">Why Work With Us?</h2>
          <p className="text-center mb-5 lead">
            Discover the advantages of joining Finytive. We are committed to creating an environment where you can thrive both personally and professionally.
          </p>
          <Row className="g-4">
  {workWithUsData.map((item, idx) => {
  
    const aosDirection = idx % 2 === 0 ? "fade-up-right" : "fade-up-left";

    return (
      <Col md={6} key={idx}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}
          data-aos={aosDirection}
        >
          <div className="work-card h-100 d-flex align-items-center p-4" data-aos={aosDirection}>
            <div className="icon-box me-4">{item.icon}</div>
            <div>
              <h4 className="mb-2">{item.title}</h4>
              <p className="mb-0">{item.desc}</p>
            </div>
          </div>
        </motion.div>
      </Col>
    );
  })}
</Row>
        </Container>
      </section>

      <Container className="py-5">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="d-flex align-items-center justify-content-center gap-2 mb-3" data-aos="zoom-in-up">
            <MdWorkOutline className="fs-3" style={{ color: 'teal' }} />
            <h2 className="fw-bold mb-0" style={{ color: 'teal' }}>Current Openings</h2>
          </div>
          <p className="text-muted mt-3" data-aos="zoom-in-up">Join our team and be part of something extraordinary</p>
        </motion.div>
        <Row className="g-4">
          {jobList.map((job, idx) => (

            <Col md={6} lg={4} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <Card className="rounded-4 shadow border-0 h-100">
                  <Card.Body className="p-4 d-flex flex-column">
                    <div className="mb-4" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div className="icon-wrapper p-2 rounded-3" style={{ backgroundColor: 'rgba(0, 128, 128, 0.1)' }}>
                          {job.icon}
                        </div>
                        <Card.Title className="fw-semibold mb-0" style={{ color: 'teal' }}>
                          {job.title}
                        </Card.Title>
                      </div>
                      <Card.Text className="text-secondary mb-3">
                        {job.description}
                      </Card.Text>
                      <div className="skills-wrapper">
                        {job.skills.map((skill, index) => (
                          <span key={index} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto">
                      <Button 
                        onClick={() => {handleApplyClick(job)
                           setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
                        }}
                        style={{ backgroundColor: 'teal', borderColor: 'teal' }} 
                        className="rounded-pill px-4 py-2 w-100 d-flex align-items-center justify-content-center gap-2"
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
      </Container>
    </>
  );
};

export default CareerPage;