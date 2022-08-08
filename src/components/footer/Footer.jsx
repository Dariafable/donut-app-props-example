import React from 'react'
import './FooterStyles.css'
import {TiSocialTwitterCircular, TiSocialInstagramCircular, TiSocialFacebookCircular} from 'react-icons/ti'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="grid-container">
            <div className="col">
                <h3>Explore our menu</h3>
                <p>Donuts menu</p>
                <p>Nutrition</p>
                <p>Drink menu</p>
            </div>
            <div className="col">
                <h3>Get to know us</h3>
                <p>About us</p>
                <p>Franchising</p>
                <p>Foundations</p>
            </div>
            <div className="col">
                <h3>Get in touch</h3>
                <p>Press</p>
                <p>Careers</p>
                <p>Contact us</p>
            </div>
            <div className='col'>
                <h3>Let's connect</h3>
                <div className="social">
                    <TiSocialTwitterCircular className='icon' />
                    <TiSocialInstagramCircular className='icon' />
                    <TiSocialFacebookCircular className='icon' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer