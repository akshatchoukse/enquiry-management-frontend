import React from "react";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col justify-between p-6">
      <Header />

      <div className="flex-grow flex justify-center items-center">
        <button onClick={()=> navigate("/student-data")}
          className="bg-yellow-400 text-blue-600 py-4 px-8 rounded-full text-lg md:text-2xl hover:bg-yellow-500 transition duration-300"
        >
          Enter Your Information
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
