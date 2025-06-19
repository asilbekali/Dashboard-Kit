import React from 'react';
import TableTopAction from "../components/TableTopAction";
import TicketTable from '../modules/TicketTable';
import { useNavigate } from 'react-router-dom';

const Tickets = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-white w-full rounded-lg border border-gray-300 shadow-sm'>
      <div className='bg-white px-8 mt-8 pb-12 flex items-center justify-between'>
        <h2 className='font-semibold text-lg text-gray-800'>All Tickets</h2>
        <div className='flex items-center gap-4'>
          <TableTopAction />
          <button onClick={() => navigate("create")} 
          className='py-2 px-6 rounded-full bg-green-600 text-white font-medium shadow-md hover:bg-green-500 hover:shadow-lg transition duration-200'>Add Ticket</button>
        </div>
      </div>
      <TicketTable />
    </div>
  );
};

export default Tickets;