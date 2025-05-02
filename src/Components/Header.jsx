import React from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <span>CodingShala</span>
        </div>
        <nav>
          <ul className="flex space-x-6 text-white">
            
            <li>
              <h1 onClick={()=>navigate("/about")}
                
                className="hover:text-yellow-300 transition duration-300"
              >
                About
              </h1>
            </li>
            <li>
              <h1
                onClick={()=>navigate("/contact")}
                className="hover:text-yellow-300 transition duration-300"
              >
                Contact Us
              </h1>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
