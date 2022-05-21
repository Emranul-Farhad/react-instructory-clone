import React from 'react';





const Teacherfeaturescard = ({facrd}) => {
    const {star,courseName,img,name,price} = facrd

    return (
        <div>
           <div class="col">
    <div class="">
      {/* <img src={img} class="card-img-top" alt="..." /> */}
      <div class="">
        <h5 class="card-title text-left text-[#ff4669] font-bold text-3xl mb-4">{courseName}</h5>
        <h6 class="card-text text-[#444] text-[18px]  mb-4 text-left ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repudiandae fuga. Doloremque, tenetur. Vitae eveniet voluptatem quos optio nobis vel corrupti aliquid iusto numquam excepturi molestiae reiciendis deserunt quam tenetur veniam doloremque, in asperiores consequatur odit repellat voluptatum quibusdam magnam ab! Praesentium magnam distinctio numquam placeat sed vero, explicabo eligendi?.</h6>
      </div>
      <img src={img} class="card-img-top" alt="..." />
    </div>
  </div>
        </div>
    );
};

export default Teacherfeaturescard;