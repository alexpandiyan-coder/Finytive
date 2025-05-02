import React from 'react';
import crm from "../assets/products/crm-crm-svgrepo-com (1).svg";
import "./project.css";

function ProjectPage() {
  const products = [
    {
      title: "Finytive CRM",
      desc: "A complete CRM to manage leads, automate tasks, and boost your sales productivity.",
      img: crm
    },
    {
      title: "KOKA ERP",
      desc: "All-in-one ERP solution for managing finance, HR, inventory, and more.",
      img: crm
    },
    {
      title: "Visitor Management Software",
      desc: "Digitally manage visitor entries with real-time alerts and records.",
      img: crm
    },
    {
      title: "Parking Management Software",
      desc: "Smart parking allocation and tracking system for organizations.",
      img: crm
    },
    {
      title: "Helpdesk Management Software",
      desc: "Streamlined ticketing, SLA monitoring, and team collaboration.",
      img: crm
    }
  ];

  return (
    <div className="project-wrapper">
      <h2 className="title"><span className='companey-name'>Finytive</span> Products</h2>

      <div className="product-card-grid">
        {products.map((product, index) => (
          <div className="product-card-3d" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="product-card-inner">
              <div className="product-card-front">
                {product.img && (
                  <img src={product.img} alt={product.title} className="product-card-img" />
                )}
                <h4>{product.title}</h4>
                <p>{product.desc}</p>
                <button className="btn-outline-warnings">Explore</button>
              </div>
              <div className="product-card-back">
                <h4>Features</h4>
                <ul>
                  <li>Real-time Analytics</li>
                  <li>Custom Dashboard</li>
                  <li>Mobile Support</li>
                  <li>24/7 Support</li>
                </ul>
                <button className="btn-outline-warnings">Get Demo</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;