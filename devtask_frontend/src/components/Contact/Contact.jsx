import React, { useEffect, useState } from 'react'
import './contact.css';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

function Contact() {

    const data = useLoaderData();
    const [profileImg, setProfileImg] = useState('');
    console.log(data);

    useEffect(()=>{
        async function fetchUser(){

            const res = await axios.get(data.github_url);
            setProfileImg(res.data.avatar_url);
        }

        fetchUser();
        
    },[data.github_url]);
    
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
                    <form action="" method="post">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label fs-4">
                                Email
                            </label>
                            <input type="text" name="" id="" className="form-control form-control-lg" placeholder='Enter Your Email' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label fs-4">
                                Message
                            </label>
                            <textarea name="" id="" className="form-control form-control-lg" placeholder='Enter Your Message'></textarea>
                        </div>

                        <div className="d-grid">
                            <button className="btn btn-warning btn-lg fw-bold">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact