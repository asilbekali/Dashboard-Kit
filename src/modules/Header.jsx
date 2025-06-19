import { useLocation } from 'react-router-dom';
import { pageRouteList } from '../hooks/paths';
import { LupaIcon, NotfiIcon } from '../assets/icons';
import { useState } from 'react';

const Header = () => {
  const { pathname } = useLocation();

  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);

  function handleBlur() {
    setTimeout(() => {
      setShowInput(false);
      setInputValue('');
    }, 2000);
  }

  return (
    <div className='flex items-center justify-between mb-14 px-8 py-4 bg-white shadow-lg rounded-lg relative'>
      <strong className='font-bold text-2xl text-gray-800'>
        {pageRouteList.find(item => item.path === pathname)?.title || 'Unknown Page'}
      </strong>
      <div className='flex items-center gap-8'>
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

        <button
          className='p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition relative'
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <NotfiIcon className='text-gray-600' />
          {showNotifications && (
            <div className='absolute top-12 right-0 w-72 bg-white rounded-lg shadow-lg py-4 px-6 z-50'>
              <p className='font-semibold text-gray-800 mb-3'>Notifications</p>
              <ul className='space-y-3'>
                <li className='p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition'>
                  <p className='text-sm font-medium text-gray-700'>You have a new message</p>
                  <span className='text-xs text-gray-500'>2 minutes ago</span>
                </li>
                <li className='p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition'>
                  <p className='text-sm font-medium text-gray-700'>System update completed</p>
                  <span className='text-xs text-gray-500'>10 minutes ago</span>
                </li>
                <li className='p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition'>
                  <p className='text-sm font-medium text-gray-700'>Your profile has been viewed</p>
                  <span className='text-xs text-gray-500'>1 hour ago</span>
                </li>
              </ul>
            </div>
          )}
        </button>

        <span className='w-px h-8 bg-gray-300'></span>
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