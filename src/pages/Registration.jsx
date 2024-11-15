import React, { useState } from 'react';

function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [Passportnumber, setPassportnumber] = useState('');
  const [Location, setLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    // Call API or perform registration logic here
    console.log('Registration submitted:', { username, email, password, confirmPassword });
  };

  return (
    <div className="registration-page flex items-center justify-center h-screen ">
      <div className="main flex items-center justify-center border-2 border-gray-400 w-1/2 h-[120vh] ">      
        <form className='' onSubmit={handleSubmit}>
        <h1 className='font-mono text-4xl relative top-[60px] font-bold'>Registration Process</h1>

       <div className="labels relative top-24 flex flex-col space-y-3">
       <label className=''>
          
          <input className='border-b-2 border-gray-400 w-full outline-none placeholder-gray-600 '
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter username "
            // placeholder="Enter your name" className="placeholder-gray-500 border p-2 rounded-md"
          />
        </label>
        
        <br />
        <label>
          
          <input
          className='border-b-2 border-gray-400 w-full outline-none placeholder-gray-600'
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter email"
          />
        </label>
        <br />
        <label>
         
          <input
          className='border-b-2 border-gray-400 w-full outline-none placeholder-gray-600'
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
          />
        </label>
        <br />
        <label>
          
          <input
          className='border-b-2 border-gray-400 w-full outline-none placeholder-gray-600'
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="Enter confirm password"
          />
        </label>
        <br />
        <label>
          
          <input
          className='border-b-2 border-gray-400 w-full outline-none placeholder-gray-600'
            type="  "
            value={Passportnumber}
            onChange={(event) => setPassportnumber(event.target.value)}
            placeholder="Enter Passport number"
          />
        </label>
        <br />
        <label>
          
          <input
          className='border-b-2 border-gray-400 w-full outline-none placeholder-gray-600'
            type="text"
            value={Location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter Location"
          />
        </label>
        {/* <div>jdu</div> */}
        <button className='bg-slate-400 p-3  rounded-full' type="submit ">Register</button>
        
      
       </div>
       
        
       
      </form></div>

    </div>
  );
}

export default RegistrationPage;