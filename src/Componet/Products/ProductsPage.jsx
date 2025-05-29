import React from 'react'
import "./ProductsPage.css"
import ProjectPage from '../ProjectPage'
import Round from './Round/Round'
function ProductsPage() {
  return (
    <section className='products-page'>
      <Round/>
       <ProjectPage/>

    </section>
  )
}

export default ProductsPage