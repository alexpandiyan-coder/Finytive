import React from 'react'
import Reordering from './Reordering'
import "./about.css"
import Lottie from 'lottie-react'
import imgPage from "./json/about.json"
import mission from "./json/mission.json"
import vission from "./json/idea.json"
import VisionMission from '../VisionMission'
import FiveYear from '../FiveYear'

function About() {
  return (
    <section className='about'>
        <div className='about-page'>

        
      <div className="about-contant">
         <h1 className='contant fs-1'>About <span className='company-name'>Finytive</span></h1>
         <p>
            We take pride to introduce ourselves as reputed software development and digital transformation service company offering end-to-end solutions for SMEs to digital agencies around the globe. Our specialty is developing customized solutions using innovative technologies and resources.
         </p>
         <button className='view-more-btn'>Connect</button>
      </div>
      <div className="container-about">
          <Lottie animationData={imgPage} loop={true}/>
            
        </div> 
      
    </div>
    <div className='vission-mission'>
     
     <div className='vission-container'>
         <div className='img-container'>
            <p className='vission-img'>

        <Lottie animationData={vission} loop={true}/>
            </p>
        <p className='fs-1'>Our Vision</p>
       </div>
       <p>To be a dominant service provider in the IT sector and help companies improve their business growth and sucess</p>
     </div>
     <div className='vission-container'>
       <div className='img-container'>
        <p className='vission-img'>

        <Lottie animationData={mission} loop={true}/>
        </p>
        <p className='fs-1'>Our Mission</p>
       </div>
       <p>Providing innovative and reliable solutions with the highest quality and unshakable protocols to meet the needs of our customer</p>
     </div>
    </div>
     <FiveYear/>
    </section>
  )
}

export default About