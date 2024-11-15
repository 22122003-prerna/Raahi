import React from "react";
import Hero from "../components/Hero/Hero";
import NatureVid from "../assets/video/main.mp4";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg from "../assets/ai.avif";
import Banner2 from "../assets/travel-cover2.jpg";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import Chatbot from "../components/chatbot/chatbot";
import Footer from "../components/Footer/Footer";



const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
    <Chatbot/>
      <div>
        <div className="h-[700px] relative">
          {/* <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video> */}
          <img className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]" src="/src/assets/places/bhrt.jpg" alt="" />
        
        </div>
        <Hero />
        
        
        <Places handleOrderPopup={handleOrderPopup} />
        
        <div className="ai flex ">
 
<h1 className="aii font-mono font-bold text-5xl relative left-44 top-24">Plan a Trip <br /> with Ai!</h1>
{/* <button className="bg-blue-400 w-16 h-10  font-mono ">Click here</button> */}
<p   
onClick={() => {
   
   window.location.href = '/ai';
 }}  className="relative top-52 left-[-70px] hover:underline hover:text-blue-400 cursor-pointer">Click here</p>


         <BannerPic  img={BannerImg} />
          
        
        </div>
        <BlogsComp />
        {/* <Banner /> */}
        {/* <BannerPic img={Banner2} /> */}
        <Testimonial />
        <Footer />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
