
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      title: "PRODUCT DESIGN",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      workWithUs: "WORK WITH US",
      learnFromUs: "LEARN FROM US"
    },
    {
      title: "WEB DEVELOPMENT",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      workWithUs: "WORK WITH US",
      learnFromUs: "LEARN FROM US"
    },
    {
      title: "WEB DESIGN",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      workWithUs: "WORK WITH US",
      learnFromUs: "LEARN FROM US"
    },
    {
      title: "TRADING",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      workWithUs: "WORK WITH US",
      learnFromUs: "LEARN FROM US"
    },
    {
      title: "BRANDING",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      workWithUs: "WORK WITH US",
      learnFromUs: "LEARN FROM US"
    },
    {
      title: "FREELANCE & CAREER",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      workWithUs: "WORK WITH US",
      learnFromUs: "LEARN FROM US"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-sky-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-8">We offer wide range of creative services</h1>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            We help companies achieve what they're offering customers through brand and product
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="grid md:grid-cols-3 gap-8 items-center py-8 border-b border-gray-100">
                <div className="md:col-span-1">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                
                <div className="md:col-span-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                </div>
                
                <div className="md:col-span-1 flex flex-col space-y-4">
                  <button className="bg-sky-100 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-sky-200 transition-colors flex items-center justify-between">
                    {service.workWithUs}
                    <span className="ml-2">→</span>
                  </button>
                  <button className="bg-sky-100 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-sky-200 transition-colors flex items-center justify-between">
                    {service.learnFromUs}
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 mb-8">
            Don't miss out on the opportunity to collaborate with industry experts and explore what's possible in the digital 
            world. Ready to embark on a transformative experience with us?
          </p>
          <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
            Work with us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;