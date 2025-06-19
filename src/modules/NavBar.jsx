import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../assets/icons';
import { navList } from '../hooks/paths';
import NavItem from "../components/NavItem";

const NavBar = () => {
  return (
    <div className='w-[20%] bg-gray-800 h-screen shadow-lg overflow-y-auto flex flex-col'>
      <div className='pt-10 px-6 pb-16'>
        <Link className='flex items-center gap-3' to={'/'}>
          <LogoIcon className='text-white w-8 h-8' />
          <span className='text-white text-2xl font-semibold tracking-wide'>Dashboard Kit</span>
        </Link>
      </div>

      <nav className='flex flex-col space-y-2'>
        {navList.map(item => (
          <NavItem key={item.id} item={item} />
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
