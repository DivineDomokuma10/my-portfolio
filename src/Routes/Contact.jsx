import React,{useLayoutEffect} from 'react'
import { showThemer } from '../assets/modules'

const Contact = ({themeShow}) => {
  useLayoutEffect(() => showThemer(themeShow.state,themeShow.setState,true), [])

  return (
    <div className='mt-[85px]'>Contact</div>
  )
}

export default Contact