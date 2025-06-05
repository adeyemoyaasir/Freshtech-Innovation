import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { GiCheckMark } from "react-icons/gi";

const About = () => {
  const story = [
    {
      number: '01',
      title: 'Our journey began with a shared commitment',
      content: 'To not just navigate the digital landscape but to redefine it. As we honed our skills in brand design, product design, web design, and web development.',
    },
    {
      number: '02',
      title: 'We don’t just build websites; we build dreams.',
      content: 'The digital canvas became our playground, and each project, a masterpiece. Beyond crafting digital experiences, we recognized the importance of sharing our insights, sparking our educational venture.',
    },
    {
      number: '03',
      title: 'Imagine a place where aspiring minds',
      content: 'Delve into the art of storytelling through brand design, unlocking the secrets of creating digital products that captivate, and mastering the language of the web. At FreshTech Innovation, we’ve created gateways to new possibilities.',
    },
    {
      number: '04',
      title: 'Our story is one of collaboration and innovation.',
      content: 'A narrative woven with creativity and the code of success. Join us on this adventure, where digital excellence meets educational empowerment. Welcome to FreshTech Innovation, where inspiration and innovation converge.',
    },
  ];

  const missionItems = [
    "We drive progress through technology and assemble skilled teams for your projects.",
    "We boost businesses by discussing how tech can supercharge growth and innovation.",
    "We offer personalized tech tutoring, making learning exciting and engaging.",
    "We pioneer virtual job roles, creating opportunities for diverse talents worldwide.",
  ];

  const visionItems = [
    "Be at the forefront of digital innovation, setting new standards for excellence in brand design, product design, web design, web development, trading, and career freelancing.",
    "Envision education as a catalyst for change, empowering individuals to transform aspirations into achievements through our courses.",
    "Create an ecosystem where creative minds, industry experts, and aspiring professionals collaborate to foster innovation.",
    "Make a global impact by equipping individuals with skills to thrive in the digital era.",
    "Empower digital futures through compelling digital experiences and top-notch education.",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Get To Know Us Section */}
      <section className="py-8 px-4 sm:px-6 md:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto text-left md:text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 md:mb-8">
            Get To Know Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed">
            At FreshTech Innovations, we leverage cutting-edge technology to craft immersive digital experiences that resonate with audiences. Our passion extends beyond delivering cutting-edge services.
          </p>
        </div>
      </section>

      {/* Image Grid and Story Section */}
      <section className="bg-white py-8 px-4 sm:px-6 md:py-12 lg:py-16">
        <div className="max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10">
            <div className="col-span-1">
              <img
                src="https://ik.imagekit.io/xprogrammer/images/im%2010.png?updatedAt=1748790653612"
                alt="Team collaboration"
                className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] object-cover rounded-md sm:rounded-xl shadow-md"
              />
            </div>
            <div className="col-span-1">
              <img
                src="https://ik.imagekit.io/xprogrammer/images/im%209.png?updatedAt=1748790711081"
                alt="Technology workspace"
                className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] object-cover rounded-md sm:rounded-xl shadow-md"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <img
                src="https://ik.imagekit.io/xprogrammer/images/im%205.png?updatedAt=1748790653961"
                alt="Teamwork"
                className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] object-cover rounded-md sm:rounded-xl shadow-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4 sm:mb-6 md:mb-8">
                Our Story
              </h2>
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {[
                  "At FreshTech Innovations Ltd, we began as a team of passionate builders, designers, developers, technologists, and entrepreneurs united by a bold idea: to create digital solutions that empower, educate, and inspire.",
                  "More than a digital agency, we blend technical excellence with a deep commitment to lifelong learning. Every project is crafted with purpose, every line of code a step toward shaping a smarter future.",
                  "We don’t follow trends—we challenge them. From branding and UX to full-scale development, we transform complex ideas into intuitive digital experiences, sharing knowledge and building communities.",
                  "FreshTech is where innovation meets education, and where stories, ideas, and dreams come to life.",
                ].map((text, index) => (
                  <p
                    key={index}
                    className="text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {story.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 bg-sky-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-blue-600 font-bold text-sm sm:text-base md:text-lg">
                      {item.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold text-black mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-8 px-4 sm:px-6 md:py-12 lg:py-16">
        <div className="max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4 sm:mb-6 md:mb-8">
                Our mission
              </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {missionItems.map((text, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-base sm:text-lg md:text-xl">
                      <GiCheckMark />
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative bg-[#03055B] p-4 sm:p-6 md:p-8 w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl sm:rounded-2xl mt-6 sm:mt-8 md:mt-0">
              <img
                src="https://ik.imagekit.io/xprogrammer/images/im%203.png?updatedAt=1748790652688"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
              />
              <div className="absolute top-4 sm:top-6 md:top-8 left-2 sm:left-3 md:left-4 bg-white text-black px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium shadow-md">
                Tech & Design Studio
              </div>
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-2 sm:left-3 md:left-4 bg-white text-black px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium shadow-md">
                Innovative Tech Solutions
              </div>
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-2 sm:right-3 md:right-4 bg-white text-black px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium shadow-md">
                Digital Studio
              </div>
            </div>
          </div>
        </div>
      </section>

     
      {/* Vision Section */}
      <section className="bg-white py-8 px-4 sm:px-6 md:py-12 lg:py-16 hidden md:block">
        <div className="max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto">
           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4 sm:mb-6 md:mb-8">
                Our Vision
              </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="relative bg-sky-200 p-4 sm:p-6 md:p-8 w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl sm:rounded-2xl mt-6 sm:mt-8 md:mt-0">
              <img
                src="https://ik.imagekit.io/xprogrammer/images/im%207.png?updatedAt=1748790653888"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
              />
              <div className="absolute top-4 sm:top-6 md:top-8 left-2 sm:left-3 md:left-4 bg-white text-black px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium shadow-md">
                Creative Solutions
              </div>
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-2 sm:left-3 md:left-4 bg-white text-black px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium shadow-md">
                Top-Notch Education
              </div>
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-2 sm:right-3 md:right-4 bg-white text-black px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium shadow-md">
                Successful Story
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {visionItems.map((text, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-base sm:text-lg md:text-xl">
                      <GiCheckMark />
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


       {/* Vision Section */}
      <section className="bg-white py-8 px-4 sm:px-6 md:py-12 lg:py-16 block md:hidden">
        <div className="max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto">
           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4 sm:mb-6 md:mb-8">
                Our Vision
              </h2>
               <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {visionItems.map((text, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-base sm:text-lg md:text-xl">
                      <GiCheckMark />
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="relative bg-sky-200 p-4 sm:p-6 md:p-8 w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl sm:rounded-2xl mt-6 sm:mt-8 md:mt-0">
              <img
                src="https://ik.imagekit.io/xprogrammer/images/im%207.png?updatedAt=1748790653888"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
              />
              <div className="absolute top-4 sm:top-6 md:top-8 left-2 sm:left-3 md:left-4 bg-white text-black px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium shadow-md">
                Creative Solutions
              </div>
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-2 sm:left-3 md:left-4 bg-white text-black px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium shadow-md">
                Top-Notch Education
              </div>
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-2 sm:right-3 md:right-4 bg-white text-black px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium shadow-md">
                Successful Story
              </div>
            </div>
           
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-100 py-8 px-4 sm:px-6 md:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 leading-relaxed">
            Unlock the full potential of your digital strategy with us. Elevate your brand, boost your skills, and amplify your online presence.
          </p>
          <button className="border border-blue-800 text-black px-4 sm:px-6 py-3 sm:py-4 w-full sm:w-64 md:w-72 lg:w-80 rounded-full text-base sm:text-lg md:text-xl font-semibold hover:bg-blue-900 hover:text-white transition-colors">
            Work with us
          </button>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default About;