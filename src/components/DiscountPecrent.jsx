import React from 'react'
import Points from "./../images/icons/Pattern.svg"
import { Link } from 'react-router-dom'

const DiscountPecrent = () => {
    return (
        <div className="discount-info flex">
            <div className="discount-contacts">
                <div className="discount-contact-div flex" style={{ gap: '18px', flexDirection: 'column' }}>
                    <div className='discount-contact flex'>
                        <img src={Points} alt="points" />
                        <div className="discount-contact-text">
                            <h6>MAIL US :</h6>
                            <p className="discount-contact-link">
                                <Link>info@beautyness.com</Link>
                            </p>
                        </div>
                    </div>
                    <div className='discount-contact flex'>
                        <img src={Points} alt="points" />
                        <div className="discount-contact-text">
                            <h6>CALL US :</h6>
                            <p className="discount-contact-link">
                                <Link>(+22) 123 4568 009</Link>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="discount-pecrent flex">
                <span>- Get Flat -</span>
                <h2>50%</h2>
                <span className='discount-span'>Discount</span>
            </div>
        </div>
    )
}

export default DiscountPecrent