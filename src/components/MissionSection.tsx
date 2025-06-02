import React from 'react';
import { GiCheckMark } from "react-icons/gi";

const MissionSection = () => {
  return (
    <section className="bg-white py-8 px-4 sm:px-6 md:py-12 lg:py-16">
      <div className="max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center text-black mb-6 sm:mb-8 md:mb-10">
          Our Mission
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text List */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {[
              "We drive progress through technology and assemble skilled teams for your projects.",
              "We boost businesses by discussing how tech can supercharge growth and innovation.",
              "We offer personalized tech tutoring, making learning exciting and engaging.",
              "We pioneer virtual job roles, creating opportunities for diverse talents worldwide.",
              "We pioneer virtual job roles, creating opportunities for diverse talents worldwide.",
            ].map((text, index) => (
              <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black text-base sm:text-lg md:text-xl">
                    <GiCheckMark />
                  </span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Image with Labels */}
          <div className="relative bg-blue-900 p-4 sm:p-6 md:p-8 w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl sm:rounded-2xl mt-6 sm:mt-8 md:mt-0">
            <div className="relative w-full h-full">
              <img
                src="https://ik.imagekit.io/xprogrammer/images/im%203.png?updatedAt=1748790652688"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
              />
            </div>

            {/* Top Left Label */}
            <div className="absolute top-4 sm:top-6 md:top-8 left-2 sm:left-3 md:left-4 bg-white text-black px-4 sm:px-6 md:px-8 py-1 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium shadow-md">
              Tech & Design Studio
            </div>

            {/* Bottom Left Label */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-2 sm:left-3 md:left-4 bg-white text-black px-4 sm:px-6 md:px-8 py-1 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium shadow-md">
              Innovative Tech Solutions
            </div>

            {/* Bottom Right Label */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-2 sm:right-3 md:right-4 bg-white text-black px-4 sm:px-6 md:px-8 py-1 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium shadow-md">
              Digital Studio
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;