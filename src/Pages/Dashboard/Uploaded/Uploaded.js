import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firekey/Firekey';
import Loading from '../../../Loading/Loading';




const Uploaded = () => {

    // user handel
    const [user, loading]= useAuthState(auth)

    // usestate handel
   const [uploaded, setUploaded] = useState([])

   const email = user?.email
   console.log(email);

   useEffect(()=> {
    if(loading){
        <Loading></Loading>
    }
    fetch(`http://localhost:8000/uploaded?email=${email}`, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem("coursetoken")}`,
        }
    })
    .then(res => {
        if(res.status === 403){
            signOut(auth)
            localStorage.removeItem("coursetoken")
        }
       return res.json()})
    .then(data => console.log(data))
   },[email, loading] )

    return (
        <div>
            <h6>hello world</h6>
        </div>
    );
};

export default Uploaded;