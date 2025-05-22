import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import img1 from '../assets/saas-concept-collage.jpg';
import img2 from '../assets/cloud-storage-background-business-network-design.jpg';
import { FaEye, FaGlobe, FaLightbulb, FaRocket, FaBullseye, FaMedal } from 'react-icons/fa';

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
      icon: <FaEye size={28} color="#297988" />,
      title: 'Global-Scale IT Products',
      desc: 'Develop and deploy innovative IT solutions that enable businesses to expand and compete on a global scale.'
    },
    {
      icon: <FaGlobe size={28} color="#297988" />,
      title: 'Accelerated Digital Adoption',
      desc: 'Help organizations achieve at least 40% faster digital transformation through secure, scalable, and AI-powered technologies.'
    },
    {
      icon: <FaLightbulb size={28} color="#297988" />,
      title: 'Measurable Business Impact',
      desc: 'Deliver solutions that produce tangible results, enhancing efficiency, productivity, and ROI.'
    }
  ]);

  const [mission, setMission] = useState([
    {
      icon: <FaBullseye size={28} color="#297988" />,
      title: "Global Tech Leadership by 2030",
      desc: "Aim to become a globally recognized leader in technology and innovation"
    },
    {
      icon: <FaRocket size={28} color="#297988" />,
      title: "Enable 10,000+ Businesses",
      desc: "Drive digital transformation for over 10,000 businesses through cutting-edge IT solutions"
    },
    {
      icon: <FaMedal size={28} color="#297988" />,
      title: "Achieve 50% Efficiency with 99.9% Success",
      desc: "Deliver at least 50% operational efficiency improvement for clients, maintaining a 99.9% success rate"
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
    <section style={{ padding: '4rem 1rem', background: '#eef2f7' }}>
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
        {/* Left Panel */}
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
          }}
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
              y: springY
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <AnimatePresence mode="wait">
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
                ? "Deliver solutions that produce tangible results, enhancing efficiency, productivity, and ROI."
                : "Transform the world through responsible, scalable, and ethical AI that empowers humanity."}
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
          }}
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
