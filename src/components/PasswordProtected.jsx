import React from 'react'
import TopTitleBlock from './TopTitleBlock'
import { motion } from 'framer-motion'


const PasswordProtected = () => {
  return (
    <>
      <TopTitleBlock topSign='PASSWORD PROTECTED' topTitle='Restricted Page' />
      <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 3 }} 
      exit={{ opacity: 0 }}    
      transition={{ duration: 0.5 }}
       className="password-protected ">
        <div className="password-protected-form">
          <span>Enter Password</span>
          <h2>Password Protected</h2>
          <p>This page is password protected. If you are the website admin, or have access to this page, please type your password below.</p>
          <input type="password" placeholder='Enter your password' />
          <motion.button
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            SUBMIT NOW
          </motion.button>
        </div>

      </motion.div>
    </>
  )
}

export default PasswordProtected