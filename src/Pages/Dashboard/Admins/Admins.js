import React, { useEffect, useState } from 'react';
import Adminseperate from './Adminseperate';




const Admins = () => {


    const [admins, setAdmins] = useState([])
    useEffect(() => {
        fetch("https://shielded-chamber-79155.herokuapp.com/users")
            .then(res => res.json())
            .then(data => setAdmins(data))
    }, [admins])


    return (
        <div>
         
            {/* {
                admins.map( admin => <Adminseperate admin={admin} ></Adminseperate> )
            } */}


<div class="overflow-x-auto mx-[12%]">
  <table class="table table-zebra w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        {/* <th>Favorite Color</th> */}
      </tr>
    </thead>
    <tbody>
   
     {
                admins.map( (admin , index ) => 
                    
                    <tr>
                   { admin.role === 'admin' && <th> {index+1} </th>}
                   { admin.role === "admin" && <td> <h6> {admin.email} </h6></td>}
                   { admin.role === "admin" && <td> Admin </td>}
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