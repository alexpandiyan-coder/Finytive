import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import crm from "../assets/products/crm-crm-svgrepo-com (1).svg";
import timeDevice from "../assets/products/itpce.png";
import time from "../assets/products/tickora.png";
import "./project.css";
import FAQSection from './FAQSection/FAQSection';

function ProjectPage() {


  const products = [
    {
      title: "Finytive CRM",
      desc: "A complete CRM to manage leads, automate tasks, and boost your sales productivity.",
      img: crm,
      features: ["Real-time Analytics", "Custom Dashboard", "Mobile Support", "24/7 Support"]
    },
    {
      title: "Tickora - Time Management System",
      desc: "Smart attendance system with face recognition and geo-fencing for accurate tracking.",
      img: time,
      features: [
        "Facial Recognition Attendance",
        "Geo-Fencing Validation",
        "Real-Time Attendance Logs",
        "Detailed Reports"
      ]
    },
    {
      title: "ITCPC – Smart Auction Management",
      desc: "Streamline auctions with automated billing and real-time tracking.",
      img: timeDevice,
      features: [
        "Automated Bill Generation",
        "Auction Status Monitoring",
        "Comprehensive Data Management",
        "Powerful Analytics"
      ]
    }
  ];

  return (
    <div className="project-wrapper">
      <div className="header-content" data-aos="fade-up">
        <h2 className="title">
          <span className='companey-name'>Finytive</span> Products
        </h2>
        <p className="subtitle">
          Explore our powerful suite of products designed to streamline your business operations.
          Each solution is crafted to improve efficiency and customer satisfaction.
        </p>
      </div>

      <div className="product-card-grid">
        {products.map((product, index) => (
          <div
            className="product-card-3d"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="product-card-inner">
              <div className="product-card-front">
                {product.img && (
                  <img 
                    src={product.img} 
                    alt={product.title} 
                    className="product-card-img"
                    loading="lazy"
                  />
                )}
                <h4>{product.title}</h4>
                <p>{product.desc}</p>
                <button className="btn-outline-warnings">Get Demo</button>
              </div>
              <div className="product-card-back">
                <h4>Key Features</h4>
                <ul>
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                   
                  ))}
                </ul>
                 <button className="btn-outline-warnings">Get Demo</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
      </div>
    </div>
  );
}

export default ProjectPage;