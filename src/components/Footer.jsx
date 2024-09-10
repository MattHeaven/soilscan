import React from 'react';
import { linkUnderline } from './utils';

const Footer = () => {

  return (
    <footer className="py-12 px-8 relative bottom-0 mt-auto">
      <div className="max-w-7xl mx-auto flex justify-between items-start px-6 py-12">
        {/* Logo */}
        <div className="logo">
          <img src="https://www.soilscan.co.ke/wp-content/uploads/2021/05/SoilScan.svg" alt="SoilScan Logo" className="h-10" />
        </div>

        <div className='space-y-14'>
          {/* Links */}
          <div className="flex space-x-16 font-semibold">
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className={linkUnderline}>HOME</a></li>
              <li><a href="#tech" className={linkUnderline}>TECHNOLOGY</a></li>
              <li><a href="#field" className={linkUnderline}>FIELD TRIALS</a></li>
              <li><a href="#about" className={linkUnderline}>ABOUT</a></li>
            </ul>
            <ul className="space-y-3 text-gray-800 font-semibold">
              <li><a href="#careers" className={linkUnderline}>CAREERS</a></li>
              <li><a href="#blog" className={linkUnderline}>BLOG</a></li>
              <li><a href="#demo" className={linkUnderline}>REQUEST A DEMO</a></li>
            </ul>
          </div>

          {/* Bottom Bar */}
          <div className="text-center mt-6 text-gray-600 text-[12px]">
            <p>
              Privacy Policy | Terms and conditions | © {new Date().getFullYear()} Revolutionize Engineering, All rights reserved
            </p>
          </div>

        </div>
        {/* Contact Info */}
        <div className="text-gray-800">
          <h2 className='text-zinc-500 underline font-bold'>CONTACT US</h2>
          <p>info@soilscan.co.ke</p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
