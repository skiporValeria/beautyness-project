import React from 'react';
import { useState } from 'react';
import Logo from "./../images/icons/Logo.svg"
import Phone from "./../images/icons/phone.svg"
import Facebook from "./../images/icons/Facebook.svg"
import Twitter from "./../images/icons/Twitter.svg"
import Linkedin from "./../images/icons/Linkedin.svg"
import Calendar from "./../images/icons/calendar.svg"
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



const navData = [
    { name: "Home", url: "/home" },
    { name: "Pages", url: "/pages" },
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Contact", url: "/contact" }
]

const iconsData = [
    { src: Facebook, alt: "facebook", url: "https://www.facebook.com" },
    { src: Twitter, alt: "twitter", url: "https://www.twitter.com" },
    { src: Linkedin, alt: "linkedin", url: "https://www.linkedin.com" },
];


const Header = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <header>
            <div className="left-header flex">
                <div className="logo-div  flex">
                    <img src={Logo} alt="logo" />
                    <span>Beautyness</span>
                </div>
                <div className="callUs flex">
                    <img src={Phone} alt="phoneIcon" />
                    <span>Call Us - (+22) 123 456 7890</span>
                </div>
            </div>
            <div className="right-header flex">
                <nav>
                    <ul className='flex'>
                        {navData.map((nav, index) => (
                            <motion.li
                            onClick={() => setActiveIndex(index)}
                                style={{
                                    position: 'relative',
                                    outline: 'none',
                                    cursor: 'pointer'
                                }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                key={index}>
                                <Link to={nav.url} style={{ textDecoration: 'none' }}>{nav.name}</Link>
                                <motion.div
                                    layout
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        bottom: -2, // Під текстом
                                        height: '2px',
                                        scaleX: activeIndex === index ? 1 : 0, // Підкреслення для активного пункту
                                        transformOrigin: 'left',
                                        backgroundColor: '#111E22' // Колір підкреслення
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.li>

                        ))}
                    </ul>
                </nav>
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="social-icon flex">
                    {iconsData.map((icon, iconIndex) => (
                        <Link to={icon.url} key={iconIndex}><img src={icon.src} alt={icon.alt} /></Link>
                    ))}
                </motion.div>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                >
                    <img src={Calendar} alt="calendar" />RESERVATION</motion.button>
            </div>
        </header>
    )
}

export default Header