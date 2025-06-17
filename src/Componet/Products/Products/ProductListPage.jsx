import React from 'react';
import { useNavigate } from 'react-router-dom';
import crm from "../../../assets/products/crm-crm-svgrepo-com (1).svg";
import time from "../../../assets/products/tickora.png";
import timeDevice from "../../../assets/products/itpce.png";
import "./ProductSubPage.css"
import "./product.css"

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
    features: ["Facial Recognition Attendance", "Geo-Fencing Validation", "Real-Time Attendance Logs", "Detailed Reports"]
  },
  {
    id: "itcpc",
    title: "ITCPC – Smart Auction Management",
    desc: "Streamline auctions with automated billing and real-time tracking.",
    img: timeDevice,
    features: ["Automated Bill Generation", "Auction Status Monitoring", "Comprehensive Data Management", "Powerful Analytics"]
  }
];

function ProductListPage() {
  const navigate = useNavigate();
console.log("alex")
  return (
    <div className="project-wrapper">
      <div className='bg-image-products'></div>
      <div className="header-content" data-aos="fade-up">
        <h2 className="title">
          <span className='companey-name'>Finytive Products</span>
        </h2>
        <p className="subtitle">
          Explore our powerful suite of products designed to streamline your business operations.
        </p>
      </div>
      <div className="product-card-grid">
        {products.map((product, index) => (
          <div className="product-card-3d" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="product-card-inner">
              <div className="product-card-front">
                <img src={product.img} alt={product.title} className="product-card-img" loading="lazy" />
                <h4>{product.title}</h4>
                <p>{product.desc}</p>
                <button
                  className="btn-outline-warnings"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  Get Demo
                </button>
              </div>
              <div className="product-card-back">
                <h4>Key Features</h4>
                <ul>
                  {product.features.map((feature, i) => <li key={i}>{feature}</li>)}
                </ul>
                <button
                  className="btn-outline-warnings"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  Get Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
