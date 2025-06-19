import React from 'react'
import Avatar from "../assets/imgs/avatar.svg"

const TicketTable = () => {
    return (
        <table className='w-full text-[#9FA2B4] text-[14px] font-bold '>
            <thead>
                <tr className='text-start'>
                    <th className='text-start ps-8 pb-[11px] border-b-[1.5px] border-[#DFE0EB]'>Ticket details</th>
                    <th className='text-start ps-8 pb-[11px] border-b-[1.5px] border-[#DFE0EB]'>Customer name</th>
                    <th className='text-start ps-8 pb-[11px] border-b-[1.5px] border-[#DFE0EB]'>Date</th>
                    <th className='text-start ps-8 pb-[11px] border-b-[1.5px] border-[#DFE0EB]'>Priority</th>
                </tr>
            </thead>
            <tbody>
                <tr className='hover:shadow-lg hover:duration-200 duration-200'>
                    <td className='flex space-x-[24px]  border-b-[1.5px] border-[#DFE0EB] cursor-pointer pl-[31px] pt-[26px] pb-[26px]'>
                        <img className='w-[54px] h-[54px]' src={Avatar} alt="avatar" width={54} height={54} />
                        <div>
                            <p className='font-bold text-[#252733] text-[14px]'>Contact Email not Linked</p>
                            <span>Updated 1 day ago</span>
                        </div>
                    </td>

                    <td className='space-x-[24px]  border-b-[1.5px] border-[#DFE0EB] cursor-pointer pl-[31px] pt-[26px] pb-[26px]'>
                        <div>
                            <strong className='font-semibold text-[14px] text-[#252733]'>Tom Cruise</strong>
                            <p>on 24.05.2019</p>
                        </div>
                    </td>


                </tr>


            </tbody>
        </table>
    )
}

export default TicketTable