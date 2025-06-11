import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaUserCircle,
  FaMapMarkedAlt,
  FaClock,
  FaUserFriends,
  FaChartBar,
  FaCalendarAlt,
  FaCheck,
  FaArrowLeft
} from 'react-icons/fa';

import crm from "../../../assets/products/crm-crm-svgrepo-com (1).svg";
import timeDevice from "../../../assets/products/crm-crm-svgrepo-com (1).svg";
import time from "../../../assets/products/crm-crm-svgrepo-com (1).svg";
import "./product.css";
import "./ProductSubPage.css";
// import FAQSection from './FAQSection/FAQSection';

function ProductsSubPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-quad'
    });
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo(0, 0);
    }
  }, [selectedProduct]);

  const products = [
    {
      id: "crm",
      title: "Finytive CRM",
      desc: "A complete CRM to manage leads, automate tasks, and boost your sales productivity.",
      img: crm,
      features: ["Real-time Analytics", "Custom Dashboard", "Mobile Support", "24/7 Support"]
    },
    {
      id: "tickora",
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
      id: "itcpc",
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

  const productData = {
    crm: {
      title: "Finytive CRM",
      description: "A complete CRM to manage leads, automate tasks, and boost your sales productivity.",
      features: [
        {
          title: "Real-time Analytics",
          icon: <FaChartBar className="feature-icon" />,
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
          descriptions: [
            "Comprehensive sales performance metrics",
            "Real-time dashboard with key indicators",
            "Customizable reporting tools"
          ]
        },
        {
          title: "Custom Dashboard",
          icon: <FaUserCircle className="feature-icon" />,
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=60",
          descriptions: [
            "Personalized dashboard layouts",
            "Drag-and-drop widget configuration",
            "Role-based dashboard views"
          ]
        },
        {
          title: "Mobile Support",
          icon: <FaMapMarkedAlt className="feature-icon" />,
          image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=60",
          descriptions: [
            "Native mobile applications",
            "Offline data synchronization",
            "Push notifications for updates"
          ]
        },
        {
          title: "24/7 Support",
          icon: <FaUserFriends className="feature-icon" />,
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
          descriptions: [
            "Round-the-clock customer support",
            "Multi-channel support options",
            "Knowledge base and documentation"
          ]
        }
      ]
    },
    tickora: {
      title: "Tickora - Time Management System",
      description: "Smart attendance system with face recognition and geo-fencing for accurate tracking.",
      features: [
        {
          title: "Face Recognition-Based Attendance",
          icon: <FaUserCircle className="feature-icon" />,
          image: "https://images.unsplash.com/photo-1555952497-ef1906810d7a?w=800&auto=format&fit=crop&q=60",
          descriptions: [
            "Advanced facial recognition technology",
            "Multiple face detection capability",
            "Secure face data storage"
          ]
        },
        {
          title: "Geo-Fencing Integration",
          icon: <FaMapMarkedAlt className="feature-icon" />,
          image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=60",
          descriptions: [
            "Precise location-based tracking",
            "Customizable geo-fence boundaries",
            "Real-time location verification"
          ]
        },
        {
          title: "Real-Time Attendance Logs",
          icon: <FaClock className="feature-icon" />,
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
          descriptions: [
            "Instant attendance status updates",
            "Live dashboard with analytics",
            "Automated notifications"
          ]
        },
        {
          title: "Detailed Reports",
          icon: <FaChartBar className="feature-icon" />,
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
          descriptions: [
            "Comprehensive attendance reports",
            "Customizable report formats",
            "Export functionality"
          ]
        }
      ]
    },
    itcpc: {
      title: "ITCPC – Smart Auction Management",
      description: "Streamline auctions with automated billing and real-time tracking.",
      features: [
        {
          title: "Automated Bill Generation",
          icon: <FaChartBar className="feature-icon" />,
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
          descriptions: [
            "Instant bill generation",
            "Customizable billing templates",
            "Automated payment tracking"
          ]
        },
        {
          title: "Auction Status Monitoring",
          icon: <FaClock className="feature-icon" />,
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=60",
          descriptions: [
            "Real-time auction progress tracking",
            "Bid monitoring and alerts",
            "Auction timeline management"
          ]
        },
        {
          title: "Comprehensive Data Management",
          icon: <FaUserCircle className="feature-icon" />,
          image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=60",
          descriptions: [
            "Centralized data storage",
            "Secure data access controls",
            "Automated data backup"
          ]
        },
        {
          title: "Powerful Analytics",
          icon: <FaChartBar className="feature-icon" />,
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
          descriptions: [
            "Advanced auction analytics",
            "Performance metrics dashboard",
            "Custom report generation"
          ]
        }
      ]
    }
  };

  const handleDemoClick = (productId) => {
    setSelectedProduct(productId);
    setSelectedFeature(0);
  };

  const handleBackClick = () => {
    setSelectedProduct(null);
  };

  if (selectedProduct) {
    const product = productData[selectedProduct];
    return (
      <div className='project-page-layout'>
        <button 
          className="back-button" 
          onClick={handleBackClick}
          style={{
            margin:"30px",
            position: 'absolute',
            top: '-80px',
            left: '20px',
            padding: '10px 20px',
            backgroundColor: '#297988',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <FaArrowLeft /> Back to Products
        </button>

        <div className='project-items'>
          {product.features.map((feature, index) => (
            <div 
              className={`items ${selectedFeature === index ? 'active' : ''}`} 
              key={index}
              onClick={() => setSelectedFeature(index)}
            >
              <div className="feature-content">
                {feature.icon}
                <span>{feature.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className='project-data'>
          <div className="project-img">
            <img src={product.features[selectedFeature].image} alt={product.features[selectedFeature].title} />
          </div>
          <div className="project-text">
            {product.features[selectedFeature].descriptions.map((desc, index) => (
              <div className="project-point" key={index}>
                <FaCheck className="check-icon" />
                {desc}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

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
                <button 
                  className="btn-outline-warnings"
                  onClick={() => handleDemoClick(product.id)}
                >
                  Get Demo
                </button>
              </div>
              <div className="product-card-back">
                <h4>Key Features</h4>
                <ul>
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button 
                  className="btn-outline-warnings"
                  onClick={() => handleDemoClick(product.id)}
                >
                  Get Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {/* <FAQSection /> */}
      </div>
    </div>
  );
}

export default ProductsSubPage;
