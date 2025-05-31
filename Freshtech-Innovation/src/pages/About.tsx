
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-sky-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-8">Get To Know Us</h1>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            At FreshTech Innovations, we leverage cutting-edge technology to craft immersive 
            digital experiences that resonate with audiences. Our passion extends beyond delivering 
            cutting-edge services
          </p>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Team collaboration" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded">
                <span className="text-blue-800 font-semibold">Our Story</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Technology workspace" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Teamwork" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded">
                <span className="text-blue-800 font-semibold">Teamwork</span>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Our Story</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-800 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Our journey began with a shared commitment</h3>
                    <p className="text-gray-600 text-sm">
                      At FreshTech Innovations, we believe in the power of cutting-edge technology 
                      to transform businesses and drive success. Our team is passionate about 
                      creating innovative solutions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-800 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">We don't just build websites, we build dreams.</h3>
                    <p className="text-gray-600 text-sm">
                      Every project is an opportunity to bring visions to life through technology. 
                      We combine creativity with technical expertise to deliver exceptional results.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-800 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Imagine a place where anything stands</h3>
                    <p className="text-gray-600 text-sm">
                      Our collaborative environment fosters innovation and encourages creative 
                      thinking. We believe in pushing boundaries and exploring new possibilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-800 rounded-lg p-8 text-white">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Team meeting" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="flex justify-between items-center">
                <button className="bg-white text-blue-800 px-4 py-2 rounded font-semibold">
                  Learn More
                </button>
                <button className="bg-sky-200 text-blue-800 px-4 py-2 rounded font-semibold">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-sky-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-blue-800 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">We bring a framework for bringing ideas with on target theme</h3>
                  <p className="text-gray-600 text-sm">
                    Our structured approach ensures that every project aligns with your vision 
                    and business objectives.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-blue-800 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">We offer comprehensive tech training, mentoring and coaching program</h3>
                  <p className="text-gray-600 text-sm">
                    Empowering individuals and teams with the skills needed to thrive in 
                    the digital age.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-blue-800 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Expertise in modern web-designing aspect to our clients</h3>
                  <p className="text-gray-600 text-sm">
                    Delivering cutting-edge design solutions that captivate audiences and 
                    drive engagement.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-blue-800 rounded-lg p-6">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Mission visualization" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute top-8 left-8 bg-white px-3 py-1 rounded">
                  <span className="text-blue-800 font-semibold text-sm">Data Tracking</span>
                </div>
                <div className="absolute bottom-8 right-8 bg-white px-3 py-1 rounded">
                  <span className="text-blue-800 font-semibold text-sm">Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">Our Vision</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-sky-100 rounded-lg p-6">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Vision presentation" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute top-8 left-8 bg-white px-3 py-1 rounded">
                  <span className="text-blue-800 font-semibold text-sm">Design Thinking</span>
                </div>
                <div className="absolute bottom-8 right-8 bg-white px-3 py-1 rounded">
                  <span className="text-blue-800 font-semibold text-sm">Innovation</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Our vision is to be at the forefront of digital innovation, leading a 
                revolution that drives progress and transforms the development landscape. 
                We aim to be the catalyst for positive change in the technology sector.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-800 rounded-full"></div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    We envision a future where technology seamlessly integrates with human 
                    creativity to solve complex challenges and create meaningful experiences.
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-800 rounded-full"></div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Through continuous learning and adaptation, we strive to stay ahead of 
                    industry trends and deliver solutions that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 mb-8">
            Unlock the full potential of your digital strategy with us. Elevate your brand, boost your skills, 
            and amplify your online presence.
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

export default About;