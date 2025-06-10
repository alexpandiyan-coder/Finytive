import React from 'react';
import './WhoWeAre.css';
import { FaRocket, FaLightbulb, FaSync } from 'react-icons/fa';

function WhoWeAre() {
  return (
    <section className="who-wrapper">
      <div className="who-header">
        <h2>
          <span className="highlight">WHO</span> WE ARE
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="who-cards">
        <div className="who-card green">
          <FaRocket className="icon" />
          <h3>LOREM IPSUM<br />IS SIMPLY</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text since the 1500s.
          </p>
        </div>

        <div className="who-card blue">
          <FaLightbulb className="icon" />
          <h3>LOREM IPSUM<br />IS SIMPLY</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text since the 1500s.
          </p>
        </div>

        <div className="who-card red">
          <FaSync className="icon rotate-icon" />
          <h3>LOREM IPSUM<br />IS SIMPLY</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text since the 1500s.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
