

import Cloud from "./cloud/Cloud";
import AiService from "./AiService/AiService";
import "./service.css";
import CarouselFadeExample from './CarouselService/CarouselFadeExample';
import OurWorkflow from "./OurWorkFlow/OurWorkFlow";
import { IoIosArrowForward } from "react-icons/io";
import Ai from "./jsonFile/Ai.json";
import javaImage from "./jsonFile/java.json";
import cloud from "./jsonFile/cloud.json";
import mobile from "./jsonFile/mobile.json";
import { Link,useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import BoxPageService from "./BoxPageService";

function Service() {
  

          const navigate=useNavigate()

  return (
    <div className="service-container">

      {/* Hero Section with Value Content */}
      <div className="visual-service-wrapper">
        <div className="service-visual-section  my-5" data-aos="fade-right">
          <h2 className="fs-2 fw-bold">Explore Our Dynamic Visual Services</h2>
          <p className="text-muted">
            Real-time animated shuffling of our key service areas
          </p>

          <div className="mt-4">
            <p><strong>✓ Interactive Designs:</strong> Enhance user experience with smooth, engaging animations.</p>
            <p><strong>✓ AI Integration:</strong> Deliver intelligent, data-driven content to your audience.</p>
            <p><strong>✓ Responsive Layout:</strong> Optimized for all devices and screen sizes.</p>
          </div>

          <button className="view-more-btn mt-3 px-4">Learn More</button>
        </div>

        {/* Box Grid or Interactive Content */}
        <div className="box-service" data-aos="zoom-in">
          <BoxPageService />
        </div>
      </div>

      {/* Welcome Section */}
      <div className="service-intro text-center my-4">
        <div data-aos="zoom-out">
          <p className="logo-name companey-name fs-2">
            Welcome to Finytive Service
          </p>
          <p className="intro-subtext">
            Empowering startups and enterprises with intelligent digital solutions
          </p>
        </div>

        {/* Service Cards Section */}
        <div className="service-cards">

          {/* AI Solutions */}
      
          <div className="service-card service-card-1" data-aos="fade-up-right" onClick={()=>navigate("/")}>
            <span className="card-logo">
              <Lottie animationData={Ai} loop={true} style={{ height: 100, width: 100 }} />
            </span>
            <div className="contant-top">
              <h2 className="card-title">AI Solutions</h2>
              <p className="card-description">
                Leverage Artificial Intelligence to automate operations, enhance decision-making, and gain deep business insights.
              </p>
            </div>
            <p style={{fontSize:"50px"}}><IoIosArrowForward /></p>
          </div>
     
          
          <div className="service-card service-card-2" data-aos="fade-up-left" onClick={()=>navigate("/")}>
            <span className="card-logo">
              <Lottie animationData={mobile} loop={true} autoplay={true} style={{ height: 100, width: 100 }} />
            </span>
            <div className="contant-top">
              <h2 className="card-title">Mobile App Development</h2>
              <p className="card-description">
                Build high-performance Android and iOS apps with seamless user experience and scalable architecture.
              </p>
            </div>
            <p style={{fontSize:"50px"}}><IoIosArrowForward /></p>
          </div>

          <div className="service-card service-card-3" data-aos="fade-up-right" onClick={()=>navigate("/")}>
            <span className="card-logo">
              <Lottie animationData={cloud} loop={true} autoplay={true} style={{ height: 100, width: 100 }} />
            </span>
            <div className="contant-top">
              <h2 className="card-title">Cloud Computing</h2>
              <p className="card-description">
                Migrate, manage, and scale your applications in the cloud for better availability, security, and performance.
              </p>
            </div>
            <p style={{fontSize:"50px"}}><IoIosArrowForward /></p>
          </div>

        
          <div className="service-card service-card-4" data-aos="fade-up-left" onClick={()=>navigate("/")}>
            <span className="card-logo">
              <Lottie animationData={javaImage} loop={true} autoplay={true} style={{ height: 100, width: 100 }} />
            </span>
            <div className="contant-top">
              <h2 className="card-title">Enterprise Web Applications</h2>
              <p className="card-description">
                Develop secure, compliant, and robust banking platforms with modern tech and intelligent automation.
              </p>
            </div>
              <p style={{fontSize:"50px"}}><IoIosArrowForward /></p>
          </div>
          <div className="service-card service-card-3" data-aos="fade-up-right" onClick={()=>navigate("/")}>
            <span className="card-logo">
              <Lottie animationData={cloud} loop={true} autoplay={true} style={{ height: 100, width: 100 }} />
            </span>
            <div className="contant-top">
              <h2 className="card-title">ERP & CRM</h2>
              <p className="card-description">
                Migrate, manage, and scale your applications in the cloud for better availability, security, and performance.
              </p>
            </div>
            <p style={{fontSize:"50px"}}><IoIosArrowForward /></p>
          </div>
        </div>
      </div>

      {/* Additional Components */}
      <AiService />
      <Cloud />
      <OurWorkflow />
    </div>
  );
}

export default Service;
