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
         
            {
                admins.map( admin => <Adminseperate admin={admin} ></Adminseperate> )
            }
        </div>
    );
};

export default Admins;