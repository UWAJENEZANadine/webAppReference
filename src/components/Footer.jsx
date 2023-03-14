import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
const Footer = () => {
  return (
    <div className="footer-container grid grid-cols-5 gap-x-0 h-96 text-center p-10 font-extrabold tracking-widest">
      <div className="text-white font-extrabold tracking-widest">
        <h1 className="heading-univesity text-1xl">UNIVERSITY</h1>
        <p className="text-gray-500">Landmark Education</p>
      </div>
      <div>
        <h1 className="heading-link text-white">Quick links</h1>

        <NavLink to="home" className="px-5 text-gray-400 leading-10 text-xl">
          Home
        </NavLink>
        <br />
        <NavLink
          to="programs"
          className="px-5 text-gray-400 leading-10  text-xl"
        >
          About
        </NavLink>
        <br />
        <NavLink
          to="programs"
          className="px-5 text-gray-400 leading-10 text-xl"
        >
          Programs
        </NavLink>
        <br />
        <NavLink to="blog" className="px-5 text-gray-400 leading-10 text-xl">
          Blog
        </NavLink>
        <br />
        <NavLink to="contact" className="px-5 text-gray-400 leading-10 text-xl">
          Contact
        </NavLink>
        <br />
      </div>
      <div>
        <h1 className="heading-link text-white">Programs</h1>
        <ul>
          <li>
            <a href="#" className="text-gray-400 leading-10 text-xl">
              Air freight
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 leading-10 text-xl">
              Ocean freight
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 leading-10 text-xl">
              Large projects
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="heading-link text-white">Resources</h1>
        <ul>
          <li>
            <a href="#" className="text-gray-400 leading-10 text-xl">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 leading-10 text-xl">
              Submit Ticket
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 leading-10 text-xl">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="heading-link text-white">News Letter</h1>
        <h3 className="text-gray-400 leading-10 text-xl">
          Subscribe newsletter to get updates.
        </h3>
        <input placeholder="Enter your email" className="p-4" />
        <button className="footer-button">
          <SendIcon className="icon-sent" />
        </button>
      </div>
    </div>
  );
};
export default Footer;
