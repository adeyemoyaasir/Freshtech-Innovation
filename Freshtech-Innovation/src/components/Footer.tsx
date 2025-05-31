
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-xl font-bold">
            <span className="text-blue-800">FRESHTECH</span>
            <span className="text-sky-200 ml-1">INNOVATIONS</span>
          </div>
        </div>
        
        <div className="text-white text-sm">
          freshtechinnovations.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;