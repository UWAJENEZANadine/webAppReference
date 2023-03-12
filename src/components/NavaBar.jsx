import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';

const NavBar = () => {
  return (
    <>
      <div className="Navbar-container p-7 ">
        <div className="px-44">
          <h1 className="Navbar-container-header">
            Ends Tommorrow:
            <span className="Navbar-container-header-span">
              Join Teachable for $4, 800 in bonus content
            </span>
          </h1>
        </div>
        <div className="Navbar-container-header-hours pr-40">
          <span className="Navbar-container-header px-4">30 </span>
          <span className="Navbar-container-header px-4">00</span>
          <span className="Navbar-container-header px-4">42</span>
          <span className="Navbar-container-header px-4">59</span>
          <a href="#" className="text-[white] px-9 underline">
            Learn More
          </a>
          <div>
            <span className="text-[white] px-2">Days</span>
            <span className="text-[white] px-2">Hours</span>
            <span className="text-[white] px-2">Mins</span>
            <span className="text-[white] px-2">Secs</span>
          </div>
        </div>
      </div>
      
      <div className="second-header">
        <div className="second-header-list">
          <NavLink to="home" className="second-header-list-one px-5">UNIVERSITY</NavLink>
          <NavLink to="home" className="px-5 text-xl">Home</NavLink>
          <NavLink to="programs" className="px-5 text-xl">About</NavLink>
          <NavLink to="programs" className="px-5 text-xl">Programs</NavLink>
          <NavLink to="blog" className="px-5 text-xl">Blog</NavLink>
          <NavLink to="contact" className="px-5 text-xl">Contact</NavLink>
          <div>
          <span className="second-header-list-sub">Landmark Education </span></div> 
        </div>
        <div className="call-us">
          <h1 className="text-green-800">Call Us:</h1>
        </div>
        <div className="grid grid-flow-col auto-cols-max px-2">
          <Icon className="icons" icon="ic:baseline-facebook" />
          <Icon className="icons"  icon="mdi:linkedin" />
          <Icon className="icons"  icon="bi:youtube" />
          <Icon className="icons"  icon="material-symbols:forward-to-inbox" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
