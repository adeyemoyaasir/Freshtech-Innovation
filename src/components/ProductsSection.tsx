import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

const ProductsSection = () => {
  return (
    <section className="bg-white py-8 px-4 sm:px-6 md:py-12 lg:py-16" id="products">
      <div className="max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-black mb-6 sm:mb-8 md:mb-2 hidden md:block">
          Proudly made products
        </h2>
       <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-black mb-6 sm:mb-8 md:mb-2 block md:hidden">
          Proudly made projects
        </h2>
        <div className="flex justify-center items-center mb-1 sm:mb-8 md:mb-10 hidden md:block">
          <svg
            width="100%"
            height="100"
            viewBox="0 0 300 150"
            preserveAspectRatio="xMidYMid meet"
            className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[600px] md:ml-20 lg:ml-56 "
          >
            <path
              d="M 0,50 Q 200,0 600,60"
              stroke="#03055B"
              strokeWidth="7"
              fill="none"
            />
          </svg>
        </div>
  <div className='block md:hidden mb-3 whitespace-nowrap overflow-x-auto space-x-3'>
<button className='py-1 px-7 bg-[#03055B] rounded-full text-white h-14 hover:border hover:border-[#03055B] hover:bg-transparent hover:text-[#03055B] transition-all'>All</button>
<button className='py-1 px-7 bg-gray-100 rounded-full text-black h-14 hover:bg-[#03055B] hover:text-white transition-all '>Web development</button>
<button className='py-1 px-7 bg-gray-100 rounded-full text-black h-14 hover:bg-[#03055B] hover:text-white transition-all '>Product design</button>
<button className='py-1 px-7 bg-gray-100 rounded-full text-black h-14 hover:bg-[#03055B] hover:text-white transition-all'>Branding</button>

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