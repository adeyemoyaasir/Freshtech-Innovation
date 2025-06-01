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
  const progress = ((currentIndex) / (services.length - 1)) * 100;

  return (
    <section className="bg-blue-900 py-12 px-4 sm:px-6 md:py-16" id="services">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-center text-white font-bold mb-12">
          We provide our customers with<br />top-notch services
        </h2>

        <div className="flex justify-center items-center -mt-12 sm:-mt-16 mb-8">
          <svg width="300" height="150" viewBox="0 0 300 150">
            <path
              d="M 0,70 Q 150,0 400,100"
              stroke="#60A5FA"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>

        {/* Slider for Mobile */}
        <div className="md:hidden overflow-x-hidden scrollbar-hide snap-x snap-mandatory" ref={sliderRef}>
          <div className="flex space-x-4 px-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl px-6 py-8 shadow-md min-w-[80vw] snap-center"
              >
                <div className="grid grid-cols-2 items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full mb-4 flex items-center justify-center">
                    <span className="text-blue-300 font-extrabold text-xl">{service.icon}</span>
                  </div>
                  <div className="text-gray-900 text-sm ml-4 -mt-2 text-right flex items-center justify-end bg-gray-100 px-2 py-2 w-44 -ml-20 rounded-full">
                    <span className="font-bold">Mentor: </span>
                    <span className="rounded px-2 py-1 ml-1 text-sm">{service.mentor}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-tight">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar for Mobile */}
        <div className="md:hidden mt-4 px-2">
          <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Grid for Desktop */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl px-6 py-14 shadow-md">
              <div className="grid grid-cols-2 items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-blue-300 font-extrabold text-2xl">{service.icon}</span>
                </div>
                <div className="text-gray-900 text-md ml-10 -mt-4 text-right flex items-center justify-end bg-gray-100 px-2 w-44 -ml-10 rounded-full">
                  <span className="font-bold">Mentor: </span>
                  <span className="rounded px-2 py-1 ml-1 text-md">{service.mentor}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{service.title}</h3>
              <p className="text-gray-600 text-lg leading-tight">{service.description}</p>
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