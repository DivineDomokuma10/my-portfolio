
import React,{useRef,useEffect,useState} from 'react'
import '../assets/animation.css'
import {FaFacebook,FaWhatsappSquare,FaGithub,FaLinkedin,FaEnvelope,FaPhone} from 'react-icons/fa'

const Home = ({write}) => {
  const [first, setfirst] = useState('')
  let e = 0;
  let i = 0;
  let canDelete = false;
  let isComplete = false;
  let skill = '';
  const skills = [ 'Frontend Developer','Freelancer','Ui/Ux Designer']
  write.setState(true)
  write.state && insertSkill();

  
  const insertSkill = () => {
    setInterval(() => {
      
      const test = text => setfirst(first + text)
  
      if(i < skills.length){
        let curSkill = skills[i];
        if(e < curSkill.length && isComplete === false){
          skill += curSkill[e]
          test(skill)
          e++
          if (e === curSkill.length) {
            isComplete = true;
            canDelete = true;
          }
        }
        else if(e !== 0 && canDelete === true){
          skill = skill.slice(0,e - 2);
          test(skill)
          e--
        }
        else{
          isComplete = false;
          canDelete = false;
          i++;
        }
  
      }
      else{
        i = 0
      }
      
    }, 350);
  }

  return (
    <div className='w-full h-[87.3vh] mt-[84px]'>
      <div className={`w-full h-full flex flex-col-reverse items-center justify-around py-5 md:flex-row md:items-start md:py-36 md:px-5`}>
        <div className='flex absolute bottom-4 space-x-4 md:static md:bottom-0 md:flex-col md:space-x-0 md:space-y-5'>
          <FaFacebook className='home-icons' onClick={()=> test()}/>
          <FaGithub className='home-icons'/>
          <FaWhatsappSquare className='home-icons'/>
          <FaLinkedin className='home-icons'/>
        </div>
        <div className='w-full flex flex-col text-center space-y-6 absolute top-60 md:static md:pt-8'>
          <h1 className='text-[35px] font-extrabold text-gray-50 text-opacity-80 md:text-5xl'>
            <span className='text-red-500'>Divine</span> Domokuma
          </h1>
          <div className='flex justify-center items-center space-x-2'>
            <span className='text-white font-sans text-2xl font-thin text-opacity-80'>I'm a</span> 
            <span className={`font-sans text-xl font-thin ${'text-red-500'} md:text-2xl`}>{first}</span>
            <span className='insertion w-[2px] h-9 bg-gray-400 bg-opacity-90'></span>  
          </div>
        </div>
        <div className='hidden flex-col space-y-5 md:flex md:mt-10'>
          <a href="tel:+234971214921">
            <FaPhone className='home-icons'/> 
          </a>
          <a href="mailto:divinedomokuma@gmail.com">
            <FaEnvelope className='home-icons'/> 
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home