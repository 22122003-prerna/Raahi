5


import React, { useState } from 'react';
import axios from 'axios';
import { FaTrain, FaMapMarkerAlt, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner'; // Add a spinner component for loading state

const TrainStatusPage = () => {
  const [trainNumber, setTrainNumber] = useState('');
  const [startDay, setStartDay] = useState(''); // Start day of the journey (1 for today, 2 for yesterday, etc.)
  const [trainStatus, setTrainStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLiveStatus = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = 'c52039eab2msh3a46934e8bcb26ep16aa30jsn8979874bdbbb'; // Replace with your RapidAPI key
      const apiUrl = `https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus?trainNo=${trainNumber}&startDay=${startDay}`;

      const response = await axios.get(apiUrl, {
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'irctc1.p.rapidapi.com',
        },
      });

      console.log('API Response:', response.data);

      if (response.data && response.data.data) {
        setTrainStatus(response.data.data); // Set live train status data
      } else {
        setTrainStatus(null);
      }
    } catch (error) {
      console.error('Error fetching live train status:', error);
      setError('Failed to fetch live status. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-md mt-28">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Live Train Status</h1>

      <div className="flex flex-col items-center mb-6">
        <input
          type="text"
          placeholder="Train Number"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-2 w-full max-w-xs transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={trainNumber}
          onChange={(e) => setTrainNumber(e.target.value)}
        />
        <input
          type="number"
          placeholder="Start Day (1 for today)"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-2 w-full max-w-xs transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={startDay}
          onChange={(e) => setStartDay(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
          onClick={fetchLiveStatus}
        >
          Get Live Status
        </button>
      </div>

      {loading && (
        <div className="flex justify-center items-center">
          <TailSpin color="#4A90E2" height={50} width={50} />
        </div>
      )}

      {error && <p className="text-center text-lg text-red-500 mt-4">{error}</p>}

      {trainStatus ? (
        <div className="overflow-x-auto mt-6">
          <div className="bg-white shadow-md rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4 bg-blue-50 border-b border-gray-200">
              <div className="font-semibold flex items-center text-blue-600"><FaTrain className="mr-2" /> Train Number</div>
              <div className="font-semibold flex items-center text-blue-600"><FaTrain className="mr-2" /> Train Name</div>
              <div className="font-semibold flex items-center text-blue-600"><FaMapMarkerAlt className="mr-2" /> Current Station</div>
              <div className="font-semibold flex items-center text-gray-600"><FaMapMarkerAlt className="mr-2" /> Source</div>
              <div className="font-semibold flex items-center text-gray-600"><FaMapMarkerAlt className="mr-2" /> Destination </div>
              <div className="font-semibold flex items-center text-gray-600"><FaCalendarAlt className="mr-2" /> Delay (in mins.)</div>
            </div>

            <div className="border-b border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4">
                <div className="flex items-center"><FaTrain className="text-blue-500 mr-2" /> {trainStatus.train_number || 'Not available'}</div>
                <div className="flex items-center"><FaTrain className="text-blue-500 mr-2" /> {trainStatus.train_name || 'Not available'}</div>
                <div className="flex items-center"><FaMapMarkerAlt className="text-gray-500 mr-2" /> {trainStatus.current_station_name || 'Not available'}</div>
                <div className="flex items-center"><FaMapMarkerAlt className="mr-2" /> {trainStatus.source || 'Not available'}</div>
                <div className="flex items-center"><FaMapMarkerAlt className="mr-2" /> {trainStatus.destination || 'Not available'}</div>
                <div className="flex items-center"><FaCalendarAlt className="text-gray-500 mr-2" /> {trainStatus.delay  || 'Not available'}</div>
              </div>
            </div>
          </div>
        </div>
      ) : !loading && !error && (
        <p className="text-center text-lg mt-4">No live status available.</p>
      )}
    </div>
  );
};

export default TrainStatusPage;

