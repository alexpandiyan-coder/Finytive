import React from 'react';
import { Container } from 'react-bootstrap';
import { FaBrain, FaMobileAlt, FaCloud, FaLaptopCode } from 'react-icons/fa';
import './WhatWeDo.css';

const services = [
  {
    icon: <FaBrain />,
    title: 'AI Solutions',
    description: 'Delivering automation, insights, and machine learning systems.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile App Development',
    description: 'Responsive, high-performance apps for Android and iOS.',
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Computing',
    description: 'Robust, scalable, and secure cloud-based infrastructure.',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Enterprise Web App',
    description: 'Secure, scalable solutions for enterprise digital workflows.',
  },
];

const WhatWeDo = () => {
  return (
    <div className="timeline-wrapper">
      <Container>
        <div className="text-center mb-5">
          <h2 className="timeline-title">What We Do</h2>
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
