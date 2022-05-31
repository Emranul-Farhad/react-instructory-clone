import { signOut } from 'firebase/auth';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../Firekey/Firekey';
import './nav.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsFillCartCheckFill } from 'react-icons/bs'
import { BiCloudUpload } from 'react-icons/bi'
import { BsFillJournalBookmarkFill, BsCollectionPlayFill } from 'react-icons/bs'
import {RiDashboardFill} from 'react-icons/ri'



const Nav = () => {

  const navigate = useNavigate()
  // AUTHSATETE FIR logout
  const [user] = useAuthState(auth);
  //  logout
  const logout = () => {
    signOut(auth);
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid mt-3">
          <a className="navbar-brand logo" href=""> <img className='fluid' width={200} src="https://instructory.net/assets/images/logo-new-white.png" alt="" /> </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse mt-3" id="navbarNav">
            <ul class="navbar-nav mx-auto fw-bold">
              <li class="nav-item me-4">
                <a class="nav-link active text-white cc" aria-current="page" href="/">Course Categorey</a>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link active text-white ap" href="/">Affiliate Partener</a>
              </li>
              <div className='d-flex mx-auto ms-auto shadow-2xl rounded-lg px-2 p-1 bg-[#154766]'>


                <li title=' MY courses' className='mt-2 mr-2 text-2xl px-3'> <NavLink to='/upload'> <BsCollectionPlayFill></BsCollectionPlayFill>  </NavLink> </li>

                <li title='course Upload' className='mt-1 mr-2 text-3xl px-3'> <NavLink to='/upload'> <BiCloudUpload></BiCloudUpload>  </NavLink> </li>


                <li title='Blogs' className=' mt-2 mr-3 px-3 text-2xl'>  <NavLink to='/'>
                  <BsFillJournalBookmarkFill></BsFillJournalBookmarkFill> </NavLink> </li>

                <li title='dashboard' className='mt-2 mr-3 text-2xl'>  <NavLink to='/dashboard'> <RiDashboardFill></RiDashboardFill> </NavLink> </li>

              

                <li  className='mt-2 mr-3 text-2xl px-3'>  <NavLink to='/'> <BsFillCartCheckFill></BsFillCartCheckFill> </NavLink> </li>


                <li class="nav-item dropdown">

                  <a  href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img className='w-[50px] h-[50px] rounded-[50%]' src="https://instructory-aws-storage.s3.us-west-1.amazonaws.com/users/2am/profile_105225611.jpg" alt="" />
                  </a>

                  <ul className="dropdown-menu bg-[#08637D]" aria-labelledby="navbarDropdownMenuLink">
                    <li><a class="dropdown-item font-bold " href="/">Action</a></li>
                    <li><a class="dropdown-item font-bold " href="/">Another action</a></li>
                    <li class="nav-item ms-2">
                      {user ? <button onClick={logout} type="button" class="btn btn-danger ">Log Out</button> :
                        <button onClick={() => navigate('/login')()} type="button" class="btn btn-danger ">Get Started</button>
                      }
                    </li>
                  </ul>
                </li>

              </div>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

