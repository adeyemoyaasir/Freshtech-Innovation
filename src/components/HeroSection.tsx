import React from 'react';

import { GiCheckMark } from "react-icons/gi";
function HeroSection() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4 mt-10">
      {/* Header Section */}
      <header className="text-center mb-8">
        <p className="text-black text-lg uppercase tracking-widest">
          Welcome to FreshTech Innovations
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-2">
          Elevate your <span className="text-white bg-blue-900 px-2 rounded-lg">skills</span> and{' '}
          <span className="text-white bg-sky-200 px-2 rounded-lg">business</span> with SkillCraft
         <p className='mt-2'>earning and services redefined</p> 
        </h1>
        <p className="text-lg md:text-3xl text-gray-600 mt-4">
          We are the Ultimate Learning and Digital Agency Hub.
        </p>
        <button className="border border-blue-800 text-black px-2 py-4 w-80 rounded-full text-xl font-semibold hover:bg-blue-900 hover:text-white transition-colors mt-5">
        Work with us
      </button>
      </header>

      {/* Main Content Section */}
      <div className="relative flex flex-col md:flex-row items-center gap-8 justify-center">
        {/* Workspace Image */}
        <div className="w-full md:w-[900px] h-[400px] md:h-[500px]">
          <img
            src="https://ik.imagekit.io/xprogrammer/images/im%2011.png?updatedAt=1748790672725"
            alt="Workspace with hands and devices"
            className="w-full rounded-3xl h-full shadow-lg bg-cover"
          />
        </div>

      <div className="w-full md:w-1/4 flex flex-col gap-4 ">
  {/* Services */}
  <div className="relative bg-sky-100 py-4 px-3 rounded-3xl h-[35vh] md:h-[32vh]">
  

    {/* Service Labels with Tilt */}
    <div className="relative flex flex-col items-center justify-center h-64 text-foreground">
      <span
        className="absolute px-12 py-3 bg-white text-gray-800 rounded-full text-sm font-medium rotate-[8deg] md:rotate-[7deg] top-[5%] md:top-[16%] right-[50%] md:right-[45%]"
        
      >
        Branding
      </span>
      <span
        className="absolute px-12 py-3 bg-white text-gray-800 rounded-full text-sm font-medium rotate-[35deg] bottom-[76%] -right-[5%] "
       
      >
        Product Design
      </span>
      <span
        className="absolute px-12 py-3 bg-white text-gray-800 rounded-full text-sm font-medium -rotate-[10deg] top-[40%] right-[50%] md:right-[29%] "
       
      >
        Tech Support
      </span>
      <span
        className="absolute px-12 py-3 bg-white text-gray-800 rounded-full text-sm font-medium rotate-[5deg] top-[58%] left-[45%] "
        
      >
        Trading
      </span>
      <span
        className="absolute px-12 py-3 bg-white text-gray-800 rounded-full text-sm font-medium rotate-[0deg] bottom-[4%] left-[10%] "
        
      >
        Web Development
      </span>
      <span
        className="absolute px-12 py-3 bg-white text-gray-800 rounded-full text-sm font-medium rotate-[0deg] top-[98%] right-[20%] "
       
      >
        And More
      </span>
    </div>
  </div>

          {/* Features List */}
          <div className="bg-sky-100 p-4 rounded-xl">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2"><GiCheckMark /></span> Professional Projects Done
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2"><GiCheckMark /></span> Creative Builders
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2"><GiCheckMark /></span> Happy Clients
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2"><GiCheckMark /></span> And More
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;