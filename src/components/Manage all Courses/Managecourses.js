import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';






const Managecourses = () => {


    const [Mangecourse, setManagecourse] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/courses')
            .then(res => res.json())
            .then(data => setManagecourse(data))
    }, [])


    // delete courses handel
     const deletecourse = (id)=> {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if(result.isConfirmed){
                const url = `http://localhost:8000/delete/${id}`
               console.log(url)
               fetch(url,{
                   method : "DELETE",
               })
               .then(res => res.json())
               .then(data=> {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire({
                        icon: 'success',
                        title: 'deleted done',
                        text: ` deleted products ${id}`,
                    })
                    const deleted = Mangecourse.filter(m => m._id !== id)
                    setManagecourse(deleted)
                }  
                else{
                    return (
                        Swal.fire({
                            icon: 'error',
                            title: 'oops..!!',
                            text: 'try again'
                        })
                    )
                } 
                })



            }
        })
         
     }



    return (
        <div>

            <div>
                <div class="overflow-x-auto mx-[17%] border-1">
                    <table class="table table-zebra w-full">

                        <thead>
                            <tr>
                                <th>number</th>
                                <th>Instructor Name</th>
                                <th>Courses Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                {/* <th>Favorite Color</th> */}
                            </tr>
                        </thead>
                        <tbody>

                            {
                                Mangecourse.map((courses, index) =>

                                    <tr>
                                        <th> {index + 1} </th>
                                        <td> {courses.name} </td>
                                        <td> {courses.courseName} </td>
                                        <td> {courses.price} </td>
                                        <td>  <button onClick={()=> deletecourse(`${courses?._id}`)} className='btn btn-primary bg-gradient-to-r from-[#00A99D] to-[#0898D7] text-white font-bold rounded-md'> delete </button> </td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Managecourses;