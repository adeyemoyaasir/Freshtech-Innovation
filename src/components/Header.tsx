import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-sky-200 shadow-sm py-1 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center order-1">
          <button onClick={toggleSidebar} className="text-blue-800 focus:outline-none p-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Logo Section */}
        <div className="flex items-center justify-center flex-1 md:flex-none md:justify-start order-2">
          <Link to="/" className="flex items-center">
            <img
              src="https://ik.imagekit.io/xprogrammer/images/Freshtech%20Innovations%20Primary%20SVG.svg?updatedAt=1748993558403"
              alt="Freshtech Innovations Logo"
              className="hidden md:block w-[150px] h-[70px] object-cover bg-transparent mix-blend-multiply ml-4 lg:ml-8"
            />
            <img
              src="https://ik.imagekit.io/xprogrammer/images/Freshtech%20Innovations%20Secondary%20SVG.svg?updatedAt=1749065161209"
              alt="Mobile Logo"
              className="md:hidden w-[70px] h-[50px] object-cover bg-transparent mix-blend-multiply"
            />
            <span className="sr-only">Freshtech Innovations</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12 lg:space-x-16 items-center order-3 mx-auto">
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

        {/* Sidebar for Mobile */}
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
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
            <img
              src="https://ik.imagekit.io/xprogrammer/images/Freshtech%20Innovations%20Primary%20SVG.svg?updatedAt=1748993558403"
              alt="Mobile Logo"
              className="w-[150px] h-[50px] object-cover bg-transparent mix-blend-multiply"
            />
            <h2 className="text-2xl">Our Agency</h2>
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
      </div>
    </header>
  );
};

export default Header;