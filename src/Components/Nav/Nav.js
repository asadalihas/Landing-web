import {BiCaretDown} from 'react-icons/bi'
import React, { useEffect, useState } from 'react';
import logo from '../../assests/nav-logo.png'
import callingIcon from "../../assests/calling-Icon.png"

function Nav() {

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const [isActive1,setActive1] = useState(false);
  return (
    
    <nav class={`${scrolling ? 'bg-white ' : 'bg-gradient-to-r from-pink-200  via-white via-50% to-blue-200'}  sticky top-0 z-10 transition-all duration-600 ease-linear`}>
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div class="relative flex h-24 items-center justify-between">
             <div class="flex flex-1 items-center justify-center  sm:items-stretch sm:justify-between">
             <div class="flex flex-shrink-0 items-center">
            <img className="w-[225px] h-[28px]"  src={logo} alt="/" />
             </div>
             <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4 mt-2 ">
              <a href="/" class="px-3 active:text-white py-2 text-sm font-medium ">HOME</a>
              <a href="/" class="px-3 py-2 text-sm font-medium ">PRODUCTS</a>
              <a href="/" class="px-3 py-2 text-sm font-medium ">ABOUT</a>
              <a href="/" class="px-3 py-2 text-sm font-medium ">QUOTES</a>
                  <button onClick={e => setActive1(!isActive1)} className='dropdown-btn px-3 flex py-1 text-base font-medium  '>
                        Resource
                      <BiCaretDown style={{marginTop:"4px"}}/>
                  </button>
                 {isActive1 && (
              <div className='dropdown-content absolute right-[295px] p-3 ml-[367px] transition  duration-300 ease-in-out rounded-sm bg-white mt-[35px] '>
                 <p><a href="/" class=" ">Reviews</a></p>
                 <p><a href="/" class=" ">Feature</a></p>
                 <p><a href="/" class=" ">Contact</a></p>
               </div>
                        )}
              <a href="/" class="px-3 py-2 text-sm font-medium ">BLOG</a>
            </div>
             </div>
             </div>
             <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div class="relative ml-3">
            <div>
              <button type="button" className="justify-around font-bold  hover:bg-[#003CFF] transition duration-300 ease-in-out hover:text-white content-center items-center flex drop-shadow-xl rounded-full bg-white text-sm w-44 h-12">
               0333 567 8900
               <img className='h-8 rounded-2xl ' src={callingIcon} alt='/' />
              </button>
            </div>
  
           
           
          </div>
             </div>
        </div>
      </div> 
    </nav>
   
  )
}

export default Nav