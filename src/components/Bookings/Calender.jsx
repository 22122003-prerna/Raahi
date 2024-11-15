

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

const CalendarSelector = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize with the current date

  const handleDateChange = (date) => {
    setSelectedDate(date); // Update the state with the selected date
  };

  return (
    <div>
      {/* <h2>Select a Date</h2> */}
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        className="react-calendar" // Optional: Add custom styling
      />
      <div>
        
        <p>{selectedDate.toLocaleDateString()}</p> Display the selected date
      </div>
    </div>
  );
};

export default CalendarSelector;