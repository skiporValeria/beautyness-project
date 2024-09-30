
import React from 'react'
import OurServicesCard from './OurServicesCard'
import ServicesImage1 from "./../images/beauty-img/Services-img/ImageServices1.png"
import ServicesImage2 from "./../images/beauty-img/Services-img/ImageServices2.png"
import ServicesImage3 from "./../images/beauty-img/Services-img/ImageServices3.png"
import ServicesImage4 from "./../images/beauty-img/Services-img/ImageServices4.png"
import ServicesImage5 from "./../images/beauty-img/Services-img/ImageServices5.png"

const servicesImages = [
    ServicesImage1,
    ServicesImage2,
    ServicesImage3,
    ServicesImage4,
    ServicesImage5
]

const OurServices = ({ numberOfCards }) => {
    return (
        <div className='our-services container'>
            <div className="flex" style={{ maxWidth: '660px', justifyContent: 'center', flexDirection:'column', margin: '0 auto'}}>
                <span>Our Services</span>
                <h2>We are Experienced in making you very Beautiful</h2>
            </div>

            <div className="our-services-cards">
                {servicesImages.slice(0, numberOfCards).map((servImg, index) => (
                    <OurServicesCard servImg={servImg} key={index} />
                ))}
            </div>
        </div>
    )
}

export default OurServices