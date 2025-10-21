import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ProjectAdd() {
    const [language, setLanguage] = useState([]);
    useEffect(()=>{
        async function fetchLanguage(){
            const res = await axios.post('http://localhost:8000/api/language');
            // console.log(res);
            setLanguage(res.data.languages);
            
        }

        fetchLanguage();
    },[])
  return (
    <div className="modal fade " id="ProjectAddModal" tabindex="-1" aria-labelledby="ProjectAddModalLabel" aria-hidden="true" data-bs-backdrop='static' data-bs-keyboard='false'>
        <div className="modal-dialog bg-white text-dark ">
            <div className="modal-content  ">
                <div className="modal-header">
                    <h5 className="modal-title">Add Project</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label='Close'></button>
                </div>

                 <div className="modal-body">
                <form action="" method="post">
                    <div className="mb-3">
                        <label htmlFor="" className="form-label fw-bold">Project Title</label>
                        <input type="text" name="" id="" className="form-control" placeholder='Enter Project Title' />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="" className="form-label fw-bold">Project Info</label>
                        <textarea name="" id="" className="form-control" placeholder='Enter Project Info'></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="" className="form-label fw-bold">Select Technologies</label>
                        <div className="d-flex flex-wrap">
                            {language.map((lang)=>(
                                <div key={lang.id} className="form-check ">
                                    <input type="checkbox" name="" id={`lang-${lang.id}`} value={lang.id} />
                                    <label htmlFor="" className="form-label mx-2">{lang.language}</label>

                                </div>
                            ))}
                        </div>
                        

                    </div>

                    <div className="modal-footer w-100">
                        <div className="d-grid w-100">
                            <input type="submit" value="Submit" className="btn btn-success" />
                        </div>
                    </div>
                    
                </form>
            </div>

            
            </div>

           
        </div>
    </div>
  )
}

export default ProjectAdd