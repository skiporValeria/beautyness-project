import React from 'react'
import BackgroundSquare from "./../images/background/background-square.png"
import { motion } from 'framer-motion'

const OurServicesCard = (props) => {
  return (
    <div className='services-card flex'>
        
        <img src={props.servImg} alt="serv"/>
        <div className="services-card-content">
            <img src={BackgroundSquare} style={{ width: '90px', height: '90px' }} className='square-background' alt="square-background"/>
            <div className="services-list">
                <div className='services-list-item'>
                    <h5>Face masks  <span className='points'> .......................................</span> <span>from</span> <span className='price'>$48.00</span></h5>
                    <p>The versions have evolved over the sometimes by accident.</p>
                </div>
                <div className='services-list-item'>
                    <h5>Full body massage  <span className='points'>.............................</span> <span>from</span> <span className='price'>$54.00</span></h5>
                    <p>The versions have evolved over the sometimes by accident.</p>
                </div>
                <div className='services-list-item'>
                    <h5>Geothermal spa  <span className='points'>.................................</span> <span>from</span> <span className='price'>$54.00</span></h5>
                    <p>The versions have evolved over the sometimes by accident.</p>
                </div>
                <div className='services-list-item'>
                    <h5>Sauna relax  <span className='points'>.......................................</span> <span>from</span> <span className='price'>$73.00</span></h5>
                    <p>The versions have evolved over the sometimes by accident.</p>
                </div>
            </div>
            <motion.button
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            >
                GET AN APPOINTMENT
            </motion.button>
        </div>
        
    </div>
  )
}

export default OurServicesCard