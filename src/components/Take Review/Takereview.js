import React, { useEffect, useState } from 'react';
import Nav from '../navbar/Nav';
import { Rating } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firekey/Firekey';
import Swal from 'sweetalert2';




const Takereview = () => {

    // user handel
    const [user, loading] = useAuthState(auth)

    const splitname = user?.email.split('@')[0]
    // console.log(name)

    // react hook form
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    //    const rating handel
    const [value, setValue] = useState(5);


    //  user images taken from user profile
    const [info , setInfo] = useState({})
    const email = user?.email
    console.log(email);
    useEffect(()=> {
        if(loading){
            return <p>loading...</p>
        }
        const url = `http://localhost:8000/userdata?email=${email}`
       fetch(url,{
           method : "GET",
       }) 
       .then(res => res.json())
       .then(data => setInfo(data))
       console.log(email);
    },[email , loading]) 

    // const images = info?.img
    // console.log(img);

    // review handel submit
    const onSubmit = data => {
      const reviewinfo ={
        name:data.name,
        qoute: data.review,
        rating : value,
        image : info?.img
      } 
      console.log(reviewinfo)
      console.log(data);

      fetch('http://localhost:8000/review' , {
        method : "POST",
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reviewinfo),
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
            Swal.fire({
                icon: 'success',
                text: 'Thank you for your Review',            
              })
            reset();
        }
       })

       
    }


    return (
        <div>
            <Nav></Nav>

            <div className='flex justify-center mt-5'>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <h6 className='text-[#0076a3] font-bold text-1xl mt-3'>Feel free to  Give your Review 😇</h6>
                    <div class="card-body bg-[#ebe2e28e] mt-3">
                        <h6 className=' font-bold  text-[#0076a3] text-left mx-3 mb-2 '> Course Name </h6>
                        {/* input taking here */}
                        <form onSubmit={handleSubmit(onSubmit)}>                           
                                                                                                          
                            <input {...register("name")} type="text" value={splitname} readOnly placeholder="Type here" className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2 input-bordered input-primary w-full max-w-xs mb-2"
                            />

                            <h6 className='text-[#0076a3] font-bold text-left mx-3 mt-3'> Course description </h6>

                            <textarea required {...register("review")} className='mt-2 supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2 input-bordered input-primary w-full max-w-xs' cols="30"
                                rows="10">
                            </textarea>
                            {/* */}

                            <Rating
                                className='mr-[200px] mt-3'
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />

                            <div class="card-actions flex justify-end mt-3 ">
                                {/* <button class="btn btn-primary">Submit </button> */}
                                <input type="submit" className='font-bold btn bg-[#4EC3BB]' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Takereview;



