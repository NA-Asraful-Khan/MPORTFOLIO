import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/navLogo.png";

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";

import { FaLinkedinIn,FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav =()=>{
    setNav(!nav)
  }
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <img className="ml-16" src={Logo} alt="" width="50" />
        <div className="mr-16">
          <ul className="hidden md:flex">
            <Link to="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link to="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link to="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link to="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link to="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className={nav? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ''}>
        <div className={
          nav? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500': 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }>
          <div className="flex w-full items-center justify-between">
            <img src={Logo} alt="" width="50" />
            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              Let's build something legendary together
            </p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link to="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link to="/">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link to="/">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link to="/">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link to="/">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest">Let's Connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href='https://www.linkedin.com/' target='blank'>
                    <FaLinkedinIn/>
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href='https://www.linkedin.com/' target='blank'>
                  <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href='https://www.linkedin.com/' target='blank'>
                  <AiOutlineMail />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href='https://www.linkedin.com/' target='blank'>
                  <BsPersonLinesFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
