import React, { useState } from 'react';
import { useEffect } from 'react';
import Allordersprices from './Allordersprices';



const Allorders = () => {


  const [orders , setOrders] = useState()
  useEffect(()=> {
    fetch('http://localhost:8000/orders')
    .then(res => res.json())
    .then(data =>{
        setOrders(data)})
  },[] )


  const [price , setPrices] = useState([])
  useEffect(()=> {
    fetch('http://localhost:8000/orders')
    .then(res => res.json())
    .then(data =>{
        setPrices(data)})
  },[] )


//   const [totalprice , SetTotalprice] = useState(0)
 
//   useEffect(()=> {
//     if(price.length > 0){
//         price.forEach(element => {
//             SetTotalprice( totalprice + +element.total  )
//         });
//     }
//   },[price] )


   const [totalprice , setTotalprice] = useState(0)

   useEffect(()=> {
    if(price.length > 0){
        price.forEach(element => {
            setTotalprice(totalprice + +element.total )
        })
    }
   },[price] )


    return (
        <div className='bg-[#FbFbFb]'>

       <h6> total price : {totalprice} </h6>

            <div>
            <div className='pt-5'>
                <div class="overflow-x-auto mx-[17%] border-1">
                    <table class="table table-zebra w-full">

                        
                        <thead>
                            <tr>
                                <th>number</th>
                                <th>Instructor Name</th>
                                <th>Courses Name</th>
                                <th>Price</th>
                                <th>email</th>                           
                            </tr>
                        </thead>
                        <tbody>

                            {
                                orders?.map((courses, index) =>

                                    <tr>                                   
                                        <th> {index + 1} </th>
                                        <td> {courses.name} </td>
                                        <td> {courses.courseName} </td>
                                        <td> {courses.total} </td>
                                        <td> {courses.email}  </td>
                                    </tr>
                                )
                            }
                            
                        </tbody>
                        
                        
                    </table>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Allorders;