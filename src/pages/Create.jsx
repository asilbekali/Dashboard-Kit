import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    comment: '',
    campaign: 'medium',
    flyingDate: '',
    yourName: '',
    flightTime: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'file' ? files[0]?.name : value,
    }));
  };

  const isValidForm = () => {
    const { comment, campaign, flyingDate, yourName, flightTime, photo } = formData;
    return comment && campaign && flyingDate && yourName && flightTime && photo;
  };

  const handleSubmit = () => {
    if (!isValidForm()) {
      alert("Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }

    try {
      const existingData = JSON.parse(localStorage.getItem('flightFormData')) || [];

      const updatedData = Array.isArray(existingData)
        ? [...existingData, formData]
        : [existingData, formData];

      localStorage.setItem('flightFormData', JSON.stringify(updatedData));

      alert('Form data has been added to localStorage!');

      navigate(-1); // Oldingi sahifaga qaytish
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
      alert("Xatolik yuz berdi.");
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-[rgba(221,226,255,0.4)] min-h-screen">
      <div className="flex justify-between w-full max-w-4xl mb-8">
        <button
          onClick={() => navigate(-1)}
          className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded shadow-lg transition"
        >
          Back
        </button>
        <h1 className="text-2xl font-semibold text-gray-800">Flight Form</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl">
        <div className="space-y-6">
          <div>
            <label htmlFor="comment" className="block text-gray-700 font-medium">Enter Comment</label>
            <input
              id="comment"
              type="text"
              placeholder="Enter..."
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 p-3"
              value={formData.comment}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="campaign" className="block text-gray-700 font-medium">Choose Level</label>
            <select
              id="campaign"
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 p-3"
              value={formData.campaign}
              onChange={handleChange}
            >
              <option value="medium">Medium</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>

          <div>
            <label htmlFor="flyingDate" className="block text-gray-700 font-medium">Enter Flying Date</label>
            <input
              id="flyingDate"
              type="date"
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 p-3"
              value={formData.flyingDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="yourName" className="block text-gray-700 font-medium">Enter Your Name</label>
            <input
              id="yourName"
              type="text"
              placeholder="Enter..."
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 p-3"
              value={formData.yourName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="flightTime" className="block text-gray-700 font-medium">Enter Flight Time</label>
            <input
              id="flightTime"
              type="time"
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 p-3"
              value={formData.flightTime}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="photo" className="block text-gray-700 font-medium">Upload Your Photo</label>
            <input
              id="photo"
              type="file"
              accept=".png"
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 p-3"
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-3 rounded-lg shadow-lg hover:bg-green-500 transition md:col-span-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Create;
