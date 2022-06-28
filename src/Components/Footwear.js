import React, { useContext } from 'react'
import '../Styles/Footer.css';
import CategoryNav from './CategoryNav'
import Footer from './Footer'
import Navbar from './Navbar'
import { AllProducts } from '../App'
import shoeBanner from '../Images/shoeBanner1.png';
import { useEffect } from 'react';

export default function Clothing() {

    useEffect(() => {
        document.title = 'Footwear | E Marche'
    })

    const a = useContext(AllProducts)
    console.log(a)

    const filter = a.filter((item) => {
        return item.category === "footwear";
    })
    // console.log(filter)

    return (
        <div>
            <Navbar />
            <CategoryNav />

            <div className="banners">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={shoeBanner} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <fieldset>
                <legend>Footwear</legend>
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
