import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ProjectTaskBox({task}) {
  const [taskStatus, settaskStatus] = useState(false);

  const changeStatus = async (taskVal)=>{
    const res = await axios.post('http://localhost:8080/api/changeStatus', )
  }

  return (
    <div className="box p-2 border d-flex justify-content-between mb-3 align-items-center rounded">
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <input type="checkbox" name="" id={task.id} className='form-check-input' onChange={(e)=> settaskStatus(e.target.value)} />
                            <p className="my-1 fs-5">{task.task_name}</p>
                        </div>

                       
                        
                        <span className={`fw-bold me-4 ${task.task_status === 'Pending' ? 'text-warning': 'text-success'}`}>{task.task_status}</span>
                    </div>
  )
}

export default ProjectTaskBox

