import React from 'react'
import WelcomeIcon from "./../images/icons/welcome-icon.svg"
import BannerImage from "./../images/beauty-img/Home-img/ImageHome.png"
import FeaturesImg1 from './../images/beauty-img/Home-img/ImageHome1.png'
import FeaturesImg2 from './../images/beauty-img/Home-img/ImageHome2.png'
import FeaturesImg3 from './../images/beauty-img/Home-img/ImageHome3.png'
import AboutIcon1 from "./../images/icons/aboutIcon1.svg"
import AboutIcon2 from "./../images/icons/aboutIcon2.svg"
import AboutIcon3 from "./../images/icons/aboutIcon3.svg"
import Aboutbackground from "./../images/background/background-homeImg.png"
import AboutImg from "./../images/beauty-img/Home-img/ImageHome4.png"






import FeaturesCard from './FeaturesCard'
import SubContent from './SubContent'
import OurServices from './OurServices'
import DiscountPecrent from './DiscountPecrent'
import { motion } from 'framer-motion'
import AppointmentForm from './AppointmentForm'


const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <section className='banner'>
                <div className="container flex">
                    <div className="banner-content">
                        <span className='welcome-pag flex'><img src={WelcomeIcon} alt="welcome" />Welcome to Beautyness!!!</span>
                        <h1>Beauty is power a smile is its sword.</h1>
                        <p className="banner-pag">There are many variation of passages are Ipsum available, majority have suffered alteration in some form.</p>
                        <motion.button
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.2 }}>
                            Make a reservation
                        </motion.button>
                    </div>
                    <div className="banner-image">
                        <img src={BannerImage} alt="bannerImg" />
                    </div>
                </div>
            </section>
            <section className='FeaturesCards flex container'>
                <FeaturesCard img={FeaturesImg1} title="Spa & Massage" />
                <FeaturesCard img={FeaturesImg2} title="Hair & Beauty" />
                <FeaturesCard img={FeaturesImg3} title="Body Treatments" />
            </section>
            <section className='aboutUs'>
                <div className="container flex">
                    <div className="aboutUs-content">
                        <span>About Us</span>
                        <h2>The Beauty is about
                            being Comfortable
                            in your own skin!
                        </h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words which don't look even many desktop publishing packages.</p>
                        <div className="subCards flex">
                            <SubContent subIcon={AboutIcon1} subTitle="Beauty Experts" />
                            <SubContent subIcon={AboutIcon2} subTitle="Great Services" />
                            <SubContent subIcon={AboutIcon3} subTitle="100% Genuine" />
                        </div>
                    </div>
                    <div className="AboutImg flex">

                        <img src={Aboutbackground} alt="about-background" className="background-image" />
                        <img src={AboutImg} alt="about-image" className="foreground-image" />
                    </div>
                </div>
            </section>
            <OurServices numberOfCards={2} />
            <section className='appointment-block'>
                <div className="container flex">
                    <div className="discount-div">
                        <span className='flat-discount'>Flat Discount </span>
                        <h3>Claim upto 50% off
                            er
                            on ‍the most popular services...
                        </h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words.</p>
                        <DiscountPecrent />
                    </div>
                    <div className="appointment-form-div ">
                        <AppointmentForm form/>
                    </div>
                </div>

            </section>
        </motion.div>

    )
}

export default Home