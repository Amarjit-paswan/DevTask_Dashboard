
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css'
import App from './App.jsx'

import ProfileInfo, { profileLoader } from './components/Home/ProfileInfo.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Project, { projectLoader } from './components/Project/Project.jsx'
import Tracker, { projectStatusLoader } from './components/Tracker/Tracker.jsx';
import Contact from './components/Contact/Contact.jsx';
import ProjectDetail, { projectDetailLoader } from './components/Project/ProjectDetail.jsx';
import { ThemeProvider } from './components/Theme/ThemeContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element:<ProfileInfo />, loader: profileLoader},
      {path: '/projects', element:<Project />, loader: projectLoader},
      {path: '/projects/:id', element:<ProjectDetail />, loader: projectDetailLoader},
      {path: '/tracker', element:<Tracker />, loader: projectStatusLoader},
      {path: '/contact', element: <Contact />, loader: profileLoader}
    ]
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>

      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
)
