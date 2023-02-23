import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars,FaHome,FaInfoCircle,FaBriefcase,FaAddressCard} from 'react-icons/fa'

const Nav = () => {
  const [showNav,setshowNav] = useState(false);
  const links = [
    {no:1,path:'/',icon:FaHome,title:'Home',linkText:'Home'},
    {no:2,path:'about',icon:FaInfoCircle,title:'About',linkText:'About'},
    {no:3,path:'portfolio',icon:FaBriefcase,title:'Portfolio',linkText:'Portfolio'},
    {no:4,path:'contact',icon:FaAddressCard,title:'Contact',linkText:'Contact'}
  ]
  return (
    <nav className='w-full flex items-center justify-between px-3 py-2 bg-black fixed md:px-5'>
      <h2 className='font-bold text-xl text-gray-100'>Portfolio</h2>
      <div className={showNav == true ? 'drop-down' : 'not-drop-down'}>
        {links.map(link => (
          <Link key={link.no} to={link.path} className='flex text-white'>
            <link.icon className='text-2xl text-black hover:text-gray-800 md:hidden' title={link.title}/>
            <p className={`hidden md:block font-light hover:text-red-500`}>{link.linkText}</p>
          </Link>
        ))}
      </div>
      <FaBars className={`text-xl cursor-pointer text-gray-100 hover:text-red-500 md:hidden`} onClick={()=> setshowNav(!showNav)}/>
    </nav>
  )
}

export default Nav