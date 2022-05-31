import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'


const Footer = () => {
    
    return (
        <div>
            <footer id="site-footer">

<section className="horizontal-footer-section" id="footer-top-section">
    <div id="footer-logo">
        <picture>
       <img className='fluid'  src="https://instructory.net/assets/images/logo-new-white.png" alt="" /> 
        </picture>
    </div>
    <div id="footer-top-menu-container" role="menubar">
        <ul id="footer-top-menu" role="menu">
            <li className="footer-top-menu-item" role="menuitem">
                <NavLink to="/" className="footer-top-menu-link">IT Services</NavLink>
            </li>
            <li className="footer-top-menu-item footer-top-menu-item-active" role="menuitem">
                <NavLink to="/" className="footer-top-menu-link">Web development</NavLink>
            </li>
            <li className="footer-top-menu-item" role="menuitem">
                <NavLink to="/" className="footer-top-menu-link">SEO</NavLink>
            </li>
            <li className="footer-top-menu-item" role="menuitem">
                <NavLink to="/" className="footer-top-menu-link">UI/UX</NavLink>
            </li>
        </ul>
    </div>
    <div id="footer-buttons-container">
        <NavLink to="/" className="footer-button" role="button">View our Projects</NavLink>
    </div>
</section>

<section className="horizontal-footer-section" id="footer-middle-section">
    <div id="footer-about" className="footer-columns footer-columns-large">
        <h6 className='text-left leading-10 mt-[-20px]'>Instructory is all about connecting & discovering talents, inspiring people and impact lives with the best teaching and earning opportunities. “Instructory” is an online teaching marketplace, where instructors can create and upload their knowledge & make money online. It is also an E-Learning Platform to learn anything from anywhere from the best & Top rated Professionals and Freelancers! It has created earning opportunities for millions of instructors!.</h6>
    </div>
    <div className="footer-columns text-left ms-5">
        <h6 className='mb-4 font-extrabold text-2xl'>Usefull link </h6>
        <ul className="footer-column-menu" role="menu">
            <li className="footer-column-menu-item" role="menuitem">
                <NavLink to="/" className="footer-column-menu-item-link">Blogs </NavLink>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
                <NavLink to="/" className="footer-column-menu-item-link">Our instrucots</NavLink>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
                <NavLink to="/" className="footer-column-menu-item-link">Our lerners</NavLink>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
                <NavLink to='/' className="footer-column-menu-item-link">Courses Categorey </NavLink>
            </li>
        </ul>
    </div>
    <div className="footer-columns text-left mx-5">
        <h6 className='mb-4 font-bold text-2xl'>Need supports </h6>
        <ul className=" footer-column-menu" role="menu">
            <li className="footer-column-menu-item" role="menuitem">
                <NavLink to="/" className="footer-column-menu-item-link">FAQ</NavLink>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
                <NavLink to="/" className="footer-column-menu-item-link">Contact us</NavLink>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
                <NavLink to="/" className="footer-column-menu-item-link">Privacy policy </NavLink>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
                <NavLink to="/" className="footer-column-menu-item-link">
                    Refund policy</NavLink>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
                <NavLink to="/" className="footer-column-menu-item-link">Testimonials</NavLink>
            </li>
        </ul>
    </div>
    <div className="footer-columns text-left mx-4">
        <h6 className='mb-4 font-bold text-2xl'> About Instructory </h6>
        <ul className="footer-column-menu" role="menu">
            <li className="footer-column-menu-item" role="menuitem">
                <NavLink to="/" className="footer-column-menu-item-link">About Us</NavLink>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
                <NavLink to="/" className="footer-column-menu-item-link">Our Dream </NavLink>
            </li>
            <li className="footer-column-menu-item">
                <NavLink to="/" className="footer-column-menu-item-link" role="menuitem">Site map </NavLink>
            </li>
            <li className="footer-column-menu-item" role="menuitem">
                <NavLink to="/" className="footer-column-menu-item-link">News and events</NavLink>
            </li>
           
        </ul>
    </div>
</section>

<section className="horizontal-footer-section" id="footer-bottom-section">
    <div id="footer-copyright-info">
        &copy; Reimu Inc. 2022. All rights reserved.
    </div>
    <div id="footer-social-buttons">
        <img src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png"/>
        <img src="https://img.icons8.com/ios-filled/25/999999/telegram-app.png"/>
        <img src="https://img.icons8.com/ios-filled/25/999999/pinterest--v1.png"/>
        <img src="https://img.icons8.com/ios-filled/25/999999/instagram--v1.png"/>
    </div>
</section>

</footer>

{/* <p style="text-align:center; margin: 30px 0">The adaptive breakpoint here is at 960px.</h6> */}

        </div>
    );
};

export default Footer;