import React from 'react'
import "./quickfacts.css"
import { FaCalendarCheck } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuClipboardCheck } from "react-icons/lu";

function QuickFacts() {
    return (
        <div className='quick-facts-main'>
            <h1>QUICK FACTS</h1>
            <div className='main-card'>
                <div className='fact-card card-1'>
                    <div className="card-content">
                        <p className='icon-text'><FaCalendarCheck /></p>
                        <p className='number-value'>1+</p>
                        <p className='text-card'>Decade Of Experience</p>
                    </div>
                </div>
                <div className='fact-card card-2'>
                    <div className="card-content">
                        <p className='icon-text'><IoSettingsOutline /></p>
                        <p className='number-value'>70+</p>
                        <p className='text-card'>Technologies</p>
                    </div>
                </div>
                <div className='fact-card card-3'>
                    <div className="card-content">
                        <p className='icon-text'><LuClipboardCheck /></p>
                        <p className='number-value'>200+</p>
                        <p className='text-card'>Projects Completed</p>
                    </div>
                </div>
                <div className='fact-card card-4'>
                    <div className="card-content">
                        <p className='icon-text'><FaCalendarCheck /></p>
                        <p className='number-value'>110+</p>
                        <p className='text-card'>Happy Clients</p>
                    </div>
                </div>
            </div>
            <button className='quickfacts-btn'>Read More</button>
        </div>
    )
}

export default QuickFacts