import React, { useEffect, useRef, useState } from "react";

import data from "../common/data/data.json";


import { DESTINATIONS } from "../common/SpaceObjects";

import Destination_Toggle from "../destination_toggle";

import mobileDestinationBg from "/assets/destination/background-destination-mobile.jpg";

export default function DestinationLayout() {
  const [id, setId] = useState(0);

  const buttonRef = useRef(null)

  const handleClick = (destination, e) => {
    e.preventDefault()
    if (destination === DESTINATIONS.MOON) {
      setId(0);
    } else if (destination === DESTINATIONS.MARS) {
      setId(1);
    } else if (destination === DESTINATIONS.EUROPA) {
      setId(2);
    } else if (destination === DESTINATIONS.TITAN) {
      setId(3);
    }
  };

  useEffect( ()=> {
    buttonRef.current.focus()
  },[])


  return (
    <div>
      <img src={mobileDestinationBg} alt="background-destination-mobile" className=" relative w-full" />

      <div className=" absolute top-28 w-full px-6">
        <div className=" flex flex-col items-center">

          <p className=" font-barlow-Condensed text-base uppercase tracking-[2.7px] mb-8">
            <span className=" text-[#FFFFFF]/40 font-bold tracking-[2.7px] mr-[18px]">01</span> Pick your destination
          </p>

          {/* Destination Image shows here based on btn clicked */}
          {data.destinations.map((destination, index) => {
            if (index === id) {
              return (
                <div key={index}>
                  <img src={destination.images.png} alt="" className=" w-[170px] h-[170px]" />
                </div>
              );
            }
          })}

          <div className=" flex gap-5 mt-6 mb-8">
            <Destination_Toggle
              destination_name={DESTINATIONS.MOON}
              btnClick={(e) => handleClick(DESTINATIONS.MOON, e)}
              forwardRef={buttonRef}
            />

            <Destination_Toggle
              destination_name={DESTINATIONS.MARS}
              btnClick={(e) => handleClick(DESTINATIONS.MARS, e)}
            />

            <Destination_Toggle 
              destination_name={DESTINATIONS.EUROPA}
              btnClick={(e) => handleClick(DESTINATIONS.EUROPA, e)}
            />

            <Destination_Toggle 
              destination_name={DESTINATIONS.TITAN} 
              btnClick={(e) => handleClick(DESTINATIONS.TITAN, e)}
            />
          </div>

          {/* Destination name shows here based on btn clicked */}
          {data.destinations.map((destination, index) => {
            if (index === id) {
              return (
                <p className=" text-[3.5rem] text-white font-bellefair uppercase leading-[1.15] tracking-[4px] mb-7" key={index}>{destination.name}</p>
              );
            }
          })}

          {/* Destination description shows here based on btn clicked */}
          {data.destinations.map((destination, index) => {
            if (index === id) {
              return (
                <p className=" text-center text-base tracking-widest leading-[25px] mb-8" key={index}>{destination.description}</p>
              );
            }
          })}

          {/* horizontal line */}
          <div className=" h-[1px] w-full bg-[#383B4B]"></div>

          {/* Destination distance shows here based on btn clicked */}
          {data.destinations.map((destination, index) => {
            if (index === id) {
              return (
                <div className=" flex flex-col items-center my-8" key={index}>
                  <p className=" text-sm font-barlow-Condensed uppercase tracking-[2.36px] mb-4">Avg. distance</p>
                  <p className=" text-[1.75rem] text-white font-bellefair uppercase leading-8 " >{destination.distance}</p>
                </div>
              );
            }
          })}

          {/* Destination distance shows here based on btn clicked */}
          {data.destinations.map((destination, index) => {
            if (index === id) {
              return (
                <div className=" flex flex-col items-center" key={index}>
                  <p className=" text-sm font-barlow-Condensed uppercase tracking-[2.36px] mb-4">Est. travel time</p>
                  <p className=" text-[1.75rem] text-white font-bellefair uppercase leading-8 " >{destination.travel}</p>
                </div>
              );
            }
          })}

        </div>
      </div>

    </div>
  );
}
