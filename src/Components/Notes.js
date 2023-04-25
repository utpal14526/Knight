import React, { useState,useContext, useEffect, useRef } from "react";
import noteContext from "../Context/Notes/NoteContext";
import {useNavigate} from "react-router-dom";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote.js";
import { get } from "mongoose";

export default function Notes() {
  const context = useContext(noteContext);
  const { notes,getNotes, editNote } = context;

  let navigate = useNavigate();

  
  useEffect(()=>{
      if(localStorage.getItem('token')){
          getNotes();
      }
      else{
         navigate("/login");
      }
  },[])


  const ref=useRef(null);
  const refClose=useRef(null);


  const [note,setNote]=useState({
    _id:"",
    etitle:"",
    edescription:"",
    etag:"default"
  }) 


  const updateNote = (note) => {
       ref.current.click();
       console.log("HII Note is updated");
       setNote({
          _id:note._id,
          etitle:note.title,
          edescription:note.description,
          etag:note.tag
       })
       
  };

  const handleClick=()=>{
       refClose.current.click();
   
       editNote(note._id,note.etitle,note.edescription,note.etag);
  }

  const onChange=(e)=>{

    setNote({
        ...note,
        [e.target.name]:e.target.value
    });

  }

  return (
    <>
      <Addnote />


      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <form>
        <div className="mb-3">
             

          <label  className="form-label">
            Title
          </label>

           
          <input
            type="text"
            className="form-control"
            id="etitle"
            name="etitle"
            aria-describedby="emailHelp"
            value={note.etitle}
            onChange={onChange}
            required
          />

        </div>

        <div className="mb-3">
             

          <label  className="form-label">
            Description
          </label>

           
          <input
            type="text"
            className="form-control"
            id="edescription"
            name="edescription"
            aria-describedby="emailHelp"
            value={note.edescription}
            onChange={onChange}
            required
          />

        </div>


          <div className="mb-3">
             

             <label  className="form-label">
               Tag
             </label>
   
              
             <input
               type="text"
               className="form-control"
               id="etag"
               name="etag"
               value={note.etag}
               aria-describedby="emailHelp"
               onChange={onChange}
               
             />
   
          </div>


      </form>

            </div>

            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} className="btn btn-primary">
                Update Note!
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="row my-3">
        <h2>Your Notes</h2>

        
       
        {

        notes.length===0 ?"No notes":
        notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} note={note} />
          );
        })
        
        }

      </div>


    </>
  );
}

//  notes and setNodes are from  noteContext

// props pass krte samay hum bss id bhi pass kre
