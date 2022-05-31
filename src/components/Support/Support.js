import React from 'react';
import './Support.css'


const Support = () => {

    return (
        <div>
            <div className='support'>
                <div className='flex fle-col lg:flex-row'>
                    <div className='p-5 support basis-2/4'>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-2xl">

                            <div className="card-body supportcard">

                                <h6 className='mb-2 font-bold font-mono text-left mx-3'>Type your Name*</h6>
                                <input type="text" placeholder="Type here" className="supportinput h-[50px]  border-solid border-2 border-[gray] 
                             input-bordered input-primary w-full max-w-xs" />

                                <h6 className='font-bold font-mono mb-2 text-left mx-3 mt-5 '>Type your Number*</h6>
                                <input type="text" placeholder="Type here" className="supportinput h-[50px]  border-solid border-2 border-[gray] 
                             input-bordered input-primary w-full max-w-xs" />
                               
                               <input type="submit" className=' text-white font-bold first-letter:supportsub mt-5 w-[100%] text-center h-[50px] bg-[#0d6efd] mb-2'  />

                            </div>
                        </div>
                    </div>

                    <div className='basis-2/4'>

                        <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;