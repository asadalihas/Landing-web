import React from 'react'
import onlineIcon from '../../assests/online-icon.png'
import serviceIcon from '../../assests/service-icon.png'
import forwardIcon from '../../assests/forward-icon.png'

function HeaderBottom() {
  return (
    <div className='flex justify-center gap-28 pt-20  pb-20  text-center '>
      <div>
        <div>
        <img className='pl-[140px]' src={onlineIcon} alt='/' />
        </div>
        <p className='font-bold pt-5 pb-5'>Online</p>
        <p className='w-80 text-gray-600'>
        In less than 60 seconds, you will get the specially curated list of best insurance plans
         suited to you and your destination. No more struggling with thousands of plans, which 
         are not suitable for you.

        </p>
      </div>
      <div>
        <div>
        <img className='pl-[140px]' src={serviceIcon} alt='/' />
        </div>
        <p className='font-bold pt-5 pb-5'>Simple</p>
        <p className='w-80 text-gray-600'>
        You get an easy to understand product, that provides you the perfect
         tailored options based on your destination country, at the most discounted 
         price. One Window, Matched Products & A simple shortlist.
        </p>
      </div>
      <div>
        <div>
        <img className='pl-[140px]' src={forwardIcon} alt='/' />
        </div>
        <p className='font-bold pt-5 pb-5'>Fast</p>
        <p className='w-80 text-gray-600'>
        Get the perfect policy that you need in 3 clicks !! We save your time , 
        so that you can use it on more important things like planning your travel,
         shopping for your upcoming travel and relaxing
        </p>
      </div>
      
     
    </div>
  )
}

export default HeaderBottom