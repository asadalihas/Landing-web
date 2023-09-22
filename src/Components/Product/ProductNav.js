import React from 'react'
import navIcon1 from '../../assests/product-student-icon.png'
import navIcon2 from '../../assests/product-travel-icon.png'


function ProductNav() {
  return (
    
      
    <div className='flex justify-center gap-20  pt-8 pb-8 '>
    
         
           <div className='flex gap-2'>
                <div>
                    <img className='w-8' src={navIcon1} alt='/' />
                </div>
                <div className='mr-20 pt-1'>
                    <a id='HealthInsurance' href='/'>Student Insurance</a>
                </div>
           </div>
            
            <div className='flex gap-2'>
                 <div>
                     <img className='w-8' src={navIcon2} alt='/' />
                 </div>
                 <div className='mr-20 pt-1'>
                     <a id='HealthInsurance' href='/'>Student Insurance</a>
                 </div>
            </div>

          
      
    </div>
   
    
  )
}

export default ProductNav