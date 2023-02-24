import React from 'react'
import { FaCog } from "react-icons/fa";

const Themes = () => {
  return (
    <div className='flex absolute z-20 -right-44 top-1/2'>
        <span className='h-fit p-2 rounded-tl-md rounded-bl-md bg-white cursor-pointer'>
          <FaCog className='text-2xl animate-spin md:mt-2 md:animate-bounce'/>
        </span>
        <div className='flex flex-col space-y-3 py-2 px-5 bg-white rounded-bl-md'>
          <p className='text-black text-sm font-bold'>choose theme</p>
          <div className='flex space-x-2'>
            <span className='w-7 h-7 bg-red-500 rounded'></span>
            <span className='w-7 h-7 bg-blue-500 rounded'></span>
            <span className='w-7 h-7 bg-yellow-500 rounded'></span>
            <span className='w-7 h-7 bg-green-500 rounded'></span>
          </div>
        </div>
    </div>
  )
}

export default Themes