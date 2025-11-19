import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProjectTaskModal() {
  const {id} = useParams();
  const [task, setTask] = useState('');
  const [successMsg, setsuccessMsg] = useState('');

 

    const addTaskForm = async (e)=>{
      e.preventDefault();
      const data = {
        'project_id' : id,
        'task_name' : task
      };
      const res = await axios.post('http://localhost:8000/api/addTask',data);
      console.log(res);

      //Show success message
      if(res.data.status === 'success'){
        setsuccessMsg(res.data.message);
        setTask('');
      }
      
    }

    const resetModalContent = ()=>{
      setTask('');
      setsuccessMsg('');
    }

    //Remove modal content when it's disappear
    useEffect(()=>{
      let modalElement = document.querySelector('#TaskAddModal');

      const handleModalContent = ()=>{
        resetModalContent();
      }

      if(modalElement){
        modalElement.addEventListener('hidden.bs.modal', handleModalContent);
      }

        return ()=>{
            if(modalElement){
                modalElement.removeEventListener('hidden.bs.modal', handleModalContent);
            }
        }
    },[])
  


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
                       { successMsg && (
                          <div className="alert alert-success">{successMsg}</div>
                        ) }
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