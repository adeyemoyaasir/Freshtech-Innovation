
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection'
import { GiCheckMark } from "react-icons/gi";
const About = () => {

  const story = [
    {
      number: '01',
      title: 'Our journey began with a shared commitment ',
      content: 'To not just navigate the digital landscape but to redefine it. As we honed our skills in brand design, product design, web design, web development',

    },
    {
      number: '02',
      title: 'We don’t just build websites; we build dreams.',
      content: 'The digital canvas became our playground, and each project, a masterpiece. But beyond crafting digital experiences, we recognized the importance of sharing our insights. And so, our educational venture was born.',

    },
    {
      number: '03',
      title: 'Imagine a place where aspiring minds',
      content: 'Delve into the art of storytelling through brand design, unlocking the secrets of creating digital products that captivate, and mastering the language of the web. At freshtech innovation, we’ve created not just courses but gateways to new possibilities.',

    },
    {
      number: '04',
      title: 'Our story is one of collaboration, innovation, and continuous learning.',
      content: 'Its a narrative woven with the threads of creativity and the code of success. Join us on this adventure, where digital excellence meets educational empowerment. Lets redefine the future together. Welcome to freshtech innovation, where inspiration and innovation converge.',

    }
  ];


  return (
    <div className="min-h-screen">
      <Header />

 
    <section className="py-8 px-4 sm:px-6 md:py-12 lg:py-16">
      <div className="max-w-full md:max-w-4xl mx-auto md:text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 md:mb-8">
          Get To Know Us
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 leading-relaxed">
          At FreshTech Innovations, we leverage cutting-edge technology to craft immersive digital experiences that resonate with audiences. Our passion extends beyond delivering cutting-edge services.
        </p>
      </div>
    </section>


      {/* Image Grid Section */}
      <section className="bg-white py-16 px-2">
        <div className="max-w-full md:max-w-[85%] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-8 max-w-full">
      
      <div className="relative col-span-1">
        <img
          src="https://ik.imagekit.io/xprogrammer/images/im%2010.png?updatedAt=1748790653612"
          alt="Team collaboration"
          className="w-full h-[25vh] md:h-[40vh] object-cover rounded-md md:rounded-xl shadow-md"
        />
       
      </div>

      {/* Second Image */}
      <div className="relative col-span-1">
        <img
          src="https://ik.imagekit.io/xprogrammer/images/im%209.png?updatedAt=1748790711081"
          alt="Technology workspace"
          className="w-full h-[25vh] md:h-[40vh] object-cover rounded-md md:rounded-xl shadow-md"
        />
        
      </div>

      {/* Third Image */}
      <div className="relative col-span-2 md:col-span-1">
        <img
          src="https://ik.imagekit.io/xprogrammer/images/im%205.png?updatedAt=1748790653961"
          alt="Teamwork"
          className="w-full h-[30vh] md:h-[40vh] object-cover rounded-md md:rounded-xl shadow-md"
        />
       
      </div>
    </div>
          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-4xl text-black mb-6">Our Story</h2>
              <div className="space-y-10 mr-2 md:mr-24">

                <div className="flex items-start space-x-4">

                  <div>

                    <p className="text-black text-lg md:text-2xl">
                      At FreshTech Innovations Ltd, we began as a team of passionate builders, designers, developers, technologists, and entrepreneurs united by a bold idea: to create digital solutions that empower, educate, and inspire.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">

                  <div>

                    <p className="text-black text-lg md:text-2xl">
                      More than a digital agency, we blend technical excellence with a deep commitment to lifelong learning. Every project is crafted with purpose, every line of code a step toward shaping a smarter future
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">

                  <div>

                    <p className="text-black text-lg md:text-2xl">
                      We don’t follow trends we challenge them. From branding and UX to full-scale development, we transform complex ideas into intuitive digital experiences. And along the way, we share knowledge, grow communities, and build with intention.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">

                  <div>

                    <p className="text-black text-lg md:text-2xl">
                      FreshTech is where innovation meets education, and where stories, ideas, and dreams come to life.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-8 text-white -ml-8 md:-ml-40">
               {story.map((story, index) => (
              <div className="flex items-start mb-8">
                <div key={index} className="flex-shrink-0 w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-md md:text-xl">{story.number}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-black mb-2">{story.title}</h2>
                  <p className="text-black text-xl">{story.content}</p>
                </div>
                
              </div>
               ))}
        </div>
    </div>
    </div>
      </section>

  {/* Mission Section */ }
 <section className="bg-white py-10 px-6">
      <div className="max-w-2xl md:max-w-7xl mx-auto">
        <h2 className="text-4xl text-center text-black mb-3 md:-mb-12">Our mission</h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 md:space-y-14">
                        <div className="flex items-start space-x-4">
              <div className="h-10 w-10 md:w-12 md:h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 max-w-4xl">
               <span className="text-black text-lg md:text-2xl items-center"><GiCheckMark /></span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed text-lg">
              We drive progress through technology and assemble skilled teams for your projects.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 ">
              <div className="h-10 w-10 md:w-12 md:h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black text:lg md:text-2xl items-center"><GiCheckMark /></span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed text-lg">
                 We boost businesses by discussing how tech can supercharge growth and innovation.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 ">
              <div className="h-10 w-10 md:w-12 md:h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black text:lg md:text-2xl items-center"><GiCheckMark /></span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We offer personalized tech tutoring, making learning exciting and engaging.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="h-10 w-10 md:w-12 md:h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black text:lg md:text-2xl items-center"><GiCheckMark /></span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed" text-lg>
               We pioneer virtual job roles, creating opportunities for diverse talents worldwide.
                </p>
              </div>
            </div>
             <div className="flex items-start space-x-4">
              <div className="h-10 w-10 md:w-12 md:h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black text:lg md:text-2xl items-center"><GiCheckMark /></span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed" text-lg>
               We pioneer virtual job roles, creating opportunities for diverse talents worldwide.
                </p>
              </div>
            </div>
          </div>
          

   
      <div className="relative bg-blue-900 p-8 text-white w-[390px] md:w-[650px] h-[400px] md:h-[650px] overflow-hidden rounded-2xl mt-5 md:mt-20 -ml-3 md:-ml-1">
       
        <div className="relative w-full h-full">
          <img
            src="https://ik.imagekit.io/xprogrammer/images/im%203.png?updatedAt=1748790652688"
            alt="Team collaboration"
            className="w-full h-full object-cover rounded-2xl"
          />
         
        </div>

        {/* Top Left Label */}
        <div className="absolute top-14 left-4 bg-white text-black px-5 md:px-10 py-2 md:py-4 rounded-full text-sm font-medium shadow-md text-xl">
          Tech & Design Studio
        </div>

        {/* Bottom Left Label */}
        <div className="absolute bottom-10 left-1 bg-white text-black px-5 md:px-10 py-2 md:py-4 rounded-full text-sm font-medium shadow-md text-xl">
          Innovative Tech Solutions
        </div>

        {/* Bottom Right Label */}
        <div className="absolute bottom-10 right-4 bg-white text-black px-5 md:px-10 py-2 md:py-4 rounded-full text-sm font-medium shadow-md text-xl">
          Digital Studio
        </div>
      </div>
        </div>
      </div>
    </section>

  {/* Vision Section */ }
  <section className="bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-black mb-44 md:-mb-12">Our Vision</h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div className="relative bg-sky-200 p-8 text-white w-[390px] md:w-[650px] h-[400px] md:h-[650px] overflow-hidden rounded-2xl mt-5 md:mt-20 -ml-3 md:-ml-1">
       
        <div className="relative w-full h-full">
          <img
            src="https://ik.imagekit.io/xprogrammer/images/im%207.png?updatedAt=1748790653888"
            alt="Team collaboration"
            className="w-full h-full object-cover rounded-2xl"
          />
         
        </div>

        {/* Top Left Label */}
        <div className="absolute top-14 left-20 bg-white text-black px-5 md:px-10 py-2 md:py-4 rounded-full text-sm font-medium shadow-md text-xl">
         Creative Solutions
        </div>

        {/* Bottom Left Label */}
        <div className="absolute bottom-10 left-1 bg-white text-black px-5 md:px-10 py-2 md:py-4 rounded-full text-sm font-medium shadow-md text-xl">
         Top-Notch Education
        </div>

        {/* Bottom Right Label */}
        <div className="absolute bottom-10 right-4 bg-white text-black px-5 md:px-10 py-2 md:py-4 rounded-full text-sm font-medium shadow-md text-xl">
         Successful Story
        </div>
      </div>

          <div className="space-y-5">
            <div className="flex items-start space-x-4">
              <div className="h-8 w-8 md:w-12 md:h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black text:lg md:text-2xl items-center"><GiCheckMark /></span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed text-lg">
                 Our vision is to be at the forefront of digital innovation, pushing boundaries and setting new standards for excellence in brand design, product design, web design, web development, trading, and the diverse realms of career and freelance.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 ">
              <div className="h-8 w-8 md:w-12 md:h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black text:lg md:text-2xl items-center"><GiCheckMark /></span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed text-lg">
                 We envision a future where education is a catalyst for change. Our courses go beyond skill-building; they empower individuals to transform their aspirations into tangible achievements, fostering a community of lifelong learners.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 ">
              <div className="h-8 w-8 md:w-12 md:h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black text:lg md:text-2xl items-center"><GiCheckMark /></span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed text-lg">
                 At freshtech innovation, we see collaboration as the cornerstone of progress. Our vision is to create an ecosystem where creative minds, industry experts, and aspiring professionals come together, fostering innovation and pushing the envelope of what's possible in the digital landscape.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="h-8 w-8 md:w-12 md:h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black text:lg md:text-2xl items-center"><GiCheckMark /></span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed" text-lg>
                 We aspire to make a global impact by equipping individuals with the skills and knowledge needed to thrive in the digital era. Through our courses and digital agency services, we aim to contribute to the success stories of businesses and professionals around the world.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="h-8 w-8 md:w-12 md:h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black text:lg md:text-2xl items-center"><GiCheckMark /></span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed" text-lg>
                 Our overarching vision is to empower digital futures. Whether it's through crafting compelling digital experiences for clients or providing top-notch education, we are committed to being a driving force behind the success and growth of individuals and businesses navigating the digital frontier.
                </p>
              </div>
            </div>
          </div>
          

   
     

        </div>
      </div>
    </section>

  {/* CTA Section */ }
  < section className = "bg-sky-100 py-16 px-6" >
    <div className="max-w-full md:max-w-8xl mx-auto text-center">
      <p className="text-gray-700 mb-8 text-lg md:text-4xl">
        Unlock the full potential of your digital strategy with us. Elevate your brand, boost your skills,<br/>
        and amplify your online presence.
      </p>
      <button className="border border-blue-800 text-black px-2 py-4 w-full md:w-80 rounded-full text-xl font-semibold hover:bg-blue-900 hover:text-white transition-colors">
        Work with us
      </button>
    </div>
      </section >
<ContactSection/>
  <Footer />
    </div >
  );
};

export default About;