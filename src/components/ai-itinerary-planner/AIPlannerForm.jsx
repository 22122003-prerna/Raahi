import React from 'react';
import { useForm } from 'react-hook-form';

function AIPlannerForm({ handleFormSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    handleFormSubmit(data);
  };

  return (
    <div className="relative top-[100px] left-[100px]">
      <div className="max-w-md mx-auto mt-32">
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className="mb-4">
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
            <input
              type="text"
              id="destination"
              {...register("destination", { required: "Destination is required" })}
              placeholder="Enter the place"
              className="mt-1 block w-full p-2 border rounded"
            />
            {errors.destination && <span className="text-red-600">{errors.destination.message}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="travel_dates" className="block text-sm font-medium text-gray-700">Travel Dates</label>
            <input
              type="text"
              id="travel_dates"
              {...register("travel_dates", { required: "Travel dates are required" })}
              placeholder="Enter the date range"
              className="mt-1 block w-full p-2 border rounded"
            />
            {errors.travel_dates && <span className="text-red-600">{errors.travel_dates.message}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="interests" className="block text-sm font-medium text-gray-700">Interests</label>
            <textarea
              id="interests"
              {...register("interests", { required: "Interests are required" })}
              placeholder="Enter your interests (e.g., hiking, food, history, weather)"
              rows={10}
              className="mt-1 block w-full p-2 border rounded"
            />
            {errors.interests && <span className="text-red-600">{errors.interests.message}</span>}
          </div>

          <button type="submit" className="bg-black text-white border rounded-full p-4">
            Plan Itinerary
          </button>
        </form>
      </div>
    </div>
  );
}

export default AIPlannerForm;
