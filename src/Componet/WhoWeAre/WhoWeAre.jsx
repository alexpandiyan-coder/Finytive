import React from 'react';
import './WhoWeAre.css';
import { FaUsers, FaDraftingCompass, FaRegLightbulb } from 'react-icons/fa';

function WhoWeAre() {
  return (
    <section className="who-wrapper">
      <div className="who-header" data-aos="fade-up-right">
        <h2>
          <span className="highlight">WHO</span><span style={{color:"teal",}} className='m-1'>WE ARE</span>
        </h2>
        <p>
         At Finytive Private Limited, we are builders, thinkers, and technologists driven by a singular mission — to turn bold ideas into cutting-edge software products that move businesses forward
        </p>
      </div>

      <div className="who-cards" data-aos="fade-right">
        <div className="who-card green">
          <FaUsers className="icon" />
          <h3>Team of Visionary <br />Engineers</h3>
          <p style={{ textAlign: "justify" }}>
           Founded by a team of visionary engineers and creators, Finytive stands for agility, quality, and impact. We specialize in turning complexity into clarity — designing intuitive digital experiences and high-performance backend architectures that scale with your ambitions
          </p>
        </div>

        <div className="who-card blue" data-aos="fade-right">
          <FaDraftingCompass className="icon" />
          <h3>Product-first <br />Innovation Hub</h3>
          <p style={{ textAlign: "justify" }}>
           We’re not just another software company. We’re a product-first innovation hub, blending deep engineering expertise with a startup mindset. Whether it's transforming industries through AI-powered platforms or crafting scalable SaaS applications, we deliver solutions that are fast, secure, and future-ready.
          </p>
        </div>

        <div className="who-card red" data-aos="fade-right">
          <FaRegLightbulb className="icon rotate-icon" />
          <h3>Idea to Market-ready <br />Product</h3>
           <p style={{ textAlign: "justify" }}>
           With a collaborative, transparent, and user-centric approach, we work as an extension of your team — from idea to MVP to market-ready product.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
