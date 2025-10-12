import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import ProjectCard from './ProjectCard'
import './project.css'

function Project() {
  return (
            <div className="projectList_container w-100  p-4">
                {/* title  */}
                <div className="tittle d-flex justify-content-between align-items-center">
                  <h1 className='text-warning'>Projects</h1>
                  <button className='btn btn-warning fw-bold'>+ Add Project</button>

                </div>

                <div className="project_card_container mt-5 w-100 d-flex flex-wrap justify-content-start align-items-center justify-items-start gap-4">
                  <ProjectCard />
                  <ProjectCard />
                  <ProjectCard />
                  <ProjectCard />
                </div>
            </div>
  )
}

export default Project