import React, { useEffect, useState } from 'react';
import Userd from './Userd';




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
                    console.log("sorry");
                    alert("You cannot make a admin ")
                }
                res.json()
            })
            .then(data => {
                console.log(data, "adj");
            })
    }


    return (
        <div>
            <div>
                <h2 className='text-left'> {usersd.length}  </h2>
                {
                    // usersd.map(userd => <Userd userd={userd}></Userd>)
                }
            </div>
            <div class="overflow-x-auto mx-[12%] ">
                <table class="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            usersd.map(( userd , index )  => <tr>
                                <th> {index +1}</th>
                                <td>
                                    <h6> {userd?.email} </h6>
                                </td>

                                <td>
                                    <td>
                                        -
                                    </td>
                                    {
                                        userd?.role === "admin" ? <button disabled={userd?.role === 'admin'}
                                            className='btn btn-primary bg-gradient-to-r from-[#00A99D] to-[#0898D7] text-white font-bold rounded-md'> admin </button> :
                                            <button onClick={() => makeadmin(userd.email)} className='btn btn-primary bg-gradient-to-r from-[#00A99D] to-[#0898D7] text-white font-bold rounded-md'> make admin</button>
                                    }

                                </td>
                            </tr>)
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;