import React from 'react'
import { motion } from 'framer-motion'



const AppointmentForm = (props) => {
    return (
        <form action="/submit" method='post' className={`form ${props.formPage && "appointment-form-page"} ${ props.form && "appointment-form"}` } >
            <input type="text" id="name" placeholder='Name' />
            <input type="email" id="email" placeholder='Email' />
            <input type="phone" id="phone" placeholder='Phone' />
            <input type="text" id="need" placeholder='Service You Need' />
            <textarea id="message" placeholder='Any Note For Us'></textarea>
            <motion.button
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}>GET AN APPOINTMENT</motion.button>
        </form>
    )
}

export default AppointmentForm