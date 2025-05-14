import React from 'react';
import { motion } from 'framer-motion';

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
      accent: 'bg-blue-500',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
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
      accent: 'bg-purple-500',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
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
      accent: 'bg-green-500',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      )
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
      accent: 'bg-yellow-500',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
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
      accent: 'bg-red-500',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white" id="five-year-plan">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-800 mb-4">
            Strategic Roadmap
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our 5-Year Growth Journey
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            How we'll revolutionize AI through focused phases of development
          </p>
        </div>

        <div className="relative">
         
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                custom={index}
                className={`relative ${index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-16'} bg-white rounded-xl shadow-md overflow-hidden border border-gray-100`}
              >
                {/* Accent bar */}
                <div className={`${plan.accent} h-2 w-full`}></div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`${plan.accent} p-2 rounded-lg text-white mr-4`}>
                      {plan.icon}
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">{plan.year}</span>
                      <h3 className="text-xl font-bold text-gray-900">{plan.title}</h3>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {plan.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className={`flex-shrink-0 ${plan.accent} rounded-full w-1.5 h-1.5 mt-2 mr-2`}></div>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiveYear;