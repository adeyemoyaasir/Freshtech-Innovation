import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '@/components/ContactSection';

const Services = () => {
  const services = [
    {
      title: "PRODUCT DESIGN",
      image: "https://ik.imagekit.io/xprogrammer/images/im%208.png?updatedAt=1748790716459",
      workWithUs: "WORK WITH US",
      learnFromUs: "LEARN FROM US"
    },
    {
      title: "WEB DEVELOPMENT",
      image: "https://ik.imagekit.io/xprogrammer/images/im%201.png?updatedAt=1748790707408",
      workWithUs: "WORK WITH US",
      learnFromUs: "LEARN FROM US"
    },
    {
      title: "WEB DESIGN",
      image: "https://ik.imagekit.io/xprogrammer/images/im%204.png?updatedAt=1748790652089",
      workWithUs: "WORK WITH US",
      learnFromUs: "LEARN FROM US"
    },
    {
      title: "TRADING",
      image: "https://ik.imagekit.io/xprogrammer/images/im%2012.png?updatedAt=1748790717523",
      workWithUs: "WORK WITH US",
      learnFromUs: "LEARN FROM US"
    },
    {
      title: "BRANDING",
      image: "https://ik.imagekit.io/xprogrammer/images/im%206.png?updatedAt=1748790656187",
      workWithUs: "WORK WITH US",
      learnFromUs: "LEARN FROM US"
    },
    {
      title: "FREELANCE & CAREER",
      image: "https://ik.imagekit.io/xprogrammer/images/im%2014.png?updatedAt=1748790671535",
      workWithUs: "WORK WITH US",
      learnFromUs: "LEARN FROM US"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-white py-16 px-6">
        <div className="max-w-full md:max-w-7xl mx-auto">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-row items-start py-8 border-b border-gray-100">
                <div className="md:w-1/3 pr-1">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-44 sm:h-72 md:h-80 lg:h-96 rounded-3xl"
                  />
                </div>
                
                <div className="w-2/3 flex flex-col space-y-4 ml-3">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">{service.title}</h3>
                  <div className="mb-10">
                    <div className="flex items-center">
                      <p className="text-md sm:text-xl md:text-2xl lg:text-3xl text-gray-900">{service.workWithUs}</p>
                      <button className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center ml-auto">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="border-b border-blue-200 w-full mt-2"></div>
                  </div>

                  <div>
                    <div className="flex items-center">
                      <p className="text-md sm:text-xl md:text-2xl lg:text-3xl text-gray-900">{service.learnFromUs}</p>
                      <button className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center ml-auto">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="border-b border-blue-200 w-full mt-2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  
      <section className="bg-sky-100 py-8 px-4 sm:py-10 sm:px-6 md:py-12 lg:py-16 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto rounded-2xl mb-8 sm:mb-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed">
            Don't miss out on the opportunity to collaborate with industry experts and explore what's possible in the digital world. Ready to embark on a transformative experience with us?
          </p>
          <button className="shadow-lg border border-blue-800 text-black px-4 sm:px-6 py-3 sm:py-4 w-full sm:w-64 md:w-72 lg:w-80 rounded-full text-base sm:text-lg md:text-xl font-semibold hover:bg-blue-900 hover:text-white transition-colors">
            Work with us
          </button>
        </div>
      </section>
 
      <ContactSection/>
      <Footer />
    </div>
  );
};

export default Services;