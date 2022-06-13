import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import Animation from './notfound.json'



const Notfound = () => {

    const container = useRef(null)

    useEffect(() => {
        const instance = Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: Animation,
        });
        return () => instance.destroy();
    }, [])


    return (
        <div className='flex justify-center'>
            <div  className='w-[50%]' ref={container} ></div>
        </div>
    );
};

export default Notfound;