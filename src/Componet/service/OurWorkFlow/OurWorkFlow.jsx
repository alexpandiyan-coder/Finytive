import React from 'react';
import "./OurWorkFlow.css";

const steps = [
  {
    title: 'Planning',
    description: 'We start by understanding your requirements.',
  },
  {
    title: 'Design & Development',
    description: 'We design and develop based on your plan.',
  },
  {
    title: 'Testing & Delivery',
    description: 'We test everything and deliver on time.',
  },
];

const CloudWorkflow = () => {
  return (
    <div className="container">
      <h2 className="title" data-aos="zoom-in">Our Workflow</h2>
      <div className="flow-container" data-aos="zoom-in">
        {steps.map((step, index) => (
          <div key={index} className="step-wrapper">
            <div className="cloud" role="region" aria-label={`Step: ${step.title}`}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="line-container">
                <div className="line">
                  <span className="moving-dot"></span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudWorkflow;
