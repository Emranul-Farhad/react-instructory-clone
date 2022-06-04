import React from 'react';
import Nav from '../navbar/Nav';
import { AiFillCheckCircle } from 'react-icons/ai'
import { RiProfileFill } from 'react-icons/ri'
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';




const Courseupload = () => {

    // react hook form
    const { register, formState: { errors }, handleSubmit } = useForm();

    //    imagebb api key
    const imagekey = '3362cfddeacc2a6837eed7c9e23636a9'

    // hnadel react hook form submit
    const onSubmit = data => {
        console.log(data);
        const thumbnail = data.image[0]
        const courseinfo = {
            price : data.courseprice,
            courseName: data.coursename,
            name:data.name,
            img : ''
        };
        console.log( thumbnail,data.image[0]);
        const formData = new FormData();
        formData.append('image', thumbnail);
        const url = `https://api.imgbb.com/1/upload?key=${imagekey}`
     
        fetch(url, {
            method: 'POST',
            body: formData ,
        })
            .then(res => res.json())
            .then(data => {
                if(data) { 
                const img = data.data.url
                courseinfo.img = img
                console.log(courseinfo, "all info");
                fetch('http://localhost:8000/courseend', {
                    method: "POST",
                    headers: {                    
                    'Content-Type': 'application/json' ,              
                    },
                    body: JSON.stringify(courseinfo),
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.insertedId){
                        Swal.fire({
                            icon: 'success',
                            title: 'Course upload successfully',
                            text: 'Congratulations',
                            
                          })
                    }
                    else{
                        Swal.fire({
                            icon: 'error',
                            title: 'failed !!',
                            text: 'Try again',                        
                          })
                    }
                    console.log(data, "course get from here")})
                
            }
            })
    }


    return (
        <div className='bg-[#FbFbFb]'>
            <Nav></Nav>
            <div className='flex flex-col  lg:flex-row justify-end mx-20 mt-20'>
                <div className='basis-2/4 '>
                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                        <h6 className='mt-3 font-bold text-[#0076a3]'>Upload your Thumbnail</h6>

                        {/* input taking satrt here */}
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <figure>
                                <label for='images' > <RiProfileFill className='text-8xl rounded-md cursor-pointer' ></RiProfileFill> </label>
                                <input {...register("image")} className='d-none invisible' id='images' type="file" placeholder='aaa' />
                            </figure>

                            <div class="card-body bg-[#ebe2e28e] mt-3">

                                <h6 className=' font-bold  text-[#0076a3] text-left mx-3 mb-2 '> Your Name </h6>
                                <input {...register("name")} type="text" placeholder="Type here" className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs mb-2"
                                />
                                <h6 className='text-[#0076a3] font-bold text-left mx-3 mb-2'>Course Name </h6>
                                <input {...register("coursename")} type="text" placeholder="Type here" className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs"
                                />
                                <h6 className='text-[#0076a3] font-bold text-left mx-3 mb-2 mt-2'>Course price </h6>
                                <input {...register("courseprice")} type="number" min={1} placeholder="Type here" className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs"
                                />
                                <h6 className='text-[#0076a3] font-bold text-left mx-3 mt-3'> Course description </h6>

                                <textarea {...register("describe")} className='mt-2 supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
                             input-bordered input-primary w-full max-w-xs' cols="30"
                                    rows="10">

                                </textarea>

                                <input type="submit" className='bg-[#FF4669] p-3 rounded-md mt-3 w-full' />

                            </div>


                        </form>
                    </div>
                </div>
                {/* details about of curses */}
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


