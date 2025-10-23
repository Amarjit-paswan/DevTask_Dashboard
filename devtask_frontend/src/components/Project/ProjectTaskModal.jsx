import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProjectTaskModal() {
  const project_id = useParams();
  const [task, setTask] = useState('');
  console.log(project_id);

 

    const addTaskForm = async (e)=>{
      e.preventDefault();
      const data = {
        'project_id' : project_id,
        'task_name' : task
      };
      const res = await axios.post('http://localhost:8000/api/addTask',data);
      console.log(res);
    }
  


  return (
    <div className="modal fade" id='TaskAddModal' tabIndex='-1' aria-labelledby='TaskAddModalLabel' aria-hidden='true' data-bs-backdrop='static' data-bs-keyboard='false' >
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">Add Task</h2>
                    <button className="btn-close" data-bs-dismiss='modal' aria-label='close' ></button>
                </div>

                  <form action="" method="post" onSubmit={addTaskForm}>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label fw-bold">Task Name</label>
                        <input type="text" name="" id="" className="form-control" placeholder='Enter Your Task' onChange={(e)=> setTask(e.target.value)} value={task} />
                      </div>

                        <div className="d-grid w-100">
                          <input type="submit" value="Submit" className="btn btn-danger" />
                      </div>
                    </div>

                  </form>
            </div>
        </div>
    </div>
  )
}

export default ProjectTaskModal