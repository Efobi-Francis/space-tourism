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

  const btnActive = ` mb-9 w-full relative before:block before:absolute before:bg-white before:w-1 before:h-8 before:top-0 
  before:bottom-0 before:my-auto before:right-0`
  const btnDefault = `mb-9 w-full`

  const tabletBtnActive = `relative before:block before:absolute before:w-9 before:h-[3px] before:bg-white before:w-full before:-bottom-9`
  const desktopBtnHover = `relative hover:before:block hover:before:absolute hover:before:w-9 hover:before:h-[3px] hover:before:bg-white/40 hover:before:w-full hover:before:-bottom-9`

  return (
    <div className=' font-barlow font-normal text-[#D0D6F9]'>

      <div className=" absolute top-6 w-full px-6 z-10 flex justify-between items-center md:px-10 lg:px-14 lg:top-16">
        <Link to={'/'}>
          <img src={logo} alt="logo" className=' w-10 h-10 md:w-12 md:h-12 lg:mr-16' />
        </Link>

        {/* navbar horzontal line */}
        <div className=' hidden lg:block w-[673px] h-[1px] bg-white/20'></div>

        {/* mobile menu */}
        <div className=' md:hidden'>
          <button onClick={handleMenuOpen}>
            <img src={iconhamburger} alt="icon-hamburger" className={`${hideOpenIcon}`} />
          </button>

          <button onClick={handleMenuClose}>
            <img src={iconclose} alt="icon-close" className={` relative z-50 ${hideCloseIcon}`} />
          </button>

          {isClicked && (
            <div className=' absolute -top-6 right-0 w-[254px] h-screen bg-white/[0.04] backdrop-blur-[81.55px]'>

              <div className=' flex flex-col items-start text-white uppercase tracking-[2.7px] pl-8 relative top-[118px]'>
                <NavLink to={'/'}  className={({isActive}) => isActive ? `${btnActive}` : `${btnDefault}`}>
                  <span className=' mr-[14px] font-bold'>00</span>Home
                </NavLink>

                <NavLink to={'destination'} className={({isActive}) => isActive ? `${btnActive}` : `${btnDefault}`} >
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
        {/* mobile menu end */}

        {/* tablet menu */}
        <div className=' hidden lg:hidden relative md:flex justify-center w-[356px] gap-9 font-barlow-Condensed text-sm text-white uppercase tracking-[0.15em] '>
          <div className=' absolute w-[450px] h-24 bg-white/[0.04] -top-10 -right-10 -z-10'></div>
          
          <NavLink to={'/'} className={({isActive}) => isActive ? `${tabletBtnActive}`:''}>
            <span className=''>Home</span>
          </NavLink>
          <NavLink to={'destination'} className={({isActive}) => isActive ? `${tabletBtnActive}`:''}>
            <span>Destination</span>
          </NavLink>
          <NavLink to={'crew'} className={({isActive}) => isActive ? `${tabletBtnActive}`:''}>
            <span>Crew</span>
          </NavLink>
          <NavLink to={'technology'} className={({isActive}) => isActive ? `${tabletBtnActive}`:''}>
            <span>Technology</span>
          </NavLink>
        </div>
        {/* tablet menu end */}

        {/* desktop menu */}
        <div className=' hidden relative lg:flex justify-center w-[542px] gap-14 font-barlow-Condensed text-sm text-white uppercase tracking-[0.15em] basis-3/5'>

          {/* navbar blur background */}
          <div className=' absolute w-[830px] h-24 bg-white/[0.04] backdrop-blur-[81.55px] -top-10 -right-14 -z-10'></div>

          <NavLink to={'/'} className={({isActive}) => isActive ? `${tabletBtnActive}`:`${desktopBtnHover}`}>
            <span className=' mr-[14px] font-bold'>00</span>Home
          </NavLink>
          <NavLink to={'destination'} className={({isActive}) => isActive ? `${tabletBtnActive}`:`${desktopBtnHover}`}>
            <span className=' mr-[14px] font-bold'>01</span>Destination
          </NavLink>
          <NavLink to={'crew'} className={({isActive}) => isActive ? `${tabletBtnActive}`:`${desktopBtnHover}`}>
            <span className=' mr-[14px] font-bold'>02</span>Crew
          </NavLink>
          <NavLink to={'technology'} className={({isActive}) => isActive ? `${tabletBtnActive}`:`${desktopBtnHover}`}>
            <span className=' mr-[14px] font-bold'>03</span>Technology
          </NavLink>
        </div>
        {/* desktop menu end */}

      </div>

      <main>
        <Outlet/>
      </main>

    </div>
  )
}
