import React from 'react'
import Navbar from './layout/Navabar' // Note: Component name should match the file (see note below)
import About from './pages/About'// You'll need to create this component
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './pages/Hero'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes className="absolute z-10">
        <Route path="/" element={
          <>
            <Hero />
            <About />
          </>
        } />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App