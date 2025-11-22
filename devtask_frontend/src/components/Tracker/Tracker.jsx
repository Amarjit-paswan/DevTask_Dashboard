import React, { useState } from 'react'
import './Tracker.css'
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

function Tracker() {
    const data = useLoaderData();
    const [projects, setprojects] = useState(data);
    console.log(projects);
    
    
  return (
    <div className='w-100 p-4'>
        <div className="tittle">
            <h1 className='text-warning'>Tracker</h1>
        </div>

        <div className="table-responsive mt-4 ">
            <table className="w-100 tracker_table text-center">
                <thead>
                    <tr>
                        <th>Project</th>
                        <th>Description</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th >Duration</th>
                    </tr>
                </thead>

                <tbody>
                    {projects.projects.length > 0 ? (projects.projects.map((project)=>{
                        return (
                        <tr key={project.id} >
                            <td>{project.project_title}</td>
                            <td>{project.project_info}</td>
                            <td> { new Date(project.created_at.replace(' ', 'T')).toLocaleString('en-GB').replace(',','')}</td>
                            <td> { project.completed_project_at ? new Date(project.completed_project_at.replace(' ', 'T')).toLocaleString('en-GB').replace(',','') : ''}</td>
                            <td className=' ' >
                                { project.completed_project_at ?  
                                <div className="completed_msg status_box">
                                Completed
                                </div>
                                :
                                <div className="pending_msg status_box">
                                Pending
                                </div>
                                }
                            </td>
                        </tr>
                        )
                    })) : 
                        (
                            // <p>No found</p>
                            <tr>
                                <td>no found</td>
                            </tr>
                        )
                    }
                   
                  
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Tracker

//Fetch task before page load
export const projectStatusLoader = async ()=>{
    const res=   await axios.get('http://localhost:8000/api/projectStatus_tracker');
    return res.data;    
}