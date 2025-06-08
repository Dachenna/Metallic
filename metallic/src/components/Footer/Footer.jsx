import React from 'react'
import Logo from '../Navigation/Logo'
import { FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <footer className='py-28 bg-[#e6ece9]'>
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {/**First Sectipn */}
                <div className='space-y-3 max-w-[400px]m text-black text-sm'>
                  <Logo/>
                  <h3 className="font-bold font-header justify-center items-center text-xl">
                    Address:
                  </h3>
                  <p className='font-body'>
                    This is the location of the metal construction company.
                  </p>
                  <h3 className='font-header'>Contact:</h3>
                  <p className='font-body underline'>+2349023561634</p>

                  <div className='space-x-2'>
                    {/**Whatsapp */}
                    <a href='https://wa.me/message/CZ6AGT7HSKPBB1' target='_blank'>
                      <FaWhatsapp className='text-2xl text-green-600 hover:text-green-800 transition duration-300' />
                    </a>
                    {/**Facebook */}
                    <a href="https://www.facebook.com/profile.php?id=61565794325353" target='_blank'>
                      <FaFacebook className='text-2xl text-blue-600 hover:text-blue-800 transition duration-300' /> 
                    </a>
                    {/**LinkedIn */}
                    <a href='www.linkedin.com/in/david-david-9058442b4' target='_blank'>
                      <FaLinkedin className='text-2xl text-cyan-700 hover:text-blue-900 transition duration-300' />
                    </a>
                  </div>
                </div>

                {/**Second Section */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">

                  </div>
                </div>
            </div>

        </div>
      
    </footer>
  )
}

export default Footer
