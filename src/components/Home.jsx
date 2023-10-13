import React from 'react'
import { useNavigate } from 'react-router-dom'

import mobileHomeBg from '/assets/home/background-home-mobile.jpg'
import tabletHomeBg from '/assets/home/background-home-tablet.jpg'
import desktopHomeBg from '/assets/home/background-home-desktop.jpg'

export default function Home() {

  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault();
    navigate('destination');
  }

  return (
    <div className=''>
      <img src={mobileHomeBg} alt="background-home-mobile" className=' relative h-screen md:hidden'/>
      <img src={tabletHomeBg} alt="background-home-tablet" className=' relative hidden lg:hidden md:block md:h-screen'/>
      <img src={desktopHomeBg} alt="background-home-desktop" className=' relative hidden lg:block lg:h-full lg:w-full'/>

      <div className=' absolute top-28 w-full px-6 md:top-[202px] lg:top-[347px] lg:flex lg:justify-between lg:items-center lg:px-[165px]'>

        <div className=" flex flex-col items-center mb-20 md:mx-24 md:mb-[156px] lg:items-start lg:mx-0 lg:w-[450px] lg:mb-0">
          <p className=" font-barlow-Condensed text-base uppercase mb-9 tracking-[0.2em] md:tracking-[3.38px] md:text-xl md:mb-6 lg:text-[28px]">So, you want to travel to</p>
          <p className=" font-bellefair text-white text-[5rem] uppercase inline-block tracking-wider leading-none mb-12 md:text-[150px] md:leading-[150px] md:mb-6 lg:tracking-normal">Space</p>
          <p className=" text-center text-base leading-6 tracking-widest md:leading-7 lg:text-start">
            Let's face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we'll give you a truly out of this world experience!
          </p>
        </div>

        <div className=" flex justify-center">
          <button onClick={handleClick} className=" w-[150px] h-[150px] bg-white rounded-full flex justify-center items-center uppercase text-xl 
          md:w-[242px] md:h-[242px] md:text-[40px] md:leading-9 lg:w-[274px] lg:h-[274px]">
            <span className=' tracking-widest text-[#0B0D17] md:tracking-[2px]'>Explore</span>
          </button>
        </div>

      </div>
    </div>
  )
}
