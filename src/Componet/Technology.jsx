import React from 'react'
import img1 from "../assets/technology/Figure → icon-8.png.png"
import round from "../assets/technology/Group 56 (3).svg"
import Robot from "../assets/technology/Robot face-amico.png"
import { FcApproval } from 'react-icons/fc';
import "./Technology.css"
function Technology() {
    return (
        <section className='technology'>
           
            <div className='technology-header'>
          
                <h1 className='technology-heading'>
                    TECHNOLOGY
                </h1>
                <p className='fs-1'>Any enough advanced
                    technology is unclear
                    from magi</p>
                <p>Must explain to you how all this mistaken idea of pleasure and
                    praising pain was born and will give you a complete account of
                    the system, and expound the actual teachings.</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <FcApproval style={{ marginRight: '8px', fontSize: '20px' }} />
        Idea of denouncing pleasure & praising
      </li>
      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <FcApproval style={{ marginRight: '8px', fontSize: '20px' }} />
        Ever undertakes laborious physical
      </li>
      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <FcApproval style={{ marginRight: '8px', fontSize: '20px' }} />
        Avoids a pain that produces no resultant
      </li>
    </ul>
                <button className='view-more-btn'>More Services</button>
            </div>

            <div className='technology-footer'>
                <div className='videoVision'>
                    <img src={Robot} alt="" className='robot-img' />
                    <p>Video Vision</p>
                    <img src={img1} alt=""  className='img-1'/>
                    <p>Simple easy distinguish when
                        our power right.</p>
                </div>
               <div className='videoVision'>
                    <img src={Robot} alt="" className='robot-img' />
                    <p>Video Vision</p>
                    <img src={img1} alt=""  className='img-1'/>
                    <p>Simple easy distinguish when
                        our power right.</p>
                </div>
                <div className='videoVision'>
                    <img src={Robot} alt="" className='robot-img' />
                    <p>Video Vision</p>
                    <img src={img1} alt=""  className='img-1'/>
                    <p>Simple easy distinguish when
                        our power right.</p>
                </div>
                <div className='videoVision'>
                    <img src={Robot} alt="" className='robot-img' />
                    <p>Video Vision</p>
                    <img src={img1} alt=""  className='img-1'/>
                    <p>Simple easy distinguish when
                        our power right.</p>
                </div>
            </div>


        </section>
    )
}

export default Technology