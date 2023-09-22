import React from 'react'
import { useState } from 'react'
import {FiChevronDown} from 'react-icons/fi'

function AboutDropdown() {

    
  const [isActive1,setActive1] = useState(false);
  const [isActive2,setActive2] = useState(false);
  const [isActive3,setActive3] = useState(false);


  return (
    <div className='dropdown pt-6 '>
        <button onClick={e => setActive1(!isActive1 )} className='dropdown-btn flex justify-between pl-5 text-slate-600  drop-shadow-lg p-3 bg-white w-[540px] rounded-3xl h-12 font-bold'>
            Who we are ?
            <FiChevronDown className='mt-1' />
        </button>
       {isActive1 && (
         <div className='dropdown-content bg-white p-5 m-2 rounded-2xl '>
         <p>There are many variations of passages of Lorem Ipsum available, 
           but the majority have suffered alteration in some form by injected 
           humour or randomised words.
         </p>
     </div>
       )}

   <button onClick={e => setActive2(!isActive2 )} className='dropdown-btn flex justify-between pl-5 text-slate-600 mt-6 drop-shadow-lg p-3 bg-white w-[540px] rounded-3xl h-12 font-bold'>
            What is our mission ?
            <FiChevronDown className='mt-1' />
        </button>
       {isActive2 && (
         <div className='dropdown-content bg-white p-5 m-2 rounded-2xl '>
         <p>There are many variations of passages of Lorem Ipsum available, 
           but the majority have suffered alteration in some form by injected 
           humour or randomised words.
         </p>
     </div>
       )}

<button onClick={e => setActive3(!isActive3 )} className='dropdown-btn flex justify-between pl-5 text-slate-600 mt-6 drop-shadow-lg p-3 bg-white w-[540px] rounded-3xl h-12 font-bold'>
            What we believe ?
            <FiChevronDown className='mt-1' />
        </button>
       {isActive3 && (
         <div className='dropdown-content bg-white p-5 m-2 rounded-2xl '>
         <p>There are many variations of passages of Lorem Ipsum available, 
           but the majority have suffered alteration in some form by injected 
           humour or randomised words.
         </p>
     </div>
       )}

    </div>
  )
}

export default AboutDropdown