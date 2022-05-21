// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import Teacherfeaturescard from './Teacherfeaturescard';




// const Teacherfeature = () => {
//     const [teacherf, setTeacherf] = useState([])
//     useEffect(() => {
//         fetch('text.json')
//             .then(res => res.json())
//             .then(data => setTeacherf(data))

//     }, [])

//     return (
//         <div>
//             <div className='flex-col lg:flex-row'>

//                 <div className='basis-3/4'>
//                 <Swiper 
//                     modules={[Navigation, Autoplay, Pagination, Scrollbar, Zoom, A11y]}
//                     spaceBetween={20}
//                     slidesPerView={3}
//                     centeredslide="true"
//                     navigation
//                     key={teacherf.length}
//                     autoplay={true}
//                 >

//                     {
//                         teacherf.map((fcard, index) => (
//                             <SwiperSlide key={index} >
//                                 <Teacherfeaturescard facrd={fcard} key={index} ></Teacherfeaturescard>
//                             </SwiperSlide>
//                         ))
//                     }


//                 </Swiper>
//                 </div>
//                 <div>
//                     <h3>fjfrffggtr</h3>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Teacherfeature;



import React, { useEffect, useState } from 'react';
import './Teacherfeature.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, Zoom } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Teacherfeaturescard from './Teacherfeaturescard';
import TeacherSidedetials from './TeacherSidedetials';



const Teacherfeature = () => {

    const [teacherf, setTeacherf] = useState([])
        useEffect(() => {
            fetch('text.json')
                .then(res => res.json())
                .then(data => setTeacherf(data))
    
        }, [])
    
        const [teacherpic, setTeachrpic] = useState([])
        useEffect(()=> {
            fetch('teacher.json')
            .then(res=> res.json())
            .then(data => setTeachrpic(data))
        },[])

    return (
        <div>
             <div className='containers'>
                <div className='main'>
                    <h2 className='ct'> INSTRUCTOR'S COURSE FEED </h2>
                    <div className='sp'></div>
                </div>
            </div>
            <div className='row container align-items-center'>

              <div className='col-lg-6'>
              <Swiper 
                    modules={[Navigation, Autoplay, Pagination, Zoom, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    centeredslide="true"
                    // navigation
                    key={teacherf.length}
                    autoplay={true}
                >

                    {
                        teacherf.map((fcard, index) => (
                            <SwiperSlide key={index} >
                                <Teacherfeaturescard facrd={fcard} key={index} ></Teacherfeaturescard>
                            </SwiperSlide>
                        ))
                    }


                </Swiper>
              </div>

              <div className='col-lg-6'> 
                  <div className=''>
                  {
                      teacherpic.map(pic => <TeacherSidedetials pic={pic} ></TeacherSidedetials> )
                  }
                  </div>

              </div>

            </div>
        </div>
    );
};

export default Teacherfeature;



{/* <div className='d-flex'>
<div>
    <img src="https://instructory-aws-storage.s3.us-west-1.amazonaws.com/users/rifatmhuq/profile_251215856.jpg" alt="" />
</div>
<div className='mx-4'>
    <h6>amder desh</h6>
    <h6>amder desh</h6>
    <h6>amder desh</h6>
    <h6>amder desh</h6>
</div>
</div> */}