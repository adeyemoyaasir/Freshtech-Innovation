import React from 'react';


function HeroSection() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4 mt-10">
      {/* Header Section */}
      <header className="text-center mb-8">
        <p className="text-black text-lg uppercase tracking-widest">
          Welcome to FreshTech Innovations
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Elevate your <span className="text-white bg-blue-900 px-2 rounded-lg">skills</span> and{' '}
          <span className="text-white bg-blue-200 px-2 rounded-lg">business</span> with SkillCraft
         <p className='mt-2'>earning and services redefined</p> 
        </h1>
        <p className="text-lg md:text-3xl text-gray-600 mt-4">
          We are the Ultimate Learning and Digital Agency Hub.
        </p>
        <button className="mt-6 px-20 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
          Work with us
        </button>
      </header>

      {/* Main Content Section */}
      <div className="relative flex flex-col md:flex-row items-center gap-8 justify-center">
        {/* Workspace Image */}
        <div className="w-full md:w-[900px] h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            alt="Workspace with hands and devices"
            className="w-full rounded-3xl h-full shadow-lg bg-cover"
          />
        </div>

      <div className="w-full md:w-1/4 flex flex-col gap-4 ">
  {/* Services */}
  <div className="relative bg-blue-100 py-4 px-3 rounded-3xl h-[32vh]">
  

    {/* Service Labels with Tilt */}
    <div className="relative flex flex-col items-center justify-center h-64 text-foreground">
      <span
        className="absolute px-12 py-3 bg-white text-gray-800 rounded-full text-sm font-medium"
        style={{ transform: 'rotate(7deg)', top: '16%', right: '45%' }}
      >
        Branding
      </span>
      <span
        className="absolute px-12 py-3 bg-white text-gray-800 rounded-full text-sm font-medium "
        style={{ transform: 'rotate(35deg)', bottom: '76%', right: '-5%' }}
      >
        Product Design
      </span>
      <span
        className="absolute px-12 py-3 bg-white text-gray-800 rounded-full text-sm font-medium"
        style={{ transform: 'rotate(-10deg)', top: '40%', left: '-2%' }}
      >
        Tech Support
      </span>
      <span
        className="absolute px-12 py-3 bg-white text-gray-800 rounded-full text-sm font-medium"
        style={{ transform: 'rotate(5deg)', top: '58%', left: '45%' }}
      >
        Trading
      </span>
      <span
        className="absolute px-12 py-3 bg-white text-gray-800 rounded-full text-sm font-medium"
        style={{ transform: 'rotate(0deg)', bottom: '4%', left: '10%' }}
      >
        Web Development
      </span>
      <span
        className="absolute px-12 py-3 bg-white text-gray-800 rounded-full text-sm font-medium"
        style={{ transform: 'rotate(0deg)', top: '98%', right: '20%' }}
      >
        And More
      </span>
    </div>
  </div>

          {/* Features List */}
          <div className="bg-blue-50 p-4 rounded-xl">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span> Professional Projects Done
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span> Creative Builders
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span> Happy Clients
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span> And More
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;