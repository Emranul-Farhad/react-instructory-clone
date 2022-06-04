import React, { useEffect, useState } from 'react';






const Managecourses = () => {


    const [Mangecourse, setManagecourse] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/courses')
            .then(res => res.json())
            .then(data => setManagecourse(data))
    }, [])


    return (
        <div>

            <div>
                <div class="stack">
                    <div class="card shadow-md bg-primary text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">Notification 1</h2>
                            <p>You have 3 unread messages. Tap here to see.</p>
                        </div>
                    </div>
                    <div class="card shadow bg-primary text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">Notification 2</h2>
                            <p>You have 3 unread messages. Tap here to see.</p>
                        </div>
                    </div>
                    <div class="card shadow-sm bg-primary text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">Notification 3</h2>
                            <p>You have 3 unread messages. Tap here to see.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="overflow-x-auto mx-[12%] border-1">
                    <table class="table table-zebra w-full">

                        <thead>
                            <tr>
                                <th>number</th>
                                <th>Courses Name</th>
                                <th>Price</th>
                                {/* <th>Favorite Color</th> */}
                            </tr>
                        </thead>
                        <tbody>

                            {
                                Mangecourse.map((courses, index) =>

                                    <tr>
                                        <th> {index + 1} </th>
                                        <td> {courses.name} </td>
                                        <td> {courses.price} </td>
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