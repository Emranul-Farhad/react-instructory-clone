import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1> Dashboard temporary</h1>
            <div className='grid grid-cols-4'>
                <NavLink to='/dashboard/users' >Users</NavLink>
                <NavLink to='/dashboard' >Admins</NavLink>
                <NavLink to='/dashboard' >All orders</NavLink>
                <NavLink to='/dashboard' >All Teacher</NavLink>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;