import React, { useEffect } from 'react';
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
  useEffect(() => {
    const scroller = document.querySelector('.auto-scroll');
    if (!scroller) return;

    const pauseScroll = () => {
      scroller.style.animationPlayState = 'paused';
    };

    const resumeScroll = () => {
      scroller.style.animationPlayState = 'running';
    };

    scroller.addEventListener('touchstart', pauseScroll);
    scroller.addEventListener('touchend', resumeScroll);

    return () => {
      scroller.removeEventListener('touchstart', pauseScroll);
      scroller.removeEventListener('touchend', resumeScroll);
    };
  }, []);

  // Split services into two rows for mobile view
  const firstRow = services.slice(0, 3);
  const secondRow = services.slice(3);

  return (
    <div className="timeline-wrapper">
      <Container>
        <div className="text-center mb-5">
          <h2 className="timeline-title text-warning">
            WHAT <span style={{ color: 'teal' }}>WE DO</span>
          </h2>
          <p className="timeline-subtitle">
            Delivering smart tech solutions to modern challenges.
          </p>
        </div>

        <div className="timeline-lines"></div>

        {/* Desktop View - Horizontal Scroll */}
        <div className="d-none d-md-block scroll-container">
          <div className="timeline-horizontal auto-scroll">
            {services.map((service, index) => (
              <div key={index} className="timeline-box">
                <div className="timeline-dot"></div>
                <div className="timeline-icon" aria-label={service.title}>
                  {service.icon}
                </div>
                <h5 className="timeline-heading">{service.title}</h5>
                <p className="timeline-desc">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View - Two Rows */}
        <div className="d-md-none mobile-services-container">
          <div className="mobile-services-row">
            {firstRow.map((service, index) => (
              <div key={index} className="timeline-box">
                <div className="timeline-icon" aria-label={service.title}>
                  {service.icon}
                </div>
                <h5 className="timeline-heading">{service.title}</h5>
                <p className="timeline-desc">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mobile-services-row">
            {secondRow.map((service, index) => (
              <div key={index + 3} className="timeline-box">
                <div className="timeline-icon" aria-label={service.title}>
                  {service.icon}
                </div>
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