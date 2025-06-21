import React, { useEffect, useState } from 'react';
import Avatar from "../assets/imgs/avatar.svg";
import { MoreIcon } from '../assets/icons';
import { motion, AnimatePresence } from 'framer-motion';

const TicketItem = () => {
    const [tickets, setTickets] = useState([]);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('flightFormData');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                const data = Array.isArray(parsed) ? parsed : [parsed];
                setTickets(data);
            } catch (error) {
                console.error("JSON parsing error:", error);
            }
        }
    }, []);

    const getPriority = (campaign) => {
        if (campaign === 'high') return { text: 'HIGH', bg: 'bg-red-500' };
        if (campaign === 'low') return { text: 'LOW', bg: 'bg-yellow-400 text-black' };
        return { text: 'MEDIUM', bg: 'bg-blue-500' };
    };

    const openModal = (ticket, index) => {
        setSelectedTicket({ ...ticket, index });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTicket(null);
    };

    const handleDelete = () => {
        const updated = tickets.filter((_, idx) => idx !== selectedTicket.index);
        setTickets(updated);
        localStorage.setItem('flightFormData', JSON.stringify(updated));
        closeModal();
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setSelectedTicket(prev => ({ ...prev, [id]: value }));
    };

    const handleUpdate = () => {
        const updated = tickets.map((t, idx) =>
            idx === selectedTicket.index ? { ...selectedTicket } : t
        );
        setTickets(updated);
        localStorage.setItem('flightFormData', JSON.stringify(updated));
        closeModal();
    };

    return (
        <>
            {tickets.map((ticket, index) => {
                const priority = getPriority(ticket.campaign);
                return (
                    <tr key={index} className="hover:bg-gray-100 transition duration-150 text-sm border-b border-gray-100">
                        <td className="flex items-center gap-4 py-4 px-6">
                            <img src={Avatar} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
                            <div>
                                <p className="font-medium text-gray-800">{ticket.yourName}</p>
                                <span className="text-xs text-gray-500">Updated recently</span>
                            </div>
                        </td>

                        <td className="py-4 px-6">
                            <p className="font-medium text-gray-800">{ticket.comment}</p>
                            <span className="text-xs text-gray-500">on {ticket.flyingDate}</span>
                        </td>

                        <td className="py-4 px-6">
                            <p className="font-medium text-gray-800">{ticket.flyingDate}</p>
                            <span className="text-xs text-gray-500">{ticket.flightTime || 'No time'}</span>
                        </td>

                        <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                                <span className={`text-xs font-bold text-white px-3 py-1 rounded-full uppercase ${priority.bg}`}>
                                    {priority.text}
                                </span>
                                <button onClick={() => openModal(ticket, index)}>
                                    <MoreIcon />
                                </button>
                            </div>
                        </td>
                    </tr>
                );
            })}

            <AnimatePresence>
                {isModalOpen && selectedTicket && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md space-y-4 relative"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-xl font-bold text-center">Ticket Details</h2>

                            <input
                                id="yourName"
                                value={selectedTicket.yourName}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                placeholder="Your Name"
                            />
                            <input
                                id="comment"
                                value={selectedTicket.comment}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                placeholder="Comment"
                            />
                            <input
                                id="flyingDate"
                                type="date"
                                value={selectedTicket.flyingDate}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />
                            <input
                                id="flightTime"
                                type="time"
                                value={selectedTicket.flightTime}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />

                            <div className="flex justify-between pt-2">
                                <button
                                    onClick={handleUpdate}
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition"
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={closeModal}
                                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition"
                                >
                                    Cancel
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default TicketItem;
