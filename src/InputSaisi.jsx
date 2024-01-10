import React from 'react'
import { useState } from "react";
import InputButton from './InputButton'
import ResultNote from './ResultNote';

const InputSaisi = () => {
    const  [inputs, setInputs] = useState ({
        note: '',
        listNote : []
    })

    // const [userData, setUserData] = useState([])

    const handleChange = (e) => {
        setInputs ({
            ...inputs,[e.target.name]: e.target.value,
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        const newNote = {
            id: Math.floor(Math.random() *10000), 
            ...inputs,
            timestamp : new Date().toLocaleString()
        };
        setInputs(prevState => ({  

            ...prevState,
            note: '',
            listNote:[...prevState.listNote,newNote],
        }))
    }

    const handleDelete = (index) => {
        const updatedUsers = inputs.listNote.filter((user) => user.id !== index);
        setInputs({listNote: updatedUsers});
    };

    const handleDeleteAll = () => {
        setInputs({listNote:[]})
    }

  return (
    <div className='container'>
        <div className="input-group mt-5">
            <input name="note" className="form-control p-3" value={inputs.note} placeholder="Add note" onChange={handleChange}/>
            <InputButton onClick={handleClick}/>
        </div>
            <ResultNote listNote={inputs.listNote} handleDelete={handleDelete} handleDeleteAll={handleDeleteAll}/>
      
    </div>
  )
}


export default InputSaisi
