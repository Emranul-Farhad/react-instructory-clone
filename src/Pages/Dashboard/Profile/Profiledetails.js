import React from 'react';
import {FaUsers , FaStar, FaPlayCircle} from 'react-icons/fa'
import {ImLocation2} from 'react-icons/im'
import {GiLevelFourAdvanced} from 'react-icons/gi'



const Profiledetails = () => {


    return (
        <div className='mx-[200px]'>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ipsam.</h6>

            <div className='row mt-20 shdow-2xl bg-[#ce8e8e] p-10'>
                <div className='col-lg-8'>
                    <div className='d-flex'>
                    <div className= 'w-[300px] h-[300px] '>
                        <img className='flex-shrink-0 rounded-[50%] 'src="https://instructory-aws-storage.s3.us-west-1.amazonaws.com/users/2am/profile_105225611.jpg" alt="" />
                    </div>
                    <div className='mt-3'>
                        <h6 className='text-left text-2xl  '>  <FaUsers className='text-[rgb(0,118,163)]'></FaUsers> </h6>
                        <h6 className='text-left text-2xl '>  <FaStar className='text-[#0076a3] mt-4'></FaStar> </h6>
                        <h6 className='text-left text-2xl '>  <FaPlayCircle className='text-[#0076a3] mt-4' ></FaPlayCircle> </h6>
                        <h6 className='text-left text-2xl '>  <ImLocation2  className='text-[#0076a3] mt-4' ></ImLocation2> </h6>
                        <h6 className='text-left text-2xl '>  <GiLevelFourAdvanced  className='text-[#0076a3] mt-4' ></GiLevelFourAdvanced> </h6>
                    </div  >
                    </div>
                </div>

             <div className='col-lg-4'>
                 <h6> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, hic?</h6>
             </div>

            </div>
        </div>
    );
};

export default Profiledetails;