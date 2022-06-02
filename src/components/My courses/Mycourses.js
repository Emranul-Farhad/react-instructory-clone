import React from 'react';
import Nav from '../navbar/Nav';





const Mycourses = () => {


    return (
        <div className='bg-[#FbFbFb]'>  
        <Nav></Nav>
        <div className=' mx-20'>
            <h6>Your courses</h6>
            <div className='mt-20'>
                <div className='bg-[#fff] hover:shadow-2xl border-1 rounded-lg p-2'> 
                <div className=' row container'>
                    <div className='flex justify-content-between'>
                        <h6 className='text-2xl text-[#ababab] mt-2 '>Purchased</h6>
                        <h6 className='text-2xl font-extrabold mt-2 '>Order Amount: <span className='text-[#1aa3d0] font-extrabold text-2xl'>300</span> </h6>
                    </div>
                    <hr className='mb-4 mt-4' />
                    <div className='w-[290px] h-[290px] rounded-md col-lg-6'>
                        <img src="https://instructory-aws-storage.s3.us-west-1.amazonaws.com/course_thumbnails/625e5c49304e3.jpg" alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <h6 className='text-left text-[#444] mx-10 text-2xl font-bold font-sans'> Elementor Widget Development with Projects </h6>
                        <h6 className='text-left mx-10 mt-3 font-bold text-[#0076a3] '> By <span> Abduallah al nahian </span>  </h6>

                        <h6 className='text-left mx-10 mt-3 font-bold text-[#ababab] '> 
                         <span> You are starting of the Course! Continue your learning </span>  </h6>

                    <div className='text-left'>
                        {/* <h6 className='text-2xl text-[#ababab] mt-2 '>Purchased</h6> */}
                        <button className='bg-[#ff4669] w-20 h-10 mx-10 mt-3 text-white rounded-md font-bold'> See Now </button>
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