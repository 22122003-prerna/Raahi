import React, { useState, useRef } from "react";
import hotelLogo from '../../assets/svgs/hotel.svg';
import restLogo from '../../assets/svgs/restaurants.svg';
import busLogo from '../../assets/svgs/bus.svg';
import tourLogo from '../../assets/svgs/tour.svg';
import guideLogo from '../../assets/svgs/guide.svg';
import hi from '../../assets/namste.png';
// import line from '../../assets/quote.jpg';
// import Train from "../Bookings/Trainss";
// import CalendarSelector from "../Bookings/Calender";


const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(30);

  


  return (

    <> 
   <div className="upper relative top-[-600px] left-40 font-mono text-3xl font-bold text-blue-900">
    <h1>WELCOME TO <br /> INDIA</h1> 
    
    <div className="quote relative left-[700px] top-[-50px] font-semibold">
  <h1 className="relative z-20">अतिथि देवो भव   </h1>
  
  <h1 className="relative left-[-30px] z-20">The guest is God</h1>
  </div> 
  <img className="scale-50  relative left-[830px] top-[-225px]  " src={hi} alt="" />
  
    
   {/* <img src={line} alt="" /> */}
   
   </div>

  
    
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 ">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-black">
           
            <p
             
              className="font-bold text-3xl relative top-[0px] left-[44%] "
            >
              <h1 className="text-4xl font-extrabold">Where to?</h1>
            </p>
            <div className="todos flex justify-center p-5 gap-14">
              <div className="flex gap-2 "><img className="w-5" src={hotelLogo} alt="hotel logo" /><button>Hotels</button></div>
              <div className="flex gap-2"><img src={restLogo} alt="" /><button>Restaurants</button></div>

              <div className="flex gap-2"><span class="material-symbols-outlined">
                  flight
                  </span><button>Flights</button></div>

                <div  onClick={() => {
   
   window.location.href = '/traininfo';
 }} className="flex gap-2"><span class="material-symbols-outlined">
                    train
                    </span><button>Train booking</button>
                    
                    
                    </div>
                    


                    <div className="flex gap-2"><img src={busLogo} alt="" /><button>Bus Booking</button></div>

  

             <div className="flex gap-2"><img src={tourLogo} alt="" /><button>Plan a Trip</button></div>
             <div className="flex gap-2">
              <img src={guideLogo} alt="" />
              <button>Guide</button>
             </div>
              
              
            </div>

            <div   className="search flex justify-center">
            <span className=" relative left-[180px] top-4 material-symbols-outlined">
                search
                </span>
              <input  className="w-[80%] ml-36 p-4 pl-10 border rounded-full outline-none" type="text" placeholder="Things to do/ Where to go!/ What to eat" />
              <button className="searchbtn bg-black text-white w-24 border rounded-full relative right-[100px] m-1">Search</button>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
