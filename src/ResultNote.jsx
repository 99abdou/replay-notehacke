import React from 'react'
import AfficheResult from './AfficheResult';

const ResultNote = ({listNote, handleDelete, handleDeleteAll}) => {
  return (
    <div>
        <div className="container p-2 rounded mt-4 bg-white d-flex justify-content-between">
            <p className="note fs-4 mt-2">Note <span>{listNote.length}</span> </p>
      
            <button type="button" className="btn btn-primary" onClick={handleDeleteAll}>Clear</button> 
        </div>
      <AfficheResult listNote={listNote} handleDelete={handleDelete}/>
    </div>
  )
}

export default ResultNote;
