import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { RiAdminFill } from 'react-icons/ri'
import { FiUsers } from "react-icons/fi"
import { FcPackage } from 'react-icons/fc'
import { CgProfile } from 'react-icons/cg'
import './Dashboard.css'
import { FaProductHunt } from 'react-icons/fa'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firekey/Firekey';
import Adminprotected from '../../Proctedpages/Adminprotected';


const Dashboard = () => {


  const [user] = useAuthState(auth)
  const admin = Adminprotected(user)
  console.log(admin)


  return (
    <div>

      <nav className='navd p-2' >

       {admin && <div className='flex flex-row justify-center items-center text-white font-bold uppercase mt-2 bg-[#0076a3]'>
          {<FiUsers className='text-3xl' ></FiUsers>}
          <NavLink className=" p-2 ms-0 " to='/dashboard/users' >Users
          </NavLink>
        </div>}

       {  admin && <div className='mr-6 flex flex-row justify-center items-center text-white font-bold uppercase mt-5 bg-[#0076a3]'>
          <RiAdminFill className='text-3xl'></RiAdminFill>
          <NavLink to='/dashboard/admins' className='p-1' >Admins</NavLink>
        </div>  }

        { admin && <div className='ms-2 flex flex-row justify-center items-center text-white font-bold uppercase mt-5 bg-[#0076a3]'>
          <FcPackage className='text-3xl mr-1'></FcPackage>
          <NavLink to='/dashboard' >All orders</NavLink>
        </div>}

       {admin && <div className='ms-2 flex flex-row justify-center items-center text-white font-bold uppercase mt-5 bg-[#0076a3]'>
          <FaProductHunt className='text-3xl mr-1'></FaProductHunt>
          <NavLink to='/dashboard/managecourses' >Manage Courses</NavLink>
        </div>}

        <div className='ms-2 flex flex-row justify-center items-center text-white font-bold uppercase mt-5 bg-[#0076a3]'>
          <CgProfile className='text-3xl mr-1'></CgProfile>
          <NavLink to='/dashboard/profile' > My PRofile </NavLink>
        </div>




      </nav>



      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;


{/* <div className='flex flex-col w-[100px]'>
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
   <NavLink className=" p-3 ms-2 text-white font-bold uppercase mt-2  bg-[#0076a3]"  to='/dashboard' >All Teacher</NavLink>
   <NavLink className=" p-3 ms-2 text-white font-bold uppercase mt-2  bg-[#0076a3]"  to='/dashboard' >All Teacher</NavLink>

</div> */}



{/* <div class= 'container'> 
   
  
  <section id= 'second'>
    <h6>Second</h6>
  </section>
  
 <section id= 'third'>
   <h6>Third</h6>
  </section>
  
 <section id= 'fourth'>
   <h6>Fourth lorem50
    amder desh tara koto vakl pay ami </h6>
  </section>

</div> */}