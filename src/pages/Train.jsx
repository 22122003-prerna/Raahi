import React from 'react'

const Train = () => {
  return (
    <div className='train-info  flex items-center justify-center h-screen '>

      <div className=' main text-center fixed top-28 bg-gray-200 border rounded-3xl w-[50vw] h-[70vh] p-6'>
        <div className="heading mb-9"><h1 className='text-4xl font-mono font-bold'>Choose Service</h1></div>
        <div className="services grid grid-cols-3 space-x-1 gap-11 font-semibold">

            <button className='hover:bg-gray-400 p-3 border rounded-full'>Train Booking</button>
            <button onClick={() => {
   
   window.location.href = '/TrainStatusPage';
 }} className='hover:bg-gray-400 p-3 border rounded-full'>Live Train Status</button>
            <button onClick={() => {
   
   window.location.href = '/TrainDetailsCard';
 }} className='hover:bg-gray-400 p-3 border rounded-full'>Trains Between Stations</button>
            <button onClick={() => {
   
   window.location.href = '/PNRpage';
 }}  className='hover:bg-gray-400 p-3 border rounded-full'>PNR Status</button>
            <button onClick={() => {
   
   window.location.href = '/Getfarepage';
 }} className='hover:bg-gray-400 p-3 border rounded-full'>Check Fare</button>
            <button className='hover:bg-gray-400 p-3 border rounded-full'>Trains by station</button>
        </div>
       
      </div>
      
       
      
    </div>
  )
}

export default Train
