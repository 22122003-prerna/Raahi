import React from 'react'
import imgs1 from "../../src/assets/moreplaces/newdelhhi.avif";
import imgs2 from "../../src/assets/moreplaces/varanasi.jpg";
import imgs3 from "../../src/assets/moreplaces/gangtok.jpeg";
import imgs4 from "../../src/assets/moreplaces/Darjeeling.jpg";
import imgs5 from "../../src/assets/moreplaces/udaipur.jpg";
import imgs6 from "../../src/assets/moreplaces/mumbaii.jpg";


const Planner = () => {
  return (
    <>
    <div>
      <div className="amin w-full h-screen relative top-32"><main className="container mx-auto mt-10">
        <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Where do you want to go?</h2>
            <p className="text-gray-600 mb-8">Search or get inspired by popular destinations.</p>
            <div className="flex justify-center">
                <div className="w-1/2">
                    <input type="text" placeholder="Search by city or town" className="w-full p-3 border border-gray-400 rounded-lg outline-none "/>
                   
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-white shadow-md rounded-lg p-4">
                <img src={imgs1} alt="Las Vegas" className="w-full rounded-lg mb-4 h-[40vh]"/>
                <h3 className="text-xl font-bold">New Delhi</h3>
                <p className="text-gray-600">Delhi</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
                <img src={imgs2} alt="Hurghada" className="w-full rounded-lg mb-4 h-[40vh]"/>
                <h3 className="text-xl font-bold">Varanasi</h3>
                <p className="text-gray-600">Uttar Pradesh</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
                <img src={imgs3} alt="Bavaro" className="w-full rounded-lg mb-4 h-[40vh]"/>
                <h3 className="text-xl font-bold">Gangtok</h3>
                <p className="text-gray-600">Sikkim</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
                <img src={imgs4} alt="Orlando" className="w-full rounded-lg mb-4 h-[40vh]"/>
                <h3 className="text-xl font-bold">Darjeeling</h3>
                <p className="text-gray-600">West Bengal</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
                <img src={imgs5} alt="Costa Adeje" className="w-full rounded-lg mb-4 h-[40vh]"/>
                <h3 className="text-xl font-bold">Udaipur</h3>
                <p className="text-gray-600">Rajasthan</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
                <img src={imgs6} alt="Honolulu" className="w-full rounded-lg mb-4 h-[40vh]"/>
                <h3 className="text-xl font-bold">Mumbai</h3>
                <p className="text-gray-600">Maharashtra</p>
            </div>
        </div>
    </main>


    <main  className="container mx-auto mt-10 text-center">
       <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">When are you going?</h1>
        <p className="text-gray-600 mb-8">Choose a date range, up to 7 days.</p>

        <div className="flex justify-between items-center mb-8">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <div className="flex items-center">
                <h2 className="text-lg font-bold text-gray-800 mr-4">September 2024</h2>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>

        <div className="grid grid-cols-7 gap-2">
            <div className="text-gray-600 font-bold text-center py-2">M</div>
            <div className="text-gray-600 font-bold text-center py-2">T</div>
            <div className="text-gray-600 font-bold text-center py-2">W</div>
            <div className="text-gray-600 font-bold text-center py-2">T</div>
            <div className="text-gray-600 font-bold text-center py-2">F</div>
            <div className="text-gray-600 font-bold text-center py-2">S</div>
            <div className="text-gray-600 font-bold text-center py-2">S</div>

        
            <div className="text-center rounded-full ">1</div>
            <div className="text-center rounded-full ">2</div>
            <div className="text-center rounded-full ">3</div>
            <div className="text-center rounded-full ">4</div>
            <div className="text-center rounded-full ">5</div>
            <div className="text-center rounded-full ">6</div>
            <div className="text-center rounded-full ">7</div>
            <div className="text-center rounded-full ">8</div>

            <div className="text-center py-2">9</div>   
            <div className="text-center py-2">10</div>
            <div className="text-center py-2">11</div>
            <div className="text-center py-2">12</div>
            <div className="text-center py-2">13</div>
            <div className="text-center py-2">14</div>
            <div className="text-center py-2">15</div>

            <div className="text-center py-2">16</div>
            <div className="text-center py-2">17</div>
            <div className="text-center py-2">18</div>
            <div className="text-center py-2">19</div>
            <div className="text-center py-2">20</div>
            <div className="text-center py-2">21</div>
            <div className="text-center py-2">22</div>

            <div className="text-center py-2">23</div>
            <div className="text-center py-2">24</div>
            <div className="text-center py-2">25</div>
            <div className="text-center py-2">26</div>
            <div className="text-center py-2">27</div>
            <div className="text-center py-2">28</div>
            <div className="text-center py-2">29</div>

            <div className="text-center py-2">30</div>
            <div className="text-center py-2"></div>
            <div className="text-center py-2"></div>
            <div className="text-center py-2"></div>
            <div className="text-center py-2"></div>
            <div className="text-center py-2"></div>
            <div className="text-center py-2"></div>
        </div>

        <div className="flex justify-between items-center mt-8">
           
            <p className="text-gray-600 mb-8">I don't know the dates yet !</p>
           
        </div>
    </div>
    </main>

    <main>
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What kind of trip are you planning?</h2>
    
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-200 rounded-lg p-4 cursor-pointer">
            <div className="flex items-center">
            
              <span className="ml-2 text-gray-800 font-medium">Solo Trip</span>
            </div>
          </div>
    
          <div className="bg-gray-200 rounded-lg p-4 cursor-pointer">
            <div className="flex items-center">
            
              <span className="ml-2 text-gray-800 font-medium">Partner trip</span>
            </div>
          </div>
    
          <div className="bg-gray-200 rounded-lg p-4 cursor-pointer">
            <div className="flex items-center">
              
              <span className="ml-2 text-gray-800 font-medium">Friends Trip</span>
            </div>
          </div>
    
          <div className="bg-gray-200 rounded-lg p-4 cursor-pointer">
            <div className="flex items-center">
              
              <span className="ml-2 text-gray-800 font-medium">Family trip</span>
            </div>
          </div>
        </div>
    
        <h2 className="text-lg font-medium text-gray-800 mt-6">Are you travelling with pets? <span className="text-gray-500 text-sm">ⓘ</span></h2>
        <div className="flex gap-4 mt-4">
          <button className="bg-gray-200 hover:bg-gray-300 rounded-lg px-4 py-2 text-gray-800 font-medium">Yes</button>
          <button className="bg-green-200 hover:bg-green-300 rounded-lg px-4 py-2 text-gray-800 font-medium">✓ No</button>
        </div>
    
        <div className="flex justify-end mt-6">
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg">Next</button>
        </div>
      </div>
    </main>

        <div className="container mx-auto p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Tell Us What You're Interested In</h1>
            <p className="text-gray-600 mb-8">Select all that apply.</p>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Must-see Attractions
                </button>
                <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Great Food
                </button>
                <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Hidden Gems
                </button>
                <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Historical Landmarks
                </button>
                <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Nature and Wildlife
                </button>
                <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Agri-Tourism
                </button>
                <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Wine and Breweries
                </button>
                <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Outdoor Activities
                </button>
                <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Culture
                </button>
                <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Arts & Theatre
                </button>
                <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Museums
                </button>
                <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Adventure and Sports
                </button>
            </div>
    
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8">
                + Add Interest
            </button>
    
            <div className="flex justify-between mt-12">
                <a href="#" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    Back
                </a>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Generte Itinerary Planner.
                </button>
            </div>
        </div></div>
    </div>
    </>
  )
}

export default Planner
