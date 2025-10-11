
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import './index.css'
import App from './App.jsx'

import ProfileInfo from './components/Home/ProfileInfo.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Project from './components/Project/Project.jsx'
import Tracker from './components/Tracker/Tracker.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element:<ProfileInfo />},
      {path: '/projects', element:<Project />},
      {path: '/tracker', element:<Tracker />},
    ]
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
