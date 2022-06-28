import React, { useContext } from 'react'
import '../Styles/Clothing.css';
import CategoryNav from './CategoryNav'
import Footer from './Footer'
import Navbar from './Navbar'
import { AllProducts } from '../App'
import { useEffect } from 'react';

export default function Clothing() {

    useEffect(() => {
        document.title = 'Clothing | E Marche'
    })

    const a = useContext(AllProducts)
    // console.log(a)

    const filter = a.filter((item) => {
        return item.category === "clothing";
    })
    // console.log(filter)

    return (
        <div>
            <Navbar />
            <CategoryNav />


            <fieldset>
                <legend>Clothing</legend>
                <div className='products-cards'>
                    {
                        filter.map((item) => {
                            return (
                                <div>
                                    <div className="card" key={item._id}>
                                        <img src={item.img1} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">Rs.{item.sellingprice}</p>
                                            <a href={`view/${item._id}`} className="btn btn-outline-danger">Explore</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </fieldset>


            <Footer />
        </div>
    )
}
