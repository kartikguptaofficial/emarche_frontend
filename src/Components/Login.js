import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

async function submitHandler(e) {
  e.preventDefault();

  const post = await fetch("https://emarche-backend.herokuapp.com/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })

  const data = await post.json()
  // console.log(data)
  if(data.msg === "Invalid Password"){
    window.alert("Invalid Credentials")
  }
  else if(data.msg === "Not registered"){
    window.alert("You are not registered! Signup first")
  }
  else{
    window.alert("Login success");
    localStorage.setItem("token", data.token);
    window.location.href = '/home';
  }
}


useEffect(() => {
    document.title = 'Login | E Marche'
})

  return (
    <div>
      <Navbar />

      <div className="signup-form">
            <h2>Login | E Marche</h2>
            
            <form action="/login" method='POST' onSubmit={submitHandler}>
                <label htmlFor="email">Email Address</label>
                <input type="email" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" Enter your email"/>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" Enter your password"/>
                <button type="submit" className='btn btn-danger'>Register</button>
            </form>

            <Link to="/signup"><p>New User? Sign up</p></Link>
        </div>


      <Footer />
    </div>
  )
}
