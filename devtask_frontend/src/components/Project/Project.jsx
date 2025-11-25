import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import ProjectCard from './ProjectCard'
import './project.css'
import ProjectAdd from './ProjectAdd'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'

function Project() {
  const data = useLoaderData();
  const [projects, setProjects] = useState(data);

  console.log(projects);
  
  //Refresh project list after adding a new project
  const relaodProjects = async ()=>{
    const res = await axios.get('http://localhost:8000/api/projects');
    setProjects(res.data.projects);
  }
 

  return (  
    
    
    <div className="projectList_container w-100  p-4">
                {/* Model for project add  */}
                <ProjectAdd refreshProject = {relaodProjects} />

                {/* title  */}
                <div className="tittle d-flex justify-content-between align-items-center">
                  <h1 className='text-warning'>Projects</h1>
                  <button type='button' className='btn btn-warning fw-bold' data-bs-toggle="modal" data-bs-target="#ProjectAddModal">+ Add Project</button>

                </div>

                <div className="project_card_container mt-5 w-100 d-flex flex-wrap justify-content-start align-items-center justify-items-start gap-4">
                {projects.length > 0 ?( projects.map((project)=>(

                  <ProjectCard key={project.id} project={project} />
                ))): (
                  <p>No found</p>
                )}
               
                </div>
            </div>
  )
}

export const projectLoader = async ()=>{
   const res = await axios.get('http://localhost:8000/api/projects');
   return res.data.projects;
}

export default Project