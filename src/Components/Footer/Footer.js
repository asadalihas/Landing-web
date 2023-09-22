import React from 'react'

import Swiftlogo from "../../assests/Swift-logo.png"
import twitter from "../../assests/twitterIcon.png"
import insta from "../../assests/instaIcon.png"
import fb from "../../assests/fbIcon.png"
import yt from "../../assests/ytIcon.png"


function Footer() {
  return (
    <div className='pb-10 '>
        <div className='flex justify-around pt-20'>
            <div className='pt-3'>
                <img src={Swiftlogo} alt='/'></img>
                
            </div>
            <div className='flex gap-36  leading-9'>
                <div>
                    <p className=' font-bold text-[#8E8C94]'>Guidelines</p>
                    <p>Privacy Policy</p>
                    <p>Resources</p>
                    <p>Terms of Use</p>

                </div>
                <div>
                    <p className=' font-bold text-[#8E8C94]'>Product</p>
                    <p>Student Insurance</p>
                    <p>Travel Insurance</p>
                    
                </div>
                <div>
                    <p className=' font-bold text-[#8E8C94]'>Company</p>
                    <p>Services</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>
            
            </div>
                
        </div>
                <div className='flex justify-end pr-40 gap-4 pt-10'>
                 <img src={twitter} alt='/'/>
                 <img src={insta} alt='/'/>
                 <img src={fb} alt='/'/>
                 <img src={yt} alt='/'/>
                
                   
                </div>
    </div>
  )
}

export default Footer