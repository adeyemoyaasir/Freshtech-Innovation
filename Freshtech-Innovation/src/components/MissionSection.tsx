
import React from 'react';

const MissionSection = () => {
  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-black mb-12">Our mission</h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-14">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black text-2xl items-center">✔</span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  We drive you through technology, top expertise and strong culture to deliver all project through the power of ONE TEAM.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black text-2xl items-center">✔</span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  We strive for exceptional human-centered design and working with our experienced stakeholders.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black text-2xl items-center">✔</span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  We believe people and their ideas drive creating experiences for clients and customers everywhere.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black text-2xl items-center">✔</span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  We believe in the incredibly diverse business talent. Discover an Experience, culture and experiences to tackle new ways of doing business.
                </p>
              </div>
            </div>
          </div>
          

   
      <div className="relative bg-blue-900 p-8 text-white w-[470px] h-[500px] overflow-hidden rounded-2xl mt-20">
       
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover rounded-2xl"
          />
         
        </div>

        {/* Top Left Label */}
        <div className="absolute top-14 left-4 bg-white text-blue-900 px-10 py-4 rounded-full text-sm font-medium shadow-md">
          Tech & Design Studio
        </div>

        {/* Bottom Left Label */}
        <div className="absolute bottom-10 left-1 bg-white text-blue-900 px-10 py-4 rounded-full text-sm font-medium shadow-md">
          Innovative Tech Solutions
        </div>

        {/* Bottom Right Label */}
        <div className="absolute bottom-10 right-4 bg-white text-blue-900 px-10 py-4 rounded-full text-sm font-medium shadow-md">
          Digital Studio
        </div>
      </div>


        </div>
      </div>
    </section>
  );
};

export default MissionSection;