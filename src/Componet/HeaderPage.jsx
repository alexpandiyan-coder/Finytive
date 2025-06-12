import "./header.css";
import Lottie from 'lottie-react';
import animationData from '../assets/homePageJson/Animation - 1748153244181.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";

function HeaderPage() {
  const navigate = useNavigate();


  return (
    <header className='header-page'>
      <div className='header' data-aos="zoom-in-right">
        <p className='font-header'>
          Finite ideas <span className='font-child'>Infinite possibilities</span>
        </p>
        {/* <p className='header-subtext'>Nothing can be Delivered, without 100%</p> */}
        <p className='header-description'>
          At Finytive, our name reflects our purpose — blending the boundless possibilities of innovation with precise, impactful solutions.
          From startups to enterprises, we deliver smart, secure, and scalable technology that transforms.
        </p>
        <div className='header-buttons'>
          <button
            className='view-more-btn'
            onClick={() => {
              
              navigate("/Contact");
            }}
          >
            Schedule a demo
          </button>
          <button
            className='view-more-btn'
            onClick={() => {
               
              navigate("/ProductsPage");
            }}
          >
            Explore all products
          </button>
        </div>
      </div>

      <div className='logo-container' data-aos="fade-left">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </header>
  );
}

export default HeaderPage;
