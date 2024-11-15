import React, { useState } from 'react';
import axios from 'axios';
import { FaTrain, FaMapMarkerAlt, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner'; // Add a spinner component for loading state

const TrainDetailsCard = () => {
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [journeyDate, setJourneyDate] = useState('');
  const [trainDetails, setTrainDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTrainDetails = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = 'c52039eab2msh3a46934e8bcb26ep16aa30jsn8979874bdbbb'; // Replace with your RapidAPI key
      const apiUrl = `https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=${fromStation}&toStationCode=${toStation}&dateOfJourney=${journeyDate}`;

      const response = await axios.get(apiUrl, {
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'irctc1.p.rapidapi.com',
        },
      });

      console.log('API Response:', response.data);

      if (response.data && response.data.data && Array.isArray(response.data.data)) {
        setTrainDetails(response.data.data); // Set the entire array of trains
      } else {
        setTrainDetails([]);
      }
    } catch (error) {
      console.error('Error fetching train details:', error);
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-md mt-28">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Train Details</h1>

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
          type="date"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-2 w-full max-w-xs transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={journeyDate}
          onChange={(e) => setJourneyDate(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
          onClick={fetchTrainDetails}
        >
          Search
        </button>
      </div>

      {loading && (
        <div className="flex justify-center items-center">
          <TailSpin color="#4A90E2" height={50} width={50} />
        </div>
      )}

      {error && <p className="text-center text-lg text-red-500 mt-4">{error}</p>}

      {trainDetails.length > 0 ? (
        <div className="overflow-x-auto mt-6">
          <div className="bg-white shadow-md rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 p-4 bg-blue-50 border-b border-gray-200">
              <div className="font-semibold flex items-center text-blue-600"><FaTrain className="mr-2" /> Train Number</div>
              <div className="font-semibold flex items-center text-blue-600"><FaTrain className="mr-2" /> Train Name</div>
              <div className="font-semibold flex items-center text-gray-600"><FaMapMarkerAlt className="mr-2" /> From</div>
              <div className="font-semibold flex items-center text-gray-600"><FaMapMarkerAlt className="mr-2" /> To</div>
              <div className="font-semibold flex items-center text-gray-600"><FaClock className="mr-2" /> Departure</div>
              <div className="font-semibold flex items-center text-gray-600"><FaClock className="mr-2" /> Arrival</div>
              <div className="font-semibold flex items-center text-gray-600"><FaCalendarAlt className="mr-2" /> Train Date</div>
            </div>

            {trainDetails.map((train) => (
              <div key={train.train_number} className="border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-7 gap-4 p-4">
                  <div className="flex items-center"><FaTrain className="text-blue-500 mr-2" /> {train.train_number || 'Not available'}</div>
                  <div className="flex items-center"><FaTrain className="text-blue-500 mr-2" /> {train.train_name || 'Not available'}</div>
                  <div className="flex items-center"><FaMapMarkerAlt className="text-gray-500 mr-2" /> {train.train_src || 'Not available'}</div>
                  <div className="flex items-center"><FaMapMarkerAlt className="text-gray-500 mr-2" /> {train.train_dstn || 'Not available'}</div>
                  <div className="flex items-center"><FaClock className="text-gray-500 mr-2" /> {train.from_std || 'Not available'}</div>
                  <div className="flex items-center"><FaClock className="text-gray-500 mr-2" /> {train.to_std || 'Not available'}</div>
                  <div className="flex items-center"><FaCalendarAlt className="text-gray-500 mr-2" /> {train.train_date || 'Not available'}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : !loading && !error && (
        <p className="text-center text-lg mt-4">No train details available.</p>
      )}
    </div>
  );
};

export default TrainDetailsCard;