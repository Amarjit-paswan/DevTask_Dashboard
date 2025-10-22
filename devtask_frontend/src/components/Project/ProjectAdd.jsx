import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ProjectAdd() {
    const [language, setLanguage] = useState([]);
    const [projectTitle, setProjectTitle] = useState('');
    const [projectInfo, setProjectInfo] = useState('');
    const [technologies, setTechnologies] = useState([]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    //function to reset everything
    const resetForm = ()=>{
        setProjectTitle('');
        setProjectInfo('');
        setMessage('');
        setError('');
        setTechnologies([]);

        //reset checked checkbox
        document.querySelectorAll("input[type=checkbox]").forEach((cb) => (cb.checked = false));
    }

    //handle add project
    const addProjectForm = async (e)=>{
        e.preventDefault();

        const data = {
            project_title: projectTitle,
            project_info: projectInfo,
            technology : technologies 
        };

        try{

            const res = await axios.post('http://localhost:8000/api/addProject',data);
            if(res.data.status === 'success'){
                resetForm();
                setMessage(res.data.message);


            }
            
        }catch(err){
            if(err.response && err.response.data && err.response.data.message){
                setError(err.response.data.message);
            }else{
                setError("Something went wrong. Please try again");
            }
        }
    }


    useEffect(()=>{
        async function fetchLanguage(){
            const res = await axios.post('http://localhost:8000/api/language');
            // console.log(res);
            setLanguage(res.data.languages);
            
        }

        fetchLanguage();
    },[])

    //Reset modal when closed
    useEffect(()=>{
        const modalElement = document.querySelector('#ProjectAddModal');
        const handleCloseModal = ()=>{
            resetForm();
        }

        if(modalElement){
            modalElement.addEventListener('hidden.bs.modal', handleCloseModal);
        }

        return ()=>{
            if(modalElement){
                modalElement.removeEventListener('hidden.bs.modal', handleCloseModal);
            }
        }
    },[]);
   
  return (
    <div className="modal fade " id="ProjectAddModal" tabindex="-1" aria-labelledby="ProjectAddModalLabel" aria-hidden="true" data-bs-backdrop='static' data-bs-keyboard='false'>
        <div className="modal-dialog bg-white text-dark ">
            <div className="modal-content  ">
                <div className="modal-header">
                    <h5 className="modal-title">Add Project</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label='Close'></button>
                </div>

                 <div className="modal-body">
                    {message && (
                        <div className="alert alert-success">{message}</div>
                    )}
                <form action="" method="post" onSubmit={addProjectForm}>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label fw-bold">Project Title</label>
                        <input type="text" name="" id="" className="form-control" placeholder='Enter Project Title' onChange={(e)=> setProjectTitle(e.target.value)} value={projectTitle} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="" className="form-label fw-bold">Project Info</label>
                        <textarea name="" id="" className="form-control" placeholder='Enter Project Info' onChange={(e)=> setProjectInfo(e.target.value)} value={projectInfo}></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="" className="form-label fw-bold">Select Technologies</label>
                        <div className="d-flex flex-wrap">
                            {language.map((lang)=>(
                                <div key={lang.id} 
                                className="form-check "
                                 onChange={(e)=>{ 
                                    const value = e.target.value;
                                    setTechnologies((prev) =>
                                        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev,value]
                                    );
                                 }
                                  }>
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