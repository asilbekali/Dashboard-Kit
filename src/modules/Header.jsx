import { useLocation } from 'react-router-dom'
import { navList } from '../hooks/paths'
import { LupaIcon, NotfiIcon } from '../assets/icons'
import { useState } from 'react'

const Header = () => {
  const { pathname } = useLocation()

  const [showInput, setShowInput] = useState(false)
  const [inputValue, setInputValue] = useState('')

  function handleBlur() {
    setTimeout(() => {
      setShowInput(false)
      setInputValue('')
    }, 2000)
  }

  return (
    <div className='flex items-center justify-between mb-[58px]'>
      <strong className='font-bold text-[24px] text-[#252733]'>{navList.find(item => item.path === pathname)?.title || 'Unknown Page'}</strong>
      <div className='flex items-center justify-between gap-[32px]'>

        <div className='flex items-center gap-[15px]'>
          <button className={`${showInput ? "hidden" : ""} cursor-pointer`} onClick={() => setShowInput(true)}>
            {<LupaIcon />}
          </button>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleBlur}
            className={`bg-white rounded-[17px] border-[1px] outline-none ${showInput ? "pl-[10px] p-[5px] border-slate-200 w-[180px] focus:shadow-sm duration-300 shadow-blue-950" : "w-0 border-transparent duration-300"}`}
            type="text"
            placeholder='Searching'
          />
        </div>

        <button className='cursor-pointer'>{<NotfiIcon />}</button>
        <span className='w-[1px] h-[32px] inline-block bg-[#DFE0EB]'></span>
        <p className='font-semibold'>Jones Ferdinand</p>
        <img className='cursor-pointer left-[1078px]' src="src/assets/imgs/avatar.svg" alt="avatar" width={54} height={54} />
      </div>
    </div>
  )
}

export default Header
