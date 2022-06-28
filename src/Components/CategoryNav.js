import React from 'react'
import '../Styles/CategoryNav.css'
import { Link } from 'react-router-dom';
import gift from '../Images/gift.png'
import clothing from '../Images/clothing.webp'
import shoes from '../Images/shoes.png'
import watch from '../Images/watch.png'

export default function CategoryNav() {
  return (
    <div className='category-nav'>
        <ul>
            <li><Link to=""><img src={gift} alt="" /> Top Offers</Link></li>
            <li><Link to="/clothing"><img src={clothing} alt="" /> Clothing</Link></li>
            <li><Link to="/footwear"><img src={shoes} alt="" /> Footwear</Link></li>
            <li><Link to="/watches"><img src={watch} alt="" /> Watches</Link></li>
        </ul>
    </div>
  )
}
