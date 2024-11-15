import React from 'react';

const Model = ({isOpen, onClose}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" :  "hidden"'>
      <div className='modal-container'>
        <div className='border-2 border-gray-400 text-center p-5 h-96 lg:w-[500px] rounded shadow-md'>
            <h2 className='text-xl font-bold mb-4 mt-6 uppercase font-mono'>Please Login Here!</h2>
            <form className='px-4'>
                <div className='mb-5'>
                    <input required type="email" name='email' id='email' placeholder='Enter your email' className='border-gray-500 w-full rounded-md border  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6a64f1] focus:shadow-md ' />
                </div>
                <div className='mb-5'>
                    <input required type="password" name='password' id='password' placeholder='Enter your password' className='w-full rounded-md border border-gray-500  bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6a64f1] focus:shadow-md' />
                </div>
                <div>
                    <button className='hover:shadow-md rounded-md bg-gray-400 hover:bg-orange-600 py-3 px-8 text-base font-semibold text-black outline-none'>Login</button>
                </div>
            </form>

            {/* <button onClick={onClose} className='bg-grey-300 hover:bg-gray-400 text-grey-800 font-semibold py-2 px-8 rounded inline-flex items-center mt-5'>
                Close
            </button> */}
        </div>
      </div>
    </div>
  )
}

export default Model;