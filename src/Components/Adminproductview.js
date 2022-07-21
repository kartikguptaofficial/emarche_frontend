import React, { useContext, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { AllProducts } from '../App'
import '../Styles/Adminproductview.css'
import { Link } from 'react-router-dom'

export default function Adminproductview() {
    const [menuBtn, setMenuBtn] = useState("down");

    const a = useContext(AllProducts)
    // console.log(a)

    function dropdown() {
        const sidebar = document.querySelector(".sidebar");
        if(sidebar.style.display === 'none'){
            sidebar.style.display = 'block';
            setMenuBtn("up");
        }
        else{
            sidebar.style.display = 'none'
            setMenuBtn("down");
        }
    }

  return (
    <div>
      <Navbar />

        <div className="whole-div">

        <i class={`fa-solid fa-circle-chevron-${menuBtn} dropdown-menu`} onClick={dropdown}></i> 
            <div className="sidebar">
                <div className="sidebar-content">
                    <h2>Admin Panel</h2>
                    <ul>
                        <Link to="/admin"><li>Add Product</li></Link>
                        <Link to="/admin-products-view"><li>View Products</li></Link>
                    </ul>
                </div>
            </div>
            <fieldset>
                <legend>All products</legend>
                <div className="products-cards">
                    {
                        a.map((item) => {
                            return (
                                <div>
                                    <div className="card" key={item._id}>
                                        <img src={item.img1} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">Rs.{item.sellingprice}</p>
                                            <Link to={`/view/${item._id}`} className="btn btn-outline-danger">Explore</Link>
                                            {/* <Link to={`/edit/${item._id}`} className="btn btn-outline-success">Edit</Link> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </fieldset>

        </div>

      <Footer />
    </div>
  )
}
