import React from 'react';
import './Products.css';
import { motion } from 'framer-motion';
import img1 from "../assets/project/Artificial intelligence-bro.png";
import img2 from "../assets/project/Chat bot-rafiki.png";
import img3 from "../assets/project/Innovation-bro.png";
import img4 from "../assets/project/Innovation-pana.png";
import img5 from "../assets/project/Security On-amico.png";

function Products() {
  const services =[
    {
      img: img1,
      title: 'Enterprise IT Consulting',
      description: 'End-to-end consulting for scalable, secure IT infrastructures.',
    },
    {
      img: img2,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile apps for Android and iOS tailored to your brand.',
    },
    {
      img: img3,
      title: 'Cloud Infrastructure Services',
      description: 'Deploy, manage, and scale your applications on secure cloud platforms.',
    },
    {
      img: img4,
      title: 'Web Design & Development',
      description: 'Secure, scalable solutions for enterprise digital workflows.',
    },
    {
      img: img5,
      title: 'Technical Support Services',
      description: '24/7 tech support to ensure uninterrupted business operations.',
    },
    {
      img: img3,
      title: 'Custom Software Development',
      description: 'Tailor-made software solutions designed to meet your business goals.',
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
            className='service-cardss'
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