import React from 'react'
import studentImg from '../../assests/studentImg.png'
import studentIcon from '../../assests/Student-Icon.png'

function StudentInsurance() {
  return (
    <div id='HealthInsurance' className='flex justify-evenly pt-20  pb-20'>
       
       <div>
        <img src={studentImg} alt='/'/>
       </div>
       <div id='Product-HealthInsurance' className='flex flex-col w-2/6 gap-9  pt-20'>
          <img  className='w-16' src={studentIcon} alt='/' ></img>
          <p className=' font-bold text-5xl'>
          Health Insurance
          </p>
          <p className=' w-4/5'>Lorem Ipsum is simply dummy text of the printing and typesetting
             industry and uses Latin words combined with a handful of model words.</p>

             <button type="button" className="justify-around font-semibold text-white bg-[#003CFF] content-center items-center flex rounded-xl  text-sm w-[110px] h-[40px]">
               Get Started
            </button>
           
       </div>
    </div>
  )
}

export default StudentInsurance