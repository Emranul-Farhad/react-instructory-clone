import React from 'react';
import './nav.css'
const Nav = () => {
    return ( 
        <div>
            <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid mt-3">
    <a className="navbar-brand logo" href=""> <img className='fluid' width={200}  src="https://instructory.net/assets/images/logo-new-white.png" alt="" /> </a>
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
        <button type="button" class="btn btn-danger ">Get Started</button>
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