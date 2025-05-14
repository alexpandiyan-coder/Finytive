import React, { useEffect } from 'react'
import FiveYear from './Componet/FiveYear'
import HomePage from './Componet/HomePage'
import HeaderPage from './Componet/HeaderPage'
import WhyChoose from './Componet/WhyChoose'
import QuickFacts from './Componet/QuickFacts'
import Products from './Componet/Products'
import ProjectPage from './Componet/ProjectPage'
import AOS from 'aos';
import  CaseStudies from "./Componet/CaseStudies"
import VisionMission from "./Componet/VisionMission"
import 'aos/dist/aos.css';
import OurRecentBlogs from "./Componet/OurRecentBlogs"
import Footer from './Componet/Footer'
import OurBlog from './Componet/OurBlog'
import VideoPage from './Componet/VideoPage'
import Technology from './Componet/Technology'
import AboutCompany from './Componet/AboutCompany'
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);
  return (
    <div>
     <HomePage/>
     <HeaderPage/>
    
     <ProjectPage/>
     <AboutCompany/>
     <VideoPage/>
     <CaseStudies/>
     <WhyChoose/>
     <VisionMission/>
     <OurRecentBlogs/>
     <Footer/> 

    </div>
  )
}

export default App