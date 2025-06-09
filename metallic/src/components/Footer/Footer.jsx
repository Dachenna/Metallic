import React from 'react'
import Logo from '../Navigation/Logo'
import { FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className='py-20 bg-[#e6ece9]'>
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {/**First Sectipn */}
                <div className='space-y-3 -pt-5 max-w-[400px] text-black text-sm'>
                  <Logo/>
                  <h3 className="font-bold font-header text-xl">
                    Address:
                  </h3>
                  <p className='font-body'>
                    This is the location of the metal construction company.
                  </p>
                  <h3 className='font-header'>Contact:</h3>
                  <p className='font-body underline'>+2349023561634</p>

                  <div className='flex space-x-4 mt-2'>
                    {/**Whatsapp */}
                    <a href='https://wa.me/message/CZ6AGT7HSKPBB1' target='_blank' rel="noopener noreferrer">
                      <FaWhatsapp className='text-2xl text-green-600 hover:text-green-800 transition duration-300' />
                    </a>
                    {/**Facebook */}
                    <a href="https://www.facebook.com/profile.php?id=61565794325353" target='_blank' rel="noopener noreferrer">
                      <FaFacebook className='text-2xl text-blue-600 hover:text-blue-800 transition duration-300' /> 
                    </a>
                    {/**LinkedIn */}
                    <a href='https://www.linkedin.com/in/david-david-9058442b4' target='_blank' rel="noopener noreferrer">
                      <FaLinkedin className='text-2xl text-cyan-700 hover:text-blue-900 transition duration-300' />
                    </a>
                    {/**Email */}
                    <a href='mailto:davidinprograming@gmail.com' target='_blank' rel="noopener noreferrer">
                      <MdOutlineEmail className='text-2xl text-gray-700 hover:text-gray-900 transition duration-300' />
                    </a>
                  </div>
                </div>

                {/**Second Section */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <h3 className='font-header text-lg'>Quick Links</h3>
                    <ul className='space-y-1 font-semibold'>
                      <li><a href='#' className='font-header text-black hover:text-gray-700 transition duration-300'>About Us</a></li>
                      <li><a href='#' className='font-header text-black hover:text-gray-700 transition duration-300'>Services</a></li>
                      <li><a href='#' className='font-header text-black hover:text-gray-700 transition duration-300'>Contact</a></li>
                       <li><a href='#faqs' className='font-header text-black hover:text-gray-700 transition duration-300'>FaQs</a></li>
                    </ul>
                  </div>
                </div>

                {/**Third Section */}
                <div className='grid grid-cols-3 gap-2'>
                  <div className='space-y-2'>
                    <ul className='space-y-1 font-bold'>
                      <li><a href="#" className=' font-header text-black hover:text-grat-600 transition duration-300'>Blog</a></li>
                      <li><a href="#" className='font-header text-black hover:text-grat-600 transition duration-300'>Gallery</a></li>
                      <li><a href="#" className='font-header text-black hover:text-grat-600 transition duration-300'>Events</a></li>
                      <li><a href="#" className='font-header text-black hover:text-grat-600 transition duration-300'>Career</a></li>
                      <li><a href="#" className='font-header text-black hover:text-grat-600 transition duration-300'>Support</a></li>
                    </ul>
                  </div>
                </div>
            </div>

        </div>
      
    </footer>
  )
}

export default Footer
