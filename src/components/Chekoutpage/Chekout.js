import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Nav from '../navbar/Nav';




const Chekout = () => {

    const { id } = useParams()

    const [course, setCourse] = useState({})
    useEffect(() => {
        const url = `http://localhost:8000/singelcourse/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [id])

    return (
        <div>
            <Nav></Nav>
            <div className='row container'>
                <div className='col-lg-8'>
                <div className='flex flex-col lg:flex-row'>
                    <div className='mt-20'>
                        <div data-aos="zoom-out" data-aos-offset="200"
                            data-aos-delay="10"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out" className='bg-[#fff] hover:shadow-2xl border-1 rounded-lg '>
                            <div className='p-3'>

                                <div className='flex flex-col justify-start lg:flex-row md:flex-row '>

                                    <div className='basis-4/4 lg:basis-2/5 md:basis-2/4 shrink-0 '>
                                        <img className='shrink-0' src="https://instructory-aws-storage.s3.us-west-1.amazonaws.com/course_thumbnails/625e5c49304e3.jpg" alt="" />
                                    </div>


                                    <div className='basis-2/4 box-border shrink-0'>
                                        <div className='flex flex-col lg:flex-row'>
                                            <div>
                                            <h6 className='text-left text-[#444] mx-10 text-[16px] font-bold font-sans'> Elementor Widget Development with Projects </h6>
                                        <h6 className='text-left mx-10 mt-3 font-bold text-[#0076a3] '> By <span> Abduallah al nahian </span>  </h6>

                                        <h6 className='text-left mx-10 mt-3 font-bold text-[#ababab] '>
                                            <span> You are starting of the Course! fdfdsfdff  Continue your learning </span>  </h6>
                                            </div>
                                            <div>
                                                <h6 className='text-2xl font-bold text-[#00A99D]'>800</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
                <div className='col-lg-4'>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quia?</h6>
                </div>
            </div>
        </div>
    );
};

export default Chekout;