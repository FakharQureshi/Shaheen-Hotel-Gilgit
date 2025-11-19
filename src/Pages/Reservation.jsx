import React, { useState } from 'react'
import Navigation from '../Navigation';
import img1 from '../assets/pic/hotel-shaheen.jpg'
import Footer from '../Footer';

const Reservation = () => {
  
  
    const [checkInDate, setCheckInDate] = useState('2024-08-20');
  const [checkOutDate, setCheckOutDate] = useState('2024-08-21');
  const [nights, setNights] = useState('1');
  const [rooms, setRooms] = useState('1');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');

  return (
    <div style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${img1})`,
      backgroundSize: 'cover', // Ensure the image covers the div
      backgroundPosition: 'center', // Center the image
    }}>
    <Navigation/>
    <div className="container mx-auto p-4 ">
      <form className="bg-white p-6 shadow-md rounded-lg mt-[150px]">
        <div className="text-xl font-semibold mb-4 ">Your Reservation</div>

        {/* Date and Room Selection */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1">Check In</label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Check Out</label>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Nights</label>
            <select
              value={nights}
              onChange={(e) => setNights(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(night => (
                <option key={night} value={night}>{night}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Rooms</label>
            <select
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(room => (
                <option key={room} value={room}>{room}</option>
              ))}
            </select>
          </div>

          <div className="col-span-2">
            <div className="mb-4">
              <div className="font-semibold mb-1">Room 1</div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-medium">Adults</label>
                <select
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  className="p-2 border border-gray-300 rounded"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(adult => (
                    <option key={adult} value={adult}>{adult}</option>
                  ))}
                </select>
              </div>
              <div className="flex justify-between">
                <label className="block text-sm font-medium">Children</label>
                <select
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                  className="p-2 border border-gray-300 rounded"
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(child => (
                    <option key={child} value={child}>{child}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          t
          className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Check Availability
        </button>
      </form>

      {/* Booking Process */}
      <div className="mt-6">
        <div className="flex justify-between mb-4">
          {['1. Choose Date', '2. Choose Room', '3. Make a Reservation', '4. Confirmation'].map((step, index) => (
            <div
              key={index}
              className={`flex-1 text-center py-2 ${index === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {step}
            </div>
          ))}
        </div>
        {/* Date Picker placeholder */}
        <div className="text-center">
          <p>Select Date Range (Placeholder for Date Picker)</p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
 

  )
}

export default Reservation