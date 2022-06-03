import { Rating } from '@mui/material';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Allcourse = ({courses}) => {
    const {star,courseName,img,name,price} = courses

    return (
        <div>
           <div>
            {/*  card start from here */}

            <div  data-aos="fade-down" data-aos-offset="200"
    data-aos-delay="10"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
            className="containers mt-20">
                <div className=" card">
                    <div className="image">
                        <img href="#" src={img} alt='teacher' />

                    </div>
                    <div className='titlecard'>
                        <h4 className='font-thin text-gray text-slate-500 text-left'> {name} </h4>
                        <h4 className='text-xl font-bold mt-2 text-left'>  {courseName}</h4>
                    </div>
                    <div className="content">
                        {/* <Typography component="legend"></Typography> */}
                        <Rating className='mr-[150px]' name="read-only" value={star} readOnly />

                        <div className='flex flex-row justify-between mt-2 '>
                            <h6 className='font-bold text-[28px] text-[#00A99D]'> ৳{price} </h6>
                            <button className='btn btn-primary bg-gradient-to-r from-[#00A99D] to-[#0898D7] text-white font-bold rounded-md'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Allcourse;