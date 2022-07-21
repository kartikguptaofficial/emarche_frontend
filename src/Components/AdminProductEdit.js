import React, { useContext, useState } from 'react'
import "../Styles/viewproduct.css"
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import { newProducts } from '../App'
import { AllProducts } from '../App'

export default function AdminProductEdit() {
  const id = useParams();
  const productId = id.id;
//   console.log(productId)

  const pro = useContext(newProducts)
  const dbProducts = useContext(AllProducts)
//   console.log(pro)

  const filterData = dbProducts.filter((item) => {
    return item._id === productId
  })
  
    // console.log(filterData[0].name)

// const [name, setName] = useState(filterData[0].name);
// const [costprice, setcostPrice] = useState(filterData[0].costprice);
// const [sellingprice, setSellingPrice] = useState(filterData[0].sellingprice);
// const [img1, setImg1] = useState(filterData[0].img1);
// const [img2, setImg2] = useState(filterData[0].img2);
// const [img3, setImg3] = useState(filterData[0].img3);
// const [img4, setImg4] = useState(filterData[0].img4);

const [name, setName] = useState("");
const [costprice, setcostPrice] = useState("");
const [sellingprice, setSellingPrice] = useState("");
const [img1, setImg1] = useState("");
const [img2, setImg2] = useState("");
const [img3, setImg3] = useState("");
const [img4, setImg4] = useState("");

  const updateData = async (e) => {
    e.preventDefault()

    const confirmMsg = window.confirm("Are you sure to make changes to this product?")
    if(confirmMsg){
        const updateData = await fetch(`https://localhost:5000/edit/${productId}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, costprice, sellingprice, img1, img2, img3, img4})
        })
        if(updateData){
            window.alert("Product has been updated")
        }
    } 
    else{

    }
  }

  return (
    <div>
      <Navbar />

      {
        filterData.map((item) => {
          return (
            <div className="whole">

                <form action={`/edit/${item._id}`} method="post" onSubmit={updateData} style={{display: "flex"}}>
                    <div className="product-img" style={{display:"flex", flexDirection:"column"}}>
                        <label htmlFor="img1">Image URL 1</label>
                        <input type="text" value={img1} name="img1" onChange={(e) => setImg1(e.target.value)} />
                        <label htmlFor="img2">Image URL 2</label>
                        <input type="text" value={img2} name="img2" onChange={(e) => setImg2(e.target.value)} />
                        <label htmlFor="img3">Image URL 3</label>
                        <input type="text" value={img3} name="img3" onChange={(e) => setImg3(e.target.value)} />
                        <label htmlFor="img4">Image URL 4</label>
                        <input type="text" value={img4} name="img4" onChange={(e) => setImg4(e.target.value)} />
                    </div>

                    <div className="product-details">
                        <h2><input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/></h2>
                        <h6>Rs. <input type="text" value={sellingprice} name="sellingprice" onChange={(e) => setSellingPrice(e.target.value)} /> Selling Price</h6>
                        <h6>Rs. <input type="text" value={costprice} name="costprice" onChange={(e) => setcostPrice(e.target.value)} /> Cost Price</h6>
                        <p className='product-desc'>{item.description}</p>
                        <p>For more details/ or placing order copy the below code and DM us on instagram</p>
                        <p>{item._id}</p>
                        <a href="http://www.instagram.com/emarche_official">Click here to DM</a>
                        <br /><hr />
                        <button className="btn btn-danger">Save Changes</button>
                    </div>
                </form>
    
          </div>
          )
        })
      }
     

      <Footer />
    </div>
  )
}
