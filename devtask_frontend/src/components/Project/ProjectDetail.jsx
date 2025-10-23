import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import axios from 'axios';
import ProjectTaskBox from './ProjectTaskBox'
import ProjectTaskModal from './ProjectTaskModal';

function ProjectDetail() {
  const data = useLoaderData();
  
  return (
    <div className='w-100 p-4'>
        <div className="title">
            <h1 className="text-warning">{data.project_title}</h1>
            <p className="description">{data.project_info}</p>
        </div>

        <ProjectTaskModal />

        <div className="progress_bar_container d-flex gap-4 justify-content-between">
            <div className="progress_bar_box w-75 text-end fw-bold fs-4"  style={{height:"15px"}}>
                <div className="progress mb-2" style={{height:"100%"}}>
                    <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                    role='progressbar'
                    style={{width:"60%"}}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    >
                    </div>
                </div>
                    60%
            </div>

            <div className="d-grid w-25">

            <button className="btn btn-warning fw-bold" data-bs-toggle='modal' data-bs-target='#TaskAddModal'>Add Task</button>
            </div>
            
        </div>

        <div className="task_container mt-5">
            <div className="title pb-2 d-flex gap-5 ">
                <h2 className='border-bottom border-warning border-3'>All</h2>
                <h2>Completed</h2>
                <h2>Pending</h2>
            </div>

            <div className="task_details_container d-flex justify-content-center align-items-start py-3 gap-3">
                <div className="task_box  w-75">
                    <ProjectTaskBox />
                    <ProjectTaskBox />
                    <ProjectTaskBox />
                </div>

                <div className="overview p-3 w-25 border rounded " style={{minHeight:"200px"}}>
                    <p className="my-2 fs-4">1 Task Completed</p>
                    <p className="my-2 fs-4">1 Task Completed</p>
                    <p className="my-2 fs-4">1 Task Completed</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetail

export const projectDetailLoader = async ({params})=>{
      
      const projectId = params.id;
      const res = await axios.get(`http://localhost:8000/api/projects/${projectId}`);
      return res.data.project;
}