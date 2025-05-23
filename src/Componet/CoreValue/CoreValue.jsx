import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import './coreValue.css';

const CoreValues = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'Constantly exploring new ideas to deliver advanced, future-ready solutions.',
      icon: '💡',
      color: '#4A90E2',
      gradient: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
      stats: '100+',
      statLabel: 'Innovative Solutions'
    },
    {
      title: 'Collaboration Excellence',
      description: 'Building strong partnerships with our customers and team to achieve shared goals.',
      icon: '🤝',
      color: '#50E3C2',
      gradient: 'linear-gradient(135deg, #50E3C2 0%, #2ECC71 100%)',
      stats: '10+',
      statLabel: 'Global Partners'
    },
    {
      title: 'Excellence',
      description: 'Pursuing the highest standards of quality and performance in everything we do.',
      icon: '⭐',
      color: '#F5A623',
      gradient: 'linear-gradient(135deg, #F5A623 0%, #F39C12 100%)',
      stats: '10+',
      statLabel: 'Awards Won'
    },
    {
      title: 'Sustainability',
      description: 'Committed to responsible practices that ensure long-term environmental and social well-being.',
      icon: '🌱',
      color: '#7ED321',
      gradient: 'linear-gradient(135deg, #7ED321 0%, #2ECC71 100%)',
      stats: '75%',
      statLabel: 'Carbon Reduction'
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.value-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="core-values-wrapper" ref={sectionRef}>
      <Container fluid className="px-0">
        <div className="section-header">
          <div className="header-content">
            <h2 className="animate-text">Driving Excellence Through Core Values</h2>
            <p className="section-subtitle animate-text-delay">
              Building a better future through innovation, collaboration, and sustainable practices.
            </p>
          </div>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div
              key={index}
              className="value-item"
              style={{
                '--value-color': value.color,
                '--value-gradient': value.gradient
              }}
            >
              <div className="value-content">
                <div className="value-icon">{value.icon}</div>
                <div className="value-text">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
                <div className="value-stats">
                  <div className="stat-number">{value.stats}</div>
                  <div className="stat-label">{value.statLabel}</div>
                </div>
              </div>
              <div className="value-decoration">
                <div className="decoration-circle"></div>
                <div className="decoration-dots"></div>
              </div>
              <div className="hover-effect"></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CoreValues;
