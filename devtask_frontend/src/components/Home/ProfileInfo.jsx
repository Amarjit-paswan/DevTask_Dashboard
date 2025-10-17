import React, { useEffect, useState } from 'react'
import './home.css';
import Card from './card';
import {Link} from 'react-router-dom';
import axios from 'axios';


function ProfileInfo() {

    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');

    useEffect(()=>{
        const fetchData = async function(){
            try{
                const res = await axios.get('http::/localhost:8000/api/useDetails');
                setUsername(res.data.name);
                setBio(res.data.bio);
                        
            }catch(error){
                console.error(error);
                
            }
        }

        fetchData();
    },[]);
  return (
    <>
        <div className="container-fluid mt-5">
            <div className="profile_container d-flex justify-content-around ">
                <div className="profile_img  ">
                    <img src="https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg" alt="" srcset="" className='w-100 h-100' />
                </div>

                <div className="profile_info w-50  d-flex flex-column justify-content-center">
                    <h1 className='text-warning'>Hey, I'm Amarjit</h1>
                    <p className="m-1 fs-3">Full Stack Developer passionate about building interactive web-apps.</p>
                    <div className="btn_groups d-flex gap-3 mt-4">
                        <Link to='/projects'>
                            <button className="btn btn-light btn-lg p-3 px-5">View My Projects</button>
                        </Link>

                        <Link to='/contact'>
                            <button className="btn btn-none btn-lg p-3 px-5 border border-white text-white">Contact Me</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='card_container mt-5 d-flex justify-content-around  py-4 px-5'>

                <Card />
                <Card />
                <Card />
            </div>
        </div>
    
    </>
  )
}

export default ProfileInfo