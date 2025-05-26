import React from 'react'
import "./ProductsPage.css"
import ProjectPage from '../ProjectPage'
function ProductsPage() {
  return (
    <section>
      <div className='products-page'>
        <div className='nav-page-bar'>
         <p data-aos="zoom-in">Revolutionize Your Business with Our CRM</p>
          <strong data-aos="zoom-in">
            Our CRM system is designed to streamline customer interactions, boost sales efficiency, and enhance team collaboration. 
            Trusted by businesses across industries, it helps you build stronger relationships and make smarter decisions with real-time insights.
          </strong>
          </div>
      </div>
       <ProjectPage/>

    </section>
  )
}

export default ProductsPage