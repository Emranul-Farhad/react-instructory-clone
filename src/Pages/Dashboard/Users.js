import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';





const Users = () => {

    const [usersd, setUsersd] = useState([])
    useEffect(() => {
        fetch("https://shielded-chamber-79155.herokuapp.com/users")
            .then(res => res.json())
            .then(data => setUsersd(data))
    }, [usersd])


    //    make admin handel
    const makeadmin = (email) => {
        fetch(`https://shielded-chamber-79155.herokuapp.com/users/admin/${email}`, {
            method: "PUT"
        })
            .then(res => {
                if (res.status === 401) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'You cannot make admin!',
                       
                      })
                }
                return res.json()
            })
            .then(data => {
                console.log(data, "adj");
            })
    }


    return (
        <div className='bg-[#FBFBFB]'>
            <div>

            </div>
            <div class="overflow-x-auto mx-[12%] border-1 ">
                <table class="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>number</th>
                            <th>Name</th>
                            <th></th>
                            <th>Role</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            usersd.map((userd, index) =>

                                <tr>
                                    {userd?.role !== 'admin' && <th> {index + 1}</th>}

                                    {userd?.role !== 'admin' && <td>
                                        <h6> {userd?.email} </h6>
                                    </td>}



                                    {userd?.role !== "admin" && <td>

                                        <button onClick={() => makeadmin(userd.email)} className='btn btn-primary bg-gradient-to-r from-[#00A99D] to-[#0898D7] text-white font-bold rounded-md'> make admin</button>
                                    </td>

                                    }

                                    {userd?.role !== 'admin' && <td> dfddfdh </td>}

                                </tr>)
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;




// {
//     userd?.role === "admin" ? <button disabled={userd?.role === 'admin'}
//         className='btn btn-primary bg-gradient-to-r from-[#00A99D] to-[#0898D7] text-white font-bold rounded-md'> already admin </button> :
//         <button onClick={() => makeadmin(userd.email)} className='btn btn-primary bg-gradient-to-r from-[#00A99D] to-[#0898D7] text-white font-bold rounded-md'> make admin</button>
// }