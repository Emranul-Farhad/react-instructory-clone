import React from 'react';
import Nav from '../navbar/Nav';
import { AiFillCheckCircle } from 'react-icons/ai'
import {RiProfileFill} from 'react-icons/ri'

const Courseupload = () => {

    return (
        <div className='bg-[#FbFbFb]'>
            <Nav></Nav>
            <div className='flex flex-col  lg:flex-row justify-end mx-20 mt-20'>
                <div className='basis-2/4 '>
                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                        <h6 className='font-bold text-[#0076a3]'>Upload your Thumbnail</h6>
                        <figure>
                        <label for='images' > <RiProfileFill className='text-8xl rounded-md cursor-pointer' ></RiProfileFill> </label>
                        <input className='d-none invisible' id='images' type="file" placeholder='aaa'/>
                        </figure>

                        <div class="card-body bg-[#ebe2e28e] mt-3">
                            {/* input taking here */}
                            <h6 className=' font-bold  text-[#0076a3] text-left mx-3 mb-2 '> Your Name </h6>
                        <input type="text" placeholder="Type here" className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs mb-2" 
                             />
                        <h6 className='text-[#0076a3] font-bold text-left mx-3 mb-2'>Course Name </h6>
                        <input type="text" placeholder="Type here" className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs" 
                             />
                            <h6 className='text-[#0076a3] font-bold text-left mx-3 mb-2 mt-2'>Course price </h6>
                        <input type="text" placeholder="Type here" className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs" 
                             />
                             <h6 className='text-[#0076a3] font-bold text-left mx-3 mt-3'> Course description </h6>
                             <textarea className='mt-2 supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs' name="" id="" cols="30"
                              rows="10"></textarea>

                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#Fff] border-1 hover:shadow-2xl  basis-3/4 mt-10 lg:mt-0'>
                    <div className='container'>
                        <div className='flex mx-10 mt-4'>
                            <AiFillCheckCircle className='text-[#0076a3] font-extrabold text-2xl mr-3'></AiFillCheckCircle>
                            <h6 className='text-[#444] font-serif'> Instructor: 42.5% | Instructory: 57.5%</h6>
                        </div>
                        <div className='flex mx-10 mt-4'>
                            <AiFillCheckCircle className='text-[#0076a3] font-extrabold text-2xl mr-3'></AiFillCheckCircle>
                            <h6 className='text-[#444] font-serif'>Social media announcement or teaser </h6>
                        </div>
                        <div className='flex mx-10 mt-4 text-left'>
                            <AiFillCheckCircle className='text-[#0076a3] font-extrabold text-2xl mr-3 text-left'></AiFillCheckCircle>
                            <h6 className='text-left text-[#444] font-serif'> Social media post</h6>
                        </div>
                        <div className='flex mx-10 mt-4'>
                            <AiFillCheckCircle className='text-[#0076a3] font-extrabold text-2xl mr-3'></AiFillCheckCircle>
                            <h6 className='text-[#444] font-serif'>We will do Paid marketing like FB Boost, Bulk SMS etc. </h6>
                        </div>
                        <div className='flex mx-10 mt-4'>
                            <AiFillCheckCircle className='text-[#0076a3] font-extrabold text-2xl mr-3'></AiFillCheckCircle>
                            <h6 className='text-[#444] font-serif'> promote to 50k+ audience</h6>
                        </div><div className='flex mx-10 mt-4'>
                            <AiFillCheckCircle className='text-[#0076a3] font-extrabold text-2xl mr-3'></AiFillCheckCircle>
                            <h6 className='text-[#444] font-serif'>You can take Live session on our FB page/group </h6>
                        </div>
                        <div className='flex mx-10 mt-4'>
                            <AiFillCheckCircle className='text-[#0076a3] font-extrabold text-2xl mr-3'></AiFillCheckCircle>
                            <h6 className='text-[#444] font-serif'>Private group chat with Instructory team to get special support and updates </h6>
                        </div>
                        <div className='flex mx-10 mt-4'>
                            <AiFillCheckCircle className='text-[#0076a3] font-extrabold text-2xl mr-3'></AiFillCheckCircle>
                            <h6 className='text-[#444]  font-serif'> We can make your teaser video if you can come to our office</h6>
                        </div>
                       
                        <div className='flex mx-10 mt-4'>
                            <AiFillCheckCircle className='text-[#0076a3] font-extrabold text-2xl mr-3'></AiFillCheckCircle>
                            <h6 className='text-[#444]  font-serif text-left'> We will prioritize your course at our bigger events like competitions, festivals, admission fairs, etc. based on your activities.</h6>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Courseupload;




{/* <div className='flex mx-10 mt-4'>
<AiFillCheckCircle className='text-[#0076a3] font-extrabold text-2xl mr-3'></AiFillCheckCircle>
<h6 className='text-[#444] font-bold font-serif'> Instructor: 42.5% | Instructory: 57.5%</h6>
</div>
<div className='flex mx-10 mt-4'>
<AiFillCheckCircle className='text-[#0076a3] font-extrabold text-2xl mr-3'></AiFillCheckCircle>
<h6 className='text-[#444] font-bold font-serif'>Social media announcement or teaser </h6>
</div>
<div className='flex mx-10 mt-4 text-left'>
<AiFillCheckCircle className='text-[#0076a3] font-extrabold text-2xl mr-3 text-left'></AiFillCheckCircle>
<h6 className='text-left text-[#444] font-bold font-serif'> Social media post</h6>
</div>
<div className='flex mx-10 mt-4'>
<AiFillCheckCircle className='text-[#0076a3] font-extrabold text-2xl mr-3'></AiFillCheckCircle>
<h6 className='text-[#444] font-bold font-serif'>We will do Paid marketing like FB Boost, Bulk SMS etc. </h6>
</div>
<div className='flex mx-10 mt-4'>
<AiFillCheckCircle className='text-[#0076a3] font-extrabold text-2xl mr-3'></AiFillCheckCircle>
<h6 className='text-[#444] font-bold font-serif'> promote to 50k+ audience</h6>
</div><div className='flex mx-10 mt-4'>
<AiFillCheckCircle className='text-[#0076a3] font-extrabold text-2xl mr-3'></AiFillCheckCircle>
<h6 className='text-[#444] font-bold font-serif'>You can take Live session on our FB page/group </h6>
</div>
<div className='flex mx-10 mt-4'>
<AiFillCheckCircle className='text-[#0076a3] font-extrabold text-2xl mr-3'></AiFillCheckCircle>
<h6 className='text-[#444] font-bold font-serif'>Private group chat with Instructory team to get special support and updates </h6>
</div>
<div className='flex mx-10 mt-4'>
<AiFillCheckCircle className='text-[#0076a3] font-extrabold text-2xl mr-3'></AiFillCheckCircle>
<h6 className='text-[#444] font-bold font-serif'> We can make your teaser video if you can come to our office</h6>
</div>
<div className='flex mx-10 mt-4'>
<AiFillCheckCircle className='text-[#0076a3] font-extrabold text-2xl mr-3'></AiFillCheckCircle>
<h6 className='text-[#444] font-bold font-serif'> We will prioritize your course at our bigger events like competitions, festivals, admission fairs, etc. based on your activities.</h6>
</div> */}