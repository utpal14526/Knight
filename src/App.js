import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
//import Users from './Components/Users' ;
import About from "./Components/About";

import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Alert from "./Components/Alert"
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NoteState from "./Context/Notes/NoteState";
import { useEffect } from "react";


function App() {

  // whenever you come on page make the auth-token as NUL

  return (
    <>

      <NoteState>

        <BrowserRouter>
          <Navbar />

          <Alert message="this is message using props"/>
          
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup/>} />

            </Routes>
          </div>

        </BrowserRouter>

      </NoteState>  
  
    </>
  );
}

export default App;

// NoteState se wrap up kiya hai .. element={<Home/>}
