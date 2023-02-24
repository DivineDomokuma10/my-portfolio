import React, { useState } from 'react'
import Nav from './sub/Nav'
import Home from './Routes/Home'
import Themes from './sub/Themes'
import About from './Routes/About'
import Contact from './Routes/Contact'
import Portfolio from './Routes/Portfolio'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [themeShow, setThemeShow] = useState(false)
  return (
    <div className='w-screen overflow-hidden bg-black relative'>
      <Nav/>
      {themeShow && <Themes/>}
      <Routes>
        <Route path='/' element={<Home themeShow={{state: themeShow, setState: setThemeShow}}/>}/>
        <Route path='about' element={<About themeShow={{state: themeShow, setState: setThemeShow}}/>}/>
        <Route path='portfolio' element={<Portfolio themeShow={{state: themeShow, setState: setThemeShow}}/>}/>
        <Route path='contact' element={<Contact themeShow={{state: themeShow, setState: setThemeShow}}/>}/>
      </Routes>
    </div>
  )
}

export default App