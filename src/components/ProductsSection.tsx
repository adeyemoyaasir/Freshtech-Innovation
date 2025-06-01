import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

const ProductsSection = () => {
  return (
    <section className="bg-white py-8 px-4 sm:px-6 md:py-12 lg:py-16" id="products">
      <div className="max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-blue-800 font-bold mb-6 sm:mb-8 md:mb-12">
          Proudly Made Products
        </h2>

        <div className="flex justify-center items-center mb-6 sm:mb-8 md:mb-10">
          <svg
            width="100%"
            height="100"
            viewBox="0 0 300 150"
            preserveAspectRatio="xMidYMid meet"
            className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px]"
          >
            <path
              d="M 0,90 Q 150,0 300,90"
              stroke="#1e3a8a"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>

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
            <p className="text-gray-900 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 ml-3 sm:ml-4">
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
            <p className="text-gray-900 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 ml-3 sm:ml-4">
              SubSum - A doorway to fast-growing and trustworthy bill payment facilitator in Nigeria
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
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;