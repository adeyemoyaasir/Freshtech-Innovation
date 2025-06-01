import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 px-4 sm:px-6">
      <hr className="max-w-full md:max-w-[85%] mx-auto mb-8 md:mb-10" />
      <div className="max-w-full md:max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center space-x-2">
          <div className="hidden md:block text-base md:text-xl text-white">
            freshtechinnovations@gmail.com
          </div>
        </div>
        <div className="text-white text-lg md:text-xl text-center md:text-right">
          Freshtech Innovations LTD
        </div>
      </div>
    </footer>
  );
};

export default Footer;