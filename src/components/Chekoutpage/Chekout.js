import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Nav from '../navbar/Nav';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firekey/Firekey';




const Chekout = () => {

    // user handel
    const  [user] = useAuthState(auth)

    // navigate handel
    const navigate = useNavigate()

    // user params handel
    const { id } = useParams()

    const [course, setCourse] = useState({})
    useEffect(() => {
        const url = `http://localhost:8000/singelcourse/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [id])



    //  cart price send in db
    const totalprice = event => {
        event.preventDefault();
        const courseinfo = {
            email : user?.email,
            name: course?.name,
            courseName:course?.courseName,
            img: course?.img,
            price: event.target.price.value,
            fee: event.target.fee.value,
            total: event.target.total.value
        }
        console.log(courseinfo);
        const url = `http://localhost:8000/checkout`
        console.log(url);
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(courseinfo),
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Course buying successfully',
                    text: 'Congratulations',
                    
                  })
            }
            console.log(data)})
        console.log(courseinfo);
    }


    return (
        <div>
            <Nav></Nav>
            <div className='row container'>
                <div className='col-lg-8'>
                    <div className='flex flex-col lg:flex-row'>
                        <div className='mt-20'>
                            <div data-aos="zoom-out" data-aos-offset="200"
                                data-aos-delay="10"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out" className='bg-[#fff] hover:shadow-2xl border-1 rounded-lg '>
                                <div className='p-3'>

                                    <div className='flex flex-col justify-start lg:flex-row md:flex-row '>

                                        <div className='basis-4/4 lg:basis-2/5 md:basis-2/4 shrink-0 '>
                                            <img className='shrink-0'
                                                src={course?.img} alt="" />
                                        </div>


                                        <div className='basis-2/4 box-border shrink-0 '>
                                            <div className='flex justify-between flex-col lg:flex-row'>
                                                <div className='mt-4'>
                                                    <h6 className='text-left text-[#444] mx-10 text-[16px] font-bold font-sans'> {course?.courseName} </h6>
                                                    <h6 className='text-left mx-10 mt-3 font-bold text-[#0076a3] '> By <span> {course?.name} </span>  </h6>

                                                    <h6 className='text-left mx-10 mt-3 font-bold text-[#ababab] '>
                                                        <span> Duration : NAN/NAN/NAN </span>  </h6>
                                                    <h6 className='text-left mx-10 mt-3 font-bold text-[#ababab] '>
                                                        <span> Certification : NAN </span>  </h6>
                                                </div>
                                                <div>
                                                    <h6 className='text-2xl font-bold text-[#00A99D]'> {course?.price} </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 mt-20'>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">

                            <form onSubmit={totalprice}>

                                <div className='flex justify-between'>
                                    <h6 className='text-[#444] text-1xl font-bold' >Course Price</h6>
                                    <div> <input name='price' className='text-[#444] text-1xl font-bold border-none text-right bg-[#fff]' disabled readOnly type="text" value={course?.price} /> </div>
                                </div>
                                <div className='flex justify-between mt-3'>
                                    <h6 className='text-[#444] text-1xl font-bold' >Platform Charge</h6>
                                    <div>  <input name='fee' className='text-[#444] text-1xl font-bold border-none text-right bg-[#fff]' disabled readOnly type="text" value={120} />  </div>
                                </div>
                                <h6 className='text-left mt-4 p-0 text-[#444]'> ℹ️ This is for using platform and getting life time support </h6>
                                <hr className='mt-4' />
                                <div className='flex justify-between mt-4'>
                                    <h6 className='text-[#444] text-[18px] font-bold' > Total Price </h6>
                                    <div>  <input name='total' className='text-[#444] text-1xl font-bold border-none text-right bg-[#fff]' disabled readOnly type="text"
                                        value={+course?.price + 120} />  </div>
                                </div>
                                <input className='w-full p-3 mt-5 rounded-md text-white font-bold  bg-[#FF4669]' type="submit" />

                            </form>

                            <button onClick={()=> navigate('/allcourses') } className='w-full p-3 mt-4 rounded-md text-white font-bold  bg-[#0076a3]' > Cancel </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chekout;