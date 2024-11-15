import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/ooty.webp";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/jaipur.avif";
import Img4 from "../../assets/places/chd.webp";
import Img5 from "../../assets/places/delhi.jpg";
import Img6 from "../../assets/places/pondi.avif";
import Img7 from "../../assets/places/banaras.webp";
import Img8 from "../../assets/places/shillong.jpg";
import Img9 from "../../assets/places/mumbai.webp";

const PlacesData = [
  {
    img: Img1,
    title: "Ooty",
    location: "Tamil Nadu",
    description: "Queen of Hill Stations",
    price: 20000,
    type: "Natural Beauty ",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "Timeless masterpiece of elegance and grace",
    price: 8000,
    type: "Historical Context",
  },
  {
    img: Img3,
    title: "Jaipur",
    location: "Rajasthan",
    description:
      "Vibrant blend of royal heritage and architectural splendor.",
    price: 25000,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Chandigarh",
    location: "Punjab and Haryana",
    description: " India's first planned city",
    price: 15000,
    type: "Maitained",
  },
  {
    img: Img5,
    title: "Delhi",
    location: "Delhi",
    description:
      "Delhi, the heart of India",
    price: 10000,
    type: "Dynamic city",
  },
  {
    img: Img6,
    title: " Pondicherry",
    location: "Pondicherry",
    description:
      "French colonial architecture, tranquil beaches",
    price: 15000,
    type: "Vibrant city",
  },
  {
    img: Img7,
    title: "Banaras",
    location: "Uttar Pradesh",
    description:
      "One of the oldest cities in the world",
    price: 5000,
    type: "Cultural heritage"},
    {
      img: Img8,
      title: "Shillong",
      location: "Meghalaya",
      description:
        "the Scotland of the East",
      price: 12000,
      type: "Natural Beauty"},
      {
        img: Img9,
        title: "Mumbai",
        location: "Maharashtra",
        description:
          "Vibrant culture, Bollywood, and fast-paced urban life",
        price: 30000,
        type: "City of Dreams"},
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
  
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
