import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./OurWorkFlow.css";

const steps = [
  { title: 'Planning', description: 'We start by understanding your requirements.' },
  { title: 'Design & Development', description: 'We design and develop based on your plan.' },
  { title: 'Testing', description: 'We test everything thoroughly.' },
  { title: 'Delivery', description: 'We deliver the final product on time.' },
  { title: 'Support', description: 'We provide ongoing support post-delivery.' }
];

const CloudWorkflow = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="containers">
      <h2 className="title" data-aos="zoom-in">Our Workflow</h2>
      <div className="flow-container">
        {steps.map((step, index) => (
          <div key={index} className="step-wrapper">
            <div
              className="cloud"
              data-aos="fade-up"
              data-aos-delay={index * 300}
              role="region"
              aria-label={`Step: ${step.title}`}
            >
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
