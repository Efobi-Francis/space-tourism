import React, { useEffect, useRef, useState } from "react";

import data from '../common/data/data.json'

import { CREW } from "../common/SpaceObjects";

import mobileCrewBg from "/assets/crew/background-crew-mobile.jpg";
import tabletCrewBg from "/assets/crew/background-crew-tablet.jpg";

export default function Crew() {
  const [id, setId] = useState(0);

  const buttonRef = useRef(null);

  const handleClick = (crew, e) => {
    e.preventDefault()
    if (crew === CREW.COMMANDER) {
      setId(0);
    } else if (crew === CREW.MISSION_SPECIALIST) {
      setId(1);
    } else if (crew === CREW.PILOT) {
      setId(2);
    } else if (crew === CREW.FLIGHT_ENGINEER) {
      setId(3);
    }
  };

  useEffect(() => {
    buttonRef.current.focus()
  }, []);

  return (
    <div>
      <img src={mobileCrewBg} alt="background-crew-mobile"className=" relative w-full h-screen md:hidden" />
      <img src={tabletCrewBg} alt="background-crew-tablet"className=" relative hidden md:block md:h-screen" />

      {/* bg overlay */}
      <div className=" absolute top-0 w-full h-screen bg-[#0B0D17]/50 bg-cover"></div>

      <div className=" absolute top-28 w-full px-6 md:px-10 md:top-[136px] md:bottom-0">
        <div className=" flex flex-col items-center md:h-full">

          <p className=" font-barlow-Condensed text-base text-white uppercase tracking-[2.7px] mb-9 md:w-full md:text-xl md:order-1 md:mb-16">
            <span className=" text-[#FFFFFF]/40 font-bold tracking-[2.7px] mr-[18px]">02</span>Meet your crew
          </p>

          {data.crew.map( (crew, index) => {
            if (index === id) {
                return(
                  <div key={index} className=" md:order-last md:h-full md:flex md:items-end">
                    <img src={crew.images.png} alt="" className=" h-60 md:h-[532px]" />
                  </div>
                )
            }
          })}
          
          {/* divider */}
          <div className=" w-full h-[1px] bg-[#383B4B] mb-8 md:hidden"></div>

          <div className=" flex w-[88px] justify-between md:order-5">
            <button ref={buttonRef} onClick={ (e)=> handleClick(CREW.COMMANDER, e)} className=" w-[10px] h-[10px] bg-[#383B4B] rounded-full focus:bg-white"></button>
            <button onClick={ (e)=> handleClick(CREW.MISSION_SPECIALIST, e)} className=" w-[10px] h-[10px] bg-[#383B4B] rounded-full focus:bg-white"></button>
            <button onClick={ (e)=> handleClick(CREW.PILOT, e)} className=" w-[10px] h-[10px] bg-[#383B4B] rounded-full focus:bg-white"></button>
            <button onClick={ (e)=> handleClick(CREW.FLIGHT_ENGINEER, e)} className=" w-[10px] h-[10px] bg-[#383B4B] rounded-full focus:bg-white"></button>
          </div>

          {data.crew.map( (crew, index) => {
            if (index === id) {
              return <p className=" text-base text-[#FFFFFF]/40 font-bellefair uppercase mt-8 mb-3 tracking-widest md:order-2 md:text-2xl md:mt-0 md:mb-4" key={index}>{crew.role}</p>
            }
          })}

          {data.crew.map( (crew, index) => {
            if (index === id) {
              return <p className=" text-2xl font-bellefair text-white tracking-widest uppercase leading-[1.17] mb-8 md:order-3 md:text-[2.5rem]" key={index}>{crew.name}</p>
            }
          })}

          {data.crew.map( (crew, index) => {
            if (index === id) {
              return <p className=" text-base tracking-widest leading-[25px] text-center md:order-4 md:leading-[28px] md:mx-24 md:mb-12" key={index}>{crew.bio}</p>
            }
          })}

        </div>
      </div>
    </div>
  );
}
