import React, { useEffect } from 'react';
import "./home.css";
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    const handleNavigation = (item) => {
        if (item === 'Services') {
            navigate('/service');
        } else if (item === 'Contact') {
            navigate('/contact');
        } else if (item === "Home") {
            navigate('/');
        } else if (item === "Career") {
            navigate("/Careers");
        } else if (item === "Products") {
            navigate("/ProductsPage");
        } else if (item === "About") {
            navigate("/About");
        }
    };

    return (
        <section className='nav-main'>
            <nav className='nav-bar slide-down'>
                <div className='logo-name bounce'>
                    <h1><Link to={"/"}>Finytive</Link></h1>
                </div>

                <div className='list-tab fade-in'>
                    <ul>
                        {['Home','About', 'Services', 'Products', 'Career', 'Contact'].map((item, index) => (
                            <li 
                                key={index}
                                onClick={() => handleNavigation(item)}
                            >
                                {item}
                                <div className="underline"></div>
                            </li>
                        ))}
                    </ul>
                </div>

                <button className='view-more-btn fade-in'>
                    Client Login
                </button>
            </nav>
        </section>
    );
}

export default HomePage;
