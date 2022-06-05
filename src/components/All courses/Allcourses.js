import React, { useEffect, useState } from 'react';
import Nav from '../navbar/Nav';
import Allcourse from './Allcourse';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';



const Allcourses = () => {


    // page count handeling
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(6)
    console.log(size);
    useEffect(() => {
        fetch('http://localhost:8000/counts')
            .then(res => res.json())
            .then(data => {
                const number = data.coursescounts;
                const pages = Math.ceil(number / 3)
                setCount(pages)
            })
    }, [])


    // courses show here
    const [Coursescards, setCoursescard] = useState([])
    // https://shielded-chamber-79155.herokuapp.com/courses
    useEffect(() => {
        const urls = `http://localhost:8000/courses?page=${page}&size=${size}`
        fetch(urls)
            .then(res => res.json())
            .then(data => setCoursescard(data))
    }, [page, size])




    return (
        <div>
            <Nav></Nav>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            mx-20'>
                {
                    Coursescards.map(courses => <Allcourse key={courses._id} courses={courses} ></Allcourse>)
                }
            </div>

            <div className="mt-10">
                {
                    [...Array(count).keys()]
                        .map(pagenumber => <button onClick={() => setPage(pagenumber)}
                            className={page === pagenumber ? 'bg-[#FF4669] border-1 ms-2 border-[#04adf0] font-bold h-7 w-10' : 'border-1 ms-2 border-[#04adf0] font-bold h-7 w-10'} > {pagenumber} </button>)
                }
                <select onChange={e => setSize(e.target.value)} className='ms-3'>
                    <option value="3">3</option>
                    <option selected value="6">6</option>
                    <option value="9">9</option>
                </select>
            </div>
        </div>
    );
};

export default Allcourses;