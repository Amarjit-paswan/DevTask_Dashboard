import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <> 
        <div className="container-fluid  ">
        <div className="navbar  d-flex justify-content-between  ">
            <div className="logod  px-3 pb-3 ">
                <h2 className='p-0 '>DevTask</h2>
            </div>

            <div className="navitems_container w-75  d-flex justify-content-end">
                <ul className='d-flex m-0 nav   justify-content-around w-75 align-items-center '>
                    <li className='m-0 p-2 px-4 '>
                        <NavLink to='/' className={({isActive}) => `${isActive ? 'text-warning': 'text-white'}`}>
                            Home
                        </NavLink>
                    </li>
                  
                    <li className='m-0 p-2 px-4 '>
                        <NavLink to='/projects' className={({isActive}) => `${isActive ? 'text-warning': 'text-white'}`}>
                            Projects
                        </NavLink>
                    </li>
                    <li className='m-0 p-2 px-4 '>
                        <NavLink to='/tracker' className={({isActive}) => `${isActive ? 'text-warning': 'text-white'}`}>
                            Tracker
                        </NavLink>
                    </li>
                    <li className='m-0 p-2 px-4 '>
                        <NavLink to='/contact' className={({isActive}) => `${isActive ? 'text-warning': 'text-white'}`}>
                            Contact
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
        </div>
        </div>
    
    </>
  )
}

export default Navbar