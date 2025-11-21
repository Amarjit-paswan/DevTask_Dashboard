import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ProjectTaskBox({task, onStatusChange}) {
  const [taskStatus, settaskStatus] = useState(task.task_status);
  const taskId = task.id;
  const [Checked, setChecked] = useState(task.task_status === 'Completed');
  console.log(Checked);
  
  const changeStatus = async  ()=>{
    const newStatus = !Checked;
    setChecked(newStatus);

    const data = {
      'taskStatus' : newStatus,
      'taskId' : taskId
    };
   
    
    const res = await axios.post('http://localhost:8000/api/updateTaskStatus', data);
    settaskStatus(res.data.taskStatus);
    
    onStatusChange();
  }





  return (
    <div className="box p-2 border d-flex justify-content-between mb-3 align-items-center rounded">
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <input type="checkbox" name="" id={task.id}  checked={Checked} className='form-check-input' onChange={changeStatus} />
                            <p className={` my-1 fs-5 ${Checked ? 'text-decoration-line-through text-secondary': 'text-white'}`}>{task.task_name}</p>
                        </div>

                       
                        
                        <span className={`fw-bold me-4 ${taskStatus === 'Pending' ? 'text-warning': 'text-success'}`}>{taskStatus}</span>
                    </div>
  )
}

export default ProjectTaskBox

