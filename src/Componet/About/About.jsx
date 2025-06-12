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
          <h1 className='contant fs-1'>About <span className='company-name'>Finytive</span></h1>
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
          <p className='fs-5'>By 2030, we aim to be a globally recognized
            technology leader, enabling 1000+ businesses to
            achieve digital transformation through innovative IT
            solutions. Our goal is to drive at least 50% operational
            efficiency improvements for our clients with 99.9%
            success rate.</p>
        </div>
        <div className='vission-container' data-aos="fade-left">
          <div className='img-container'>
            <p className='vission-img'>

              <Lottie animationData={mission} loop={true} />
            </p>
            <p className='fs-1'>Our Mission</p>
          </div>
          <p className='fs-5'>By 2026, we will develop and deploy cutting-edge IT
            products that empower businesses to scale globally. We
            strive to help organizations achieve at least 40% faster
            digital adoption, ensuring secure, scalable, and AI-
            driven solutions that deliver measurable business
            impact</p>
        </div>
      </div>
      <FiveYear />
    </section>
  )
}

export default About