import React from 'react'
import TableTopAction from "../components/TableTopAction"

const Tickets = () => {
  return (
    <div className='bg-white w-[100%] h-[942px] rounded-[8px] border-[1px] border-[#DFE0EB]'>
      <div className='bg-white px-[32px] mt-[32px] pb-[48px] flex items-center justify-between'>
        <h2 className='font-bold text-[19px]'>All tickets</h2>
        <div className='flex items-center gap-[15px]'>
          <TableTopAction />
          <button className='border-none p-[7px] rounded-[20px] w-[120px] bg-green-700 text-white hover:shadow-lg shadow-black duration-300'>Add t icket</button>
        </div>
      </div>
    </div>
  )
}

export default Tickets