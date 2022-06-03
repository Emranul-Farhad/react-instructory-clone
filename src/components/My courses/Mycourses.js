import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../navbar/Nav';




const Mycourses = () => {

    // cnavigate handel
     const navigate = useNavigate()
  

    return (
        <div className='bg-[#FbFbFb]'>
            <Nav></Nav>
            <div className='mx-20'>
                <h6>Your courses</h6>
                <div className='mt-20'>
                    <div className='bg-[#fff] hover:shadow-2xl border-1 rounded-lg pb-5'>
                        <div className='md:mx-20'>
                            <div className='flex flex-col lg:flex-row justify-between'>
                                <h6 className='text-2xl text-[#ababab] mt-2 text-left lg:text-'>Purchased</h6>
                                <h6 className='text-2xl font-extrabold mt-2 text-left'>Order Amount: <span className='text-[#1aa3d0] font-extrabold text-2xl'>300</span> </h6>
                            </div>
                            <hr className='mb-4 mt-4' />

                            <div className='flex flex-col justify-start lg:flex-row md:flex-row '> 

                            <div className='basis-4/4 lg:basis-2/5 md:basis-2/4 shrink-0 '>
                                <img className='shrink-0'  src="https://instructory-aws-storage.s3.us-west-1.amazonaws.com/course_thumbnails/625e5c49304e3.jpg" alt="" />
                            </div>


                            <div className='basis-2/4 box-border shrink-0'>
                                <h6 className='text-left text-[#444] mx-10 text-2xl font-bold font-sans'> Elementor Widget Development with Projects </h6>
                                <h6 className='text-left mx-10 mt-3 font-bold text-[#0076a3] '> By <span> Abduallah al nahian </span>  </h6>

                                <h6 className='text-left mx-10 mt-3 font-bold text-[#ababab] '>
                                    <span> You are starting of the Course! fdfdsfdff  Continue your learning </span>  </h6>
                                    
                                <div className='text-left mt-3'>               
                                   <button onClick={()=> navigate('/giverivew')} className='mx-10 mt-2 text-[#0076a3] rounded-md font-bold'>
                                    Give review</button>
                                </div>
                                <div className='text-left mt-3'>               
                                   <button className='bg-[#ff4669] w-20 h-10 mx-10 mt-3 text-white rounded-md font-bold'>aaa</button>
                                </div>

                            </div>
                            </div>
                        </div>

                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ex?</h1>
            </div>
        </div>
    );
};

export default Mycourses;