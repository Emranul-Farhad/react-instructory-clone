import React, { useEffect, useState } from 'react';
import { FaUsers, FaStar, FaPlayCircle, FaPenNib } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { GiLevelFourAdvanced } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Profile from './Profile';
import './Profile.css'
import auth from '../../../Firekey/Firekey';


const Profiledetails = () => {

    // navigate to profile section
    const navigate = useNavigate()

    // user 
     const [user] = useAuthState(auth)

    //show user info from db that we will edit in profile section
    const [info , setInfo] = useState({})
    const email = user?.email
    useEffect(()=> {
        const url = `http://localhost:8000/userdata?email=${email}`
       fetch(url,{
           method : "GET",
       }) 
       .then(res => res.json())
       .then(data => setInfo(data))
    },[email]) 





    return (
        <div className='bg-[#FBFBFB] w-[100%] mx-20'>
            <h6 className='text-4xl font-bold font-serif pt-2'> Welcome <span className='text-[#0076a3] uppercase'>{info?.username}</span> to your profile  👏</h6>
            <div data-aos="zoom-out" data-aos-offset="200"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out" className='row mt-20 shdow-2xl bg-[#fff] shadow-2xl p-10 mx-[200px] '>
                <div className='col-lg-8'>
                    <div className='d-flex'>
                        <div className='w-[300px] h-[300px] '>
                            <img className='flex-shrink-0 rounded-[50%] ' src="https://instructory-aws-storage.s3.us-west-1.amazonaws.com/users/2am/profile_105225611.jpg" alt="" />
                            <h6 className='uppercase mt-3 mr-10 text-2xl font-bold font-serif'>
                                {info?.username} </h6>
                        </div>
                        <div className='mt-3'>

                            <div className='flex'>
                                <h6 className='text-left text-2xl  '>  <FaUsers className='text-[rgb(0,118,163)]'></FaUsers> </h6>
                                <h6 className='mx-3 font-bold '> 0 Enrollments </h6>
                            </div>

                            <div className='flex align-items-center'>
                                <h6 className='text-left text-2xl '>  <FaStar className='text-[#0076a3] mt-4'></FaStar> </h6>
                                <h6 className='mx-4 font-bold mt-3'> 0 Star Ratings </h6>
                            </div>

                            <div className='flex align-items-center'>
                                <h6 className='text-left text-2xl '>  <FaPlayCircle className='text-[#0076a3] mt-4' ></FaPlayCircle> </h6>
                                <h6 className='mx-4 font-bold mt-3'> 0 Courses </h6>
                            </div>

                            <div className='flex align-items-center'>
                                <h6 className='text-left text-2xl '>  <ImLocation2 className='text-[#0076a3] mt-4' ></ImLocation2> </h6>
                                <h6 className='mx-4 font-bold mt-3'> {info?.location} </h6>
                            </div>

                            <div className='flex'>
                                <h6 className='text-left text-2xl '>  <GiLevelFourAdvanced className='text-[#0076a3] mt-4' ></GiLevelFourAdvanced> </h6>
                                <h6 className='mx-4 font-bold mt-4'> Level 0 instructor </h6>
                            </div>

                        </div  >
                    </div>
                </div>

                <div className='col-lg-4'>
                    <h6 className='font-extrabold text-2xl font-serif text-left'> About me 👱</h6>
                    <h6 className='text-left'> {info?.biography}</h6>
                </div>
            </div>


            <div>
                <div class="card w-96 bg-base-100 shadow-xl mx-[200px] mt-10 ">
                    <div className='h-5 bg-[#1aa2cf] p-4' >
                        <h6 className='text-white font-extrabold mt-[-10px]'> Educatiuon & others 🎓</h6>
                    </div>
                    <div class="card-body">
                        <h6 className='text-left font-bold text-2xl '> profession </h6>
                        <h6 className='text-left mt-2'> {info?.profession} </h6>

                        <div className="skills">
                            <h6 className=' mt-4 text-left font-bold text-2xl'>Skills</h6>
                            <ul className='mt-2'>
                                <li> {info?.skillo} </li>
                                <li> {info?.skillt} </li>
                                <li> {info?.skillh} </li>
                                <li> {info?.skillf}</li>
                               
                            </ul>
                        </div>

                        <h6 className=' mt-3 text-left font-bold text-2xl '> Hobby </h6>
                        <h6 className='text-left mt-2'> {info?.hoby} </h6>
                        <h6 className='text-left mt-3 font-bold text-2xl '> Location </h6>
                        <h6 className='text-left mt-2' > {info?.location} </h6>
                    </div>
                    <div className='w-7 h-7 bg-[#1aa] mt-10 '>
                        <button onClick={() => navigate('/dashboard/profileedit')} className='text-2xl' > <FaPenNib></FaPenNib> </button>
                    </div>
                </div>
            </div>

            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vero.</h1>
        </div>
    );
};

export default Profiledetails;