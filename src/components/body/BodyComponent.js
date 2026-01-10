import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home.jsx'
import Menu from './Menu.js'
import About from './About.jsx'
import Contact from './Contact.jsx'

const BodyComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* redirect */}
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  )
}

export default BodyComponent
