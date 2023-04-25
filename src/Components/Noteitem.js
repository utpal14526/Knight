import React, { useContext } from 'react'
import { useState } from 'react';
import noteContext from '../Context/Notes/NoteContext'



export default function Noteitem(props) {

   const context=useContext(noteContext);
   const {deleteNote,editNote}=context;


  const { note,updateNote } = props;
  return (
    <>

  <div className="col-md-3">

    <div className="card my-3">

      <div className="card-body">

        <div className="d-flex align-items-center justify-content-center">
          <h5 className="card-title">{note.title}</h5>

          <i className='bx bx-trash'  onClick={()=>{
              deleteNote(note._id);
          }}></i>

          <i className='bx bxs-edit' onClick={()=>{
              updateNote(note);
          }}
          ></i>
        </div>

        <p className="card-text">{note.description}</p>
        
      </div>

    </div>

  </div>

    </>
  );
}


// ye sochna tha ki ek corresponding note ke id kaise milege
// jab tum frontend mai array prr iterate kroge toh bss 
// notes props ki traha krr rhe hoge notes._id