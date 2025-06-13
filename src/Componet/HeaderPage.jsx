import "./header.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HeaderPage() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <header className='header-page'>
      <div className="header-overlay"></div>

      <div className='header' data-aos="zoom-in-right">
        <p className="font-header">Finytive</p>
        <p className='font-child'>Finite ideas. Infinite possibilities.</p>
        <p className='header-description'>
          At Finytive, our name reflects our purpose — blending the boundless possibilities of innovation 
          with precise, impactful solutions. From startups to enterprises, we deliver smart, secure, 
          and scalable technology that transforms.
        </p>
        <div className='header-buttons'>
          <button
            className='demo-btn1'
            onClick={() => navigate("/Contact")}
          >
            Schedule a demo
          </button>
          <button
            className='demo-btn2'
            onClick={() => navigate("/ProductsPage")}
          >
            Explore all products
          </button>
        </div>
      </div>
    </header>
  );
}

export default HeaderPage;
