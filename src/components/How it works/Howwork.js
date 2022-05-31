import React from 'react';
import './Howwork.css'



const Howwork = () => {

    return (
        <div>
            <div className='flex flex-col lg:flex-row mx-10'>
                <div className='basis-2/4'>
                    <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt voluptatem odio, eum eius vero, quidem officiis, corrupti repudiandae rerum ad tempora. Necessitatibus saepe recusandae ducimus blanditiis voluptatem amet, ratione eum distinctio? Maiores, at, illo facilis doloribus accusantium dolore magni facere ipsa eius non fugiat cupiditate quaerat iure! Quasi officia incidunt voluptatibus error fugit iste totam deleniti laudantium praesentium sint, distinctio debitis natus ullam rerum maiores cupiditate ex, porro quidem eius.</h6>
                </div>

               <div className='basis-2/4 '>
               <div className='lg:mx-5 iframe-container shadow-2xl rounded-2xl'>
                <iframe title='video' width='500' height='294'  src="https://www.youtube.com/embed/uFFnAvsV4OI?&theme=light&autoplay=1&autohide=1&modestbranding=1"frameborder="0"></iframe>
                </div>
               </div>

            </div>
            <h1 className='mt-[140px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quam?</h1>
        </div>
    );
};

export default Howwork;