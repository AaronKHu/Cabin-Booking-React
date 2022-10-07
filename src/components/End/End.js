import React from 'react'
import './End.css'

const End = () => {
  return (
    <div className='end'>
        <div className='container'>
            <div className='our-brand list'>
                <h3 className='header'>Our Brand</h3>
                    <ul className='our-brand-list'>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Sustainability</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
            </div>
            <div className='assistance list'>
                <h3 className='header'>Assistance</h3>
                    <ul className='assistance-list'>
                        <li><a href="#">Customer Service</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Partner Help</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Partner Dispute</a></li>
                        <li><a href="#">Personal Information Query</a></li>
                        <li><a href="#">Corporate Contact</a></li>
                    </ul>
            </div>
            <div className='newsletter list'>
                <h3 className='header'>Newsletter</h3>
                    <p className='newsletter-info'>Subscribe to recieve updates, access to exclusive real estate proposals, and more.</p>
                    <form>
                        <input className='user-input' type='email' placeholder='Enter your email address'></input>
                        <button className='btn-subscribe' type='button' name='button'>Subscribe</button>
                    </form>
            </div>
            <div className='contact list'>
                <h3 className='contact-us'>Contact Us</h3>
                    <p className='supp-email'>support@vancouvercabins.com</p>
                    <h4>Call Us</h4>
                    <p>M-F | 8am-6pm PT</p>
                    <p className='phone-num'>+44 20 3663 0230</p>
            </div>
        </div>
        <div className='copyright-ending'>
                <p>© 2022 VancouverCabins Ltd-All rights reserved GB VAT 219 6348 89 - 307 Linen Hall 162-168 Regent Street W1B 5TE</p>
        </div>
    </div>
  )
}

export default End