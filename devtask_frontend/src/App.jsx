import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const location = useLocation();

  const hidesideBar = location.pathname === "/";
  return (
    <>

      <Navbar />
      <div className="container-fluid  d-flex gap-3 justify-content-between ">

        {!hidesideBar && <Sidebar />}
        <Outlet />
      </div>
    </>
  )
}

export default App
