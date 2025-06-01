
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
        <div className="max-w-full md:max-w-[80%] mx-auto">
          <h1 className="text-5xl font-bold text-black mb-8 ">Products</h1>
        </div>
           <div className="max-w-full md:max-w-[80%] mx-auto">
            
             <div className="grid md:grid-cols-2 gap-2 max-w-full ">
     
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
                     src="https://ik.imagekit.io/xprogrammer/images/im%202.png?updatedAt=1748790701636" 
                     alt="SubSum Mobile App" 
                     className="w-full h-[30vh] md:h-[46vh] object-cover rounded-t-2xl mx-auto"
                   />
                 </div>
                 <p className="text-gray-900 text-2xl md:text-4xl mb-4 ml-4">
                   SubSum - a doorway to fast growing and trustworthy bill payment facilitator in Nigeria.
                 </p>
                 <div className="ml-4 space-x-4">
                   <span className="text-gray-900 text-lg md:text-2xl bg-white px-4 md:px-6 py-3 rounded-full inline-block flex w-1/2 md:w-1/3 cursor-pointer">Visit Website <GoArrowUpRight className='ml-2 mt-1 text-2xl'/></span>
                 </div>
               </div>
             </div>
           </div>
         </section>

      {/* Customer Testimonials */}
      <section className="bg-sky-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Our Customer Says</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                <p className="text-black text-2xl mb-6 ">"{testimonial.text}"</p>
                <div className="flex items-center">
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 text-2xl mb-5">{testimonial.author}</h4>
                    <p className="text-gray-400 text-xl">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>
<ContactSection/>
      <Footer />
    </div>
  );
};

export default Products;