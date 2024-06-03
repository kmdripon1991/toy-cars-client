import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.ibb.co/417R0fJ/sarah-kilian-52j-Rtc2-S-VE-unsplash.jpg')" }}
      ></div>
      <div className="relative flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">404 - Not Found</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white mt-4">The requested page could not be found.</p>
        <Link to="/" className="text-white hover:underline mt-4 btn btn-info">Back to Home</Link>
      </div>
    </div>
  );
};

export default Error;

