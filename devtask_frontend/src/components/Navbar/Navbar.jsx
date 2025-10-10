import React from 'react'

function Navbar() {
  return (
    <> 
        <div className="container">
        <div className="navbar  d-flex justify-content-between  ">
            <div className="logo  px-2">
                <h2>DevTask</h2>
            </div>

            <div className="navitems_container w-75  d-flex justify-content-end">
                <ul className='d-flex m-0 nav   justify-content-around w-75 align-items-center '>
                    <li className='m-0 p-2 px-4 '>Home</li>
                    <li className='m-0 p-2 px-4'>Profile</li>
                    <li className='m-0 p-2 px-4'>Projects</li>
                    <li className='m-0 p-2 px-4'>Tracker</li>
                    <li className='m-0 p-2 px-4'>Contact</li>
                </ul>
            </div>
        </div>
        </div>
    
    </>
  )
}

export default Navbar