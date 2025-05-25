import React, { useState, useEffect } from 'react';
import './OurPrinciples.css';
import Value from './Value';

const principles = [
  { title: "Customer Obsession", description: "Our customers are at the heart of everything we do." },
  { title: "Deliver Results", description: "By staying focused on our commitments, we ensure reliability and build trust." },
  { title: "Think Big", description: "We envision transformative ideas that drive progress and innovation." },
  { title: "Embrace Innovation", description: "We foster creativity, experimentation, and out-of-the-box thinking." },
  { title: "Evidence-Based", description: "Data empowers us to innovate and achieve impactful results with confidence." },
  { title: "Ownership", description: "We take full responsibility for challenges and outcomes." }
];

const staticPrinciples = [
  {
    title: "Earn Trust",
    description: "We build lasting relationships through reliability, authenticity, and transparency."
  },
  {
    title: "Continuous Learning",
    description: "We actively pursue growth, skills mastery, and emerging technologies."
  },
  {
    title: "Simplify Solutions",
    description: "We solve problems efficiently with clear, practical solutions."
  },
  {
    title: "Social Responsibility",
    description: "We contribute to society through responsible actions and foresight."
  }
];

const OurPrinciples = ({ activeColor = 'teal' }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationAngle(prev => prev + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="principles-orb">
      <h2 className="orb-title">Our Principles</h2>
      <p className="orb-subtitle">The core values that guide our work</p>

      <div className="orb-container"  data-aos="zoom-in">
        <div className="orb-center"></div>

        {principles.map((principle, index) => {
          const angle = ((index * 360) / principles.length + rotationAngle) % 360;
          const radian = (angle * Math.PI) / 180;
          const radius = 180;
          const x = radius * Math.cos(radian);
          const y = radius * Math.sin(radian);
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              className={`orb-node ${isActive ? 'active' : ''}`}
              role="button"
              tabIndex="0"
              aria-pressed={isActive}
              style={{
                transform: `translate(calc(50% + ${x}px), calc(50% + ${y}px))`,
                zIndex: isActive ? 10 : 1,
              }}
              onClick={() => setActiveIndex(isActive ? null : index)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') setActiveIndex(isActive ? null : index);
              }}
            >
              <div
                className="node-circle"
                style={isActive ? { backgroundColor: activeColor } : {}}
              >
                <span className="node-title">{principle.title}</span>
                <div className="node-description">
                  <p>{principle.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
     <div>

      
     </div>
      </div>
    </section>
  );
};

export default OurPrinciples;
