import "./header.css"
import Lottie from 'lottie-react';
import animationData from '../assets/homePageJson/Animation - 1748153244181.json';
import 'aos/dist/aos.css';

function HeaderPage() {

return (
    <header className='header-page'>
      <div className='header' data-aos="zoom-in-right">
        <p className='font-header'>
          Streamline Your <br/> <span className='font-child'> Business with ERP Solutions</span>
        </p>
        <p className='header-subtext'>Nothing can be Delivered, without 100%</p>
        <p className='header-description'>
          Discover Seamless Integration, Enhanced Efficiency, and Real-Time Insights.<br/> 
          Let Our Expert Team Craft Your Custom ERP Software Today!
        </p>
        <div className='header-buttons'>
          <button className='view-more-btn'>Schedule a demo</button>
          <button className='view-more-btn'>Explore all products</button>
        </div>
      </div>

      <div className='logo-container'  data-aos="fade-left" >
        <Lottie animationData={animationData} loop={true} />
      </div>
    </header>
  )
}

export default HeaderPage