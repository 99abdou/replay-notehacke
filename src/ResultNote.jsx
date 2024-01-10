import React from 'react'
import AfficheResult from './AfficheResult';

const ResultNote = ({listNote, handleDelete, handleDeleteAll}) => {
  return (
    <div>
        <div className="container p-2 rounded mt-4 bg-white  ">
          <div className="d-flex justify-content-between">
            <p className="note fs-4 mt-2">Note <span>{listNote.length}</span> </p>
            <div>
              <button type="button" className="btn btn-primary mt-2" onClick={handleDeleteAll}>Clear</button>
              </div>
            </div>
            
          <AfficheResult listNote={listNote} handleDelete={handleDelete}/>
        </div>
    </div>
  )
}

export default ResultNote;
