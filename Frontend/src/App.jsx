import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Projects from './pages/projects/Projects'
import About from './pages/about/About'
import Achivements from './pages/achivements/Achivements'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'

function App() {
  return(
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/achivements" element={<Achivements />} />
          <Route path="/home" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  )
}

export default App
