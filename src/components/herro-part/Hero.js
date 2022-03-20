import React from 'react';
import Nav from '../navbar/Nav';
import './Hero.css'


const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='container'>
              <Nav/>

           <h3 className='text-center'>ONLINE TEACHING MARKETPLACE & E-LEARNING PLATFORM</h3>
           <h1 className='text-center'>TEACH ANYTHING, LEARN ANYTIME</h1>
            <p className='text-center'>Upload your course tutorial & become an online teacher. Earn as much as you can, it's FREE! Also, Browse our course categories <br /> where you can develop your skills anytime from the best professionals.</p>

              <div className='button'> 
               <button className='st '>Start Teaching</button>
                <button className='sl ms-5'>Start Learning</button>
              </div>
            
               
            </div>
        </div>
    );
};

export default Hero;