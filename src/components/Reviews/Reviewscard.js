import React from 'react';
import './Reviewcard.css'
import {ImQuotesRight} from 'react-icons/im'



const Reviewscard = ({ cardinfo }) => {

    const { quote, name, from, img } = cardinfo

    return (
        <div>
            <div>

                <div class="containerreview">
                    <div class="box">
                        <div class="box-content">
                           
                           <h6 className='text-[#0076a3] text-6xl'> <ImQuotesRight></ImQuotesRight> </h6>

                            <h6 title={quote} className='text-left cursor-pointer text-white mt-4 mb-4 leading-6'>
                                {quote.slice(0, 150) + "..."} </h6>

                            {img ? <img class='user' src={img} alt="pic" /> :
                                <img src="https://fadzrinmadu.github.io/hosted-assets/design-testimonial-section-using-html-and-css/1.jpg" class="user" alt='a' />}

                            <h6 className='text-left font-bold  mt-5 mb-2 text-[#4EC3BB]'> Name : {name} </h6>
                            <h6 className='text-left font-bold  text-[#4EC3BB]'> From : {from} </h6>
                           
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Reviewscard;