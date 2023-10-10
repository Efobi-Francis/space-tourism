import React, { useRef, useEffect, useState } from "react";

import data from "../common/data/data.json";

import { TECHNOLOGY } from "../common/SpaceObjects";

import mobileTechnologyBg from "/assets/technology/background-technology-mobile.jpg";
import tabletTechnologyBg from "/assets/technology/background-technology-tablet.jpg";


export default function Technology() {
  const [id, setId] = useState(0);

  const buttonRef = useRef(null);

  const handleClick = (technology, e) => {
    e.preventDefault();
    if (technology === TECHNOLOGY.LUNCH_VEHICLE) {
      setId(0);
    } else if (technology === TECHNOLOGY.SPACEPORT) {
      setId(1);
    } else if (technology === TECHNOLOGY.SPACE_CAPSULE) {
      setId(2);
    }
  };

  useEffect( ()=> {
    buttonRef.current.focus() //sets focus to the first button when the component renders
  },[])

  return (
    <div>
      <img src={mobileTechnologyBg} alt="background-technology-mobile" className=" relative w-full h-screen md:hidden"/>
      <img src={tabletTechnologyBg} alt="background-technology-tablet" className=" relative hidden md:block md:h-screen"/>

      <div className=" absolute top-28 w-full md:top-[136px]">
        <div className=" flex flex-col items-center">
            <p className=" font-barlow-Condensed text-base uppercase tracking-[2.7px] mb-9 px-6 md:px-10 md:w-full md:text-xl md:mb-16">
                <span className=" text-[#FFFFFF]/40 font-bold tracking-[2.7px] mr-[18px]">03</span> Space launch 101
            </p>

            {data.technology.map((technology, index) => {
                if (index === id) {
                return (
                    <div key={index} className=" md:w-full">
                        <img src={technology.images.landscape} alt="" className=" h-[170px] md:w-full md:h-[310px] " />
                    </div>
                );
                }
            })}

            <div className=" flex flex-col items-center mt-9 px-6 md:mt-14">
                <div className=" flex justify-between text-white font-bellefair w-[152px] md:w-[210px] md:text-2xl">
                    <button ref={buttonRef} onClick={ (e)=> handleClick(TECHNOLOGY.LUNCH_VEHICLE, e)} className='w-10 h-10 rounded-full border-2 border-white/40 
                      flex items-center justify-center focus:bg-white focus:text-[#0B0D17] md:w-[58px] md:h-[58px]'>1
                    </button>
                    <button onClick={ (e)=> handleClick(TECHNOLOGY.SPACEPORT, e)} className='w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center
                      focus:bg-white focus:text-[#0B0D17] md:w-[58px] md:h-[58px]'>2
                    </button>
                    <button onClick={ (e)=> handleClick(TECHNOLOGY.SPACE_CAPSULE, e)} className='w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center 
                      focus:bg-white focus:text-[#0B0D17] md:w-[58px] md:h-[58px]'>3
                    </button>
                </div>

                <p className=" uppercase tracking-widest mt-6 mb-3 md:mt-11 md:mb-4 md:tracking-[2.7px]">The terminology...</p>

                {data.technology.map((technology, index) => {
                    if (index === id) {
                        return <p className=" text-2xl text-white font-bellefair leading-[1.17] tracking-widest uppercase mb-8 md:text-[2.5rem]" key={index}>{technology.name}</p>
                    }
                })}

                {data.technology.map((technology, index) => {
                    if (index === id) {
                        return <p className=" text-base tracking-widest leading-[25px] text-center md:leading-[28px] md:mx-24" key={index}>{technology.description}</p>
                    }
                })}
            </div>

        </div>
      </div>
    </div>
  );
}
