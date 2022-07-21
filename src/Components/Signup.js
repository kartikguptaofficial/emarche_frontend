import React, { useEffect, useState } from 'react'
import '../Styles/Signup.css'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function Signup() {

const [name, setName] = useState("");
const [phone, setPhone] = useState();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

    async function submitHandler(e) {
        e.preventDefault();

        const post = await fetch("https://emarche-backend.herokuapp.com/signup", {
            method: "POST",
            headers: {
              'Content-Type': "application/json"
            },
            body: JSON.stringify({
              name, phone, email, password
            })
        }) 

        if(post) {
          const data = await post.json()
          // console.log(data)
          if(data.msg === "You are already registered"){
            window.alert("This email is already registered. You can login")
          }
          else{
            window.alert("Account created...");
            window.location.href = '/login';
          }
        }
    }

useEffect(() => {
    document.title = 'Signup | E Marche'
})

  return (
    <div>
      <Navbar />

        <div className="signup-form">
            <h2>Create your account</h2>
            
            <form action="/signup" method='POST' onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder=" Enter your name"/>
                <label htmlFor="phone">Mobile No</label>
                <input type="number" name='phone' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder=" Enter your mobile" />
                <label htmlFor="email">Email Address</label>
                <input type="email" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" Enter your email" />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" Enter your password"/>
                <button type="submit" className='btn btn-danger'>Register</button>
            </form>

            <Link to="/login"><p>Existing User? Log in</p></Link>
        </div>

      <Footer />
    </div>
  )
}
