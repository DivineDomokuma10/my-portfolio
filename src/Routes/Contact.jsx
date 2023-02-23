import React,{useEffect} from 'react'

const Contact = () => {
  useEffect(() =>  () => console.log('Contact has mounted'), [])
  return (
    <div className='mt-[85px]'>Contact</div>
  )
}

export default Contact