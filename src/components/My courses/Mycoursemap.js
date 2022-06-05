import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firekey/Firekey';
import Nav from '../navbar/Nav';
import Mycourses from './Mycourses';




const Mycoursemap = () => {

    // user hanel
  const [user ,loading] = useAuthState(auth)    

    // /navigate handel
     const navigate = useNavigate()  

  const [mycourse , setMyourse] = useState([])

   useEffect(()=>{
       if(loading){
           return <p>loading...</p>
       }
    const url = `http://localhost:8000/mycourse?email=${user?.email}`
   fetch(url, {
       method: "GET",
       headers: { 
         'authorization' : `Bearer ${localStorage.getItem("coursetoken")}`,                                       
        },
   })
   .then(res => {
    if(res.status === 403){
        signOut(auth)
        localStorage.removeItem("coursetoken")
        navigate('/login')

    }   
    return res.json()})
   .then(data => setMyourse(data))

   },[user, navigate , loading] )


   if(loading){
    return <p> loading... </p>
}

    return (
        <div>
            <Nav></Nav>

            <div className=''>
            <div className='bg-[#fbfbfb]'>
             <h6 className='pt-5 text-[#0076a3] font-bold text-2xl'>Your total courses </h6>
                {
                    mycourse.map(course => <Mycourses key={course._id} course={course} ></Mycourses> )
                }
            </div>
            </div>
        </div>
    );
    
};

export default Mycoursemap;









