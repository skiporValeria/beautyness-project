import React from 'react'
import TopTitleBlock from './TopTitleBlock'
import { motion } from 'framer-motion';
import AppointmentForm from './AppointmentForm';



const ContactPage = () => {
    return (
        < >
            <TopTitleBlock topSign='GET IN TOUCH WITH US' topTitle='We Are Ready To Assist You In 24x7' />
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 3 }} 
                exit={{ opacity: 0 }}    
                transition={{ duration: 0.5 }}
                
                className='appointment'>
                <div
                    className="appointment-title flex">
                    <span>SCHEDULE YOUR PRESENCE</span>
                    <h2>Make an Appointment</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>

                {/* <form action="/submit" method='post' className='appointment-form-page flex'>
                    <input type="text" id="name" placeholder='Name' />
                    <input type="email" id="email" placeholder='Email' />
                    <input type="phone" id="phone" placeholder='Phone' />
                    <input type="text" id="need" placeholder='Service You Need' />
                    <textarea id="message" placeholder='Any Note For Us'></textarea>
                    <motion.button 
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}>GET AN APPOINTMENT</motion.button>
                </form> */}
                <AppointmentForm formPage />
            </motion.div>
        </>
    )
}

export default ContactPage