import React, { useState } from 'react';
import './Reviewcard.css'
import { ImQuotesRight } from 'react-icons/im'
import { Rating } from '@mui/material';
import avatar from '../../images/avatar1.png'


const Reviewscard = ({ cardinfo }) => {

    const { rating, qoute, name , image } = cardinfo


    //     seless see more handel
    const [QouteCollapse, setQouteCollapse] = useState(true);

    const showMore = () => {
        setQouteCollapse(true);
    };

    const showLess = () => {
        setQouteCollapse(false);
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
                               {QouteCollapse ? qoute.slice(0, 50) : qoute  }
                            </span>
                            
                            {
                                qoute.length > 50 ? QouteCollapse ? (
                                    <span onClick={showLess} className='text-left cursor-pointer text-white leading-6' >...</span>
                                ):
                                ( 
                                    <span onClick={showMore} className='text-[#4EC3BB] mx-3 text-left cursor-pointer  leading-6' > see less </span>
                                 ):(
                                    <h6></h6>
                                 )
                            }

                           </div>
              

                            {image ? <img class='user' src={image} alt="pic" /> :
                                <img src={avatar} class="user" alt='a' />}
                           

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