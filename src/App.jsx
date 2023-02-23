import React, { useState } from 'react'
import Nav from './sub/Nav'
import Home from './Routes/Home'
import About from './Routes/About'
import Contact from './Routes/Contact'
import Portfolio from './Routes/Portfolio'
import { Routes, Route } from 'react-router-dom'
import { FaCog } from "react-icons/fa";

const App = () => {
  return (
    <div className='w-screen overflow-hidden bg-black relative'>
      <Nav/>
      <div className='flex bg-white absolute z-20 right-0 top-1/2'>
        <span>
          <FaCog />
        </span>
        <div className='flex flex-col'>
          <p className='text-black'>choose theme</p>
          <div className='flex flex-wrap'>
            <span>red</span>
            <span>blue</span>
            <span>yellow</span>
            <span>green</span>
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='portfolio' element={<Portfolio/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App