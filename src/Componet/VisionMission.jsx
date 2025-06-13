import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import img1 from '../assets/saas-concept-collage.jpg';
import img2 from '../assets/cloud-storage-background-business-network-design.jpg';
import { FaChartBar } from 'react-icons/fa';
import { RiTeamFill,RiFlashlightLine } from "react-icons/ri";
import { TbSettingsCog } from "react-icons/tb"
import { BsShieldCheck } from "react-icons/bs";
import { SiAiqfome } from "react-icons/si";


const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: 'easeOut' }
  }
};

const cardAnim = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.3 }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.4 }
  }
};

const textFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

function VisionMission() {
  const imageRef = useRef(null);
  const [isToggle, setIsToggle] = useState(false);

  const [vissionData, setVision] = useState([
    {
      icon: <RiTeamFill size={28} color="#297988" />,
      title: ' Empowering 1000+ Businesses',
      desc: 'We strive to enable 1000+ businesses to achieve digital transformation through innovative IT solutions.'
    },
    {
      icon: <TbSettingsCog size={28} color="#297988" />,
      title: 'Boosting Operational Efficiency',
      desc: 'Our mission is to drive at least 50% improvement in operational efficiency for our clients'
    },
    {
      icon: <BsShieldCheck size={28} color="#297988" />,
      title: 'Delivering with 99.9% Success Rate',
      desc: 'We are committed to delivering solutions with a 99.9% success rate, ensuring reliability and excellence'
    }
  ]);

  const [mission, setMission] = useState([
    {
      icon: <RiFlashlightLine size={28} color="#297988" />,
      title: " 40% Faster Digital Adoption",
      desc: "We strive to help organizations achieve at least 40% faster adoption of digital technologies"
    },
    {
      icon: <SiAiqfome size={28} color="#297988" />,
      title: "Secure, Scalable, and AI-Driven Solutions",
      desc: "Our solutions are designed to be secure, scalable, and powered by AI for future-ready performance"
    },
    {
      icon: <FaChartBar size={28} color="#297988" />,
      title: " Measurable Business Impact",
      desc: "We focus on delivering solutions that result in tangible, measurable improvements for our clients"
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsToggle(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  return (
    <section style={{ padding: '2rem 0.5rem', background: '#eef2f7' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
          alignItems: 'flex-start',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            flex: '1 1 450px',
            background: '#fff',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center'
          }} data-aos="zoom-in-right" 
        >
          {/* Dynamic Image with scroll animation */}
          <motion.img
            ref={imageRef}
            src={isToggle ? img2 : img1}
            alt={isToggle ? "Mission Image" : "Vision Image"}
            style={{
              width: '100%',
              maxWidth: '350px',
              marginBottom: '1.5rem',
              borderRadius: '12px',
            }}
            
          />

          <AnimatePresence mode="wait" data-aos="zoom-in-right">
            <motion.h2
              key={isToggle ? "mission" : "vision"}
              variants={textFade}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                fontSize: '2rem',
                color: '#297988',
                marginBottom: '1rem',
                position: 'relative',
                display: 'inline-block',
                margin: '10px',
                cursor: 'default'
              }}
              whileHover={{
                scale: 1.05,
                transition: { type: 'spring', stiffness: 300 }
              }}
            >
              {isToggle ? "Our Mission" : "Our Vision"}
              <motion.span
                layoutId="underline"
                style={{
                  height: '4px',
                  width: '100%',
                  background: '#297988',
                  position: 'absolute',
                  left: 0,
                  bottom: -6,
                  borderRadius: '2px'
                }}
              />
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={isToggle ? "mission-text" : "vision-text"}
              variants={textFade}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                fontSize: '1.15rem',
                color: '#444',
                lineHeight: '1.6'
              }}
            >
              {isToggle
                ? "Global Recognition by 2030 We aim to become a globally recognized technology leader by the year 2030"
                : "Global-Ready IT Products by 2026 We aim to develop and deploy cutting-edge IT products that enable businesses to scale globally by 2026"}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Right Panel - Cards */}
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            flex: '1 1 400px'
          }} data-aos="zoom-in-left"
        >
          <AnimatePresence mode="wait">
            {(isToggle ? mission : vissionData).map((item, index) => (
              <motion.div
                key={`${isToggle ? 'mission' : 'vision'}-${index}`}
                variants={cardAnim}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 1.05 }}
                style={{
                  background: '#fff',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div>{item.icon}</div>
                <div>
                  <h4 style={{ margin: 0, color: '#297988' }}>{item.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#555' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default VisionMission;
