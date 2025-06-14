import React from 'react';
import { Container } from 'react-bootstrap';
import {
  FaBrain,
  FaMobileAlt,
  FaCloud,
  FaLaptopCode,
  FaHeadset,
  FaCode,
} from 'react-icons/fa';
import './WhatWeDo.css';


const services = [
  {
    icon: <FaBrain />,
    title: 'Enterprise IT Consulting',
    description: 'End-to-end consulting for scalable, secure IT infrastructures.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps for Android and iOS tailored to your brand.',
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Infrastructure Services',
    description: 'Deploy, manage, and scale your applications on secure cloud platforms.',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Web Design & Development',
    description: 'Secure, scalable solutions for enterprise digital workflows.',
  },
  {
    icon: <FaHeadset />,
    title: 'Technical Support Services',
    description: '24/7 tech support to ensure uninterrupted business operations.',
  },
  {
    icon: <FaCode />,
    title: 'Custom Software Development',
    description: 'Tailor-made software solutions designed to meet your business goals.',
  },
];


const WhatWeDo = () => {
  return (
    <div className="timeline-wrapper">
      <Container>
        <div className="text-center mb-5">
          <h2 className="timeline-title text-warning">WHAT <span style={{ color: "teal" }}>WE DO</span></h2>
          <p className="timeline-subtitle">Delivering smart tech solutions to modern challenges.</p>
        </div>

        <div className="timeline-lines"></div>

        <div className="scroll-container">


          <div className="timeline-horizontal auto-scroll">
            {[...services, ...services].map((service, index) => (
              <div key={index} className="timeline-box">
                <div className="timeline-dot"></div>
                <div className="timeline-icon">{service.icon}</div>
                <h5 className="timeline-heading">{service.title}</h5>
                <p className="timeline-desc">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatWeDo;
