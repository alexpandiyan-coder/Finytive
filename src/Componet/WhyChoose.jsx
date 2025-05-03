import "./WhyCoose.css"

const steps = [
  {
    title: "Well-Trusted Organization",
    description:
      "Finytive is recognized for its reliability, transparency, and client-first approach We’ve built long-term relationships through consistent delivery and proven results"
  },
  {
    title: "Client First",
    description:
     `We prioritize client needs at every stage, ensuring personalized solutions and satisfaction.
Your goals drive our strategy, innovation, and long-term partnership approach`
  },
  {
    title: "On-Time Delivery",
    description:
      `We follow agile processes to ensure projects are delivered within deadlines without compromising quality.
Timely execution is our commitment to your business success`
  },
  {
    title: "Results Focused",
    description:
      `We aim for measurable outcomes that drive growth and value for your business.
Every solution we build is aligned with your goals and success metrics`
  },
  {
    title: "Total Ownership",
    description:
      `We take complete responsibility from start to finish, ensuring seamless execution and accountability.
Our team treats your project as our own, delivering with dedication and precision.`
  }
];

export default function WhyChoose() {
  return (
    <section className="timeline-section">
      <div className="why-choose-div">
      <h2>  Why Choose <span className="logo-title"> Finytive?</span> </h2>
      <p>
Finytive delivers innovative, secure, and scalable fintech solutions tailored to your business.
We combine deep industry expertise with fast, customer-centric development.
Our end-to-end support ensures long-term success and compliance
</p>
      </div>
      {steps.map((step, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-circle">
            <span>{index + 1}</span>
          </div>
          <div className="timeline-content">
            <h3 className="timeline-title">{step.title}</h3>
            <p className="timeline-description">{step.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
