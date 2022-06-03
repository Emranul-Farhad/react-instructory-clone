import React, { useEffect, useState } from 'react';
import Nav from '../navbar/Nav';
import Allcourse from './Allcourse';




const Allcourses = () => {


    const [Coursescards, setCoursescard] = useState([])

    useEffect(() => {
        fetch("https://shielded-chamber-79155.herokuapp.com/courses")
            .then(res => res.json())
            .then(data => setCoursescard(data))
    }, [])

    return (
        <div>
            <Nav></Nav>

             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            mx-20 '>
                 {
                     Coursescards.map(courses  => <Allcourse key={courses._id} courses={courses} ></Allcourse> )
                 }
             </div>
        </div>
    );
};

export default Allcourses;