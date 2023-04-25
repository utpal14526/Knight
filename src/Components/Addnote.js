import React, { useContext } from 'react'
import { useState } from 'react';
import noteContext from '../Context/Notes/NoteContext'

export default function Addnote() {

  const context=useContext(noteContext);
  const {addNote}=context;
  
  const [note,setNote]=useState({
      title:"",
      description:"",
      tag:"default"
  }) 

  const handleClick=(e)=>{
      e.preventDefault();
      addNote(note.title,note.description,note.tag);
  }

  const onChange=(e)=>{

    setNote({
       
        ...note,
        [e.target.name]:e.target.value

    });

  }


  return (
    <div>

      <h1>Add a Note</h1>
      <form>
        <div className="mb-3">
             

          <label  className="form-label">
            Title
          </label>

           
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
          />

        </div>

        <div className="mb-3">
             

          <label  className="form-label">
            Description
          </label>

           
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            aria-describedby="emailHelp"
            onChange={onChange}
          />

        </div>


          <div className="mb-3">
             

             <label  className="form-label">
               Tag
             </label>
   
              
             <input
               type="text"
               className="form-control"
               id="tag"
               name="tag"
               aria-describedby="emailHelp"
               onChange={onChange}
             />
   
          </div>

      

        <button type="submit" className="btn btn-primary" disabled={note.title.length<5 || note.description.length<5} onClick={handleClick}>
            Add your Note !!
        </button>
      </form>


      
    </div>
  );
}
