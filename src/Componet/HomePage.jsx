import React, { useEffect } from 'react';
import "./home.css";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
    const navControls = useAnimation();
    const navigate = useNavigate();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    useEffect(() => {
        if (inView) {
            navControls.start("visible");
        }
    }, [navControls, inView]);

    const navVariants = {
        hidden: { 
            opacity: 0,
            y: -50,
            rotateX: 90,
            perspective: 1000
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const itemVariants = {
        hover: {
            y: -5,
            rotateZ: -2,
            color: '#297988',
            transition: {
                type: "spring",
                stiffness: 300
            }
        }
    };

    const buttonVariants = {
        hover: {
            y: -3,
            scale: 1.05, 
            boxShadow: "0 5px 15px rgba(41, 121, 136, 0.4)",
            transition: {
                type: "spring",
                stiffness: 300
            }
        }
    };

    // New animation for button entry
    const buttonEntryVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 1, ease: "easeOut", delay: 0.5 }
        }
    };

    const handleNavigation = (item) => {
        if (item === 'Services') {
            navigate('/service');
        } else if (item === 'Contact') {
            navigate('/contact');
        } else if (item === "Home") {
            navigate('/');
        }else if(item === "Career"){
            navigate("/Careers")
        }else if(item=="Products"){
            navigate("/ProductsPage")
        }
        // Add more navigation routes here if needed
    };

    return (
        <section className='nav-main' ref={ref}>
            <motion.nav 
                className='nav-bar'
                initial="hidden"
                animate={navControls}
                variants={navVariants}
                style={{ transformStyle: "preserve-3d" }}
            >
                <motion.div 
                    className='logo-name'
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                   <h1> <Link to={"/"}>Finytive</Link></h1>
                </motion.div>
                
                <div className='list-tab'>
                    <ul>
                        {['Home', 'Services', 'Products', 'Career', 'Contact'].map((item, index) => (
                            <motion.li 
                                key={index}
                                whileHover="hover"
                                variants={itemVariants}
                                onClick={() => handleNavigation(item)}
                                style={{ cursor: 'pointer', transformStyle: "preserve-3d" }}
                            >
                                {item}
                                <motion.div 
                                    className="underline"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.li>
                        ))}
                    </ul>
                </div>
                
                <motion.button 
                    className='view-more-btn'
                    initial="hidden"
                    animate="visible"
                    variants={buttonEntryVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Client Login
                </motion.button>
            </motion.nav>
        </section>
    );
}

export default HomePage;
