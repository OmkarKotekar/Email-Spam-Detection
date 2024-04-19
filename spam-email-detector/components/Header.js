import React from 'react';

const Header = () => {
  return (
    <header className="relative overflow-hidden w-full">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient"></div>
        <div className="absolute inset-0 animate-pulse bg-opacity-25 bg-black"></div>
        <div className="absolute inset-0 z-[-1]">
          <div className="absolute animate-spin w-4 h-4 bg-black rounded-full top-1/4 left-1/4"></div>
          <div className="absolute animate-ping w-4 h-4 bg-black rounded-full top-1/4 right-1/4"></div>
          <div className="absolute animate-bounce w-4 h-4 bg-black rounded-full bottom-1/4 left-1/4"></div>
          <div className="absolute animate-bounce w-4 h-4 bg-black rounded-full bottom-1/4 right-1/4"></div>
        </div>
      </div>
      <div className="relative z-10 text-white py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-center h-full">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif transition duration-300 transform hover:scale-110 hover:text-gray-900 shadow-md">
          Email Spam Detector
        </h1>
      </div>
    </header>
  );
}

export default Header;
