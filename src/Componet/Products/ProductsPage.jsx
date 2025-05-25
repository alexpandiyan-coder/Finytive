import React from 'react'
import "./ProductsPage.css"
import ProjectPage from '../ProjectPage'
function ProductsPage() {
  return (
    <section>
      <div className='products-page'>
        <div className='nav-page-bar'>
          <p>Home</p>
          <p>Products</p>
          </div>
      </div>
       <ProjectPage/>

    </section>
  )
}

export default ProductsPage