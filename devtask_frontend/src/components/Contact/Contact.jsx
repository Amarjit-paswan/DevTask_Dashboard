import React, { useEffect, useState } from 'react'
import './contact.css';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

function Contact() {

    const data = useLoaderData();
    const [profileImg, setProfileImg] = useState('');

    useEffect(()=>{
        async function fetchUser(){

            const res = await axios.get(data.github_url);
            setProfileImg(res.data.avatar_url);
        }

        fetchUser();
        
    },[data.github_url]);

    //Send Message
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [successMsg, setsuccessMsg] = useState('');



    const sendMessage = async (e)=>{

        //Stops redirect
        e.preventDefault();

        const data = {
            'email' : email,
            'message' : message
        }; 
        try{
            const res = await axios.post('http://localhost:8000/api/sendMessage',data);
            
            //if email sent successfully
            if(res.data.status === 'success'){
                setsuccessMsg(res.data.message);
                setErrors({});
                setEmail('');
                setMessage('');
            }
            console.log(res);
        }catch(error){
            setsuccessMsg('');
            //Set Errors if backend sents validation errors 422 
            if(error.response && error.response.status === 422){
                setErrors(error.response.data.errors)
            }else{
                console.log(error);
            }
            
        }
        
    }


    
  return (
    <div className='w-100 p-4'>
        <div className="title">
            <h1 className='text-warning'>Contact</h1>
        </div>

        <div className="contact_details_container mt-5 d-flex justify-content-between align-items-start gap-5">
            {/* Profile details info  */}
            <div className="myInfo_box d-flex gap-4 flex-column justify-content-center align-items-start ">
                <div className="profile_img b">
                    <img src={profileImg} alt=""  className='w-100 h-100' />
                </div>
                <div className="myDetails  p-4 pt-1 rounded d-flex flex-column justify-content-center align-items-center">

                    <div className="mb-3 d-flex gap-2 justify-content-start align-items-center">
                        <label htmlFor="" className="form-label fs-4 text-warning">
                          <i class="fa-solid fa-envelope "></i>  Email:
                        </label>
                        <p className='fs-5 text-end m-0'>amarjit@123.com</p>
                    </div>

                    <div className="mb-3 d-flex gap-2 justify-content-start align-items-center">
                        <label htmlFor="" className="form-label  fs-4 text-warning">
                          <i class="fa-solid fa-phone"></i>  Phone:
                        </label>
                        <p className='fs-5 text-end m-0'>{data.name}</p>
                    </div>

                </div>
            </div>

            {/* Send Message form  */}
            <div className="message_form_container w-75  p-4 rounded">
                <h3 className='text-center pb-3  border-bottom'>Message Form</h3>

                <div className="form_box mt-4">
                    {successMsg && (
                        <div className="alert alert-success">{successMsg}</div>
                    )}
                    <form action="" method="post" onSubmit={sendMessage}>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label fs-4">
                                Email
                            </label>
                            <input type="text" name="" id="" className="form-control form-control-lg" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />

                            {/* Show error  */}
                            { errors.email && (

                                <span className="text-danger mt-3 fw-bold fs-5">{errors.email}</span>
                            ) }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label fs-4">
                                Message
                            </label>
                            <textarea name="" id="" className="form-control form-control-lg" placeholder='Enter Your Message' onChange={(e) => setMessage(e.target.value)}></textarea>

                            {/* Show error  */}
                            { errors.message && (

                                <span className="text-danger mt-3 fw-bold fs-5">{errors.message}</span>
                            ) }
                        </div>

                        <div className="d-grid">
                            <button type='submit' className="btn btn-warning btn-lg fw-bold">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact