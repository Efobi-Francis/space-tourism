import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

import logo from '/assets/shared/logo.svg'
import iconhamburger from '/assets/shared/icon-hamburger.svg'
import iconclose from '/assets/shared/icon-close.svg'


export default function RootLayout() {
  const [isClicked, setIsClicked] = useState(false);

  const handleMenuOpen = (e) => {
    e.preventDefault();
    setIsClicked(true)
  }

  const handleMenuClose = (e) => {
    e.preventDefault();
    setIsClicked(false)
  }

  let hideOpenIcon;
  if (isClicked) {
    hideOpenIcon = ` hidden`
  }

  let hideCloseIcon;
  if (!isClicked) {
    hideCloseIcon = ` hidden`
  }

  const btnActive = `uppercase mb-9 tracking-[2.7px] w-full relative before:block before:absolute before:bg-white before:w-1 before:h-8 before:top-0 
  before:bottom-0 before:my-auto before:right-0`
  
  const btnDefault = `uppercase mb-9 tracking-[2.7px] w-full`

  return (
    <div className=' font-barlow font-normal text-[#D0D6F9]'>

      <div className=" absolute top-6 w-full px-6 z-10 flex justify-between items-center">
        <Link to={'/'}>
          <img src={logo} alt="logo" className=' w-10 h-10' />
        </Link>

        <div className=' lg:hidden'>
          <button onClick={handleMenuOpen}>
            <img src={iconhamburger} alt="icon-hamburger" className={`${hideOpenIcon}`} />
          </button>

          <button onClick={handleMenuClose}>
            <img src={iconclose} alt="icon-close" className={` relative z-50 ${hideCloseIcon}`} />
          </button>

          {isClicked && (
            <div className=' absolute -top-6 right-0 w-[254px] h-screen bg-white/[0.04] backdrop-blur-[81.55px]'>

              <div className=' flex flex-col items-start text-white pl-8 relative top-[118px]'>
                <NavLink to='/'  className={({isActive}) => isActive ? `${btnActive}` : `${btnDefault}`}>
                  <span className=' mr-[14px] font-bold'>00</span>Home
                </NavLink>

                <NavLink to='destination' className={({isActive}) => isActive ? `${btnActive}` : `${btnDefault}`} >
                  <span className=' mr-[14px] font-bold'>01</span>Destination
                </NavLink>

                <NavLink to={'crew'} className={({isActive}) => isActive ? `${btnActive}` : `${btnDefault}`}>
                  <span className=' mr-[14px] font-bold'>02</span>Crew
                </NavLink>

                <NavLink to={'technology'} className={({isActive}) => isActive ? `${btnActive}` : `${btnDefault}`}>
                  <span className=' mr-[14px] font-bold'>03</span>Technology
                </NavLink>
              </div>
            </div>
          )}
        </div>

      </div>

      <main>
        <Outlet/>
      </main>

    </div>
  )
}
