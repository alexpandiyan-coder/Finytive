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
import AuthPage from './Componet/ClientLogin/AuthPage';
import WhatWeDo from './Componet/WhatWeDo/WhatWeDo';
import ProductListPage from './Componet/Products/Products/ProductListPage';
import ProductDetailPage from './Componet/Products/Products/ProductDetailPage';

function App() {
 
  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: false
  });
  AOS.refresh();
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
           <Route path="/ProductsPage" element={<ProductListPage />} />
           <Route path="/About" element={ <About/>} />
           <Route path="/Login" element={ <AuthPage/>} />
          
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Route>
      </Routes>
  );
}

export default App;



