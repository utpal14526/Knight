
import React, { useState } from 'react'
import NoteContext from './NoteContext'

import Alert from '../../Components/Alert'

const  NoteState=(props)=>{
   
  const host="http://localhost:5000"
  const notesinitial=[];
  const [notes,setNotes]=useState(notesinitial);

  const [a,Seta]=useState("HIII");

      // notes se related data yaha dalega

// Fetch all notes and store in notes 

const getNotes=async ()=>{
  // To do api 

  const response = await fetch(`${host}/api/note/fetchallnotes`, {
    method: 'GET', 
  
    headers: {
      "Content-Type": "application/json",
       "auth-token":localStorage.getItem('token')
    },
  
    
  });

  
  const json=await(response.json());

  setNotes(json);

}



// Add a note

const addNote=async (title,description,tag)=>{
      // To do api 

      const response = await fetch(`${host}/api/note/addnewnote`, {
        method: 'POST', 
      
        headers: {
          "Content-Type": "application/json",

           "auth-token":localStorage.getItem('token')
        },
       
        body: JSON.stringify({title,description,tag}), 
        
      });
      
     
       // ye note liya and concat it in in notes array and stored by hitting api at database
     // console.log(json.errors[0].msg);    

      getNotes();   

}

      // concat will the new array after pushing the element 

// Delete a note

const deleteNote=async (id)=>{
      console.log("Note is deleted withid id ",id);

      // iss id se mujhe note ko delete hai

      const response = await fetch(`${host}/api/note/deletenote/${id}`, {
        method: 'DELETE', 
      
        headers: {
          "Content-Type": "application/json",
          
           "auth-token":localStorage.getItem('token')
        },
       
      });


      const json=await response.json();
  
      const newNotes= notes.filter((note)=>{
           return (note._id!==id);
      })
      
      setNotes(newNotes);     // note delete krne ke baad ye bhi toh jruri hai

 }

 // mai kya chahta hu ki node delete prr sab kuch dobara se fetch ho bruh


 // edit a note

const  editNote =async (id,title,description,tag)=>{

      // Api call
      
      const response = await fetch(`${host}/api/note/updatenotes/${id}`, {
        method:'PUT', 

        // marked as PUT or POST 
      
        headers: {
          "Content-Type": "application/json",
           "auth-token":localStorage.getItem('token')
        },
       
        body: JSON.stringify({title,description,tag}), 
        
      });
      
      const json= await response.json(); 

      getNotes();
    


}  //edit


   return (

       <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote,getNotes,a,Seta}}>

              {props.children}
       </NoteContext.Provider>

   )//

}

export default NoteState;




