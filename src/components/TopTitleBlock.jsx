import React from 'react'
import { motion } from 'framer-motion'

const TopTitleBlock = ({topSign, topTitle, btnText}) => {
  return (
    <div className='top-title-block'>
      <span>{topSign}</span>
      <h1>{topTitle}</h1>
      {btnText && <motion.button 
      whileTap={{ scale: 0.9 }} 
      transition={{ duration: 0.2 }}>{btnText}
      </motion.button>}

    </div>
  )
}

export default TopTitleBlock