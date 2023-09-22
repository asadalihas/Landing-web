import React from 'react'
import tarvelImg from '../../assests/travel-img.png'
import travelIcon from '../../assests/travel-icon.png'


function TravelInsurance() {
  return (
    <div id='TravelInsurance' className='flex justify-evenly pt-24 pb-20'>
        <div className='flex flex-col w-2/6 gap-9  pt-20'>
       <img  className='w-16' src={travelIcon} alt='/' ></img>
       <p className=' font-bold text-5xl'>
       Health Insurance
       </p>
       <p className=' w-4/5'>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry and uses Latin words combined with a handful of model words.</p>

          <button type="button" className="justify-around font-semibold text-white bg-[#003CFF] content-center items-center flex rounded-xl  text-sm w-[110px] h-[40px]">
               Get Started
            </button>
        
    </div>
    <div>
     <img src={tarvelImg} alt='/'/>
    </div>
   
 </div>
  )
}

export default TravelInsurance