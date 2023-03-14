import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const NavBar = () => {
  return (
    <>
      <div className="Navbar-container ">
        <div className="px-44 sm:px-2 sm:text-xs">
          <h1 className="Navbar-container-header">
            Ends Tommorrow:
            <span className="Navbar-container-header-span">
              Join Teachable for $4, 800 in bonus content
            </span>
          </h1>
        </div>
        <div className="Navbar-container-header-hours pr-40 sm:hidden md:flex">
          <span className="Navbar-container-header px-4 ">30 </span>
          <span className="Navbar-container-header px-4 ">00</span>
          <span className="Navbar-container-header px-4 ">42</span>
          <span className="Navbar-container-header px-4 ">59</span>
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
        <div className="second-header-list grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
          <div className="pl-32">
            <NavLink to="home" className="second-header-list-one px-5 sm:px-2">
              <img
                src="https://preview.colorlib.com/theme/universityedu/assets/img/logo/logo.png.webp"
                className="pr-4"
              />
            </NavLink>
          </div>
          <div className="pt-12 second-header-list-media sm:pt-3 md:mt-8">
            <NavLink to="home" className="px-5 text-xl ">
              Home
            </NavLink>
            <NavLink to="programs" className="px-5 text-xl">
              About
            </NavLink>
            <NavLink to="programs" className="px-5 text-xl">
              Programs
            </NavLink>
            <NavLink to="blog" className="px-5 text-xl">
              Blog
            </NavLink>
            <NavLink to="contact" className="px-5 text-xl">
              Contact
            </NavLink>
          </div>
        </div>
        <div className="sm:hidden">
          <h1 className="text-green-800">Call Us:</h1>
        </div>
        <div className="grid grid-flow-col auto-cols-max px-2 sm:block md:flex md:" >
          <Icon className="icons" icon="ic:baseline-facebook" />
          <Icon className="icons" icon="mdi:linkedin" />
          <Icon className="icons" icon="bi:youtube" />
          <Icon className="icons" icon="material-symbols:forward-to-inbox" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
