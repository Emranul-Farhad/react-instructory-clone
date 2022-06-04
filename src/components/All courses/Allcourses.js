import React, { useEffect, useState } from 'react';
import Nav from '../navbar/Nav';
import Allcourse from './Allcourse';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Allcourses = () => {


    const [Coursescards, setCoursescard] = useState([])

    useEffect(() => {
        fetch("https://shielded-chamber-79155.herokuapp.com/courses")
            .then(res => res.json())
            .then(data => setCoursescard(data))
    }, [])


    // page count haneling
   const [count , setCount] = useState(0)

   useEffect(()=> {
       fetch('http://localhost:8000/counts')
       .then(res => res.json())
       .then(data => {
        const number = data.coursescounts;
        const pages = Math.ceil(number/3)   
        setCount(pages)
    })
   },[])
   



    return (
        <div>
            <Nav></Nav>

             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            mx-20'>
                 {
                     Coursescards.map(courses  => <Allcourse key={courses._id} courses={courses} ></Allcourse> )
                 }
             </div>

             <div className="mt-10">
                 {
                     [...Array(count).keys()]
                     .map( pagenumber => <button className='border-1 ms-2 border-[#04adf0] font-bold h-7 w-10' > {pagenumber +1} </button>  )
                 }
             </div>
        </div>
    );
};

export default Allcourses;