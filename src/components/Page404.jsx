import React from 'react'
import TopTitleBlock from './TopTitleBlock'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



const Page404 = () => {
  return (
    <>
    <TopTitleBlock topSign='Page Not Found' topTitle='404 Error Page' />
    <motion.div
     initial={{ opacity: 0 }} 
     animate={{ opacity: 3 }} 
     exit={{ opacity: 0 }}    
     transition={{ duration: 0.5 }}> 
    <div className='Page404'>
      <h1>404</h1>
      <h2>Page not Found!!!</h2>
      <p>The page you are looking for doesn't exist. Please try searching for some other page, or return to the website's homepage to find what you're looking for.</p>
      <motion.button
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      >
        <Link to='/home'>BACK TO HOME</Link>
      </motion.button>
    </div>
    </motion.div>
     
    </>
  
  )
}

export default Page404