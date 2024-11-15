

import React, { useState } from 'react';
import axios from 'axios';
import { FaTrain, FaMoneyBill, FaUserAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner';

const Getfarepage = () => {
  const [trainNumber, setTrainNumber] = useState('');
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [fareDetails, setFareDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFareDetails = async () => {
    setLoading(true);
    setError(null);

    try {
      const apiKey = 'c52039eab2msh3a46934e8bcb26ep16aa30jsn8979874bdbbb'; // Replace with your RapidAPI key
      const apiUrl = `https://irctc1.p.rapidapi.com/api/v2/getFare?trainNo=${trainNumber}&fromStationCode=${fromStation}&toStationCode=${toStation}`;

      const response = await axios.get(apiUrl, {
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'irctc1.p.rapidapi.com',
        },
      });

      console.log('API Response:', response.data);


      // Check for the status and data structure
      if (response.data.status && response.data.message === "Success") {
        const fareData = response.data.data;
        setFareDetails(fareData);
      } else {
        setFareDetails({});
        setError('No fare details available or incorrect data.');
      }
    } catch (error) {
      console.error('Error fetching fare details:', error);
      setError('Failed to fetch fare details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-md mt-28">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Train Fare Details</h1>

      <div className="flex flex-col items-center mb-6">
        <input
          type="text"
          placeholder="From Station Code"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-2 w-full max-w-xs transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={fromStation}
          onChange={(e) => setFromStation(e.target.value)}
        />

        <input
          type="text"
          placeholder="To Station Code"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-2 w-full max-w-xs transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={toStation}
          onChange={(e) => setToStation(e.target.value)}
        />

        <input
          type="text"
          placeholder="Train Number"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-2 w-full max-w-xs transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={trainNumber}
          onChange={(e) => setTrainNumber(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
          onClick={fetchFareDetails}
        >
          Get Fare
        </button>
      </div>

      {loading && (
        <div className="flex justify-center items-center">
          <TailSpin color="#4A90E2" height={50} width={50} />
        </div>
      )}

      {error && <p className="text-center text-lg text-red-500 mt-4">{error}</p>}

      {fareDetails && Object.keys(fareDetails).length > 0 ? (
        <div className="overflow-x-auto mt-6">
          <div className="bg-white shadow-md rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-blue-50 border-b border-gray-200">
              <div className="font-semibold flex items-center text-blue-600"><FaTrain className="mr-2" /> Train Number</div>
              <div className="font-semibold flex items-center text-blue-600"><FaMapMarkerAlt className="mr-2" /> From</div>
              <div className="font-semibold flex items-center text-blue-600"><FaMapMarkerAlt className="mr-2" /> To</div>
              <div className="font-semibold flex items-center text-blue-600"><FaUserAlt className="mr-2" /> Class Type</div>
              <div className="font-semibold flex items-center text-blue-600"><FaMoneyBill className="mr-2" /> Fare</div>
            </div>

            {/* General Fare */}
            {fareDetails.general && fareDetails.general.length > 0 && fareDetails.general.map((generalFare, index) => (
              <div key={index} className="border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
                  <div className="flex items-center"><FaTrain className="text-blue-500 mr-2" /> {trainNumber || 'N/A'}</div>
                  <div className="flex items-center"><FaMapMarkerAlt className="text-blue-500 mr-2" /> {fromStation || 'N/A'}</div>
                  <div className="flex items-center"><FaMapMarkerAlt className="text-blue-500 mr-2" /> {toStation || 'N/A'}</div>
                  <div className="flex items-center"><FaUserAlt className="text-blue-500 mr-2" /> {generalFare.classType || 'N/A'}</div>
                  <div className="flex items-center"><FaMoneyBill className="text-blue-500 mr-2" /> ₹{generalFare.fare || 'N/A'}</div>
                </div>
              </div>
            ))}

            {/* Tatkal Fare */}
            {fareDetails.tatkal && fareDetails.tatkal.length > 0 && fareDetails.tatkal.map((tatkalFare, index) => (
              <div key={index} className="border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
                  <div className="flex items-center"><FaTrain className="text-blue-500 mr-2" /> {trainNumber || 'N/A'}</div>
                  <div className="flex items-center"><FaMapMarkerAlt className="text-blue-500 mr-2" /> {fromStation || 'N/A'}</div>
                  <div className="flex items-center"><FaMapMarkerAlt className="text-blue-500 mr-2" /> {toStation || 'N/A'}</div>
                  <div className="flex items-center"><FaUserAlt className="text-blue-500 mr-2" /> {tatkalFare.classType || 'N/A'}</div>
                  <div className="flex items-center"><FaMoneyBill className="text-blue-500 mr-2" /> ₹{tatkalFare.fare || 'N/A'}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : !loading && !error && (
        <p className="text-center text-lg mt-4">No fare details available.</p>
      )}
    </div>
  );
};

export default Getfarepage;
