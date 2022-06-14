import React, { useEffect, useState } from 'react';


const Adminprotected = (user) => {

    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        const email = user?.email
        console.log(email);
        const url = `http://localhost:8000/admin/${email}`
        console.log(url);
        fetch(url,{
            method : "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => {
            setAdmin(data.admin)
           console.log(data);
         })

    }, [user?.email])




    return [admin]
};

export default Adminprotected;