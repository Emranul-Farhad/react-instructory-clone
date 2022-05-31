import React from 'react';
import './Howwork.css'



const Howwork = () => {

    return (
        <div>
             <div className='containers mb-5'>
                <div className='main'>
                    <h2 className='ct'>HOW IT WORKS </h2>
                    <div className='sp'></div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row mx-10 '>
                <div className='basis-2/4 mb-5 lg:mb-0'>
                    <h6 className='text-left mb-3 font-bold text-2xl'>Join <span className='text-[#1AA3D1] font-bold font-mono'>Instructory</span> Comunity</h6>
                    <h6 className='text-left leading-10'>Instructory is for everyone and different from everyone. You can teach or you can learn, in both way you can empower youself with lot of skills and support. <br />

                        <span className='text-[#1AA3D1] font-bold'>Instructory Community </span> is the largest and one of the best eLearning group of Instructory, where you can get so many tips, tricks and news about newly arrival courses.</h6>
                        <div className='mt-4 shadow-2xl bg-[#fff]'>
                            <h6 className='pt-4 text-2xl font-bold text-[#1AA3D1]'>Instructory Community </h6>
                            <h6 className='text-[#a3a3a3] text-[18px] font-800 mt-2 mb-5'>Public group 65.4k members</h6>
                            <button className='joiningbutton'> join Group </button>
                        </div>
                </div>

                <div className='basis-2/4 '>
                    <div className='lg:mx-5 iframe-container shadow-2xl rounded-2xl'>
                        <iframe title='video' width='500' height='294' src="https://www.youtube.com/embed/uFFnAvsV4OI?&theme=light&autoplay=1&autohide=1&modestbranding=1" frameborder="0"></iframe>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Howwork;