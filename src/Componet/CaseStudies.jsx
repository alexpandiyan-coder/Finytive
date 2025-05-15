import React from 'react';
import './CaseStudies.css';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import img1 from "../assets/cloud-storage-background-business-network-design.jpg";
import img2 from "../assets/saas-concept-collage.jpg";

function CaseStudies() {
    const caseStudyData = [
        {
            title: "Project A",
            description: "AI-powered automation platform that boosts efficiency.",
            imageUrl: img1,
        },
        {
            title: "Project B",
            description: "E-commerce redesign leading to 40% conversion growth.",
            imageUrl: img2,
        },
        {
            title: "Project C",
            description: "Mobile-first web app for field engineers.",
            imageUrl: img1,
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        },
        hover: {
            scale: 1.03,
            transition: {
                duration: 0.3
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 1.1 },
        visible: {
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="case-studies-main">
            <motion.div
                className="case-studies-header"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 70
                }}
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                 style={{color:"#297988"}}>
                    Case Studies
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    Innovative projects that solved real-world problems
                </motion.p>
            </motion.div>

            <motion.div 
                className="case-studies-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {caseStudyData.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        <Tilt
                            glareEnable={true}
                            glareMaxOpacity={0.25}
                            glareColor="#ffffff"
                            glarePosition="all"
                            scale={1.03}
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            className="case-study-tilt"
                            transition={{ speed: 500 }}
                        >
                            <div className="case-study-item">
                                <motion.div
                                    className="image-container"
                                    variants={imageVariants}
                                >
                                    <img 
                                        src={item.imageUrl} 
                                        alt={item.title} 
                                        className="case-study-image" 
                                    />
                                    <motion.div 
                                        className="image-overlay"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 0.2 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                                
                                <motion.div 
                                    className="case-study-content"
                                    variants={contentVariants}
                                >
                                    <motion.h3
                                        whileHover={{ color: "#297988" }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {item.title}
                                    </motion.h3>
                                    <motion.p
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {item.description}
                                    </motion.p>
                                    <motion.button
                                        className="demo-btn1"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6 }}
                                        whileHover={{ 
                                            scale: 1.05,
                                            backgroundColor: "#1a5d68",
                                            boxShadow: "0 5px 15px rgba(41, 121, 136, 0.4)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View Case Study
                                    </motion.button>
                                </motion.div>
                            </div>
                        </Tilt>
                    </motion.div>
                ))}
            </motion.div>

            {/* Animated decorative elements */}
            <motion.div 
                className="floating-circle-1"
                initial={{ x: -100, y: -50, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 0.1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div 
                className="floating-circle-2"
                initial={{ x: 100, y: 100, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 0.1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
            />
        </section>
    );
}

export default CaseStudies;