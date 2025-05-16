import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LineComponent from './LineComponet';
import './Cloud.css';

function Cloud() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const features = [
    'Load Balancing',
    'Compliance',
    'Security',
    'Application Slicing',
    'AI Monitoring',
    'AI Based Routing',
  ];

  const contentItems = ['Cloud', 'EDGE NODES', 'EDGE DEVICES'];

  return (
    <div className="cloud-container">
      <h2 className="cloud-title" data-aos="fade-down">Cloud Application</h2>

      <div className="cloud-line">
        <LineComponent />
      </div>

      <div className="cloud-box">
        {features.map((item, index) => (
          <div
            key={index}
            className="cloud-box-child"
            data-aos="fade-right"
            data-aos-delay={index * 200}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cloud;
