import React, { useEffect, useRef  } from 'react';
import {  Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CoreValue from "./Componet/CoreValue/CoreValue"
import Layout from './Layout'; 
import HeaderPage from './Componet/HeaderPage';
import WhyChoose from './Componet/WhyChoose';
import VisionMission from './Componet/VisionMission';
import Service from './Componet/service/Service';
import ContactPage from './Componet/ContactPage/ContactPage';
import Careers from './Componet/CareerPage/CareerPage';
import "./Componet/Products.css"
import About from './Componet/About/About';
import WhoWeAre from './Componet/WhoWeAre/WhoWeAre';
import ProductsSubPage from './Componet/Products/Products/ProductsSubPage';
import AuthPage from './Componet/ClientLogin/AuthPage';
import WhatWeDo from './Componet/WhatWeDo/WhatWeDo';
import AIChat from './Componet/AiChat/AiChat';
import HowItWorks from './Componet/HowItWorks/HowItWorks';

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
              <WhoWeAre/>
             <WhatWeDo/>
              <VisionMission /> 
             <CoreValue/>
              <WhyChoose />
            </>
          } />
           <Route path="/service" element={<Service />} />
           <Route path="/Contact" element={<ContactPage />} />
           <Route path="/Careers" element={ <Careers/>} />
           <Route path="/ProductsPage" element={<ProductsSubPage/>} />
           <Route path="/About" element={ <About/>} />
           <Route path="/Login" element={ <AuthPage/>} />
        </Route>
      </Routes>
  );
}

export default App;



