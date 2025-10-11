import React from 'react'

function ProjectCard() {
  return (
    <div className='p-4 project_card'>
        <div className="project_title">
            <h3>Project Title</h3>
        </div>

        <div className="project_info">
            <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, provident?</p>
        </div>

        <div className="languages d-flex gap-3 mt-3">
            <div className="language">React</div>
            <div className="language">React</div>
            <div className="language">React</div>
        </div>   

        <div className="d-grid mt-3">
            <button className='view_btn'>View all details</button>
        </div>  
    </div>
  )
}

export default ProjectCard