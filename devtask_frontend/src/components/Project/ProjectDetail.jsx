import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import axios from 'axios';
import ProjectTaskBox from './ProjectTaskBox'
import ProjectTaskModal from './ProjectTaskModal';

function ProjectDetail() {
  const data = useLoaderData();

  const [projectTasks, setprojectTasks] = useState(data.projectTasks);
  const [CompeletedTask, setCompletedTask] = useState(0);
  const [PendingTask, setPendingTask] = useState(0);
  const projectId = data.project.id;
  const fetchTasks = async ()=>{
        const res = await axios.get(`http://localhost:8000/api/projects/${projectId}`);
        setprojectTasks(res.data.projectTasks);
        setCompletedTask(res.data.taskCategory.Completed);
        setPendingTask(res.data.taskCategory.Pending);
        
    }
  useEffect(()=>{
  
    fetchTasks();
  },[]);

  //Percentage of Completed Task
  const total = CompeletedTask + PendingTask;
  const progressPercentage = total === 0 ? 0 : (CompeletedTask / total) * 100;
  console.log(progressPercentage);

  //Show Task related to filter
  const [filter, setFilter] = useState('All');
  const filteredTask = projectTasks.filter((task)=>{
    if(filter === 'All') return true;
    return task.task_status === filter;
  })
  

  return (
    <div className='w-100 p-4'>
        <div className="title">
            <h1 className="text-warning">{data.project.project_title}</h1>
            <p className="description">{data.project.project_info}</p>
        </div>

        <ProjectTaskModal  refereshTasks = {fetchTasks} />

        <div className="progress_bar_container d-flex gap-4 justify-content-between">
            <div className="progress_bar_box w-75 text-end fw-bold fs-4"  style={{height:"15px"}}>
                <div className="progress mb-2" style={{height:"100%"}}>
                    <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                    role='progressbar'
                    style={{width: `${progressPercentage}%`}}
                    aria-valuenow="100"
                    aria-valuemin="100"
                    aria-valuemax="100"
                    >
                    </div>
                </div>
                    {progressPercentage}%
            </div>

            <div className="d-grid w-25">

            <button className="btn btn-warning fw-bold" data-bs-toggle='modal' data-bs-target='#TaskAddModal'>Add Task</button>
            </div>
            
        </div>

        <div className="task_container mt-5">
            <div className="title pb-2 d-flex gap-5 ">
                <h2 className={`cursor-pointer ${filter === 'All' ?  'border-bottom border-warning border-3' : '' }`} onClick={()=>setFilter('All')}>All</h2>
                <h2 className={`cursor-pointer ${filter === 'Completed' ?  'border-bottom border-warning border-3' : '' }`} onClick={()=>setFilter('Completed')}>Completed</h2>
                <h2 className={` cursor-pointer ${filter === 'Pending' ?  'border-bottom border-warning border-3' : '' }`} onClick={()=>setFilter('Pending')}>Pending</h2>
                
            </div>

            <div className="task_details_container d-flex justify-content-center align-items-start py-3 gap-3">
                <div className="task_box  w-75">
                    { filteredTask.length > 0 ? ( filteredTask.map((task)=>

                        <ProjectTaskBox key={task.id} task={task} onStatusChange={fetchTasks} />
                    ) ): (
                    
                    <p className='p-5 text-danger fw-bold fs-1 text-center'>No {filter} Task added yet</p>
                    
                    )}
          
                </div>

                <div className="overview p-3 w-25 border rounded " style={{minHeight:"200px"}}>
                    <p className="my-2 fs-4">{CompeletedTask} Task Completed</p>
                    <p className="my-2 fs-4">{PendingTask} Task Pending</p>
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
      return res.data;
}