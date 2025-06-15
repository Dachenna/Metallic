import { useNavigate } from 'react-router-dom'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Import your pages/components
import Home from '../Hero/Hero'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Navbar from '../Navigation/Navbar'
import About from '../Contact/About'

const Layout = () => {
  const navigate = useNavigate();
  return (
      <div>
        {/* You can add a Navbar here if you have one */}
        <Navbar navigate ={navigate}/>
        <Routes>
          <Route path="/" element={<Home navigate={navigate}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About navigate={navigate}/>} />
          {/* Add more routes as needed */}
          {/* Example: <Route path="/services" element={<Services />} /> */}
        </Routes>
        <Footer />
      </div>
  )
}

export default Layout
