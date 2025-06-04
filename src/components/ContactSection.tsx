import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const ContactSection = () => {
  return (
    <section className="bg-black py-12 px-4 sm:px-6 md:py-16" id="contact">
      <div className="max-w-9xl mx-auto ml-2 md:ml-80 relative">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Section: Heading and Button */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              GOT AN IDEA? LET'S HAVE A CONVERSATION  
              <button className="bg-white text-gray-900 text-[16px] sm:text-lg md:text-xl px-4 py-4 sm:px-6 sm:py-3 w-full md:w-80 h-auto rounded-full hover:bg-gray-200 transition-colors">
                Copy our Email Address
              </button>
            </h2>
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

        {/* Bottom Left Image */}
        <div className="mt-8">
          <img
            src="https://ik.imagekit.io/xprogrammer/images/Freshtech%20Innovations%20Primary%20PNG%20(1).png?updatedAt=1749069922370"
            alt="Freshtech Innovations Logo"
            className="w-[100px] h-[50px] object-contain bg-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;