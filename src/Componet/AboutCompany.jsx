import React from 'react'
import aboutImg from "../assets/aboutCompany/Section → Figure → about-2.png.png"
import "./AboutCompany.css"
function AboutCompany() {
    return (

        <section className='about-main'>
            <div className='about-img-div'>
                <img src={aboutImg} className='about-robot' alt="" />
            </div>
            <div className='about-footer-div'>
                <p className='header-title'>ABOUT COMPANY</p>
                <p className='fs-3'>Mission is to bring force of
                    simulated intelligence to business</p>
                <p>To take a trivial example, which of us ever undertakes laborious physical
                    exercise, except to obtain some advantage from it but right to find fault
                    with a man who chooses enjoy.for your business work.</p>
                <p>Which of us ever undertakes laborious physical exercise,
                    except to obtain advantage from it who do not know how to
                    pursue pleasure.</p>
                <button className='view-more-btn'>More About</button>
            </div>

        </section>
    )
}

export default AboutCompany