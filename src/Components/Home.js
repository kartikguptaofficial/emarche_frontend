import React, { useEffect, useContext } from 'react'
import '../Styles/Home.css'
import CategoryNav from './CategoryNav';
import Navbar from './Navbar'
// import ProductCard from './ProductCard';
import banner1 from '../Images/banner1.png';
import banner3 from '../Images/banner3.png';
import Footer from './Footer';
import { newProducts } from '../App'

export default function Home() {
    const a = useContext(newProducts)


    useEffect(() => {
        document.title = 'Home | E Marche'
    }, [])

    return (
        <div>
            <Navbar />
            <CategoryNav />

            <div className="banners">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000"> 
                            <img src={banner1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={banner3} className="d-block w-100" alt="..." />
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
                <legend>New Arrivals</legend>
                <div className='products-cards'>
                    {/* <ProductCard /> */}
                    {
                        a.map((item) => {
                            return(
                                <div>
                                    <div className="card" style={{height: "15rem"}} key={item.id}>
                                        <img src={item.img1} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">Rs.{item.sellingprice}</p>
                                            {/* <a href={`view/${item.id}`} className="btn btn-outline-danger">Explore</a> */}
                                        </div>
                                    </div>
                                </div> 
                            )
                        })
                    }
                </div>
                <p className='more-details-line'>For more details view the clothing/footwear section</p>
            </fieldset>


            <Footer />
        </div>
    )
}
