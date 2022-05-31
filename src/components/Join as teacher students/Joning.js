import React from 'react';


const Joning = () => {

    return (
        <div className='mt-20 mx-10'>
            <div className='grid grid-cols-3' >

                <div className='w-[373px] h-[370px] bg-[#F3F3F3] hover:bg-[#D8E5EA] shadow-xl rounded-2xl'>
                <div className='mt-10 mx-16'>
                    <img src="https://instructory.net/assets/images/instructor-thumb.png" alt="" />
                </div>
                <h6 className='mt-5'> view as an <br />
                <span className='font-bold text-[24px] font-popins ' >INSTRUCTOR</span>
                 </h6>
                </div>
                <div className='w-[373px] h-[370px] bg-[#F3F3F3] hover:bg-[#D8E5EA] shadow-xl rounded-2xl'>
                <div className='mt-10 mx-16'>
                    <img src="https://instructory.net/assets/images/learner-thumb.png" alt="" />
                </div>
                <h6 className='mt-5'> view as an <br />
                <span className='font-bold text-[24px] font-popins ' > LEARNER </span>
                 </h6>
                </div>
                <div className='w-[373px] h-[370px] bg-[#F3F3F3] hover:bg-[#D8E5EA] shadow-xl rounded-2xl'>
                <div className='mt-10 mx-16'>
                    <img src="https://instructory.net/assets/images/affiliator-thumb.png" alt="" />
                </div>
                <h6 className='mt-5'> view as an <br />
                <span className='font-bold text-[24px] font-popins ' > AFFILIATOR </span>
                 </h6>
                </div>
                
                
                
            </div>
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, odit.</h1>
        </div>
    );
};

export default Joning;