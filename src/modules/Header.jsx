import { useLocation } from 'react-router-dom';
import { navList } from '../hooks/paths';
import { LupaIcon, NotfiIcon } from '../assets/icons';
import { useState } from 'react';

const Header = () => {
  const { pathname } = useLocation();

  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  function handleBlur() {
    setTimeout(() => {
      setShowInput(false);
      setInputValue('');
    }, 2000);
  }

  return (
    <div className='flex items-center justify-between mb-14 px-8 py-4 bg-white shadow-lg rounded-lg'>
      <strong className='font-bold text-2xl text-gray-800'>
        {navList.find(item => item.path === pathname)?.title || 'Unknown Page'}
      </strong>
      <div className='flex items-center gap-8'>
        {/* Search Section */}
        <div className='flex items-center gap-4'>
          <button 
            className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition ${showInput ? "hidden" : "block"}`} 
            onClick={() => setShowInput(true)}
          >
            <LupaIcon className='text-gray-600' />
          </button>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleBlur}
            className={`rounded-full border focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${showInput ? "pl-4 py-2 border-gray-300 w-48 shadow" : "w-0 border-transparent"}`}
            type="text"
            placeholder='Search...'
          />
        </div>

        {/* Notification Icon */}
        <button className='p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition'>
          <NotfiIcon className='text-gray-600' />
        </button>
        
        {/* Divider */}
        <span className='w-px h-8 bg-gray-300'></span>
        
        {/* User Info */}
        <p className='font-medium text-gray-800'>Jones Ferdinand</p>
        <img 
          className='w-12 h-12 rounded-full border-2 border-gray-300 hover:border-blue-500 transition' 
          src="src/assets/imgs/avatar.svg" 
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
