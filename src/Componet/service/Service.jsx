

import Cloud from "./cloud/Cloud";
import AiService from "./AiService/AiService";
import "./service.css";
import CarouselFadeExample from './CarouselService/CarouselFadeExample';
import OurWorkflow from "./OurWorkFlow/OurWorkFlow";
import { IoIosArrowForward } from "react-icons/io";
import Ai from "./jsonFile/Ai.json";
import WebDesign from "./jsonFile/WebDesign.json";
import cloud from "./jsonFile/cloud.json";
import mobile from "./jsonFile/mobile.json";
import Technical from "./jsonFile/Technical.json";
import Custom from "./jsonFile/Custom.json";
import { Link,useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Cover from "./AiService/serviceImage/Cover.png";


function Service() {
  

          const navigate=useNavigate()

          const services = [
  {
    id: 1,
    title: "Enterprise IT Consulting",
    description: "End-to-end consulting for scalable, secure IT infrastructures infrastructures.",
    animation: Ai,
    aos: "fade-up-right"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps for Android and iOS tailored to your brand.",
    animation: mobile,
    aos: "fade-up-left"
  },
  {
    id: 3,
    title: "Cloud Infrastructure Services",
    description: "Deploy, manage, and scale your applications on secure cloud platforms.",
    animation: cloud,
    aos: "fade-up-right"
  },
  {
    id: 4,
    title: "Web Design & Development",
    description: "Responsive, fast, and modern websites that convert visitors into clients.",
    animation: WebDesign,
    aos: "fade-up-left"
  },
  {
    id: 5,
    title: "Custom Software Development",
    description: "Tailor-made software solutions designed to meet your business goals.",
    animation: Custom,
    aos: "fade-up-right"
  },
  {
    id: 6,
    title: "Technical Support Services",
    description: "24/7 tech support to ensure uninterrupted business operations operations.",
    animation: Technical,
    aos: "fade-up-left"
  }
];

{/* <div className="service-visual-section  my-5" data-aos="fade-right">
  <h2 className="fs-2 fw-bold">Explore Our Dynamic Visual Services</h2>
  <p className="text-warning ">
    Real-time animated shuffling of our key service areas
  </p>

  <div className="mt-4">
    <p><strong>✓ Interactive Designs:</strong> Enhance user experience with smooth, engaging animations.</p>
    <p><strong>✓ AI Integration:</strong> Deliver intelligent, data-driven content to your audience.</p>
    <p><strong>✓ Responsive Layout:</strong> Optimized for all devices and screen sizes.</p>
  </div>

  <button className="view-more-btn mt-3 px-4">Learn More</button>
</div> */}

  return (
    <div className="service-container">

     
      {/* Hero Section with Value Content */}
      <div className="visual-service-wrappers text-warning">
              
         
    
        
      </div>

   
      <div className="service-intro text-center my-4">
        <div data-aos="zoom-out">
          <p className="logo-name companey-name fs-2">
            Welcome to Finytive Service
          </p>
          <p className="intro-subtext">
            Empowering startups and enterprises with intelligent digital solutions
          </p>
        </div>

       <div className="service-cards">
  {services.map((service, index) => (
    <div
      key={service.id}
      className={`service-card service-card-${index + 1}`}
      data-aos={service.aos}
   
    >
      <span className="card-logo">
        <Lottie
          animationData={service.animation}
          loop={true}
          autoplay={true}
          style={{ height: 100, width: 100 }}
        />
      </span>
      <div className="contant-top">
        <h2 className="card-title">{service.title}</h2>
        <p className="card-description">{service.description}</p>
      </div>
      <p className="icon-card-description" style={{ fontSize: "50px" }}>
        <IoIosArrowForward />
      </p>
    </div>
  ))}
</div>

        
    </div>
    
      <OurWorkflow />
    </div>
  );
}

export default Service;
