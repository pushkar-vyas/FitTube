import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';

function Navbar() {
  const [showmenu, setShowmenu] = useState(false);

  return (
    <div className="h-15 flex justify-between items-center p-2 border relative">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-[70px] h-[70px] m-0 mx-5" />
      </Link>

      <IoMdMenu className="block md:hidden text-2xl" onClick={() => setShowmenu((pre) => !pre)} />

      {showmenu && <div className='bg-white flex flex-col gap-2 absolute top-14 right-0 mt-5 border p-7 rounded-xl transition duration-100'>
        <Link to="/">Home</Link>
        <a href="#exercises">Category</a>
        <a href="#exercises">Exercises</a>
        <a href="#exercises">Contact</a>
        <a href="#exercises">About</a>
      </div>
      }

      <div className="gap-10 text-lg font-semibold text-gray-800 hover:text-black hidden md:flex">
        <Link to="/">Home</Link>
        <a href="#exercises">Category</a>
        <a href="#exercises">Exercises</a>
        <a href="#exercises">Contact</a>
        <a href="#exercises">About</a>
      </div>
    </div>
  )
};

export default Navbar;
