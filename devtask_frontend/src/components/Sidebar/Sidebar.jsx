import React from 'react'
import {Link, NavLink } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
  return (
        <div className="sidebar_container py-3">
            <ul className=' m-0 px-2 d-flex flex-column gap-3'>
                <li>
                    <NavLink to='/' className={({isActive}) => `${isActive ? 'active': 'unactive'}`}>
                       <i className="fa-solid  fa-house "></i> Home
                    </NavLink>
                </li>
               
                <li>
                    <NavLink to='/projects' className={({isActive}) => `${isActive ? 'active': 'unactive'}`}>
                      <i class="fa-solid fa-folder"></i>  Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/tracker' className={({isActive}) => `${isActive ? 'active': 'unactive'}`}>
                       <i class="fa-solid fa-chart-line"></i> Tracker
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className={({isActive}) => `${isActive ? 'active': 'unactive'}`}>
                       <i class="fa-solid fa-address-card"></i> Contact
                    </NavLink>
                </li>
                
            </ul>
        </div>
  )
}

export default Sidebar