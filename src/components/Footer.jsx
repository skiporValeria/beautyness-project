import React from 'react'
import Logo from "./../images/icons/Logo.svg"
import Facebook from "./../images/icons/Facebook-white.svg"
import Twitter from "./../images/icons/Twitter-white.svg"
import Linkedin from "./../images/icons/Linkedin-white.svg"
import Instagram from "./../images/icons/Insta-white.svg"
import { Link } from 'react-router-dom'



const ExploreData = [
  { name: "Home", url: "/home" },
  { name: "About Us", url: "/about" },
  { name: "Services", url: "/services" },
  { name: "Appointments", url: "/appointments" },
  { name: "Blog", url: "/blog" },
  { name: "Contact Us", url: "/contact" }
]

const UtilityPagesData = [
  { name: "Start here", url: "/start" },
  { name: "Style guide", url: "/style" },
  { name: "404 not found", url: "/404" },
  { name: "Password protected", url: "/protected" },
  { name: "Licenses", url: "/licenses" },
  { name: "Changelog", url: "/changelog" }

]

const KeepInTouchData = [
  { touchSpan: "Address:", touchPag: "24A Kingston St, Los Vegas NC 28202, USA." },
  { touchSpan: "Mail:", touchPag: "support@doctors.com" },
  { touchSpan: "Phone:", touchPag: "(+22) 123 - 4567 - 900" }
]

const WorkingHoursArr = [
  "Mon to Fri: 7am - 6pm",
  "Sat: 9am - 7pm",
  "Sun: 9am - 6pm"



]


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top-footer flex">
          <div className="logo flex">
            <img src={Logo} alt="LogoIcon" />
            <h4>Beautyness</h4>
          </div>
          <div className="social-icons flex">
            <div className="social-icon">
              <Link to="https://www.facebook.com/">
                <img src={Facebook} alt="facebook" className='icon' />
              </Link>

            </div>
            <div className="social-icon">
              <Link to="https://www.twitter.com/">
                <img src={Twitter} alt="twitter" className='icon' />
              </Link>

            </div>
            <div className="social-icon">
              <Link to="https://www.linkedin.com/">
                <img src={Linkedin} alt="linkedin" className='icon' />
              </Link>

            </div>
            <div className="social-icon">
              <Link to="https://www.instagram.com/">
                <img src={Instagram} alt="instagram" className='icon' />
              </Link>


            </div>
          </div>
        </div>
        <div className="bottom-footer flex">
          <div className="explore">
            <h5>Explore</h5>
            <ul>
              {ExploreData.map((ExploreItem, index) => (
                <li key={index}>
                  <Link to={ExploreItem.url}>{ExploreItem.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="utility-pages">
            <h5>Utility Pages</h5>
            <ul>
              {UtilityPagesData.map((UtilityPage, index) => (
                <li key={index}>
                  <Link to={UtilityPage.url}>{UtilityPage.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="keep-in-touch">
            <h5>Keep in Touch</h5>
            <ul>
              {KeepInTouchData.map((InTouch, index) => (
                <li className='flex' key={index}>
                  <span>{InTouch.touchSpan}</span>
                  <p>{InTouch.touchPag}</p>

                </li>
              ))}
            </ul>
          </div>
          <div className="working-hours">
            <h5>Working Hours</h5>
            <ul>
              {WorkingHoursArr.map((WorkingHour, index) => (
                <li key={index}>{WorkingHour}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>© Copyright 2021. Drafted by Victor Themes.</span>
      </div>
    </footer>
  )
}

export default Footer