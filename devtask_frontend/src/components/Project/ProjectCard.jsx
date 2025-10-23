import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <div className='p-4 project_card'>

        <div className="project_title">
            <h3>{project.project_title}</h3>

        </div>

        <div className="project_info">
            <p className="m-0">{project.project_info}</p>
        </div>

        <div className="languages d-flex gap-3 mt-3 flex-wrap">
            {project.languages && project.languages.length > 0 ? (
                project.languages.map((lang)=> (

                    <div key={lang} className="language">{lang}</div>
                ))
            ) : 'no'}
          
        </div>   

            <NavLink to= {`/projects/${project.id}`}>
                <div className="d-grid mt-3">
                    <button className='view_btn'>View all details</button>
                </div>  
            </NavLink>
    </div>
  )
}

export default ProjectCard