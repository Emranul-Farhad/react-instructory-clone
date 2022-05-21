import React from 'react';
import { useSpring, animated } from 'react-spring';
import './OurPartner.css'



const OurPartner = () => {

    const styles = useSpring({
        loop: true,
        to: [
            { opacity: 1, color: '#087497' },
            { opacity: 0, color: '#ff4669' },
        ],
        from: { opacity: 0, color: 'red' },
    })


    return (
        <div>
            <div className='mt-20'>
                <animated.div className="text-3xl font-bold " style={styles}> OUR PARTNER</animated.div>
            </div>
           
            {/*  Text fade with react spring */}
            {/* part showcse start here */}
            <div className='partnersjow mx-20 mb-20'>
                <div className='partnerbg'>
                  <div className='row   container mx-auto mt-16 '>
                      <div className='col-lg-3 '>
                          <img className='shadow-2xl rounded-full' src="https://www.radiustheme.com/demo/wordpress/themes/edhub/wp-content/uploads/2021/10/brand2.png" alt="" />
                      </div>
                      <div className='col-lg-3 s'>
                          <img className='shadow-2xl rounded-full'  src="https://www.radiustheme.com/demo/wordpress/themes/edhub/wp-content/uploads/2021/10/brand8.png" alt="" />
                      </div>
                      <div className='col-lg-3'>
                          <img className='shadow-2xl rounded-full'  src="https://www.radiustheme.com/demo/wordpress/themes/edhub/wp-content/uploads/2021/10/brand4.png" alt="" />
                      </div>
                      <div className='col-lg-3'>
                          <img className='shadow-2xl rounded-full'  src="https://www.radiustheme.com/demo/wordpress/themes/edhub/wp-content/uploads/2021/10/brand7.png" alt="" />
                      </div>
                      <div className='col-lg-3'>
                          <img className='shadow-2xl rounded-full'  src="https://www.radiustheme.com/demo/wordpress/themes/edhub/wp-content/uploads/2021/10/brand5.png" alt="" />
                      </div>
                      <div className='col-lg-3 mt-4'>
                          <img className='shadow-2xl rounded-full'  src="https://www.radiustheme.com/demo/wordpress/themes/edhub/wp-content/uploads/2021/10/brand3.png" alt="" />
                      </div>
                      <div className='col-lg-3 mt-5'>
                          <img  className='shadow-2xl rounded-full'  src="https://www.radiustheme.com/demo/wordpress/themes/edhub/wp-content/uploads/2021/10/brand6.png" alt="" />
                      </div>
                      <div className='col-lg-3 '>
                          <img className='shadow-2xl rounded-full'  src="https://www.radiustheme.com/demo/wordpress/themes/edhub/wp-content/uploads/2021/10/brand1.png" alt="" />
                      </div>
                  </div>
                </div>
            </div>

        </div>
    )
};

export default OurPartner;