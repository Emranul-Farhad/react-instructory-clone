import React from 'react';
import './Reviewcard.css'

const Reviewscard = ({cardinfo}) => {
    const {quote,  name ,  from , img} = cardinfo

    return (
        <div>
         <div>

{/*  */}
<div class="containerreview">
    <div class="box">
        <div class="box-content">
            <img
                src="https://www.clker.com/cliparts/Y/m/n/S/F/E/orange-closing-quotation-mark-hi.png" class="quote" alt='a' />

            <h6 title={quote} className='text-left cursor-pointer text-white mt-4 mb-4 leading-6'> 
            { quote.slice(0,150)+ "..." } </h6>
            
            { img ? <img class='user' src={img} alt="pic" /> :
            <img src="https://fadzrinmadu.github.io/hosted-assets/design-testimonial-section-using-html-and-css/1.jpg"  class="user" alt='a' />}

            <h6 className='text-left font-bold  mt-5 mb-2 text-[#4EC3BB]'> Name : {name} </h6>
            <h6 className='text-left font-bold  text-[#4EC3BB]'> From : {from} </h6>
            {/* <Rating name="read-only" value={value} readOnly /> */}
        </div>
    </div>

</div>
</div>
        </div>
    );
};

export default Reviewscard;