import React from 'react';
import Nav from '../navbar/Nav';
import './Hero.css'
import Search from '../search/Search'
import Title from '../course-title/Title'
import Teacherfeature from '../Teacher feature/Teacherfeature';
import OurPartner from '../our Partner/OurPartner';
import Reviews from '../Reviews/Reviews';
import Joning from '../Join as teacher students/Joning';


const Hero = () => {


  return (
    <>
      <div className='hero-container'>
        <div className='container'>
          <Nav />

          <h3 className='text-center'>ONLINE TEACHING MARKETPLACE & E-LEARNING PLATFORM</h3>
          <h1 className='text-center'>TEACH ANYTHING, LEARN ANYTIME</h1>
          <p className='text-center'>Upload your course tutorial & become an online teacher. Earn as much as you can, it's FREE! Also, Browse our course categories <br /> where you can develop your skills anytime from the best professionals.</p>

          <div className='button'>
            <button className='st '>Start Teaching</button>
            <button className='sl ms-5'>Start Learning</button>
          </div>
        </div>
      </div>
{/*  */}
      <div>
        <Search></Search>
      </div>
      {/*  */}
      <div>
        <Title></Title>
      </div>
      {/* */}
      <div>
        <Teacherfeature></Teacherfeature>
      </div>
      {/*  */}
      <div>
        <OurPartner></OurPartner>
      </div>
     {/*  */}
     <div>
       <Reviews></Reviews>
     </div>
     {/*  */}
     <div>
       <Joning></Joning>
     </div>
    </>
  );
};

export default Hero;