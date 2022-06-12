import React, { useState } from 'react';
import './Reviewcard.css'
import { ImQuotesRight } from 'react-icons/im'
import { Rating } from '@mui/material';



const Reviewscard = ({ cardinfo }) => {

    const { rating, qoute, name } = cardinfo


    //     seless see more handel
    const [descriptionCollapse, setDescriptionCollapse] = useState(true);

    const showMore = () => {
        setDescriptionCollapse(true);
    };

    const showLess = () => {
        setDescriptionCollapse(false);
    }



    return (
        <div>
            <div>

                <div data-aos="zoom-in" data-aos-offset="200"
                    data-aos-delay="10"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out" class="containerreview">
                    <div class="box">
                        <div class="box-content">

                            <h6 className='text-[#0076a3] text-6xl mb-4'> <ImQuotesRight></ImQuotesRight> </h6>

                           <div className='text-left'>
                           <span className='text-left cursor-pointer text-white mt-4 mb-4 leading-6'>
                               {descriptionCollapse ? qoute.slice(0, 50) : qoute  }
                            </span>
                            
                            {
                                qoute.length > 50 ? descriptionCollapse ? (
                                    <span onClick={showLess} className='text-left cursor-pointer text-white leading-6' >...</span>
                                ):
                                ( 
                                    <span onClick={showMore} className='text-[#4EC3BB] mx-3 text-left cursor-pointer  leading-6' > see less </span>
                                 ):(
                                    <h6></h6>
                                 )
                            }

                           </div>
              

                            {/* {img ? <img class='user' src={img} alt="pic" /> :
                                <img src="https://fadzrinmadu.github.io/hosted-assets/design-testimonial-section-using-html-and-css/1.jpg" class="user" alt='a' />} */}
                           

                            <h6 className='text-left font-bold  mt-5 mb-2 text-[#4EC3BB]'> Name : {name} </h6>
                            <Rating name="read-only" value={rating} readOnly />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Reviewscard;