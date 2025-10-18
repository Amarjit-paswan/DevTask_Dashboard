
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import './index.css'
import App from './App.jsx'

import ProfileInfo, { profileLoader } from './components/Home/ProfileInfo.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Project from './components/Project/Project.jsx'
import Tracker from './components/Tracker/Tracker.jsx';
import Contact from './components/Contact/Contact.jsx';
import ProjectDetail from './components/Project/ProjectDetail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element:<ProfileInfo />, loader: profileLoader},
      {path: '/projects', element:<Project />},
      {path: '/projects/:id', element:<ProjectDetail />},
      {path: '/tracker', element:<Tracker />},
      {path: '/contact', element: <Contact />}
    ]
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
