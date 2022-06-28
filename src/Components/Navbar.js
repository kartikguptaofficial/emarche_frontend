import React, { useEffect, useState } from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [login, setLogin] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [userName, setUserName] = useState("");

  async function getUser() {
    const token = localStorage.getItem("token");
    const res = await fetch("https://emarche-backend.herokuapp.com/home", {
      method: "GET",
      headers: {
        'Authorization': token
      }
    })
  
    const data = await res.json();
    // console.log(data.user.admin)
    if(data.user) {
      setLogin(true);
      setUserName(data.user.name);
    }
    if(data.user.admin === "true"){
      setAdmin(true)
    }
  }
  
    useEffect(() => {
      getUser()
    }, [])
      // console.log(admin)

    function logout(e) {
      e.preventDefault();

      const alert = window.confirm("Are you sure you want to logout");
      if(alert === true) {
        localStorage.removeItem("token");
        window.location.href = "/home";
      }
    }

    function respNav() {
      const navbar = document.querySelector(".responsive-nav");
 
          if(navbar.style.display === "none"){
            navbar.style.display = "block"
          }
          else{
            navbar.style.display = "none"
          }
    }

  return (
    <div>
      <nav>
        <h2>E Marché</h2>

        <ul className='middle-list'>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>

        <ul className='btn-list'>
          { login === true ? 
            <>
              <p className='user-name'>Hey! {userName}</p>
              <li><Link to="" onClick={logout}>Logout</Link></li>
            </> :
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to='/signup'>Signup</Link></li>
            </>
          }
          {
            admin ? <li><Link to="/admin">Admin</Link></li>:""
          }
        </ul>
        <i className="fa-solid fa-bars nav-menu" onClick={respNav}></i>

      </nav>

      <div className="responsive-nav">
        <ul className='middle-list-resp'>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="">Contact</Link></li>
          </ul>
          <ul className='btn-list-resp'>
            { login && !admin ? 
              <>
                <p className='user-name'>Hey! {userName}</p>
                <li><Link to="" onClick={logout}>Logout</Link></li>
              </> :
              admin ?
              <>
                <p className='user-name'>Hey! {userName}</p>
                <li><Link to="" onClick={logout}>Logout</Link></li>
                <li><Link to="/admin">Admin</Link></li>
              </> :
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
              </>
            }
        </ul>
      </div>
    </div>
  )
}
