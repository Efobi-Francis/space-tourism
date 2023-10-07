import React, { useEffect, useState } from "react";

import data from "../common/data/data.json";

import { DESTINATIONS } from "../common/SpaceObjects";

export default function Destination_Toggle(props) {
  const { destination_name, btnClick } = props;

  const [active, setActive] = useState(false)

  const btnActiveStyle = `active:text-white focus:text-white`

  useEffect( ()=>{
    setActive(true)
  }, [])

  const getDestinationName = () => {
    switch (destination_name) {
      case DESTINATIONS.MOON:
        return (
          <>
            {data.destinations.map((destinaton, index) => {
              if (index === 0) {
                return <p key={index}>{destinaton.name}</p>;
              }
            })}
          </>
        );

      case DESTINATIONS.MARS:
        return (
          <>
            {data.destinations.map((destinaton, index) => {
              if (index === 1) {
                return <p key={index}>{destinaton.name}</p>;
              }
            })}
          </>
        );

      case DESTINATIONS.EUROPA:
        return (
          <>
            {data.destinations.map((destinaton, index) => {
              if (index === 2) {
                return <p key={index}>{destinaton.name}</p>;
              }
            })}
          </>
        );

      case DESTINATIONS.TITAN:
        return (
          <>
            {data.destinations.map((destinaton, index) => {
              if (index === 3) {
                return <p key={index}>{destinaton.name}</p>;
              }
            })}
          </>
        );

      default:
        break;
    }
  };

  return (
    <button onClick={btnClick} 
        className={`font-barlow-Condensed uppercase leading-none tracking-[2.36px] 
        ${active ? `${btnActiveStyle} focus:before:block focus:before:inset-6 focus:before:left-0 focus:before:right-0 
        focus:before:mx-auto focus:before:absolute focus:before:w-9 focus:before:h-[3px] focus:before:bg-white relative `: ``}`
    }>
        {getDestinationName()}
    </button>
  )
}
