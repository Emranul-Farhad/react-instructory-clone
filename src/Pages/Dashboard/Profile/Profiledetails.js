import React from 'react';
import { FaUsers, FaStar, FaPlayCircle, FaPenNib } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { GiLevelFourAdvanced } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import './Profile.css'


const Profiledetails = () => {

    // avigate to profile section
    const navigate = useNavigate()

    return (
        <div className='bg-[#FBFBFB] w-[100%] '>
            <h6 className='text-4xl font-bold font-serif pt-2'> Welcome to your profile  👏</h6>
            <div data-aos="zoom-out" data-aos-offset="200"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out" className='row mt-20 shdow-2xl bg-[#fff] shadow-2xl p-10 mx-[200px] '>
                <div className='col-lg-8'>
                    <div className='d-flex'>
                        <div className='w-[300px] h-[300px] '>
                            <img className='flex-shrink-0 rounded-[50%] ' src="https://instructory-aws-storage.s3.us-west-1.amazonaws.com/users/2am/profile_105225611.jpg" alt="" />
                            <h6 className='mt-3 mr-10 text-2xl font-bold font-serif'>Emranul farhad</h6>
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
                                <h6 className='mx-4 font-bold mt-3'> Chittagong </h6>
                            </div>

                            <div className='flex'>
                                <h6 className='text-left text-2xl '>  <GiLevelFourAdvanced className='text-[#0076a3] mt-4' ></GiLevelFourAdvanced> </h6>
                                <h6 className='mx-4 font-bold mt-4'> Level 0 instructor </h6>
                            </div>

                        </div  >
                    </div>
                </div>

                <div className='col-lg-4'>
                    <h6 className='font-extrabold text-2xl font-serif text-left'> About me </h6>
                    <h6 className='text-left'> Lorem ipsum dolor sit amet.  </h6>
                </div>
            </div>


            <div>
                <div class="card w-96 bg-base-100 shadow-xl mx-[200px] mt-10 ">
                    <div className='h-5 bg-[#1aa2cf] p-4' >
                        <h6 className='text-white font-extrabold mt-[-10px]'> Educatiuon & others </h6>
                    </div>
                    <div class="card-body">
                        <h6 className='text-left font-bold text-2xl '> Bio </h6>
                        <h6 className='text-left mt-2'>If a dog chews shoes whose shoes does he choose?</h6>

                        <div className="skills">
                            <h6 className=' mt-4 text-left font-bold text-2xl'>Skills</h6>
                            <ul className='mt-2'>
                                <li>UI / UX</li>
                                <li>Front End Development</li>
                                <li>HTML</li>
                                <li>CSS</li>
                               
                            </ul>
                        </div>

                        <h6 className=' mt-3 text-left font-bold text-2xl '> proffesion </h6>
                        <h6> </h6>
                        <h6 className='text-left mt-3 font-bold text-2xl '> Location </h6>
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