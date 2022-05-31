import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'
import {BsTelegram,BsYoutube, BsInstagram , BsFacebook } from 'react-icons/bs'


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
</section>

<section className="horizontal-footer-section" id="footer-middle-section">
    <div id="footer-about" className="footer-columns footer-columns-large">
        <h6 className='text-left leading-10 mt-[-30px]'>Instructory is all about connecting & discovering talents, inspiring people and impact lives with the best teaching and earning opportunities. “Instructory” is an online teaching marketplace, where instructors can create and upload their knowledge & make money online. It is also an E-Learning Platform to learn anything from anywhere from the best & Top rated Professionals and Freelancers! It has created earning opportunities for millions of instructors!.</h6>
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
        &copy; {new Date().getFullYear()} emranul farhad
    </div>
    <div id="footer-social-buttons">
        {/* <img src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png"/>
        <img src="https://img.icons8.com/ios-filled/25/999999/telegram-app.png"/>
        <img src="https://img.icons8.com/ios-filled/25/999999/pinterest--v1.png"/>
        <img src="https://img.icons8.com/ios-filled/25/999999/instagram--v1.png"/> */}
        <h5 className='mx-2 text-2xl' ><BsFacebook></BsFacebook></h5>
        <h5 className='mx-2 text-2xl' ><BsTelegram></BsTelegram></h5>
        <h5 className='mx-2 text-2xl' ><BsInstagram></BsInstagram></h5>
        <h5 className='mx-2 text-2xl' ><BsYoutube></BsYoutube></h5>

    </div>
</section>

</footer>

{/* <p style="text-align:center; margin: 30px 0">The adaptive breakpoint here is at 960px.</h6> */}

        </div>
    );
};

export default Footer;