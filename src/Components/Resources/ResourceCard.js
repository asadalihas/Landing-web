import aboutIcon from "../../assests/profile-icon.png"
import {FaStar} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/bs'
import {BsArrowLeft} from 'react-icons/bs'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const CustomPrevButton = ({ onClick }) => (
  <button onClick={onClick} className="custom-prev-button  w-[48px] left-[45%] pl-4 h-[48px] rounded-xl border absolute top-[327px] ">
    <BsArrowLeft style={{color:"#003CFF"}}/>
  </button>
);

const CustomNextButton = ({ onClick }) => (
  <button onClick={onClick} className="border  w-[48px] left-[850px] pl-3 h-[48px] absolute hover:drop-shadow-2xl rounded-xl  bottom-[35px]">
    <BsArrowRight style={{color:"#003CFF"}}/>
  </button>
);

function ResourceCard() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevButton />,
    nextArrow: <CustomNextButton />,
  };

  

  return (
    <Slider {...settings}>
      <div className="slick-slide  mb-20  ">
        <div className="card">
          <div className='w-[826px] h-[250px] bg-white  ml-96 rounded-2xl mt-10 mb-10 drop-shadow-xl pl-10'>
            <div className='flex justify-between'>
                <div className='pt-8 w-16'>
                  <img className=' rounded-full w-32 ' src={aboutIcon} alt='/' />
                </div>
            <div className='pt-10 '>
                <p className=' font-bold'>Ellen kaye</p>
                 <p>Travel Insurance</p>
            </div>
            <div className='flex pr-5 pt-10'>
                 <p><FaStar style={{color:"yellow"}} /></p>
                 <p><FaStar style={{color:"yellow"}} /></p>
                 <p><FaStar style={{color:"yellow"}} /></p>
                 <p><FaStar style={{color:"yellow"}} /></p>
                 <p><FaStar style={{color:"yellow"}} /></p>
              </div>
            </div>
            <div className='pt-10'>
                 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Ut
                     labore et dolore magna aliqua_ Ut enim ad minim veniam, quis nostrud exercitation ullamco
                     laboris nisi Ut aliquip ex ea commodo consequat-</p>
            </div>  
          </div>  
        </div>
      </div>


      <div className="slick-slide 
       ">
        <div className="card">
          <div className='w-[826px] h-[250px] bg-white  ml-96 rounded-2xl mt-10 mb-10 drop-shadow-xl pl-10'>
            <div className='flex justify-between'>
                <div className='pt-8 w-16'>
                  <img className=' rounded-full w-32 ' src={aboutIcon} alt='/' />
                </div>
            <div className='pt-10 pr-[480px]'>
                <p className=' font-bold'>Ellen kaye</p>
                 <p>Travel Insurance</p>
            </div>
            <div className='flex pr-5 pt-10'>
                 <p><FaStar style={{color:"yellow"}} /></p>
                 <p><FaStar style={{color:"yellow"}} /></p>
                 <p><FaStar style={{color:"yellow"}} /></p>
                 <p><FaStar style={{color:"yellow"}} /></p>
                 <p><FaStar style={{color:"yellow"}} /></p>
              </div>
            </div>
            <div className='pt-10'>
                 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Ut
                     labore et dolore magna aliqua_ Ut enim ad minim veniam, quis nostrud exercitation ullamco
                     laboris nisi Ut aliquip ex ea commodo consequat-
                </p>
            </div>  
          </div>    
        </div>
      </div>


      <div className="slick-slide  ">
        <div className="card ">
          <div className='w-[826px] h-[250px] bg-white  ml-96 rounded-2xl mt-10 mb-10 drop-shadow-xl pl-10'>
            <div className='flex justify-between'>
                <div className='pt-8 w-16'>
                  <img className=' rounded-full w-32 ' src={aboutIcon} alt='/' />
                </div>
            <div className='pt-10 pr-[480px]'>
                <p className=' font-bold'>Ellen kaye</p>
                 <p>Travel Insurance</p>
            </div>
            <div className='flex pr-5 pt-10'>
                 <p><FaStar style={{color:"yellow"}} /></p>
                 <p><FaStar style={{color:"yellow"}} /></p>
                 <p><FaStar style={{color:"yellow"}} /></p>
                 <p><FaStar style={{color:"yellow"}} /></p>
                 <p><FaStar style={{color:"yellow"}} /></p>
              </div>
            </div>
            <div className='pt-10'>
                 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Ut
                     labore et dolore magna aliqua_ Ut enim ad minim veniam, quis nostrud exercitation ullamco
                     laboris nisi Ut aliquip ex ea commodo consequat-</p>
            </div>  
          </div>  
        </div>
      </div>
     
    
  </Slider>
  
    

    
  );
}

export default ResourceCard
 


