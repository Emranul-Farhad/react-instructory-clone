import React from 'react';
import './Title.css'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Title = () => {
    return (
        <div>
            <div className='containers'>
                <div className='main'>
                    <h2 className='ct'>Course Title</h2>
                    <div className='sp'></div>
                </div>
            </div>
            {/*  card test*/}
            <body>
                <div class="containers mt-20">
                    <div class=" card">
                        <div class="image">
                            <img href="#" src="https://instructory-aws-storage.s3.us-west-1.amazonaws.com/course_thumbnails/625e6173bf7ca.jpg" alt='teacher' />

                        </div>
                        <div className='titlecard'>
                            <h4 className='font-thin text-gray text-slate-500 text-left'> Saydur Rahman</h4>
                            <h4 className='text-xl font-bold mt-2 text-left'> KDP Interior Design</h4>
                        </div>
                        <div class="content">
                            {/* <Typography component="legend"></Typography> */}
                            <Rating className='mr-[150px]' name="read-only" value={4} readOnly />

                            <div className='flex flex-row justify-between mt-2 '>
                                <h6 className='font-bold text-[28px] text-[#00A99D]'> ৳300</h6>
                                <button   className='btn btn-primary bg-gradient-to-r from-[#00A99D] to-[#0898D7] text-white font-bold rounded-md'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </body>


        </div>
    );
};

export default Title;