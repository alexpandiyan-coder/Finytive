import React, { useEffect } from 'react';
import {  Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Default page (home) content */}
          <Route index element={
            <>
              <HeaderPage />
              <ProjectPage />
              <AboutCompany />
              <VideoPage />
              <CaseStudies />
              <WhyChoose />
              <VisionMission />
              <OurRecentBlogs />
            </>
          } />

          {/* Other routes (still inside layout with same nav + footer) */}
          <Route path="/service" element={<Service />} />
        </Route>
      </Routes>
  );
}

export default App;
