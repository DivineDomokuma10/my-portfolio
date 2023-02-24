import React,{useLayoutEffect} from 'react'
import { showThemer } from '../assets/modules'

const About = ({themeShow}) => {
  useLayoutEffect(() => showThemer(themeShow.state,themeShow.setState,true), [])
  
  return (
    <div className='mt-[85px]'>About</div>
  )
}

export default About