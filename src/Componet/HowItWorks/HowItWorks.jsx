import React from "react";
import "./HowItWorks.css";

const steps = [
  {
    id: "01",
    title: "Casing the Issue",
    desc: "To take a trivial example, which idea of ever undertakes.",
    icon: "🌐",
  },
  {
    id: "02",
    title: "Gather the Information",
    desc: "Best every pleasure is too welcomed every pain avoided.",
    icon: "📥",
  },
  {
    id: "03",
    title: "Cycle the Information",
    desc: "Have to be repudiated annoyances accepted the wise.",
    icon: "🔄",
  },
];

const HowItWorks = () => {
  return (
    <div className="flow-container">
      <h4 className="flow-sub">HOW IT WORKS</h4>
      <h2 className="flow-heading">Information science arrangements for startup</h2>
      <div className="flow-steps">
        {steps.map((step, index) => (
          <div className="flow-step" key={index}>
            <div className="flow-cloud">
              <span className="step-icon">{step.icon}</span>
              <span className="step-id">{step.id}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
            {index < steps.length - 1 && <div className="flow-line" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
