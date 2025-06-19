import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ item }) => {
    return (
        <NavLink className={`gap-[24px] text-[20px] relative font-normal flex text-[#A4A6B3] items-center py-[20px] pl-[32px] hover:shadow-2xl hover:duration-200 duration-200`} to={item.path} >
            {item.icon}
            <span>{item.title}</span>
        </NavLink>
    )
}

export default NavItem