import React, { useContext } from 'react'
import "../Styles/viewproduct.css"
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import { newProducts } from '../App'
import { AllProducts } from '../App'

export default function Viewproduct() {
  const id = useParams();
  const productId = id.id;
  console.log(productId)

  const pro = useContext(newProducts)
  const dbProducts = useContext(AllProducts)
  console.log(pro)

  const filter = dbProducts.filter((item) => {
    return item._id === productId
  })

  // console.log(filter)

    // console.log(productId, `http://localhost:5000/view/${productId}`)

  return (
    <div>
      <Navbar />

      {
        filter.map((item) => {
          return (
            <div className="whole">

            <div className="product-img">
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={item.img1} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={item.img2} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={item.img3} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={item.img4} class="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="product-details">
                <h2>{item.name}</h2>
                <h6>Rs. {item.sellingprice}</h6>
                <p className='product-desc'>{item.description}</p>
                <p>For more details/ or placing order copy the below code and DM us on instagram</p>
                <p>{item._id}</p>
                <a href="http://www.instagram.com/emarche_official">Click here to DM</a>
            </div>
    
          </div>
          )
        })
      }
     

      <Footer />
    </div>
  )
}
