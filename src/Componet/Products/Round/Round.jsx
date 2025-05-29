import React from 'react';
import "./round.css";

function Round() {
  return (
    <div className='container-round'>
      <div className='container-text'  data-aos="fade-right">
        <h1 className='fs-1'>Revolutionize Your Business with Our CRM</h1>
        <p className='fs-4'>
          Our CRM system is designed to streamline customer interactions, boost sales efficiency, and enhance team collaboration. Trusted by businesses across industries, it helps you build stronger relationships and make smarter decisions with real-time insights.
        </p>
      </div>

      <div className='icon-container'>
        <div className='icon-row icon-row1'>
          <span className="icon-box" style={{ backgroundColor: "#A7E9AF" }}>📊</span>
          <span className="icon-box" style={{ backgroundColor: "#A0CED9" }}>👥</span>
          <span className="icon-box" style={{ backgroundColor: "#FBE8A6" }}>🛠️</span>
          <span className="icon-box" style={{ backgroundColor: "#FFBCBC" }}>📁</span>
          <span className="icon-box" style={{ backgroundColor: "#B8E1FF" }}>🌐</span>
          <span className="icon-box" style={{ backgroundColor: "#D5AAFF" }}>📝</span>
        </div>

        <div className='icon-row icon-row2'>
          <span className="icon-box" style={{ backgroundColor: "#FFD3B6" }}>📈</span>
          <span className="icon-box" style={{ backgroundColor: "#D2F6C5" }}>🧠</span>
          <span className="icon-box" style={{ backgroundColor: "#FFDFD3" }}>🗂️</span>
          <span className="icon-box" style={{ backgroundColor: "#C7CEEA" }}>🔐</span>
          <span className="icon-box" style={{ backgroundColor: "#FFF5BA" }}>⏱️</span>
          <span className="icon-box" style={{ backgroundColor: "#E4BAD4" }}>🤝</span>
        </div>

        <div className='icon-row icon-row3'>
          <span className="icon-box" style={{ backgroundColor: "#B5EAD7" }}>📣</span>
          <span className="icon-box" style={{ backgroundColor: "#FFC1FA" }}>👨‍💻</span>
          <span className="icon-box" style={{ backgroundColor: "#FDCB82" }}>📬</span>
          <span className="icon-box" style={{ backgroundColor: "#C9F2C7" }}>🧮</span>
          <span className="icon-box" style={{ backgroundColor: "#A0E7E5" }}>📅</span>
          <span className="icon-box" style={{ backgroundColor: "#FEC8D8" }}>⚙️</span>
          <span className="icon-box" style={{ backgroundColor: "#FFFACD" }}>🏆</span>
        </div>

        <div className='icon-row icon-row4'>
          <span className="icon-box" style={{ backgroundColor: "#E0BBE4" }}>🔍</span>
          <span className="icon-box" style={{ backgroundColor: "#FFDAC1" }}>📦</span>
          <span className="icon-box" style={{ backgroundColor: "#A9DEF9" }}>🗃️</span>
          <span className="icon-box" style={{ backgroundColor: "#BDE0FE" }}>💻</span>
          <span className="icon-box" style={{ backgroundColor: "#F4ACB7" }}>🔒</span>
          <span className="icon-box" style={{ backgroundColor: "#CFFAFE" }}>📤</span>
          <span className="icon-box" style={{ backgroundColor: "#FFF5E1" }}>📞</span>
        </div>
      </div>

      {/* Mobile alternative design */}
      <div className='mobile-features'>
        <div className='feature-box'>
          <div className='feature-icon'>📊</div>
          <h3>Analytics</h3>
          <p>Real-time insights for smarter decisions</p>
        </div>
        <div className='feature-box'>
          <div className='feature-icon'>👥</div>
          <h3>Collaboration</h3>
          <p>Enhance team productivity</p>
        </div>
        <div className='feature-box'>
          <div className='feature-icon'>⚙️</div>
          <h3>Automation</h3>
          <p>Streamline your workflows</p>
        </div>
      </div>
    </div>
  );
}

export default Round;