import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import Animation from './loading.json'


const Loading = () => {

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
              <div className='w-[20%]' ref={container} ></div>
        </div>
    );
};

export default Loading;