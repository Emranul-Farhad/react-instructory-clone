import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { MdEmail } from 'react-icons/md'



const Profile = () => {

    return (
        <div className='bg-[#FBFBFB]'>
            <h6 className='text-3xl text-[#00A99D] font-extrabold'> Edit your Profile !! </h6>
            <div className='flex flex-col lg:flex-row  mx-[200px] mt-20' >
                <div className='basis-2/4' >
                    <div>
                        <label for='images' > <CgProfile className='text-8xl rounded-md ' ></CgProfile> </label>
                        <input className='d-none invisible' id='images' type="file" placeholder='aaa' />
                    </div>
                    <div className='flex justify-center items-center mt4 '>
                        <label> <MdEmail className='text-3xl mr-2'></MdEmail></label>
                        <h6>Emranu@gamil.com</h6>
                    </div>
                    <div className='flex justify-center items-center mt-2 mr-10'>
                        <label> <BsTelephoneFill className='text-3xl ' ></BsTelephoneFill> </label>
                        <h6 className='ms-2'>  01867029836 </h6>
                    </div>
                    <div>

                    </div>
                </div>
                {/* profile input */}
                <div className='basis-2/4'>
                    <div>                    
                        <div className='bg-[#ffffff] p-10 shadow-2xl rounded-md'>
                            <h6 className='text-3xl font-extrabold mb-5 text-[#0076a3]'> Your Informations </h6>
                            <div className='mb-4 flex items-center' >
                                <label className='mr-10'> Name </label>
                                <input type="text" placeholder="Type here" className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs" />
                            </div>
                            {/*  */}
                            <div className=' col-span-3 mb-5 flex items-center' >
                                <h6 className='mr-10'> proffession </h6>
                                <input type="text" placeholder="Type here" className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs " />
                            </div>
                            {/*  */}
                            <div className='mb-5 flex items-center' >
                                <label className='mr-10'> Location </label>
                                <input type="text" placeholder="Type here" className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs" />
                            </div>
                            {/*  */}
                            <div className='mb-5 flex items-center' >
                                <label className='mr-10'> Hobby </label>
                                <input type="text" placeholder="Type here" className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs" />
                            </div>
                            {/*  */}
                            <div className='flex items-center' >
                                <label className='mr-10 flex items-center'> Job </label>
                                <input type="text" placeholder="Type here" className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs" />
                            </div>
                            {/*  */}
                            <div className='row-span-3 mt-5 flex  items-center' >
                                <label className='mr-10 '> bio </label>
                                <textarea  className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2 ms-1
                             input-bordered input-primary w-full max-w-xs" name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            {/*  */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;