import React, { useEffect } from 'react'
import HomePage from './Componet/HomePage'
import HeaderPage from './Componet/HeaderPage'
import WhyChoose from './Componet/WhyChoose'
import QuickFacts from './Componet/QuickFacts'
import Products from './Componet/Products'
import ProjectPage from './Componet/ProjectPage'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Componet/Footer'
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);
  return (
    <div>
     <HomePage/>
     <HeaderPage/>
     <ProjectPage/>
     <WhyChoose/>
     <Products/>
     <Footer/>
    </div>
  )
}

export default App