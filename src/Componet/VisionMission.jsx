import { motion } from 'framer-motion';
import { FaLightbulb, FaBalanceScale, FaRocket } from 'react-icons/fa';
import img1 from '../assets/saas-concept-collage.jpg';

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
  }
};

function VisionMission() {
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
        {/* Left Side: Vision + Image */}
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
          {/* Image */}
          <motion.img
            src={img1}
            alt="AI Vision"
            style={{
              width: '100%',
              maxWidth: '350px',
              marginBottom: '1.5rem',
              borderRadius: '12px'
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />

          {/* Text Content */}
          <motion.h2
            style={{
              fontSize: '2rem',
              color: '#297988',
              marginBottom: '1rem',
              position: 'relative',
              display: 'inline-block',
              margin:"10px"
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: 'spring', stiffness: 300 }
            }}
          >
            Our Vision
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

          <motion.p
            style={{
              fontSize: '1.15rem',
              color: '#444',
              lineHeight: '1.6'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Transform the world through responsible, scalable, and ethical AI that empowers humanity.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            flex: '1 1 400px'
          }}
        >
          {[
            {
              icon: <FaLightbulb size={28} color="#297988" />,
              title: 'Creative Intelligence',
              desc: 'We harness AI to build inventive and adaptive solutions.'
            },
            {
              icon: <FaBalanceScale size={28} color="#297988" />,
              title: 'Fairness & Ethics',
              desc: 'Our AI respects privacy, fairness, and ethical principles.'
            },
            {
              icon: <FaRocket size={28} color="#297988" />,
              title: 'Scalable Impact',
              desc: 'We deploy AI that scales to make a measurable difference globally.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardAnim}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
        </motion.div>
      </div>
    </section>
  );
}

export default VisionMission;
