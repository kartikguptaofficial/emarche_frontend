import React from 'react'
import '../Styles/About.css';
import Footer from './Footer'
import Navbar from './Navbar'
import logo from '../Images/logo.jpg';
import { useEffect } from 'react';

export default function About() {

useEffect(() => {
  document.title = 'About | E Marche'
})

  return (
    <div>
      <Navbar />

        <div className='company-details'>
            <img src={logo} alt="" className='logo' />
            <div className="content">
                <h3>E Marche</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsum pariatur
                     blanditiis cum numquam est, non vel harum. Repellendus vero cupiditate 
                     ratione itaque eveniet beatae at dolore? Repellendus voluptatibus eos esse
                      consequatur facilis praesentium.
                </p>
            </div>
        </div>

<hr />

        <div className="founders">
            <h3>FOUNDERS</h3>
            <div className="partners">
                <h6>Kartik Gupta</h6>
            </div>
            <div className="partners">
                <h6>Nipurn Jain</h6>
            </div>
        </div>

      <Footer />
    </div>
  )
}
