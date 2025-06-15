
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GoArrowUpRight } from "react-icons/go";
import ContactSection from '@/components/ContactSection';

const Products = () => {
  const testimonials = [
    {
      text: "Working with FreshTech Innovations has been a game-changer for our business. Their innovative approach and attention to detail have transformed our digital presence, making us more competitive in the market.",
      author: "Fresh Pays",
      company: "Ayub GrowSmart"
    },
    {
      text: "I was worried about how much of my time it would take to build a professional website and optimize my business online. The FreshTech team made this process seamless and understanding all of my needs at once.",
      author: "SubSum",
      company: "Ayub GrowSmart"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-full md:max-w-[70%] mx-auto">
          <h1 className="text-5xl font-bold text-black mb-8 ">Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* FreshPays Card */}
          <div className="bg-gray-100 rounded-2xl h-auto w-full max-w-[400px] md:max-w-none mx-auto">
            <div className="mb-4">
              <img
                src="https://ik.imagekit.io/xprogrammer/images/im%2013.png?updatedAt=1748790702116"
                alt="FreshPay Mobile App"
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-t-2xl"
              />
            </div>
             <p className="text-gray-900 text-2xl sm:text-2xl md:text-3xl lg:text-3xl mb-3 sm:mb-4 ml-3 sm:ml-4 hidden md:block">
              FreshPays - Send Money to Nigeria from <br/> UK with Ease
            </p>
            <p className="text-gray-900 text-2xl sm:text-2xl md:text-3xl lg:text-3xl mb-3 sm:mb-4 ml-3 sm:ml-4 block md:hidden">
              FreshPays - Send Money to Nigeria from UK with Ease
            </p>
            <div className="ml-3 sm:ml-4 mb-3 sm:mb-4">
              <a
                href="#"
                className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl bg-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full inline-flex items-center w-auto cursor-pointer hover:bg-gray-200 transition-colors"
              >
                Visit Website <GoArrowUpRight className="ml-2 text-lg sm:text-xl md:text-2xl" />
              </a>
            </div>
          </div>

          {/* SubSum Card */}
          <div className="bg-gray-100 rounded-2xl h-auto w-full max-w-[400px] md:max-w-none mx-auto">
            <div className="mb-4">
              <img
                src="https://ik.imagekit.io/xprogrammer/images/im%202.png?updatedAt=1748790701636"
                alt="SubSum Mobile App"
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-t-2xl"
              />
            </div>
           <p className="text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-3xl mb-3 sm:mb-4 ml-3 sm:ml-4 hidden md:block">
              SubSum - A doorway to fast-growing and trustworthy bill payment facilitator in Nigeria
            </p>
            <p className="text-gray-900 text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 ml-3 sm:ml-4 block md:hidden">
              SubSum - The best place to buy affordable Data , Airtime and other trustworthy bills payment in Nigeria
            </p>
            <div className="ml-3 sm:ml-4 mb-3 sm:mb-4">
              <a
                href="https://subssum.com"
                className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl bg-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full inline-flex items-center w-auto cursor-pointer hover:bg-gray-200 transition-colors"
              >
                Visit Website <GoArrowUpRight className="ml-2 text-lg sm:text-xl md:text-2xl" />
              </a>
            </div>
          </div>
</div>
        </div>
      </section>

    
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Products;