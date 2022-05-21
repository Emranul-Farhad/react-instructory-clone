import React, { useEffect, useState } from 'react';
import './Title.css'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TitleCard from './TitleCard';
import Teacherfeature from '../Teacher feature/Teacherfeature';


const Title = () => {
    const [Coursecards , setCoursecard]  = useState([])

   useEffect(()=> {
       fetch("text.json")
       .then(res => res.json())
       .then(data => setCoursecard(data))
   },[])


    return (
        <div>
            <div className='containers'>
                <div className='main'>
                    <h2 className='ct'>Course Title</h2>
                    <div className='sp'></div>
                </div>
            </div>

            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            mx-20 '>  
            {
                Coursecards.map(coursecarda => <TitleCard coursecard={coursecarda} ></TitleCard>  )
                
            }
            </div>
         {/* card courses end here */}

         {/* teacher feature start here */}
         


        </div>
       
    );
};

export default Title;