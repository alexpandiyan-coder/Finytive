import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Cloud.css';
import cloudAnimation from "../jsonFile/cloud.json";
import Lottie from "lottie-react";

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

  return (
    <div className="cloud-container">
      <h2 className="cloud-title" data-aos="fade-down">Cloud Application</h2>

      <div className="cloud-line" data-aos="fade-right">
        <div className='cloud-text'>
          <p>
            Our Cloud Application services empower businesses to scale, secure, and streamline operations across distributed environments. Designed for startups to large enterprises, our solution emphasizes agility, automation, and high availability. We help organizations modernize their infrastructure through cloud-native development, seamless integration, and intelligent automation. By leveraging the power of cloud computing, we deliver flexible, secure, and cost-effective solutions that drive innovation, enhance performance, and ensure business continuity across dynamic and evolving digital landscapes.
          </p>
          <button className="view-more-btn">Demo</button>
        </div>

        <div className='cloud-animation' data-aos="fade-left">
          <Lottie className='cloud-img-service' animationData={cloudAnimation} loop={true} />
        </div>
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
