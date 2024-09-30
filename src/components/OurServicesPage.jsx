import React from 'react'
import TopTitleBlock from './TopTitleBlock'
import OurServices from './OurServices'
import DiscountPecrent from './DiscountPecrent'
import { motion } from 'framer-motion'



const OurServicesPage = () => {
  return (
    <>
      <TopTitleBlock topSign="Our Services" topTitle="Well Experience Beauty at your Service" btnText="Make a reservation" />
      <OurServices numberOfCards={5} />
      <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 3 }} 
      exit={{ opacity: 0 }}    
      transition={{ duration: 0.5 }}
       className="service-discount">
        <div className="service-discount-block flex">
          <span>Flat Discount </span>
          <h3>Claim upto 50% offer
            on the most popular services...</h3>
          <p>Our Retreat is not meant to be an occasional treat, but rather a part of your
            routine that restores balance to your daily life.</p>
          <DiscountPecrent />
        </div>
      </motion.div>

    </>
  )
}

export default OurServicesPage