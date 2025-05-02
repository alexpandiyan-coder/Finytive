import React from 'react';
import './Products.css';
import { motion } from 'framer-motion';
import img1 from "../assets/project/Artificial intelligence-bro.png";
import img2 from "../assets/project/Chat bot-rafiki.png";
import img3 from "../assets/project/Innovation-bro.png";
import img4 from "../assets/project/Innovation-pana.png";
import img5 from "../assets/project/Security On-amico.png";

function Products() {
  const services = [
    {
      img: img5,
      title: "Custom Web & Mobile Applications",
      description: "Tailored apps built for performance, usability, and scalability across platforms.",
    },
    {
      img: img1,
      title: "AI/ML System Automations",
      description: "Smart solutions that learn, adapt, and automate critical business workflows.",
    },
    {
      img: img2,
      title: "Cloud Native SaaS Platform",
      description: "Scalable and secure cloud platforms designed for growth and agility.",
    },
    {
      img: img3,
      title: "Data Analytics & Optimization",
      description: "Actionable insights from data to improve decisions and efficiency.",
    },
    {
      img: img4,
      title: "System Integration & Training",
      description: "Seamless integration and CI/CD pipelines for faster delivery and stability.",
    },
    {
      img: img5,
      title: "IT Consulting & Training",
      description: "Expert advice and product training to elevate your digital capabilities.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: -45,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hover: {
      y: -15,
      rotateY: 5,
      rotateX: 5,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(41, 121, 136, 0.25)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      rotateY: 15,
      scale: 1.1,
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    hover: {
      y: -5,
      rotateX: 5,
      boxShadow: "0 10px 25px rgba(41, 121, 136, 0.4)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    },
    tap: {
      scale: 0.95,
      rotateX: 0
    }
  };

  return (
    <motion.div 
      className='product-container'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className='text-center mb-5'>
        <motion.h1 
          className='service-title'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className='company-name'>Finytive</span> Services
        </motion.h1>
        <motion.p 
          className='service-subtitle'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Explore our suite of innovative digital products designed to streamline business processes, enhance productivity,
          <br />
          and unlock new growth opportunities — across industries and platforms.
        </motion.p>
      </div>

      <div className='service-list' data-aos="fade-up"
     data-aos-duration="3000">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className='service-card'
            variants={cardVariants}
            whileHover="hover"
            style={{ perspective: 1000, transformStyle: "preserve-3d" }}
          >
            <motion.div 
              className='service-img-container'
              variants={imageVariants}
              whileHover="hover"
            >
              <img src={service.img} alt={service.title} className="service-img" />
            </motion.div>
            <div className='service-content'>
              <h3>{service.title}</h3>
              <p className='service-description'>{service.description}</p>
            </div>
          </motion.div>
        ))}

        <motion.div 
          className='view-more-container'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button 
            className="view-more-btn"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            style={{ transformStyle: "preserve-3d" }}
          >
            View More Services
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Products;