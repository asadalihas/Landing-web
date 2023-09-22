import React from 'react'
import mailIcon from '../../assests/mail-icon.png'
import bgImg from '../../assests/quote-bg-img.png'
import {GoDotFill} from 'react-icons/go'

function Quote() {
  return (
    <div style={{backgroundImage:`url(${bgImg})`, height:"1000px"}} >
        
         <div className='flex  h-[700px]  justify-center pt-40'>
            <div className='w-[600px] bg-[#003CFF] h-[700px] flex-col rounded-l-xl text-white'>
                <p className=' text-3xl pt-20 pl-10 pr-20 '>100% Satisfaction Guaranteed</p>
                <p className='pt-7 pl-10'>Lorem ipsum dolor sit amet eiusmod tempor labore<br></br>
                   dolore magna aliqua- Ut enim ad minimo laboris Ut<br></br>
                   aliquip ex ea commodo consequat</p>
                <p className=' text-3xl pt-10 pl-10' >What will be the next step ?</p>
                <div className='flex gap-2 pl-10 pt-7'>
                    <p className='pt-1'><GoDotFill /></p>
                    <p className=' text-xl'>We'll prepare a proposal</p>
                </div>
                <div className='flex gap-2 pl-10 pt-7'>
                    <p className='pt-1'><GoDotFill /></p>
                    <p className=' text-xl'>Together we discuss it</p>
                </div>
                <div className='flex gap-2 pl-10 pt-7'>
                    <p className='pt-1'><GoDotFill /></p>
                    <p className=' text-xl'>Let's start a policy</p>
                </div>
                <p  className=' text-3xl pl-10 pt-10'>Talk to an expert :</p>
                <div className='flex gap-10 pl-10 pt-7'>
                    <div className='flex gap-2'>
                    
                    <p className=' text-xl  text-white'>0333 567 9800</p>
                    </div>
                    
                </div>
                
            </div>
            <div className='w-[600px] bg-white h-[700px] flex-col pt-20 rounded-r-xl'>
                <div className='flex gap-44 justify-evenly '>
                    <div>
                    <p className=' text-3xl font-bold'>Get a free quote</p>
                    <p className=' text-xl pt-3'>Protect your self</p>
                    </div>
                    <div className=''>
                        <img src={mailIcon} alt='/'/>
                    </div>

                </div>
                
                <form>
                   <div class="grid gap-6  md:grid-cols-2 p-10 pb-5">
                      <div>
                       <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 drop-shadow-xl  text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required/>
                      </div>
                      <div>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 drop-shadow-xl text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number" required/>
                      </div>    
                    </div>
                    <div className='grid md:grid-cols-1 p-10 pt-0'>
                      <div>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 drop-shadow-xl text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required/>
                      </div>
                      <div>
                      <textarea id="message" rows="12" class="bg-gray-50 border border-gray-300 drop-shadow-xl text-sm rounded-xl mt-6 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message"></textarea>
                      </div>
                      <div className='ml-52'>
                      <button type="button" class="text-white bg-blue-700 mt-7 w-[120px] h-[50px] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium  rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get a quote</button>
                      </div>
                    </div>
 
                </form>
            </div>
         </div>       
    </div>
  )
}

export default Quote