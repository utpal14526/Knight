import React from 'react'
import {useNavigate} from 'react-router-dom';
import { Link,useLocation} from "react-router-dom";


export default function Navbar() {
  
  let location=useLocation();
  let navigate = useNavigate();


  const handleLogout=()=>{
      localStorage.removeItem('token');
      navigate("/login");
  }


  return (
    <>

<nav className="navbar navbar-expand-lg navbar-dark   ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className={`nav-link ${location.pathname==="/" ? "active" : ""}`} to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about" ? "active" : ""}`} to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            
          </ul>
        </li>
        
      </ul>
     
    </div>

    {!localStorage.getItem('token')?<form className="d-flex ">
          <Link className="btn btn-primary mx-2"  to="/login" role="button">Login</Link>
          <Link className="btn btn-primary"  to="/signup" role="button">Signup</Link>
    </form>:

    <div className="d-flex">
       <button className="btn btn-primary"  onClick={handleLogout} to="/signup" role="button">Logout</button>
    </div>
   
     }

  </div>
</nav>

    </>
  )
}

// let location =useLocation()  location.pathname=="/"  
