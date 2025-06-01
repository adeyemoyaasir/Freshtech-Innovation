
import React from 'react';
import { GiCheckMark } from "react-icons/gi";
const MissionSection = () => {
  return (

 <section className="bg-white py-10 px-6">
      <div className="max-w-2xl md:max-w-7xl mx-auto">
        <h2 className="text-4xl text-center text-black mb-3 md:-mb-12">Our mission</h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 md:space-y-14">
                        <div className="flex items-start space-x-4">
              <div className="h-10 w-10 md:w-12 md:h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 max-w-4xl">
               <span className="text-black text-lg md:text-2xl items-center"><GiCheckMark /></span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed text-lg">
              We drive progress through technology and assemble skilled teams for your projects.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 ">
              <div className="h-10 w-10 md:w-12 md:h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black text:lg md:text-2xl items-center"><GiCheckMark /></span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed text-lg">
                 We boost businesses by discussing how tech can supercharge growth and innovation.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 ">
              <div className="h-10 w-10 md:w-12 md:h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black text:lg md:text-2xl items-center"><GiCheckMark /></span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We offer personalized tech tutoring, making learning exciting and engaging.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="h-10 w-10 md:w-12 md:h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black text:lg md:text-2xl items-center"><GiCheckMark /></span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed" text-lg>
               We pioneer virtual job roles, creating opportunities for diverse talents worldwide.
                </p>
              </div>
            </div>
             <div className="flex items-start space-x-4">
              <div className="h-10 w-10 md:w-12 md:h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black text:lg md:text-2xl items-center"><GiCheckMark /></span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed" text-lg>
               We pioneer virtual job roles, creating opportunities for diverse talents worldwide.
                </p>
              </div>
            </div>
          </div>
          

   
      <div className="relative bg-blue-900 p-8 text-white w-[390px] md:w-[650px] h-[400px] md:h-[650px] overflow-hidden rounded-2xl mt-5 md:mt-20 -ml-3 md:-ml-1">
       
        <div className="relative w-full h-full">
          <img
            src="https://ik.imagekit.io/xprogrammer/images/im%203.png?updatedAt=1748790652688"
            alt="Team collaboration"
            className="w-full h-full object-cover rounded-2xl"
          />
         
        </div>

        {/* Top Left Label */}
        <div className="absolute top-14 left-4 bg-white text-black px-5 md:px-10 py-2 md:py-4 rounded-full text-sm font-medium shadow-md md:text-xl">
          Tech & Design Studio
        </div>

        {/* Bottom Left Label */}
        <div className="absolute bottom-10 left-1 bg-white text-black px-5 md:px-10 py-2 md:py-4 rounded-full text-sm font-medium shadow-md md:text-xl">
          Innovative Tech Solutions
        </div>

        {/* Bottom Right Label */}
        <div className="absolute bottom-10 right-4 bg-white text-black px-5 md:px-10 py-2 md:py-4 rounded-full text-sm font-medium shadow-md md:text-xl">
          Digital Studio
        </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;