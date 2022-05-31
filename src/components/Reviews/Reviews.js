import React from 'react';
import Reviewscard from './Reviewscard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Reviews = () => {


    const testimonials = [
        {
    
            quote : 'I saw Dr. Md. Firoj Hossain was able to diagnosis my condition immediately. He and his staff were extremely professional and kind. There was absolutely no wait time. I would highly recommend this practice to anyone looking for a neurologist.',
            name : 'Md Mazid Mahmud',
            from : 'Dhaka',
            img : 'https://imgur.com/Zt8inGj.png'
        },
        {
            quote : 'I had a great experience with Dr. Humaira Afreen. He took time and really listened to my concerns. I really liked him! She seems like he is really trying to help me, and is willing to look outside the box to see what’s going on. It was entirely stress free.',
            name : 'Nabila Islam',
            from : 'Chittagong',
            img : 'https://imgur.com/GLJS9vL.png'
        },
        {
            quote : 'I was extremely impressed with him at my first appointment because he cared!  In addition to being a great doctor, he is kind, compassionate and down to earth. I would recommend him to anyone who is suffering from headaches like I was.',
            name : 'Syed Asif Ahmed',
            from : 'Rajshahi',
            img : 'https://i.imgur.com/MfjEql4.jpg'
        },
        {
            quote : 'I was extremely impressed with him at my first appointment because he cared!  In addition to being a great doctor, he is kind, compassionate and down to earth. I would recommend him to anyone who is suffering from headaches like I was.',
            name : 'Syed Asif Ahmed',
            from : 'Rajshahi',
            img : 'https://i.imgur.com/MfjEql4.jpg'
        },
        {
            quote : 'I was extremely impressed with him at my first appointment because he cared!  In addition to being a great doctor, he is kind, compassionate and down to earth. I would recommend him to anyone who is suffering from headaches like I was.',
            name : 'Syed Asif Ahmed',
            from : 'Rajshahi',
            img : 'https://i.imgur.com/MfjEql4.jpg'
        }
    ]

    return (
        <div>
            <div className='containers'>
                <div className='main'>
                    <h2 className='ct'> INSTRUCTORY'S STUDENTS SAYS </h2>
                    <div className='sp'></div>
                </div>
            </div>
            <div className='mx-4'>
                {/* {
                    testimonials.map(testimonial => <Reviewscard cardinfo={testimonial} ></Reviewscard> )
                } */}
                   <Swiper
          modules={[Autoplay, Pagination, Zoom, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          centeredslide="true"
          key={testimonials.length }
          autoplay={true}
          breakpoints={{
            520: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >

             {
                 
            testimonials?.slice(0).reverse().map((review, index) => (
                <SwiperSlide key={index} >
                  <Reviewscard cardinfo={review} ></Reviewscard>
                </SwiperSlide>
              ))
             }


        </Swiper>
            </div>
        </div>
    );
};

export default Reviews;