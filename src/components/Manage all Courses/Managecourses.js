import React, { useEffect, useState } from 'react';






const Managecourses = () => {


    const [Mangecourse, setManagecourse] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/courses')
            .then(res => res.json())
            .then(data => setManagecourse(data))
    }, [])


    // delete courses handel
     const deletecourse = (id)=> {
         
         const url = `http://localhost:8000/delete/${id}`
         console.log(url)
     }



    return (
        <div>

            <div>
                <div class="overflow-x-auto mx-[12%] border-1">
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