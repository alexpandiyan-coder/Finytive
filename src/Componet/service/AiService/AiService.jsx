import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AiImage from "./Blog-Images---The-Future-of-SEO-AG-4 1.png";
import "./AiService.css";

function AiService() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="ai-service-container">
      <p className="ai-service-title" data-aos="fade-down">
        Artificial Intelligence Consulting Solutions
      </p>

      <div className="ai-service-content" data-aos="fade-up">
        <div className="ai-service-image-container" data-aos="fade-right">
          <img
            src={AiImage}
            alt="AI Service"
            className="ai-service-image"
          />
        </div>

        <div className="ai-service-text" data-aos="fade-left">
          <p className="ai-service-description">
            At Finytive, we provide cutting-edge Artificial Intelligence consulting solutions tailored to meet the unique needs of startups and enterprises. Our AI experts help organizations unlock the true potential of data by integrating intelligent systems into their operations. Whether it's building predictive models, automating business processes, or enhancing customer experiences through machine learning, we ensure innovative, scalable, and ethical AI implementations. From concept to deployment, we support every stage of the AI journey—empowering businesses to work smarter, make faster decisions, and stay ahead in a competitive landscape.
          </p>
          <button style={{width:"200px"}} className="view-more-btn">Demo</button>
        </div>
      </div>
    </div>
  );
}

export default AiService;