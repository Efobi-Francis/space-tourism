import React, { useRef, useEffect, useState } from "react";

import data from "../common/data/data.json";

import { TECHNOLOGY } from "../common/SpaceObjects";

import mobileTechnologyBg from "/assets/technology/background-technology-mobile.jpg";

export default function Technology() {
  const [id, setId] = useState(0);

  const buttonRef = useRef(null);

  const handleClick = (technology) => {
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
      <img src={mobileTechnologyBg} alt="background-technology-mobile" className=" relative w-full h-screen"/>

      <div className=" absolute top-28 w-full">
        <div className=" flex flex-col items-center">
            <p className=" font-barlow-Condensed text-base uppercase tracking-[2.7px] mb-9 px-6">
                <span className=" text-[#FFFFFF]/40 font-bold tracking-[2.7px] mr-[18px]">03</span> Space launch 101
            </p>

            {data.technology.map((technology, index) => {
                if (index === id) {
                return (
                    <div key={index}>
                        <img src={technology.images.landscape} alt="" className=" h-[170px]" />
                    </div>
                );
                }
            })}

            <div className=" flex flex-col items-center mt-9 px-6">
                <div className=" flex justify-between text-white font-bellefair w-[152px]">
                    <button ref={buttonRef} onClick={ ()=> handleClick(TECHNOLOGY.LUNCH_VEHICLE)} className=" w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center focus:bg-white focus:text-[#0B0D17]">1</button>
                    <button onClick={ ()=> handleClick(TECHNOLOGY.SPACEPORT)} className=" w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center focus:bg-white focus:text-[#0B0D17]">2</button>
                    <button onClick={ ()=> handleClick(TECHNOLOGY.SPACE_CAPSULE)} className=" w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center focus:bg-white focus:text-[#0B0D17]">3</button>
                </div>

                <p className=" uppercase tracking-widest mt-6 mb-3">The terminology...</p>

                {data.technology.map((technology, index) => {
                    if (index === id) {
                        return <p className=" text-2xl text-white font-bellefair leading-[1.17] tracking-widest uppercase mb-8" key={index}>{technology.name}</p>
                    }
                })}

                {data.technology.map((technology, index) => {
                    if (index === id) {
                        return <p className=" text-base tracking-widest leading-[25px] text-center" key={index}>{technology.description}</p>
                    }
                })}
            </div>

        </div>
      </div>
    </div>
  );
}
