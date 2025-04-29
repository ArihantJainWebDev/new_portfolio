import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Services from './pages/Services/Services'
import About from './pages/about/About'
import Achievements from './pages/achievements/Achievements'
import Home from './pages/home/Home'
import Contact from './pages/Contact/Contact'

function App() {
  return(
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  )
}

export default App
