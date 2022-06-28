import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import '../Styles/Admin.css'
import { Link } from 'react-router-dom';

export default function Admin() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [costprice, setcostPrice] = useState("");
    const [sellingprice, setSellingPrice] = useState("");
    const [category, setCategory] = useState("");
    const [gender, setGender] = useState("");
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [img3, setImg3] = useState("");
    const [img4, setImg4] = useState("");

    const [menuBtn, setMenuBtn] = useState("down");

    async function sendData(e) {
        e.preventDefault();

        const send = await fetch("https://emarche-backend.herokuapp.com/admin", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({name, description, costprice, sellingprice, category, gender, img1, img2, img3, img4})
        })
        if(send) {
            window.alert("Product is added successfully")
        }
    }

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
            <div className="main-page">
                <h2>Add a new product</h2>
                <form action="/admin" method='POST' onSubmit={sendData}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' id='name' value={name} onChange={(e) => setName(e.target.value)}/>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" cols="30" rows="2" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <label htmlFor="costprice">Cost Price</label>
                    <input type="number" name='costprice' id='costprice'value={costprice} onChange={(e) => setcostPrice(e.target.value)}/>
                    <label htmlFor="sellingprice">Selling Price</label>
                    <input type="number" name='sellingprice' id='sellingprice'value={sellingprice} onChange={(e) => setSellingPrice(e.target.value)}/>
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="clothing">Clothing</option>
                        <option value="footwear">Footwear</option>
                        <option value="watches">Watches</option>
                    </select>
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <label htmlFor="img1">Image 1 URL</label>
                    <input type="text" name='img1' id='img1' value={img1} onChange={(e) => setImg1(e.target.value)}/>
                    <label htmlFor="img2">Image 2 URL</label>
                    <input type="text" name='img2' id='img2' value={img2} onChange={(e) => setImg2(e.target.value)}/>
                    <label htmlFor="img3">Image 3 URL</label>
                    <input type="text" name='img3' id='img3' value={img3} onChange={(e) => setImg3(e.target.value)}/>
                    <label htmlFor="img4">Image 4 URL</label>
                    <input type="text" name='img4' id='img4' value={img4} onChange={(e) => setImg4(e.target.value)}/>
                    <button type="submit" className='btn btn-danger'>Add Product</button>
                </form>
            </div>

        </div>

      <Footer />
    </div>
  )
}
