import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firekey/Firekey';
import Nav from '../navbar/Nav';
import Mycourses from './Mycourses';




const Mycoursemap = () => {

    // user hanel
  const [user] = useAuthState(auth)    

  const [course , setCourse] = useState([])

   useEffect(()=>{
    const email = user?.email
    const url = `http://localhost:8000/my?email=${email}`
   fetch(url, {
       method: "GET",
       headers: { 
         'authorization' : `Bearer ${localStorage.getItem("coursetoken")}`,                                       
        },
   })
   .then(res => res.json())
   .then(data => console.log(data, "got from here"))

   },[user] )

    return (
        <div>
            <Nav></Nav>
            {/* <div>
                {
                    course.map(course => <Mycourses key={course._id} course={course} ></Mycourses> )
                }
            </div> */}
        </div>
    );
    
};

export default Mycoursemap;









