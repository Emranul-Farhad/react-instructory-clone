import { signOut } from 'firebase/auth';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../Firekey/Firekey';
import './nav.css'
import { useAuthState } from 'react-firebase-hooks/auth';




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
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto fw-bold">
              <li class="nav-item me-4">
                <a class="nav-link active text-white cc" aria-current="page" href="/">Course Categorey</a>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link active text-white ap" href="/">Affiliate Partener</a>
              </li>
              <div className='d-flex mx-auto ms-auto'>
                <li class="nav-item me-2">
                  <a class="nav-link active text-white" href="/">Sign in</a>
                </li>
                <li class="nav-item ">
                  {user ? <button onClick={logout} type="button" class="btn btn-danger ">Log Out</button> :
                    <button onClick={() => navigate('/login')()} type="button" class="btn btn-danger ">Get Started</button>
                  }    
                </li>
                <NavLink to='/dashboard'> 
                <li class="nav-item mx-2">
                <a class="nav-link active text-white ap" href="/">Dashboard </a>
              </li>
                </NavLink>
               
              </div>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

