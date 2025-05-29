import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const FiveYear = () => {
  const plans = [
    {
      year: 'Year 1',
      title: 'Foundation Phase',
      points: [
        'Develop core AI product (MVP)',
        'Build skilled AI team',
        'Collect training data',
        'Test with early adopters',
        'Establish brand identity',
      ],
      accentColor: '#3b82f6', // blue
      icon: '🏗️'
    },
    {
      year: 'Year 2',
      title: 'Growth Phase',
      points: [
        'Launch to wider audience',
        'Onboard early clients',
        'Raise seed funding',
        'Establish partnerships',
      ],
      accentColor: '#8b5cf6', // purple
      icon: '📈'
    },
    {
      year: 'Year 3',
      title: 'Expansion Phase',
      points: [
        'Add advanced features',
        'Expand to new industries',
        'Scale team',
        'Focus on revenue',
      ],
      accentColor: '#22c55e', // green
      icon: '🌐'
    },
    {
      year: 'Year 4',
      title: 'Global Phase',
      points: [
        'International markets',
        'Publish AI research',
        'Open-source partnerships',
        'Strategic funding',
      ],
      accentColor: '#eab308', // yellow
      icon: '🚀'
    },
    {
      year: 'Year 5',
      title: 'Innovation Phase',
      points: [
        'Global AI leadership',
        'Responsible AI R&D',
        'AI for good programs',
        'IPO preparation',
      ],
      accentColor: '#ef4444', // red
      icon: '💡'
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: 'easeOut',
      }
    }),
    hover: {
      y: -5,
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      <style>{`
        .timeline-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .timeline {
          position: relative;
          padding: 40px 0;
        }
        
        .timeline-line {
          position: absolute;
          left: 50%;
          width: 4px;
          background: linear-gradient(to bottom, #3b82f6, #ef4444);
          top: 0;
          bottom: 0;
          transform: translateX(-50%);
          border-radius: 10px;
        }
        
        .timeline-item {
          position: relative;
          width: 46%;
          padding: 25px;
          margin-bottom: 50px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        
        .timeline-item:nth-child(odd) {
          left: 0;
        }
        
        .timeline-item:nth-child(even) {
          left: 54%;
        }
        
        .timeline-marker {
          position: absolute;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: 0 0 0 4px white, 0 5px 15px rgba(0,0,0,0.1);
          top: 30px;
        }
        
        .timeline-item:nth-child(odd) .timeline-marker {
          right: -75px;
        }
        
        .timeline-item:nth-child(even) .timeline-marker {
          left: -75px;
        }
        
        .timeline-year {
          font-weight: 600;
          color: #777;
          font-size: 0.9rem;
          margin-bottom: 5px;
        }
        
        .timeline-title {
          font-weight: 700;
          margin: 0 0 1rem 0;
          font-size: 1.4rem;
          color: #222;
        }
        
        .timeline-points {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }
        
        .timeline-points li {
          position: relative;
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          color: #444;
          line-height: 1.5;
        }
        
        .timeline-points li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: currentColor;
          font-weight: bold;
        }
        
        @media (max-width: 768px) {
          .timeline-item,
          .timeline-item:nth-child(even) {
            width: 100%;
            left: 0;
            margin-bottom: 30px;
          }
          
          .timeline-item:nth-child(odd) .timeline-marker,
          .timeline-item:nth-child(even) .timeline-marker {
            left: 50%;
            right: auto;
            transform: translateX(-50%);
            top: -25px;
          }
          
          .timeline-line {
            left: 20px;
          }
        }
      `}</style>

      <section className="container py-5" id="five-year-plan">
        <div className="text-center mb-5" data-aos="zoom-out">
          <span className="badge bg-primary mb-3" style={{ 
            fontSize: '0.9rem',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '20px'
          }}>
            Strategic Roadmap
          </span>
          <h2 className="fw-bold" style={{ 
            fontSize: '2.5rem',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            Our 5-Year Growth Journey
          </h2>
          <p className="text-secondary mt-3" style={{ 
            maxWidth: '600px',
            margin: '0 auto',
            fontSize: '1.1rem',
            lineHeight: '1.6'
          }}>
            How we'll revolutionize AI through focused phases of development and innovation
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline">
            <div className="timeline-line"></div>
            
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: false, margin: "-50px" }}
                variants={cardVariants}
                custom={i}
                style={{ borderTop: `4px solid ${plan.accentColor}` }}
              >
                <div
                  className="timeline-marker"
                  style={{ 
                    background: plan.accentColor,
                    color: 'white'
                  }}
                  title={plan.year}
                >
                  {plan.icon}
                </div>

                <div className="timeline-year">{plan.year}</div>
                <h3 className="timeline-title">{plan.title}</h3>
                <ul className="timeline-points">
                  {plan.points.map((point, j) => (
                    <li key={j} style={{ color: plan.accentColor }}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FiveYear;