import React from 'react'
import TopTitleBlock from './TopTitleBlock'
import SubContent from './SubContent'
import AboutIcon1 from "./../images/icons/aboutIcon1.svg"
import AboutIcon2 from "./../images/icons/aboutIcon2.svg"
import AboutIcon3 from "./../images/icons/aboutIcon3.svg"
import AboutImgContent from "./../images/beauty-img/About-img/ImageAbout1.png"
import FollowUsImg1 from "./../images/beauty-img/About-img/ImageAbout2.png"
import FollowUsImg2 from "./../images/beauty-img/About-img/ImageAbout3.png"
import FollowUsImg3 from "./../images/beauty-img/About-img/ImageAbout4.png"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const AboutUs = () => {
    return (
        < >
            <TopTitleBlock topSign='SHORT STORY ABOUT US' topTitle='The big story behind, our beautyness center' btnText='Make a reservation' />
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} 
            className="about-us">
                <div className="values flex">
                    <span>Our Values</span>
                    <h2>The work values we thrive for</h2>
                    <div className="values-blocks">
                        <SubContent subIcon={AboutIcon1} subTitle='Beauty Experts' subPag />
                        <SubContent subIcon={AboutIcon2} subTitle='Great Services' subPag />
                        <SubContent subIcon={AboutIcon3} subTitle='100% Genuine' subPag />
                    </div>
                </div>
                <div className="about-content">
                    <div className="container">
                        <div className='background-block'></div>
                        <div className="div-content flex">

                            <div className="img-content">
                                <img src={AboutImgContent} alt="aboutImage" />
                            </div>
                            <div className="text-content">
                                <span>About Us</span>
                                <h2>Style is a Reflection of your Attitude & your Personality</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words which don't look even many desktop publishing packages.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="follow-us container flex">
                    <div className="share-us">
                        <span>Share us</span>
                        <h2>Follow us on Instagram</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words  many desktop publishing packages.</p>
                        <img src={FollowUsImg1} />
                    </div>
                    <div className="follow-images flex">
                        <img src={FollowUsImg2} />
                        <img src={FollowUsImg3} />
                    </div>

                </div>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }} className='contact-btn'>
                    <Link to='/contact'>Contact US</Link>
                </motion.button>
            </motion.div>

        </>
    )
}

export default AboutUs