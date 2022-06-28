import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import instagram from '../Images/instagram.png';
import '../Styles/Contact.css'

export default function Contact() {
  return (
    <div>
      <Navbar />

        <div className="contact-page">
            <h2>Contact us</h2>

            <div className="insta-contact">
                <h6>DM to our instagram page</h6>
                <a href="http://www.instagram.com/emarche_official">
                    <img src={instagram} alt="" />
                    <p>EMARCHE_OFFICIAL</p>
                </a>
            </div>
        </div>

      <Footer />
    </div>
  )
}
