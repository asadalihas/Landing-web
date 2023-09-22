import React from 'react'
import contactIcon from '../../assests/contact-icon.png'

function ResourceContact() {
  return (
    <div className='bg-[#0036E6] h-[280px] pl-48 flex pt-[80px] gap-10  pb-[80px]'>
        <div className=' text-white text-4xl w-60 '>
            <p>We have got you <span className=' text-blue-500 font-bold '>covered</span></p>
        </div>
        <div className=' text-white w-[650px]'>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className=' text-2xl pt-5  marker:'>
            We have got you covered
            </p>
       </div>
        <div className='pl-14 pt-16'>
        <button type="button" className="justify-around border border-grey-200 font-semibold text-[#0036E6] hover:bg-blue-900 transition duration-200 ease-in-out hover:text-white content-center items-center flex rounded-xl bg-white text-sm w-32 h-12">
               Contact us
             <img className='h-8 rounded-2xl ' src={contactIcon} alt='/' />
            </button>
        </div>
    </div>
  )
}

export default ResourceContact