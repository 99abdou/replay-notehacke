import React from 'react'

// Composant changeur couleur background
const Bgcolor = ({color, colorChange}) => {
    return (
        <button className={`btn btn-bg rounded-circle border-0 ${color}`} onClick={colorChange}></button>
    )
  }


const Header = ({colorChange}) => {
  return (
    <div className="container card shadow">
        <div className="card-body d-flex justify-content-between flex-wrap">
            <h4 className="card-title">
                Note Hack
            </h4>
            <div className='d-flex gap-2 flex-wrap align-items-center'>
                <Bgcolor color="bg-1" colorChange={() => colorChange("bg-1")} />
                <Bgcolor color="bg-2" colorChange={() => colorChange("bg-2")} />
                <Bgcolor color="bg-3" colorChange={() => colorChange("bg-3")} />
                <Bgcolor color="bg-4" colorChange={() => colorChange("bg-4")} />
                <Bgcolor color="bg-5" colorChange={() => colorChange("bg-5")} />
                <Bgcolor color="bg-6" colorChange={() => colorChange("bg-6")} />
            </div>
        </div>
    </div>
  )
}

export default Header