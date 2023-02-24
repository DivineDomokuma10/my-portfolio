import React,{useLayoutEffect} from 'react'
import { showThemer } from '../assets/modules'

const Portfolio = ({themeShow}) => {
  useLayoutEffect(() => showThemer(themeShow.state,themeShow.setState,true), [])
  
  return (
    <div className='mt-[85px]'>Portfolio</div>
  )
}

export default Portfolio