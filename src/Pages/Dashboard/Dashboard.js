import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {RiAdminFill} from 'react-icons/ri'
import {FiUsers} from "react-icons/fi"
import {FcPackage} from 'react-icons/fc'


const Dashboard = () => {
    return (
        <div>

            <div className='grid grid-cols-4'>
             <div className='flex flex-row justify-center items-center text-white font-bold uppercase mt-2 bg-[#0076a3]'> 
               <NavLink className=" p-3 ms-2 " to='/dashboard/users' >Users
                </NavLink>
                {<FiUsers className='text-3xl' ></FiUsers>}
               </div>

             <div className='ms-2 flex flex-row justify-center items-center text-white font-bold uppercase mt-2 bg-[#0076a3]'>
             <NavLink to='/dashboard/admins' >Admins</NavLink>
             <RiAdminFill className='text-3xl'></RiAdminFill>
             </div>

            <div className='ms-2 flex flex-row justify-center items-center text-white font-bold uppercase mt-2 bg-[#0076a3]'>
            <NavLink to='/dashboard' >All orders</NavLink>
            <FcPackage className='text-3xl ms-1'></FcPackage>
            </div>

                <NavLink className=" p-3 ms-2 text-white font-bold uppercase mt-2  bg-[#0076a3]"  to='/dashboard' >All Teacher</NavLink>
                
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;