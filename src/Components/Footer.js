import React from 'react'
import '../Styles/Footer.css'
import instagram from '../Images/instagram.png';

export default function Footer() {
    return (
        <div>
            <footer className='footer'>
                <div className="first-div">
                    <ul>
                        <li>DM us on instagram for placing order</li>
                        <li>All over India delivery</li>
                        <li>Online and COD* payments available</li>
                        <li>Easy return within 5 days</li>
                    </ul>
                    <div className="instagram-ad">
                        <h6>Follow us on Instagram</h6>
                        <a href="http://www.instagram.com/emarche_official"><img src={instagram} alt="" />@EMARCHE_OFFICIAL</a>
                    </div>
                </div>
                <hr />
                <div className="copyright-line">
                    <p>Copyright (c) E Marche 2022 | All rights reserved</p>
                </div>
            </footer>
        </div>
    )
}
