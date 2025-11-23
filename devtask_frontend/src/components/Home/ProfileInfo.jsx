import React, { useEffect, useState } from 'react'
import './home.css';
import Card from './card';
import {Link, useLoaderData} from 'react-router-dom';
import axios from 'axios';


function ProfileInfo() {

    
    const data = useLoaderData();
    const [profileImg, setProfileImg] = useState('');
    const [followers, setFollowers] = useState(0);
    const [following, setFollowing] = useState(0);

    useEffect(()=>{
       async function fetchGithubDetals(){
           const res = await axios.get(data.github_url);
           setProfileImg(res.data.avatar_url);
           setFollowers(res.data.followers);
           setFollowing(res.data.following); 
        }

        if(data.github_url){

            fetchGithubDetals();
        }
    },[data])

    
 

    
  return (
    <>
        <div className="container-fluid mt-5">
            <div className="profile_container d-flex justify-content-around ">
                <div className="profile_img  ">
                    <img src={profileImg} alt=""  className='w-100 h-100' />
                </div>

                <div className="profile_info w-50  d-flex flex-column justify-content-center">
                    <h1 className='text-warning'>Hey, I'm {data.name}</h1>
                    <p className="m-1 fs-3">{data.bio}</p>
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

                <Card bio={followers} bioText="Followers"/>
                <Card bio={following} bioText="Following"/>
                
            </div>
        </div>
    
    </>
  )
}

export const profileLoader = async ()=>{
    const res = await fetch('http://localhost:8000/api/userDetails');
    return res.json();
}

export default ProfileInfo