import React from 'react'

const InputButton = ({onClick}) => {
  return (
    <div>
        <button type="button" className="btn btn-success p-3" onClick={onClick}>Add</button>
    </div>
  )
}

export default InputButton
