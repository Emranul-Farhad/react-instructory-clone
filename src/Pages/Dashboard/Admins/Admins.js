import React, { useEffect, useState } from 'react';




const Admins = () => {


    const [admins, setAdmins] = useState([])
    useEffect(() => {
        fetch("https://shielded-chamber-79155.herokuapp.com/users")
            .then(res => res.json())
            .then(data => setAdmins(data))
    }, [admins])


    return (
        <div className='bg-[#FBFBFB]'>


            <div class="overflow-x-auto mx-[12%] border-1">
                <table class="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>number</th>
                            <th>email</th>
                            <th>Role</th>
                            {/* <th>Favorite Color</th> */}
                        </tr>
                    </thead>
                    <tbody>

                        {
                            admins.map((admin, index) =>

                                <tr>
                                    {admin.role === 'admin' && <th> {index + 1} </th>}
                                    {admin.role === "admin" && <td> <h6> {admin.email} </h6></td>}
                                    {admin.role === "admin" && <td> Admin </td>}
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Admins;