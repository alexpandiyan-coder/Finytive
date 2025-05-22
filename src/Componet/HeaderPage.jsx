import "./header.css"
import img1 from "../assets/ai woman 1.svg"

import 'aos/dist/aos.css';
function HeaderPage() {

return (
    <header className='header-page'>
      <div className='header'>
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

      <div className='logo-container'  data-aos="fade-left">
        <img src={img1}  className='logo-img' alt="ERP Solutions Illustration" />
      </div>
    </header>
  )
}

export default HeaderPage