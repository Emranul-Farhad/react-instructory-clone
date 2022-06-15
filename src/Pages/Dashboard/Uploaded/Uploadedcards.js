import React from 'react';



const Uh6loadedcards = ({details}) => {
     
    const {star,courseName,img,name ,price, _id } = details


    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="course_h6hoto" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-left font-bold"> {name} </h2>
                    <h6 className='text-left font-bold'> {courseName} </h6>                  
                <div class="card-actions justify-end">
                <h6 className='text-left font-bold mt-4'> ৳ঃ{price} </h6>                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Uh6loadedcards;