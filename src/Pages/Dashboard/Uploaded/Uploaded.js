import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firekey/Firekey';
import Loading from '../../../Loading/Loading';
import Uploadedcards from './Uploadedcards';




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
    .then(data => setUploaded(data))
   },[email, loading] )


    return (
        <div>
            <h6 className='font-bold pt-4 text-2xl'> Your total uploaded course is
             <span className='text-[#0076a3] font-extrabold'> {uploaded?.length} </span></h6>
            <div className='grid grid-cols-2 lg:grid-cols-2 mt-10 mx-[17%] gap-x-5 gap-y-5' >
                {
                    uploaded.map(uploaddetails => <Uploadedcards key={uploaddetails._id} details={uploaddetails} ></Uploadedcards> )
                }
            </div>
        </div>
    );
};

export default Uploaded;