import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
// import RegistrationPage from "../Registration";
import Image1 from "../../assets/places/raahilogo.png";
import './sos.css';


export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/best-places",
  },
  {
    name: "Registration",
    link: "/registration",
  },
  {
    name: "Login",
    link: "/login",
  },
 
];

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
 






 // State to control the visibility of the confirmation div
 const [showPopup, setShowPopup] = useState(false);

 // Function to handle the SOS button click
 const handleSosClick = () => {
   setShowPopup(true);
 };

 // Function to handle confirmation or cancellation
 const handleConfirm = (isConfirmed) => {
   if (isConfirmed) {
     alert('SOS confirmed!');
     // You can add any further action, like triggering an SOS request
   } else {
     alert('SOS cancelled.');
   }
   setShowPopup(false);
 };






  

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
        <div className=" text-white ">
          <div className="container py-[2px] sm:block hidden">
            {/* <div className="flex items-center justify-between">
             
            </div> */}
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4  font-bold text-2xl h-20 w-34">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={Image1} alt="" className="h-24 w-36" />
              </Link>
              {/* <span>TCJ Tourism</span> */}
            </div>
            <div className="hidden md:block relative left-[-20px] ">
              <ul className="flex items-center gap-6 ">
                <li className="py-4  hover:underline decoration-blue-300">
                  <NavLink to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="py-4 hover:underline decoration-black">
                  <NavLink to="/blogs" activeClassName="active">
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4 hover:underline decoration-black">
                  <NavLink to="/best-places" activeClassName="active">
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4 hover:underline decoration-black">
                  <NavLink to="/about" activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li className="group relative cursor-pointer ">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Quick Links{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

              </ul>
            </div>

<div onClick={handleSosClick} className="sos bg-red-500 text-white py-1 px-2 border rounded-full flex text-center hover:scale-110 transition-transform duration-300 cursor-pointer"><span className="material-symbols-outlined pr-1 ">
e911_emergency
</span>SOS</div>
{showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Confirm SOS</h3>
            <p>Are you sure you want to trigger SOS?</p>
            <button onClick={() => handleConfirm(true)}>Yes</button>
            <button onClick={() => handleConfirm(false)}>No</button>
          </div>
        </div>
      )}

            <div className="flex items-center gap-2 ">

              <div className="flex gap-2 hover:bg-gray-200 rounded-full px-2 py-1"><span className="material-symbols-outlined">
language
</span>
<span>|</span>lang.</div>
                
            
<button 
  className="hover:border-2 px-2 py-1 hover:rounded-full hover:border-none hover:bg-blue-400" 
  onClick={() => {
   
    window.location.href = '/registration';
  }}
>
  Registration 
</button>

                <button onClick={() => {
   
   window.location.href = '/login';
 }} className="hover:border-2 px-2 py-1 hover:rounded-full hover:border-none hover:bg-blue-400">Log-in</button>


              {/* Mobile Hamburger icon
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div> */}
            </div>
          </div>
        </div>
        {/* <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} /> */}
      </nav>
    </>
  );
};

export default Navbar;
