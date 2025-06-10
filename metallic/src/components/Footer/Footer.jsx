import React from 'react'
import Logo from '../Navigation/Logo'
import { FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className='py-10 bg-[#e6ece9]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row justify-between gap-8'>
          {/* First Section */}
          <div className='space-y-2 max-w-[350px] text-black text-sm flex flex-col'>
            <div className="flex-shrink-0 -mt-4 mb-1">
              <Logo />
            </div>
            <h3 className="font-bold font-header text-lg">Address:</h3>
            <p className='font-body text-xs'>
              This is the location of the metal construction company.
            </p>
            <h3 className='font-header text-base'>Contact:</h3>
            <p className='font-body underline text-xs'>+2349023561634</p>
            <div className='flex space-x-3 mt-1'>
              {/* Whatsapp */}
              <a href='https://wa.me/message/CZ6AGT7HSKPBB1' target='_blank' rel="noopener noreferrer">
                <FaWhatsapp className='text-xl text-green-600 hover:text-green-800 transition duration-300' />
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=61565794325353" target='_blank' rel="noopener noreferrer">
                <FaFacebook className='text-xl text-blue-600 hover:text-blue-800 transition duration-300' />
              </a>
              {/* LinkedIn */}
              <a href='https://www.linkedin.com/in/david-david-9058442b4' target='_blank' rel="noopener noreferrer">
                <FaLinkedin className='text-xl text-cyan-700 hover:text-blue-900 transition duration-300' />
              </a>
              {/* Email */}
              <a href='mailto:davidinprograming@gmail.com' target='_blank' rel="noopener noreferrer">
                <MdOutlineEmail className='text-xl text-gray-700 hover:text-gray-900 transition duration-300' />
              </a>
            </div>
          </div>

          {/* Second & Third Section grouped and aligned right */}
          <div className="flex flex-col md:flex-row gap-8 lg:ml-auto">
            {/* Second Section */}
            <div>
              <ul className='space-y-1 font-semibold text-sm'>
                <li><a href='#' className='font-header text-black hover:text-gray-700 transition duration-300'>About Us</a></li>
                <li><a href='#' className='font-header text-black hover:text-gray-700 transition duration-300'>Services</a></li>
                <li><a href='#' className='font-header text-black hover:text-gray-700 transition duration-300'>Contact</a></li>
                <li><a href='#faqs' className='font-header text-black hover:text-gray-700 transition duration-300'>FaQs</a></li>
              </ul>
            </div>
            {/* Third Section */}
            <div>
              <ul className='space-y-1 font-bold text-sm'>
                <li><a href="#" className='font-header text-black hover:text-gray-600 transition duration-300'>Blog</a></li>
                <li><a href="#" className='font-header text-black hover:text-gray-600 transition duration-300'>Gallery</a></li>
                <li><a href="#" className='font-header text-black hover:text-gray-600 transition duration-300'>Events</a></li>
                <li><a href="#" className='font-header text-black hover:text-gray-600 transition duration-300'>Career</a></li>
                <li><a href="#" className='font-header text-black hover:text-gray-600 transition duration-300'>Support</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className='border-t border-black mt-6 pt-4 flex flex-col md:flex-row items-center md:items-start justify-between'>
          <p className='text-sm text-gray-600 mb-2 md:mb-0'>
            &copy; {new Date().getFullYear()} DBits. All rights reserved.
          </p>
          <ul className='flex flex-row justify-center md:justify-end space-x-3 text-gray-600 text-xs'>
            <li>
              <a href="#" className='font-body hover:text-[#383636] transition duration-300'>Policies</a>
            </li>
            <li>
              <a href="#" className='font-body hover:text-[#383636] transition duration-300'>Terms of Service</a>
            </li>
            <li>
              <a href="#" className='font-body hover:text-[#383636] transition duration-300'>Cookies Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
