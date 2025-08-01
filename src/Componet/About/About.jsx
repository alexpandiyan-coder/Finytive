import React from 'react'
import Reordering from './Reordering'
import "./about.css"
import Lottie from 'lottie-react'
import imgPage from "./json/about.json"
import mission from "./json/mission.json"
import vission from "./json/idea.json"
import VisionMission from '../VisionMission'
import FiveYear from '../FiveYear'
import { useNavigate } from 'react-router-dom'
function About() {

  const navigate = useNavigate()
  return (
    <section className='about'>
      <div className='about-page' data-aos="zoom-in">


        <div className="about-contant">
          <h1 className='contant  fs-1 text-warning'>About <span className='company-name'>Finytive</span></h1>
          <p>
            We take pride to introduce ourselves as reputed software development and digital transformation service company offering end-to-end solutions for SMEs to digital agencies around the globe. Our specialty is developing customized solutions using innovative technologies and resources.
          </p>
          <button className='view-more-btn' onClick={() => {

            navigate("/Contact");
          }} style={{ fontSize: "20px", width: "150px" }}>Connect</button>
        </div>
        <div className="container-about" data-aos="zoom-in-up">
          <Lottie animationData={imgPage} loop={true} />

        </div>

      </div>
      <div className='vission-mission'>

        <div className='vission-container' data-aos="fade-right">
          <div className='img-container'>
            <p className='vission-img'>

              <Lottie animationData={vission} loop={true} />
            </p>
            <p className='fs-1'>Our Vision</p>
          </div>
          <p className='fs-5'>
          Our vision is to drive global digital innovation through intelligent product development. We empower businesses with transformative software that redefines industries and customer experiences. As a trusted partner, we build sustainable, scalable, and smart digital solutions with purpose and empathy.
            </p>
        </div>
        <div className='vission-container' data-aos="fade-left">
          <div className='img-container'>
            <p className='vission-img'>

              <Lottie animationData={mission} loop={true} />
            </p>
            <p className='fs-1'>Our Mission</p>
          </div>
          <p className='fs-5'>Our mission is to build reliable and future-ready software that solves real-world problems. We combine agile thinking with engineering excellence for rapid innovation. Through user-centric design and continuous learning, we create impactful digital solutions that deliver measurable value</p>
        </div>
      </div>
      <FiveYear />
    </section>
  )
}

export default About