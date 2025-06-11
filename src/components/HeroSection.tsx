import React from 'react';
import { GiCheckMark } from "react-icons/gi";

function HeroSection() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8 px-4 sm:px-6 md:py-12 lg:py-16">
      {/* Header Section */}
      <header className="text-center mb-6 sm:mb-8 md:mb-10">
        <p className="text-black text-sm sm:text-base md:text-2xl tracking-widest mb-4">
          Welcome to freshtech innovation
        </p>
        <h1 className="text-[40px] sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mt-12 md:mt-3 max-w-7xl">
            <div className="">
                Elevate your <span className="text-white bg-[#03055B] px-2 rounded-lg">skills</span> and{' '}
                <span className="text-white bg-sky-200 px-2 rounded-lg">business</span> with SkillCraft{' '}
            </div>
          <span className="mt-2 text-4xl sm:text-2xl md:text-6xl">earning and Services Redefined.</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mt-3 md:mt-4 hidden md:block">
          We are the Ultimate Learning and Digital Agency Hub.
        </p>
         <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mt-3 md:mt-4 block md:hidden">
          Fresh tech Innovation the Ultimate <br/> Learning and Digital Agency Hub
        </p>
        <button className="border border-blue-800 text-black px-4 py-3 sm:px-6 sm:py-4 w-60 sm:w-64 md:w-72 lg:w-80 rounded-full text-base sm:text-lg md:text-xl font-semibold hover:bg-blue-900 hover:text-white transition-colors mt-4 sm:mt-5">
          Work with us
        </button>
      </header>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto w-full">
        {/* Workspace Image */}
        <div className="w-full md:w-2/3 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[550px]">
          <img
            src="https://ik.imagekit.io/xprogrammer/images/im%2011.png?updatedAt=1748790672725"
            alt="Workspace with hands and devices"
            className="w-full h-full object-cover rounded-2xl sm:rounded-3xl shadow-lg"
          />
        </div>

        {/* Services and Features */}
        <div className="w-full md:w-1/4 flex flex-col gap-4 sm:gap-6">
          {/* Services sm:h-[32vh] md:h-[34vh]*/}
          {/**
           * 
           <div className="relative bg-sky-100 py-4 px-3 sm:px-4 rounded-2xl sm:rounded-3xl min-h-[50vh] sm:h-[320vh] md:h-[34vh]">
             
             <div className="relative flex flex-col items-center justify-center h-full text-foreground">
               <span
                 className="absolute sm:relative px-16 sm:px-14 py-3 bg-white text-gray-800 rounded-full text-xs sm:text-sm uppercase font-normal rotate-[8deg] sm:rotate-[15deg] top-[5%] sm:top-[10%] right-[45%] sm:right-[40%]"
               >
                 Branding
               </span>
               <span
                 className="absolute px-16 sm:px-12 py-3 bg-white text-gray-800 rounded-full text-xs sm:text-sm uppercase font-normal rotate-[35deg] bottom-[70%] sm:bottom-[76%] right-[-5%] sm:right-[-10%]"
               >
                 Product Design
               </span>
               <span
                 className="absolute px-16 sm:px-10 py-3 bg-white text-gray-800 rounded-full text-xs sm:text-sm uppercase font-normal -rotate-[10deg] top-[34%] sm:top-[35%] right-[40%] sm:right-[35%]"
               >
                 Tech Support
               </span>
               <span
                 className="absolute px-16 sm:px-14 py-3 bg-white text-gray-800 rounded-full text-xs sm:text-sm uppercase font-normal rotate-[10deg] top-[54%] sm:top-[55%] left-[48%] sm:left-[45%]"
               >
                 Trading
               </span>
               <span
                 className="absolute px-16 sm:px-14 py-3 bg-white text-gray-800 rounded-full text-xs sm:text-sm uppercase font-normal rotate-[0deg] bottom-[14%] sm:bottom-[16%] left-[7%] sm:left-[10%]"
               >
                 Web Development
               </span>
               <span
                 className="absolute px-16 sm:px-14 py-3 bg-white text-gray-800 rounded-full text-xs sm:text-sm uppercase font-normal rotate-[0deg] top-[87%] sm:top-[89%] right-[20%] sm:right-[27%]"
               >
                 And More
               </span>
             </div>
           </div>
           */}

            <div className="relative bg-sky-100 py-4 px-3 sm:px-4 rounded-2xl sm:rounded-3xl min-h-[50vh] sm:h-[320vh] md:h-[34vh]">
                <div className="relative flex flex-col items-center justify-center h-full text-foreground space-y-4 sm:space-y-0">
                    <span
                    className="sm:absolute px-16 sm:px-14 py-3 bg-white text-gray-800 rounded-full text-xs sm:text-sm uppercase font-normal sm:rotate-[15deg] sm:top-[10%] sm:right-[40%]"
                    >
                    Branding
                    </span>

                    <span
                    className="sm:absolute px-16 sm:px-12 py-3 bg-white text-gray-800 rounded-full text-xs sm:text-sm uppercase font-normal sm:rotate-[35deg] sm:bottom-[76%] sm:right-[-10%]"
                    >
                    Product Design
                    </span>

                    <span
                    className="sm:absolute px-16 sm:px-10 py-3 bg-white text-gray-800 rounded-full text-xs sm:text-sm uppercase font-normal sm:-rotate-[10deg] sm:top-[35%] sm:right-[35%]"
                    >
                    Tech Support
                    </span>

                    <span
                    className="sm:absolute px-16 sm:px-14 py-3 bg-white text-gray-800 rounded-full text-xs sm:text-sm uppercase font-normal sm:rotate-[10deg] sm:top-[55%] sm:left-[45%]"
                    >
                    Trading
                    </span>

                    <span
                    className="sm:absolute px-16 sm:px-14 py-3 bg-white text-gray-800 rounded-full text-xs sm:text-sm uppercase font-normal sm:rotate-[0deg] sm:bottom-[16%] sm:left-[10%]"
                    >
                    Web Development
                    </span>

                    <span
                    className="sm:absolute px-16 sm:px-14 py-3 bg-white text-gray-800 rounded-full text-xs sm:text-sm uppercase font-normal sm:rotate-[0deg] sm:top-[89%] sm:right-[27%]"
                    >
                    And More
                    </span>
                </div>
            </div>
            




          {/* Features List */}
          <div className="bg-sky-100 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
            <ul className="space-y-4 text-gray-800 text-xs sm:text-sm md:text-base">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2 text-xl"><GiCheckMark /></span> Professional Projects Done
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2 text-xl"><GiCheckMark /></span> Creative Builders
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2 text-xl"><GiCheckMark /></span> Happy Clients
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2 text-xl"><GiCheckMark /></span> And More
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;