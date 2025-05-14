import "./WhyChoose.css";
import { useEffect } from "react";

const steps = [
  {
    title: "Well-Trusted Organization",
    description:
      "Finytive is recognized for its reliability, transparency, and client-first approach. We've built long-term relationships through consistent delivery and proven results.",
    icon: "🏛️"
  },
  {
    title: "Client First",
    description:
      "We prioritize client needs at every stage, ensuring personalized solutions and satisfaction. Your goals drive our strategy, innovation, and long-term partnership approach.",
    icon: "🤝"
  },
  {
    title: "On-Time Delivery",
    description:
      "We follow agile processes to ensure projects are delivered within deadlines without compromising quality. Timely execution is our commitment to your business success.",
    icon: "⏱️"
  },
  {
    title: "Results Focused",
    description:
      "We aim for measurable outcomes that drive growth and value for your business. Every solution we build is aligned with your goals and success metrics.",
    icon: "🎯"
  },
  {
    title: "Total Ownership",
    description:
      "We take complete responsibility from start to finish, ensuring seamless execution and accountability. Our team treats your project as our own, delivering with dedication and precision.",
    icon: "🛠️"
  }
];

export default function WhyChoose() {
  useEffect(() => {
    const cards = document.querySelectorAll('.choose-card');
    
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const angleY = (x - centerX) / 20;
      const angleX = (centerY - y) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      card.style.boxShadow = `${-angleY * 2}px ${angleX * 2}px 20px rgba(0, 0, 0, 0.1)`;
    };
    
    const handleMouseLeave = (e) => {
      const card = e.currentTarget;
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      card.style.boxShadow = '0 10px 30px rgba(0, 123, 143, 0.2)';
    };
    
    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <section className="why-choose-section">
      <div className="why-choose-header">
        <h2>
          Why Choose <span className="logo-title">Finytive?</span>
        </h2>
        <p className="subtitle">
          Finytive delivers innovative, secure, and scalable fintech solutions tailored to your business.
          We combine deep industry expertise with fast, customer-centric development.
          Our end-to-end support ensures long-term success and compliance.
        </p>
      </div>
      <div className="card-container">
        {steps.map((step, index) => (
          <div className="choose-card" key={index}>
            <div className="card-icon">{step.icon}</div>
            <h3 className="card-title">{step.title}</h3>
            <p className="card-description">{step.description}</p>
            <div className="card-number">{index + 1}</div>
          </div>
        ))}
      </div>
    </section>
  );
}