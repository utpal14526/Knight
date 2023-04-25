import {React,useState} from 'react'
import {useNavigate} from 'react-router-dom';


export default function Login() {

const [user,Setuser]=useState({
    email:"",
    password:""
});


let navigate = useNavigate();


const onChange=(e)=>{
    e.preventDefault();
    Setuser({
        ...user,
        [e.target.name]:e.target.value
    })

}

const host="http://localhost:5000"


 const handleClick=async (e)=>{
    e.preventDefault();

    const response = await fetch(`${host}/api/user/loginuser`, {
        method: 'POST', 
      
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({email:user.email,password:user.password}), 
    
     });


     const json_token=await response.json();

     if(json_token.success)
     {
        // means backedn se ok hai ye user login ke liye 
        localStorage.setItem('token' , json_token.authtoken);
        navigate("/");
         

     }    //
     
     else{

        // not correct credentials
        Setuser({
          email:"",
          password:""
        });
        alert("CREDENTIALS WRONG");

     }

  }


  return (
    <>

<form autoComplete="off" onSubmit={handleClick} >

    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="email" value={user.email} name="email"   autoComplete="off" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange}/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    <div className="form-group my-3">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" autoComplete="off" className="form-control" id="password" value={user.password} name="password" placeholder="Password" onChange={onChange}/>
    </div>
    
    <button disabled={user.name<5 || user.password<5}  type="submit" className="btn btn-primary">Submit</button>

</form>


  </>
  )
}


//learning :
// usenavigate is used for navigates between two components based on some conditions
// routes are imp in 

//useState
//useEffect
//useLocation
//useContext
//useref
//usenavigate