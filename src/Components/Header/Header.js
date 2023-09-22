import React from 'react'
import headerImg from '../../assests/header-Img.png'


function Header() {
  
  return (
    <div id='Header' className='flex justify-evenly pt-10 pb-20 gap-16 bg-gradient-to-r from-pink-200  via-white via-50% to-blue-200 ' >
       <div className='flex flex-col w-2/6 gap-9  pt-44'>
             <p className=' font-bold text-5xl text-[#34303E]'>
             Get Your Custom 
             Insurance Protection
             </p>
             <p className=' w-4/5'>Lorem Ipsum is simply dummy text of the printing and typesetting
             industry and uses Latin words combined with a handful of model words.
             </p>
             <button type="button" className="justify-around font-semibold text-white bg-[#003CFF] content-center items-center flex rounded-full  text-sm w-[110px] h-[40px]">
               Get a quote
            </button>
       </div>
       <div className=' w-[380px] pt-20'>
        <img   src={headerImg} alt='/'/>
       </div>
    </div>
  )
}

export default Header