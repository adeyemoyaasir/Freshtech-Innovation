
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 bg-blue-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-blue-800 font-extrabold">FRESHTECH</span>
            <span className="text-sky-200 ml-1 font-semibold text-md">INNOVATIONS</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/about" className="text-blue-800 hover:text-sky-300 transition-colors font-medium">About</Link>
          <Link to="/services" className="text-blue-800 hover:text-sky-300 transition-colors font-medium">Services</Link>
          <Link to="/products" className="text-blue-800 hover:text-sky-300 transition-colors font-medium">Products</Link>
        </nav>

        <div className="md:hidden">
          <button className="text-blue-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;