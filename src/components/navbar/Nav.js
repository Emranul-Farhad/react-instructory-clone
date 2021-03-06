import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../Firekey/Firekey';
import './nav.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsFillCartCheckFill } from 'react-icons/bs'
import { BiCloudUpload } from 'react-icons/bi'
import { BsFillJournalBookmarkFill, BsCollectionPlayFill } from 'react-icons/bs'
import { RiDashboardFill } from 'react-icons/ri'
import nav from '../../images/footer_bg.jpg'
import avatar from '../../images/avatar1.png'

const Nav = () => {

  const navigate = useNavigate()

  // AUTHSATETE FIR logout
  const [user] = useAuthState(auth);

  //  logout
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("coursetoken")
  };

  //  cpath name handel
  const { pathname } = useLocation()

  // user photohandel
  const [info , setInfo] = useState({})
  const email = user?.email
  useEffect(()=> {
      const url = `http://localhost:8000/userdata?email=${email}`
     fetch(url,{
         method : "GET",
     }) 
     .then(res => res.json())
     .then(data => setInfo(data))
  },[email])
  



  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light" style={
        pathname.includes('/login') ? { background: `url(${nav})`, padding: "5px ,15px 5px" } : { clasName: "" } &&

          pathname.includes('/signin') ? { background: `url(${nav})`, padding: "5px ,15px 5px" } : { clasName: "" } &&

            pathname.includes('/mycourses') ? { background: `url(${nav})`, } : { clasName: "" } &&

              pathname.includes('/uploadcourses') ? { background: `url(${nav})`, } : { clasName: "" } &&

                pathname.includes('/giverivew') ? { background: `url(${nav})`, } : { clasName: "" } &&

                  pathname.includes('/allcourses') ? { background: `url(${nav})`, } : { clasName: "" } &&

                    pathname.includes('/chekout') ? { background: `url(${nav})`, } : { clasName: "" } &&

                    pathname.includes('/profile') ? { background: `url(${nav})`, } : { clasName: "" } &&

                    pathname.includes('/profileedit') ? { background: `url(${nav})`, } : { clasName: "" } 



      }>
        <div class="container-fluid mt-3">
          <a className="navbar-brand logo" href="/"> <img className='fluid' width={200} src="https://instructory.net/assets/images/logo-new-white.png" alt="" /> </a>
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

             { !user && <NavLink
                to='/login' type="button" className="btn btn-danger ">Get Started</NavLink>}

              {user && <div className='d-flex mx-auto ms-auto shadow-2xl rounded-lg px-2 p-1 bg-[#154766]'>


                <li title=' MY courses' className='mt-2 mr-2 text-2xl px-2 text-white'> <NavLink to='/mycourses'> <BsCollectionPlayFill></BsCollectionPlayFill>  </NavLink> </li>

                <li title='course Upload' className='mt-1 mr-2 text-3xl px-2 text-white'> <NavLink to='/uploadcourses'> <BiCloudUpload></BiCloudUpload>  </NavLink> </li>

                
                  <li title='Blogs' className=' mt-2 mr-3 px-2 text-2xl text-white'>  <NavLink to='/'>
                    <BsFillJournalBookmarkFill></BsFillJournalBookmarkFill> </NavLink> </li>

                <li title='dashboard' className='mt-2 mr-3 text-2xl text-white'>  <NavLink to='/dashboard'> <RiDashboardFill></RiDashboardFill> </NavLink> </li>


                <li class="nav-item dropdown">

                  <a href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">  

                   { info?.img ? <img className='w-[50px] h-[50px] rounded-[50%]' src={info?.img} alt="" /> : <img className='w-[50px] h-[50px] rounded-[50%]' src={avatar} alt="" /> }

                  </a>

                  <ul className="dropdown-menu bg-[#08637D]" aria-labelledby="navbarDropdownMenuLink">

                    <li className='mx-3'> <NavLink class="dropdown-item font-bold  " to='/profile' >Profile </NavLink> </li>


                    <li class="nav-item ms-2">
                      {user ? <button onClick={logout} type="button" class="btn btn-danger ">Log Out</button> :
                        <NavLink
                          to='/login' type="button" className="btn btn-danger ">Get Started</NavLink>
                      }
                    </li>
                  </ul>
                </li>
              </div>
              }

            </ul>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default Nav;

