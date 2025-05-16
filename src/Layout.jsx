// Layout.js
import React from 'react';
import HomePage from './Componet/HomePage'; // your nav bar
import Footer from './Componet/Footer';     // your footer
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <HomePage />  {/* Fixed Nav */}
      <Outlet />     {/* Dynamic content goes here */}
      <Footer />     {/* Fixed Footer */}
    </div>
  );
}

export default Layout;
