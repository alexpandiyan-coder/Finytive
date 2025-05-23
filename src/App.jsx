import React, { useEffect } from 'react';
import {  Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CoreValue from "./Componet/CoreValue/CoreValue"
import Layout from './Layout'; 
import HeaderPage from './Componet/HeaderPage';
import ProjectPage from './Componet/ProjectPage';
import AboutCompany from './Componet/AboutCompany';
import VideoPage from './Componet/VideoPage';
import CaseStudies from './Componet/CaseStudies';
import WhyChoose from './Componet/WhyChoose';
import VisionMission from './Componet/VisionMission';
import OurRecentBlogs from './Componet/OurRecentBlogs';
import Service from './Componet/service/Service';
import ContactPage from './Componet/ContactPage/ContactPage';
import OurPrinciples from './Componet/OurPrinciples/OurPrinciples';
import Careers from './Componet/CareerPage/CareerPage';
import JobTitle from "./Componet/CareerPage/JobTitle"

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
         
          <Route index element={
            <>
              <HeaderPage />
         
              <AboutCompany />
              <VideoPage />
             <CoreValue/>
              <WhyChoose />
              <OurPrinciples/>
              <VisionMission />
            
            </>
          } />

         
           <Route path="/service" element={<Service />} />
           <Route path="/Contact" element={<ContactPage />} />
           <Route path="/Careers" element={ <Careers/>} />
        </Route>
      </Routes>
  );
}

export default App;
