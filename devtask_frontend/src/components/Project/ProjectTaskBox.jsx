import React, { useEffect } from 'react'

function ProjectTaskBox() {

  return (
    <div className="box p-2 border d-flex justify-content-between mb-3 align-items-center rounded">
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <input type="checkbox" name="" id="" className='form-check-input' />
                            <p className="my-1 fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolorem.</p>
                        </div>
                        
                        <span className="text-success fw-bold me-4">Completed</span>
                    </div>
  )
}

export default ProjectTaskBox

