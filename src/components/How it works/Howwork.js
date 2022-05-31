import React from 'react';
import './Howwork.css'



const Howwork = () => {

    return (
        <div>
            <div className='flex flex-col lg:flex-row mx-10'>
                <div className='basis-2/4'>
                    <h6 className='text-left mb-3 font-bold text-2xl'>Join <span className='text-[#1AA3D1] font-bold font-mono'>Instructory</span> Comunity</h6>
                    <h6 className='text-left leading-10'>Instructory is for everyone and different from everyone. You can teach or you can learn, in both way you can empower youself with lot of skills and support. <br />

<span className='text-[#1AA3D1] font-bold'>Instructory Community </span> is the largest and one of the best eLearning group of Instructory, where you can get so many tips, tricks and news about newly arrival courses.</h6>
                </div>

               <div className='basis-2/4 '>
               <div className='lg:mx-5 iframe-container shadow-2xl rounded-2xl'>
                <iframe title='video' width='500' height='294'  src="https://www.youtube.com/embed/uFFnAvsV4OI?&theme=light&autoplay=1&autohide=1&modestbranding=1"frameborder="0"></iframe>
                </div>
               </div>

            </div>
            <h1 className='mt-[140px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quam?</h1>
        </div>
    );
};

export default Howwork;