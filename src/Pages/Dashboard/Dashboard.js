import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className='grid grid-cols-4'>
                <NavLink class="btn btn-secondary" to='/dashboard/users' >Users</NavLink>
                <NavLink class="btn btn-secondary" to='/dashboard/admins' >Admins</NavLink>
                <NavLink class="btn bg-[#0076a3]"  to='/dashboard' >All orders</NavLink>
                <NavLink class=" bg-[#0076a3]"  to='/dashboard' >All Teacher</NavLink>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;