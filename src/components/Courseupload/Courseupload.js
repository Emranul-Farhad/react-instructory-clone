import React from 'react';
import Nav from '../navbar/Nav';
import { AiFillCheckCircle } from 'react-icons/ai'


const Courseupload = () => {

    return (
        <div>
            <Nav></Nav>
            <div className='flex flex-col  lg:flex-row justify-end mx-20 mt-20'>
                <div className='basis-2/4 '>
                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
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