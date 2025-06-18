import React from 'react'
import { useLocation } from 'react-router-dom'
import { navList } from '../hooks/paths'
import { LupaIcon } from '../assets/icons'

const Header = () => {

  const { pathname } = useLocation()

  return (
    <div className='flex items-center justify-between mb-[58px]'>
      <strong className='font-bold text-[24px] text-[#252733]'>{navList.find(item => item.path == pathname).title}</strong>
      <div>
        <button className='cursor-pointer' >{<LupaIcon/>}</button>
      </div>
    </div>
  )
}

export default Header