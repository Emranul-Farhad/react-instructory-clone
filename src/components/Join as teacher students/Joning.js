import React from 'react';


const Joning = () => {

    return (
        <div className='mt-20 mx-10'>

<div className='containers mb-20'>
                <div className='main'>
                    <h2 className='ct'> JOIN TODAY </h2>
                    <div className='sp'></div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  '>

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
      
        </div>
    );
};

export default Joning;