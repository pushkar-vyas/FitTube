import React from 'react';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <div className="flex flex-wrap justify-between items-center border px-10 py-5">
    <img src={Logo} alt="logo" className="w-[60px] h-[60px]" />
    <h5 className="text-md sm:text-lg">
      Created by Pushkar Vyas
    </h5>
  </div>
);

export default Footer;
