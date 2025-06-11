import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Import your pages/components
import Home from '../Hero/Hero'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Navbar from '../Navigation/Navbar'

const Layout = () => {
  return (
      <div>
        {/* You can add a Navbar here if you have one */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default Layout
