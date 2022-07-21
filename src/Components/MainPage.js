import React from 'react'
import '../Styles/MainPage.css'
import slider1 from "../Images/slider1.jpg"
import slider2 from "../Images/slider2.jpg"
import slider3 from "../Images/slider3.jpg"
import slider4 from "../Images/slider4.jpg"

export default function MainPage() {
  return (
      <div className='whole-page'>

        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img src={slider1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={slider2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" interval="2000">
              <img src={slider3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" interval="2000">
              <img src={slider4} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="heading">
          <h1>E Marché</h1>
          <p>We have something you can't refuse!</p>
          <a href="/home">Explore our website</a>
        </div>
      </div>
  )
}
