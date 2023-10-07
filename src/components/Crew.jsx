import React, { useEffect, useRef, useState } from "react";

import data from '../common/data/data.json'

import { CREW } from "../common/SpaceObjects";

import mobileCrewBg from "/assets/crew/background-crew-mobile.jpg";

export default function Crew() {
  const [id, setId] = useState(0);

  const buttonRef = useRef(null);

  const handleClick = (crew) => {
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
      <img src={mobileCrewBg} alt="background-crew-mobile"className=" relative w-full h-screen" />
      {/* bg overlay */}
      <div className=" absolute top-0 w-full h-screen bg-[#0B0D17]/50 bg-cover"></div>

      <div className=" absolute top-28 w-full px-6">
        <div className=" flex flex-col items-center">

          <p className=" font-barlow-Condensed text-base uppercase tracking-[2.7px] mb-9">
            <span className=" text-[#FFFFFF]/40 font-bold tracking-[2.7px] mr-[18px]">02</span>Meet your crew
          </p>

          {data.crew.map( (crew, index) => {
            if (index === id) {
                return(
                  <div key={index}>
                    <img src={crew.images.png} alt="" className=" h-60" />
                  </div>
                )
            }
          })}
          
          {/* divider */}
          <div className=" w-full h-[1px] bg-[#383B4B] mb-8"></div>

          <div className=" flex w-[88px] justify-between">
            <button ref={buttonRef} onClick={ ()=> handleClick(CREW.COMMANDER)} className=" w-[10px] h-[10px] bg-[#383B4B] rounded-full focus:bg-white"></button>
            <button onClick={ ()=> handleClick(CREW.MISSION_SPECIALIST)} className=" w-[10px] h-[10px] bg-[#383B4B] rounded-full focus:bg-white"></button>
            <button onClick={ ()=> handleClick(CREW.PILOT)} className=" w-[10px] h-[10px] bg-[#383B4B] rounded-full focus:bg-white"></button>
            <button onClick={ ()=> handleClick(CREW.FLIGHT_ENGINEER)} className=" w-[10px] h-[10px] bg-[#383B4B] rounded-full focus:bg-white"></button>
          </div>

          {data.crew.map( (crew, index) => {
            if (index === id) {
              return <p className=" text-base text-[#FFFFFF]/40 font-bellefair uppercase mt-8 mb-3 tracking-widest" key={index}>{crew.role}</p>
            }
          })}

          {data.crew.map( (crew, index) => {
            if (index === id) {
              return <p className=" text-2xl font-bellefair text-white tracking-widest uppercase leading-[1.17] mb-8" key={index}>{crew.name}</p>
            }
          })}

          {data.crew.map( (crew, index) => {
            if (index === id) {
              return <p className=" text-base tracking-widest leading-[25px] text-center" key={index}>{crew.bio}</p>
            }
          })}

        </div>
      </div>
    </div>
  );
}
