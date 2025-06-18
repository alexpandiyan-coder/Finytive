import React, { useState } from "react";
import "./FAQSection.css";

const faqData = [
  {
    question: "What access do I have on the free plan?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    question: "What access do I have on a free trial?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    question: "Does the price go up as my team gets larger?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    question: "How can I cancel my subscription?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    question: "Can I pay via an Invoice?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-left">
        <h2>Frequently Asked Questions</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.
        </p>

        {faqData.map((faq, index) => (
          <div
            data-aos="fade-right"
            data-aos-delay={index * 160} key={index} className="accordion">
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
