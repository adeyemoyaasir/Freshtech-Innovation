import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-sky-200 shadow-sm py-4 px-4 sm:px-6 bg-blue-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-gray-900">
            Freshtech Innovations
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex mx-auto space-x-12 lg:space-x-16">
          <Link
            to="/about"
            className="text-lg md:text-xl text-gray-900 relative group focus:outline-none"
          >
            About
            <span className="absolute left-0 bottom-[-0.5rem] w-full h-0.5 bg-blue-900 transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link
            to="/services"
            className="text-lg md:text-xl text-gray-900 relative group focus:outline-none"
          >
            Services
            <span className="absolute left-0 bottom-[-0.5rem] w-full h-0.5 bg-blue-900 transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link
            to="/products"
            className="text-lg md:text-xl text-gray-900 relative group focus:outline-none"
          >
            Products
            <span className="absolute left-0 bottom-[-0.5rem] w-full h-0.5 bg-blue-900 transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-blue-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-blue-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 py-6">
          <Link
            to="/about"
            onClick={toggleSidebar}
            className="text-xl text-gray-900 hover:text-blue-900 transition-colors"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={toggleSidebar}
            className="text-xl text-gray-900 hover:text-blue-900 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/products"
            onClick={toggleSidebar}
            className="text-xl text-gray-900 hover:text-blue-900 transition-colors"
          >
            Products
          </Link>
        </nav>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </header>
  );
};

export default Header;