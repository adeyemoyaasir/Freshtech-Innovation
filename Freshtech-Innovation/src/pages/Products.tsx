
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Products = () => {
  const testimonials = [
    {
      text: "Working with FreshTech Innovations has been a game-changer for our business. Their innovative approach and attention to detail have transformed our digital presence, making us more competitive in the market.",
      author: "James Kein",
      company: "ABC Tech"
    },
    {
      text: "I was worried about how much of my time it would take to build a professional website and optimize my business online. The FreshTech team made this process seamless and understanding all of my needs at once.",
      author: "Bablioh",
      company: "XYZ Corp"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-sky-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-8">Products</h1>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* FreshPays Product */}
            <div className="bg-black rounded-lg overflow-hidden">
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                    alt="FreshPays Mobile App"
                    className="w-48 h-80 object-cover rounded-lg"
                  />
                </div>
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">FreshPays - Send Money to Nigeria from UK with Ease</h3>
                  <button className="bg-transparent border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition-colors">
                    Visit Website →
                  </button>
                </div>
              </div>
            </div>

            {/* SubSum Product */}
            <div className="bg-black rounded-lg overflow-hidden">
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                    alt="SubSum Mobile App"
                    className="w-48 h-80 object-cover rounded-lg"
                  />
                </div>
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">SubSum - a doorway to fast growing and trustworthy bill payment facilitator in Nigeria.</h3>
                  <button className="bg-transparent border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition-colors">
                    Visit Website →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-sky-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">Our Customer Says</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;