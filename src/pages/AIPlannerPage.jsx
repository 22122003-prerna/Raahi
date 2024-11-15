import React, { useState } from 'react';
import AIPlannerForm from '../components/ai-itinerary-planner/AIPlannerForm';
import Itinerary_display from '../components/ai-itinerary-planner/Itinerary_display';

function AIPlannerPage() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    // Store form data in state
    setFormData(data);
  };

  return (
    <div className='p-8'>
      <AIPlannerForm handleFormSubmit={handleFormSubmit} />
      {formData && <Itinerary_display formData={formData} />}
    </div>
  );
}

export default AIPlannerPage;