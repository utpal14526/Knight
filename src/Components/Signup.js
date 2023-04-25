import { useState } from "react"
import React from 'react'
import {useNavigate} from 'react-router-dom';


export default function Signup() {

  const[credentials,Setcredentials]=useState({
      name:"",
      email:"",
      password:""
  })

  

  const onChange=(e)=>{
    
    Setcredentials({
       ...credentials,
       [e.target.name]:e.target.value,
    })

  
  }

  let navigate = useNavigate();

  const handleClick=async(e)=>{

    e.preventDefault();
    const {name,email,password}=credentials;

    const response = await fetch("http://localhost:5000/api/user/createuser", {
       method: 'POST', 
       headers: {
         "Content-Type": "application/json"
       },

       body: JSON.stringify({name,email,password}),     
    });

    const json=await response.json();

    console.log(json);

    if(json.s){
        // this user doesnot exist
        localStorage.setItem('token' , json.authtoken);
        navigate("/");

    }

    else{
      Setcredentials({
        name:"",
        email:"",
        password:""
       })
       alert("User with this email exist");
    }

  
}


  return (
    <>

<form onSubmit={handleClick} autoComplete="off">

  <div className="htmlForm-group">
    <label htmlFor="exampleInputPassword1">Name</label>
    <input type="text" className="form-control" id="name"  value={credentials.name} name="name" placeholder="Enter Name"  onChange={onChange} />
  </div>

  <div className="htmlForm-group my-3">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={credentials.email} autoComplete="off"   name="email" onChange={onChange} placeholder="Enter email"/>
    <small id="emailHelp" className="htmlForm-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div className="htmlForm-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input autoComplete="off"  type="password"  onChange={onChange} className="form-control" id="password" value={credentials.password} name="password" placeholder="Password"/>
  </div>
  
  <button disabled={credentials.name<5 || credentials.password<5} type="submit" className="btn btn-primary my-2">Submit</button>


</form>


    </>
  )
}
