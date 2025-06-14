
import React from 'react';
import HomePage from './Componet/HomePage'; 
import Footer from './Componet/Footer';     
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <HomePage />  
      <Outlet />
      <Footer />     
    </div>
  );
}

export default Layout;
