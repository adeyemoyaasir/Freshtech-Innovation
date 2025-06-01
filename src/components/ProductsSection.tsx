
import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

const ProductsSection = () => {
  return (
    <section className="bg-white py-16 px-6" id="products">
      <div className="max-w-full md:max-w-[80%] mx-auto">
        <h2 className="text-3xl md:text-5xl text-center text-blue-800 mb-12">Proudly made products</h2>
          <div className="flex justify-center items-center -mt-24 -ml-44">
      <svg width="700" height="150" viewBox="0 0 300 150">
        <path
          d="M 0,90 Q 450,0 700,200" // Quadratic Bézier curve for a parabolic shape
          stroke="#1e3a8a" // Blue color (Tailwind's blue-900 equivalent)
          strokeWidth="6" // Extra-large thickness
          fill="none" // No fill, just the stroke
        />
      </svg>
    </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-full ">

          <div className="bg-gray-100 rounded-2xl h-[50vh] md:h-[70vh] w-[42vh] md:w-[70vh]">
            <div className="mb-6">
              <img 
                src="https://ik.imagekit.io/xprogrammer/images/im%2013.png?updatedAt=1748790702116" 
                alt="FreshPay Mobile App" 
                className="w-full h-[30vh] md:h-[46vh] object-cover rounded-t-2xl mx-auto"
              />
            </div>
              <p className="text-gray-900 text-2xl md:text-4xl mb-4 ml-4">
              FreshPays - Send Money to Nigeria from UK with Ease
            </p>
            <div className="ml-4 space-x-4">
              <span className="text-gray-900 text-lg md:text-2xl bg-white px-4 md:px-6 py-3 rounded-full inline-block flex w-1/2 md:w-1/3 cursor-pointer">Visit Website <GoArrowUpRight className='ml-2 mt-1 text-2xl'/></span>
            </div>
          </div>
          


          <div className="bg-gray-100 rounded-2xl h-[54vh] md:h-[70vh] w-[42vh] md:w-[70vh]">
            <div className="mb-6">
              <img 
                src="https://ik.imagekit.io/xprogrammer/images/im%202.png?updatedAt=17487907016360" 
                alt="SubSum Mobile App" 
                className="w-full h-[30vh] md:h-[46vh] object-cover rounded-t-2xl mx-auto"
              />
            </div>
            <p className="text-gray-900 text-2xl md:text-4xl mb-4 ml-4">
              SubSum - a doorway to fast growing and trustworthy bill payment facilitator in Nigeria.
            </p>
            <div className="ml-4 space-x-4">
              <span className="ttext-gray-900 text-lg md:text-2xl bg-white px-4 md:px-6 py-3 rounded-full inline-block flex w-1/2 md:w-1/3 cursor-pointer">Visit Website <GoArrowUpRight className='ml-2 mt-1 text-2xl'/></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;