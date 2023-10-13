import React, { useEffect, useRef, useState } from "react";

import data from "../common/data/data.json";

import { DESTINATIONS } from "../common/SpaceObjects";

import Destination_Toggle from "../destination_toggle";

import mobileDestinationBg from "/assets/destination/background-destination-mobile.jpg";
import tabletDestinationBg from "/assets/destination/background-destination-tablet.jpg";
import desktopDestinationBg from "/assets/destination/background-destination-desktop.jpg";

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
      <img src={mobileDestinationBg} alt="background-destination-mobile" className=" md:hidden relative w-full"/>
      <img src={tabletDestinationBg} alt="background-destination-tablet" className=" hidden lg:hidden md:block md:h-screen relative" />
      <img src={desktopDestinationBg} alt="background-destination-desktop" className=" hidden lg:block lg:h-full lg:w-full relative" />

      <div className=" absolute top-28 w-full px-6 md:px-10 md:top-[136px] lg:top-[212px] lg:px-14">
        <div className=" flex flex-col items-center lg:flex-row">

          <div className="flex flex-col items-center lg:basis-3/5 lg:pl-28 lg:items-start">
            <p className=" font-barlow-Condensed text-base text-white uppercase tracking-[2.7px] mb-8 md:w-full md:text-xl md:mb-16 lg:text-[28px] lg:mb-24">
              <span className=" text-[#FFFFFF]/40 font-bold tracking-[2.7px] mr-[18px] md:tracking-[3.38px]">01</span> Pick your destination
            </p>

            {/* Destination Image shows here based on btn clicked */}
            {data.destinations.map((destination, index) => {
              if (index === id) {
                return (
                  <div className="lg:ml-11" key={index}>
                    <img src={destination.images.png} alt="" className=" w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:h-[445px] lg:w-[445px]" />
                  </div>
                );
              }
            })}
          </div>

          <div className=" flex flex-col items-center lg:w-[445px] lg:items-start">
            <div className=" flex gap-5 mt-6 mb-8 md:mt-16 md:mb-14">
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
                  <p className=" text-[3.5rem] text-white font-bellefair uppercase leading-[1.15] tracking-[4px] mb-7 md:text-[5rem] md:mb-8 lg:text-[100px]" key={index}>{destination.name}</p>
                );
              }
            })}

            {/* Destination description shows here based on btn clicked */}
            {data.destinations.map((destination, index) => {
              if (index === id) {
                return (
                  <p className=" text-center text-base tracking-widest leading-[25px] mb-8 md:leading-7 md:mx-24 md:mb-14 lg:text-start lg:mx-0" key={index}>{destination.description}</p>
                );
              }
            })}

            {/* horizontal line */}
            <div className=" h-[1px] w-full bg-[#383B4B] md:w-[573px] md:mb-7 lg:w-[444px]"></div>

            <div className=" md:flex md:gap-[100px]">
              {/* Destination distance shows here based on btn clicked */}
              {data.destinations.map((destination, index) => {
                if (index === id) {
                  return (
                    <div className=" flex flex-col items-center my-8 md:my-0 lg:items-start" key={index}>
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
                    <div className=" flex flex-col items-center lg:items-start" key={index}>
                      <p className=" text-sm font-barlow-Condensed uppercase tracking-[2.36px] mb-4">Est. travel time</p>
                      <p className=" text-[1.75rem] text-white font-bellefair uppercase leading-8 " >{destination.travel}</p>
                    </div>
                  );
                }
              })}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
