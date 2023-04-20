/* eslint-disable @next/next/no-img-element */
import React, { FC, useCallback, useState } from 'react'
import NavbarItem from './NavbarItem'
import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs'
import MobileMenu from './MobileMenu'
import AccountMenu from './AccountMenu'

const Navbar: FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  const toggleMenu = useCallback(() => {
    setShowMobileMenu((current) => !current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <nav className='w-full fixed z-40'>
      <div className="px-4 md:px-16 
      py-6 flex flex-row items-center 
      transition duration-500 
      bg-zinc-900 bg-opacity-90">
        <img className='h-4 lg:h-7' src="/images/logo.png" alt="" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label='Home' />
          <NavbarItem label='Series' />
          <NavbarItem label='Films' />
          <NavbarItem label='New & Popular' />
          <NavbarItem label='My List' />
          <NavbarItem label='Browse by languages' />
        </div>

        <div onClick={toggleMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className='text-white transition' />
          <MobileMenu visible={showMobileMenu} />
        </div>

        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-poiter transition">
            <BsSearch />
          </div>

          <div className="text-gray-200 hover:text-gray-300 cursor-poiter transition">
            <BsBell />
          </div>

          <div className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="" />
            </div>
            <BsChevronDown className='text-white transition' />
            <AccountMenu />
          </div>
        </div>



      </div>
    </nav>
  )
}

export default Navbar