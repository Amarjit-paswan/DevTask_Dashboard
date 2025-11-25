import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios';
import { initialState, projectAddReducer } from './projectAddReducer';

function ProjectAdd({refreshProject}) {

    //useReducer manages the entire form's state
    //Removes scattered useState and keeps logic predictable
    const [state, dispatch] = useReducer(projectAddReducer, initialState);

    //Reset form fields + uncheck all checkbox
    const resetForm = ()=>{
        dispatch({type: 'RESET'});

        //Reset checkbox UI manually
        document.querySelectorAll("input[checkbox]").forEach((cb)=>(cb.checked = false))
    }

        //Handle project submission
        const addProjectForm = async (e)=>{
            e.preventDefault(); //Prevent page reload

            const data = {
                project_title:  state.projectTitle,
                project_info:   state.projectInfo,
                technology:     state.technologies
            };

            try{
                const res = await axios.post('http://localhost:8000/api/addProject',data);

                //If created successfully -> show success + reset form
                if(res.data.status === 'success'){
                    resetForm();
                    dispatch({type: "SET_MESSAGE", payload: res.data.message});

                    //Refresh project list in parent
                    refreshProject();
                }
            }catch(err){
                //Handle backend validation on server errors safely
                const msg = err.response?.data?.message || "Something went wrong. Please try again";

                dispatch({type: "SET_ERROR", payload:msg})
            }
        };

        //Fetch languages from backend (runs once)
        useEffect(()=>{
            async function fetchLanguage(){
                const res =  await axios.post('http://localhost:8000/api/language');
                dispatch({type: "SET_LANGUAGE", payload: res.data.languages})
            }

            fetchLanguage();
        },[]);

        //Reset form when modal closes
        useEffect(()=>{
            const modalElement =  document.querySelector("#ProjectAddModal");

            const handleCloseModal = ()=> resetForm();

            modalElement.addEventListener('hidden.bs.modal', handleCloseModal);

            return ()=>{
                modalElement.removeEventListener('hidden.bs.modal', handleCloseModal)
            }
        },[])
    




/*
    // ----------------------------------------
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
    },[]); */
   
  return (
    <div className="modal fade " id="ProjectAddModal" tabindex="-1" aria-labelledby="ProjectAddModalLabel" aria-hidden="true" data-bs-backdrop='static' data-bs-keyboard='false'>
        <div className="modal-dialog bg-white text-dark ">
            <div className="modal-content  ">
                <div className="modal-header">
                    <h5 className="modal-title">Add Project</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label='Close'></button>
                </div>

                 <div className="modal-body">
                    {/* Success Message  */}
                    {state.message && (
                        <div className="alert alert-success">{state.message}</div>
                    )}

                    {/* Error Message  */}
                    {state.error && (
                        <div className="alert alert-danger">{state.error}</div>
                    )}

                    {/* Form start  */}
                <form action="" method="post" onSubmit={addProjectForm}>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label fw-bold">Project Title</label>
                        <input 
                            type="text" 
                            name="" 
                            id="" 
                            className="form-control" 
                            placeholder='Enter Project Title' 
                            onChange={(e)=> dispatch({type:'SET_TITLE', payload:e.target.value})} 
                            value={state.projectTitle} />
                    </div>

                    {/* Project info  */}
                    <div className="mb-3">
                        <label htmlFor="" className="form-label fw-bold">Project Info</label>
                        <textarea 
                            name="" 
                            id="" 
                            className="form-control" 
                            placeholder='Enter Project Info' 
                            onChange={(e)=> dispatch({ type: "SET_INFO", payload: e.target.value})} 
                            value={state.projectInfo}></textarea>
                    </div>

                    {/* Technologies List  */}
                    <div className="mb-3">
                        <label htmlFor="" className="form-label fw-bold">Select Technologies</label>
                        <div className="d-flex flex-wrap">

                            {state.language.map((lang)=>(
                                <div key={lang.id} 
                                className="form-check "
                                //  onChange={(e)=>{ 
                                //     const value = e.target.value;
                                //     setTechnologies((prev) =>
                                //         prev.includes(value) ? prev.filter((item) => item !== value) : [...prev,value]
                                //     );
                                //  }
                                //   }
                                >
                                    <input type="checkbox" name="" id={`lang-${lang.id}`} onChange={(e)=> dispatch({ type: "SET_TECH", payload: lang.id })} />
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