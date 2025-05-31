
import React from 'react';

const ProductsSection = () => {
  return (
    <section className="bg-white py-16 px-6" id="products">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Proudly made products</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-black rounded-lg p-8 text-center">
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="FreshPay Mobile App" 
                className="w-32 h-56 object-cover rounded-lg mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">FreshPay</h3>
            <p className="text-gray-300 text-sm mb-4">
              FreshPays - Send Money to Nigeria from UK with Ease
            </p>
            <div className="flex justify-center space-x-4">
              <span className="text-gray-400 text-xs">Visit Website →</span>
            </div>
          </div>
          
          <div className="bg-black rounded-lg p-8 text-center">
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="SubSum Mobile App" 
                className="w-32 h-56 object-cover rounded-lg mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">SubSum</h3>
            <p className="text-gray-300 text-sm mb-4">
              SubSum - a doorway to fast growing and trustworthy bill payment facilitator in Nigeria.
            </p>
            <div className="flex justify-center space-x-4">
              <span className="text-gray-400 text-xs">Visit Website →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;