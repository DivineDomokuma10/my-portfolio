import React,{useEffect} from 'react'

const About = () => {
  useEffect(() =>  () => console.log('About has mounted'), [])
  
  return (
    <div className='mt-[85px]'>About</div>
  )
}

export default About