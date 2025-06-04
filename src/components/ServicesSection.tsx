import React, { useRef, useState, useEffect } from 'react';
import { FaSwatchbook, FaPenNib, FaCalendarAlt } from 'react-icons/fa';
import { VscTerminalCmd } from 'react-icons/vsc';
import { BsBagFill } from 'react-icons/bs';
import { TbBrandBinance } from 'react-icons/tb';

const services = [
  {
    icon: <FaSwatchbook />,
    title: 'Product Design',
    description: 'Gain knowledge in product design covering everything from research and user interface design to the creation of prototypes.',
    mentor: 'Yusuf Kareem',
  },
  {
    icon: <VscTerminalCmd />,
    title: 'Web Development',
    description: 'Our web development resources empower you to learn, design, and launch your website with confidence.',
    mentor: 'Yusuf Kareem',
  },
  {
    icon: <FaCalendarAlt />,
    title: 'Web Design',
    description: 'Discover the art of creating visually captivating web pages that drive high conversion rates.',
    mentor: 'Yusuf Kareem',
  },
  {
    icon: <TbBrandBinance />,
    title: 'Trading',
    description: 'Improve your visual skills through hands-on lessons and exercises.',
    mentor: 'Yusuf Kareem',
  },
  {
    icon: <FaPenNib />,
    title: 'Branding',
    description: 'Learn how to create high-quality languages that stand out.',
    mentor: 'Yusuf Kareem',
  },
  {
    icon: <BsBagFill />,
    title: 'Career & Freelance',
    description: 'Learn how to present, handle feedback, brand yourself and more.',
    mentor: 'Yusuf Kareem',
  },
];

function ServicesSection() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const maxIndex = services.length - 1;
        const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
        const cardWidth = sliderRef.current.querySelector('.snap-center').offsetWidth;
        sliderRef.current.scrollTo({
          left: nextIndex * (cardWidth + 16), // Account for space-x-4 (16px)
          behavior: 'smooth',
        });
      }
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  // Calculate progress for the progress bar
  const progress = (currentIndex / (services.length - 1)) * 100;

  return (
    <section className="bg-[#03055B] py-8 px-4 sm:px-6 md:py-12 lg:py-16" id="services">
      <div className="max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white mb-2 sm:mb-4 md:mb-2">
          We provide our customers with<br />top-notch services
        </h2>

        <div className="flex justify-center items-center mb-6 sm:mb-8 md:mb-10">
          <svg
            width="100%"
            height="100"
            viewBox="0 0 300 150"
            preserveAspectRatio="xMidYMid meet"
            className="w-[300px] sm:w-[250px] md:w-[300px] lg:w-[600px] md:-ml-40 lg:-ml-56"
          >
            <path
              d="M 0,50 Q 200,0 600,60"
              stroke="#60A5FA"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>

        {/* Slider for Mobile */}
        <div className="md:hidden overflow-x-hidden scrollbar-hide snap-x snap-mandatory" ref={sliderRef}>
          <div className="flex space-x-4 px-2 sm:px-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-14 sm:py-8 shadow-md min-w-[90vw] max-w-[500px] snap-center"
              >
                <div className="grid grid-cols-2 items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full mb-3 sm:mb-4 flex items-center justify-center">
                    <span className="text-blue-300 font-extrabold text-base sm:text-xl">
                      {service.icon}
                    </span>
                  </div>
                  <div className="text-gray-900 text-sm sm:text-sm flex items-center justify-end bg-gray-100 px-2 sm:px-3 py-2 rounded-full">
                    <span className="font-bold">Mentor: </span>
                    <span className="ml-1">{service.mentor}</span>
                  </div>
                </div>
                <h3 className="text-xl sm:text-lg md:text-xl text-gray-900 mb-1 sm:mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-md sm:text-sm leading-tight">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar for Mobile */}
        <div className="md:hidden mt-3 sm:mt-4 px-2 sm:px-4">
          <div className="w-full h-1 bg-blue-500 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Grid for Desktop */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-8 sm:py-10 md:py-12 shadow-md"
            >
              <div className="grid grid-cols-2 items-start">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-100 rounded-full mb-3 sm:mb-4 flex items-center justify-center">
                  <span className="text-blue-300 font-extrabold text-lg sm:text-xl md:text-2xl">
                    {service.icon}
                  </span>
                </div>
                <div className="text-gray-900 text-sm sm:text-base md:text-md flex items-center justify-end bg-gray-100 px-2 sm:px-3 py-2 -ml-3 rounded-full w-[200px]">
                
                  <span className="ml-1"><span className="font-bold">Mentor: </span>{service.mentor}</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-tight">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for Scrollbar and Progress Bar */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
}

export default ServicesSection;