import React from 'react'
import aboutImg from '../../assests/About-img.png'
import aboutIcon from '../../assests/profile-icon.png'
import aboutImg2 from '../../assests/about-img-2.png'
import AboutDropdown from './AboutDropdown'


function About() {
  return (
    <div id='About' className='flex pt-20 pl-48 gap-32 bg-[#E6ECFF] '> 
        <div className=' max-w-[540px] pl-2 pr-2'>
            <p className=' text-3xl opacity-60 '>We will help your family in your
                 consectetur adipiscing elit</p>
            <p className=' leading-8 pt-10 opacity-60' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt Ut labore et dolore magna aliqua_ Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut
                aliquip ex ea commodo consequat-
            </p>
            <div className='flex'>
            <div className='pt-10  '>
                <img className=' rounded-full ' src={aboutIcon} alt='/' />
            </div>
            <div className='flex-col pt-9 pl-8 leading-7'>
                <p className=' font-bold'>Annie Cooper</p>
                <p>CEO, Insurance Company</p>  
            </div>
            
            </div>
            <div className='pt-12 pb-20'>
                <img className=' rounded-2xl' src={aboutImg2} alt='/' />
            </div>
        </div>
        <div className='flex-col max-w-[540px] '>
            <div>
            <img className=' rounded-2xl pl-36' src={aboutImg} alt='/'></img>
            </div>
            <p className=' text-3xl opacity-60 pt-16'>We will help your family in your
               consectetur adipiscing elit</p>
               <AboutDropdown />    
        </div>
        
    </div>
  )
}

export default About