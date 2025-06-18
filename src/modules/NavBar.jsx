import React from 'react'
import { Link } from 'react-router-dom'
import { LogoIcon } from '../assets/icons'
import { navList } from '../hooks/paths'
import NavItem from "../components/NavItem"

const NavBar = () => {
  return (
    <div className='w-[22%] bg-[#363740] h-[100vh] overflow-y-auto'>
      <div className='pt-[41px] pl-[21px] pb-[59px]'>
        <Link className='flex items-center gap-[12px]' to={"/"}>
          <LogoIcon />
          <span className='text-[#A4A6B3] text-[30px] font-bold'>Dashboard Kit</span>
        </Link>
      </div>
      <nav className='flex flex-col'>
        {navList.map(item => <NavItem key={item.id} item={item}/>)}
      </nav>
    </div>
  )
}

export default NavBar