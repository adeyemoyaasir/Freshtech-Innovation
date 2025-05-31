import React from 'react';

const services = [
  {
    title: 'Product Design',
    description: 'Gain knowledge in product design covering everything from research and user interface design to the creation of prototypes.',
    mentor: 'Yusuf Kareem',
  },
  {
    title: 'Web Development',
    description: 'Our web development resources empower you to learn, design, and launch your website with confidence.',
    mentor: 'Yusuf Kareem',
  },
  {
    title: 'Web Design',
    description: 'Discover the art of creating visually captivating web pages that drive high conversion rates.',
    mentor: 'Yusuf Kareem',
  },
  {
    title: 'Trading',
    description: 'Improve your visual skills through hands on lessons and exercises.',
    mentor: 'Yusuf Kareem',
  },
  {
    title: 'Branding',
    description: 'Learn how to create high quality languages that stand out.',
    mentor: 'Yusuf Kareem',
  },
  {
    title: 'Career & Freelance',
    description: 'Learn how to present, handle feedback, brand yourself and more.',
    mentor: 'Yusuf Kareem',
  },
];

function ServicesSection() {
  return (
    <section className="bg-blue-900 py-16 px-6" id="services">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-center text-white mb-12">
          We provide our customers with<br />top-notch services
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">

              <div className='inline-block flex '>
              <div className="w-12 h-12 bg-blue-100 rounded-full mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
              </div>
              <span className="text-gray-500 text-xs bg-blue-50 rounded-full flex px-14 p-1 items-center ">{service.mentor}</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.title}</h3>
              <p className="text-gray-600 text-xs leading-tight">{service.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;