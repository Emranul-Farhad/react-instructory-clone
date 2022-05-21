import React from 'react';

const TeacherSidedetials = ({ pic }) => {
    const { level, img, name, title, enrolled } = pic



    return (
        <div>
            <div className='d-flex  mt-4'>
                <div>
                    <img className='w-[70%]' src={img} alt="" />
                </div>
                <div className='mt-4'>
                    <h6 className='text-left text-[#397a8f] text-[22px] font-bold'>{name} </h6>
                    <h6 className='text-left text-[#777] mb-3'>{title} </h6>
                    <h6 className='text-left text-[#444] text-[18px] font-[500]' > Enrolled <span className=' text-[#ff4669] font-bold'> {enrolled}</span> students(s) </h6>
                    <h6 className='text-left text-[#444] text-[18px] font-[600] '> Instructor  <span className='text-[#ff4669]'>{level}</span> </h6>
                </div>
            </div>
        </div>
    );
};

export default TeacherSidedetials;