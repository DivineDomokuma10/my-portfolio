import React,{useEffect} from 'react'

const Portfolio = () => {
  useEffect(() =>  () => console.log('Portfolio has mounted'), [])
  return (
    <div className='mt-[85px]'>Portfolio</div>
  )
}

export default Portfolio