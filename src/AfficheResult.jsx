import React from 'react'
import { AiFillDelete} from "react-icons/ai";
import { FaPen } from "react-icons/fa";

const AfficheResult = ({listNote, handleDelete}) => {
  return   <div className="row">
    {listNote && listNote.map((notemap) => (
        <div key={notemap.id} className="col-sm-4 mb-3 mb-sm-0">
        <div className="card">
          <div className="card-body d-flex justify-content-between">
            <h5 className="card-title">{notemap.note}</h5>
            <div className="gap-3">
              <AiFillDelete onClick={() => handleDelete(notemap.id)} />
              <FaPen />
            </div>
            
          </div>
          <div className="">
            <p className="card-text">{notemap.timestamp}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
}

export default AfficheResult
