import React, { useContext } from 'react';
import { newProducts } from '../App'
import '../Styles/Productcard.css'

export default function ProductCard() {
    const a = useContext(newProducts)
    // console.log(a)
    return (
        <>
            {
                a.map((item) => {
                    return(
                        <div>
                            <div className="card" key={item.name}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">Rs.{item.sellingprice}</p>
                                    <a href="/home" className="btn btn-outline-danger">Explore</a>
                                </div>
                            </div>
                        </div> 
                        )
                })
            }
        </>
    )
}
