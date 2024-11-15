import React from 'react'

const Train = () => {
  return (
    <div>
      <div   className="search flex justify-center ">
            <span className=" relative left-[180px] top-4 material-symbols-outlined">
                search
                </span>
              <input  className="w-1/2 ml-36 p-4 pl-10 border rounded-full outline-none" type="text" placeholder="Orign" />
              <input className='w-1/2 ml-36 p-4 pl-10 border rounded-full outline-none' type="text" placeholder='Destination'/>
              <button className="searchbtn bg-black text-white w-24 border rounded-full relative right-[100px] m-1">Search</button>
            </div>
    </div>
  )
}

export default Train
