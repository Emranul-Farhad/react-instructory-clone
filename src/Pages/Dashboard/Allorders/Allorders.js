import React, { useState } from 'react';
import { useEffect } from 'react';



const Allorders = () => {


  const [orders , setOrders] = useState()
  useEffect(()=> {
    fetch('http://localhost:8000/orders')
    .then(res => res.json())
    .then(data =>{
        setOrders(data)})
  },[] )


 


    return (
        <div className='bg-[#FbFbFb]'>

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