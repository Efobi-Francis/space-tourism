import React from 'react'

import mobileHomeBg from '../assets/home/background-home-mobile.jpg'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault();
    navigate('destination');
  }

  return (
    <div className=''>
      <img src={mobileHomeBg} alt="" className=' relative h-screen'/>

      <div className=' absolute top-28 w-full px-6'>

        <div className=" flex flex-col items-center mb-20">
          <p className=" font-barlow-Condensed text-base uppercase mb-9 tracking-[0.3em]">So, you want to travel to</p>
          <p className=" font-bellefair text-white text-[5rem] uppercase inline-block tracking-widest leading-none mb-12">Space</p>
          <p className=" text-center text-base leading-6 tracking-widest">
            Let's face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we'll give you a truly out of this world experience!
          </p>
        </div>

        <div className=" flex justify-center">
          <button onClick={handleClick} className=" w-[150px] h-[150px] bg-white rounded-full flex justify-center items-center uppercase text-xl">
            <span className=' tracking-widest text-[#0B0D17]'>Explore</span>
          </button>
        </div>

      </div>
    </div>
  )
}
