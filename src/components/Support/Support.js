import React from 'react';
import './Support.css'
import support from '../../images/support.jpg'


const Support = () => {

    return (
        <div>
            <div className='support'>
                <div className='flex flex-col lg:flex-row'>
                    <div className='p-5 support basis-2/4 '>
                        <div className="card card-compact supportform bg-base-100 shadow-xl rounded-2xl">
                            <figure class="px-[130px] pt-10">
                            <img className='w-[200px] h-[auto]' src={support}  alt="" />
                            </figure>
                            <div className="card-body supportcard">
                                <h6 className='mb-4 font-bold leading-7 text-2xl'> Our Support Center </h6>
                                <h6 className='mb-2 font-bold font-mono text-left mx-[65px]'>Type your Name*</h6>
                                <input type="text" placeholder="Type here" className="supportinput h-[50px]  border-solid border-2 border-[gray] 
                             input-bordered input-primary w-full max-w-xs" />

                                <h6 className='font-bold font-mono mb-2 text-left mx-[65px] mt-5 '>Type your Number*</h6>
                                <input type="text" placeholder="Type here" className="supportinput h-[50px]  border-solid border-2 border-[gray] 
                             input-bordered input-primary w-full max-w-xs" />

                                <input type="submit" className=' text-white font-bold first-letter:supportsub mt-5 w-[100%] text-center h-[50px] bg-[#0076a3] mb-2' />
                            </div>
                        </div>
                    </div>

                    <div className='basis-2/4'>

                       <div className='p-10'>
                       <img src="https://shikho.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FformImg.2a9de5c1.png&w=750&q=75" alt="" />
                       </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;