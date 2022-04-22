import React from 'react'
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'
import { TiSocialFacebook, TiSocialTwitter, TiSocialPinterest } from 'react-icons/ti'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-information'>
        <div className='footer-left'>
          <ul>
            <li>
              <HiOutlineLocationMarker className='location-icon'/>
              <span>123 EDSA Avenue, Mandaluyong, Philippines</span>
            </li>
            <li>
              <HiOutlinePhone className='phone-icon' />
              <span>+63 999 123 4567</span>
            </li>
            <li>
              <HiOutlineMail className='email-icon' />
              <span>support@thegrandexchange.ph</span>
            </li>
          </ul>
        </div>
        <div className='footer-right'>
          <div className='about'>
            <p className='about-title'>About The Grand Exchange</p>
            <p className='about-writeup'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet ullamcorper ornare. Nullam id eros odio. Vestibulum sem purus, interdum.
            </p>
          </div>
          <ul className='footer-socials'>
            <li className='footer-socials-container'>
              <a href='https://www.facebook.com'>
                <TiSocialFacebook className='social-icon'/>
              </a>
            </li>
            <li className='footer-socials-container'>
              <a href='https://www.twitter.com'>
                <TiSocialTwitter className='social-icon'/>
              </a>
            </li>
            <li className='footer-socials-container'>
              <a href='https://www.instagram.com'>
                <FaInstagram className='social-icon'/>
              </a>
            </li>
            <li className='footer-socials-container'>
              <a href='https://www.pinterest.com'>
                <TiSocialPinterest className='social-icon'/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-trademark'>
        <p>© 2022 The Grand Exchange. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer