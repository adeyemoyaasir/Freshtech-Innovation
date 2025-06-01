import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const ContactSection = () => {
  return (
    <section className="bg-black py-12 px-4 sm:px-6 md:py-16" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Section: Heading and Button */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
              GOT AN IDEA? LET'S HAVE A<br />CONVERSATION
            </h2>
            <button className="bg-white text-gray-900 text-lg sm:text-xl md:text-2xl px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-64 md:w-80 h-auto rounded-full font-semibold hover:bg-gray-200 transition-colors">
              Click to copy our Email Address
            </button>
          </div>

          {/* Right Section: Contact Links */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl text-white font-bold mb-6">CONTACT</h2>
            <div className="space-y-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center text-lg sm:text-xl md:text-2xl space-x-3 cursor-pointer hover:text-blue-400 transition-colors"
              >
                <FaFacebookF className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Facebook</span>
                <LuSquareArrowOutUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-auto" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center text-lg sm:text-xl md:text-2xl space-x-3 cursor-pointer hover:text-pink-400 transition-colors"
              >
                <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Instagram</span>
                <LuSquareArrowOutUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-auto" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center text-lg sm:text-xl md:text-2xl space-x-3 cursor-pointer hover:text-blue-500 transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>LinkedIn</span>
                <LuSquareArrowOutUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-auto" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center text-lg sm:text-xl md:text-2xl space-x-3 cursor-pointer hover:text-blue-400 transition-colors"
              >
                <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>X (Formerly Twitter)</span>
                <LuSquareArrowOutUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;