import React from 'react';
import Nav from '../navbar/Nav';

const Takereview = () => {
    return (
        <div>
            <Nav></Nav>

            <div className='flex justify-center mt-5'>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <h6 className='text-[#0076a3] font-bold text-1xl mt-3'>Feel free to  Give your Review 😇</h6>
                    <div class="card-body bg-[#ebe2e28e] mt-3">
                        <h6 className=' font-bold  text-[#0076a3] text-left mx-3 mb-2 '> Course Name </h6>

                        <input type="text" placeholder="Type here" className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
    input-bordered input-primary w-full max-w-xs mb-2"
                        />

                        <h6 className='text-[#0076a3] font-bold text-left mx-3 mt-3'> Course description </h6>
                        <textarea className='mt-2 supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
     input-bordered input-primary w-full max-w-xs' name="" id="" cols="30"
                            rows="10"></textarea>

                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Takereview;



// <div className='flex justify-center mt-5'>
// <div class="card card-compact w-96 bg-base-100 shadow-xl">
// <h6 className='text-[#0076a3] font-bold text-1xl mt-3'>Feel free to  Give your Review 😇</h6>
// <div class="card-body bg-[#ebe2e28e] mt-3">

//     <h6 className=' font-bold  text-[#0076a3] text-left mx-3 mb-2 '> Course Name </h6>
// <input type="text" placeholder="Type here" className="supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
//      input-bordered input-primary w-full max-w-xs mb-2"
//      />

//      <h6 className='text-[#0076a3] font-bold text-left mx-3 mt-3'> Course description </h6>
//      <textarea className='mt-2 supportinput h-[50px] bg-[#FBFBFB] border-solid  p-2
//      input-bordered input-primary w-full max-w-xs' name="" id="" cols="30"
//       rows="10"></textarea>

//     <div class="card-actions justify-end">
//         <button class="btn btn-primary">Buy Now</button>
//     </div>
// </div>
// </div>
// </div>