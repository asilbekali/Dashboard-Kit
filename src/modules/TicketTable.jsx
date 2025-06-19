import React from 'react';
import Avatar from "../assets/imgs/avatar.svg";
import Priority from '../components/Priority';
import { MoreIcon } from '../assets/icons';

const TicketTable = () => {
    return (
        <table className='w-full text-gray-600 text-sm font-medium bg-white shadow-md rounded-lg overflow-hidden'>
            <thead className='bg-gray-100'>
                <tr>
                    <th className='text-left py-4 px-6 border-b border-gray-300'>Ticket Details</th>
                    <th className='text-left py-4 px-6 border-b border-gray-300'>Customer Name</th>
                    <th className='text-left py-4 px-6 border-b border-gray-300'>Date</th>
                    <th className='text-left py-4 px-6 border-b border-gray-300'>Priority</th>
                </tr>
            </thead>
            <tbody>
                <tr className='hover:bg-gray-50 transition duration-200'>
                    <td className='flex items-center gap-6 py-4 px-6 border-b border-gray-300'>
                        <img className='w-12 h-12 rounded-full' src={Avatar} alt="avatar" />
                        <div>
                            <p className='font-semibold text-gray-800'>Contact Email not Linked</p>
                            <span className='text-gray-500 text-xs'>Updated 1 day ago</span>
                        </div>
                    </td>

                    <td className='py-4 px-6 border-b border-gray-300'>
                        <div>
                            <p className='font-semibold text-gray-800'>Tom Cruise</p>
                            <span className='text-gray-500 text-xs'>on 24.05.2019</span>
                        </div>
                    </td>

                    <td className='py-4 px-6 border-b border-gray-300'>
                        <div>
                            <p className='font-semibold text-gray-800'>May 26, 2019</p>
                            <span className='text-gray-500 text-xs'>6:30 PM</span>
                        </div>
                    </td>

                    <td className='py-4 px-6 border-b border-gray-300'>
                        <div className='flex items-center gap-4'>
                            <Priority id={1} />
                            <MoreIcon />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default TicketTable;
