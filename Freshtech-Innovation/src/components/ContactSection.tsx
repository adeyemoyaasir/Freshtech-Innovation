
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-black py-16 px-6" id="contact">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          GOT AN IDEA? LET'S HAVE A<br />CONVERSATION
        </h2>
        
        <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors mb-8">
          Contact Us
        </button>
        
        <div className="flex justify-center space-x-6">
          <Facebook className="w-6 h-6 text-white hover:text-blue-400 cursor-pointer" />
          <Instagram className="w-6 h-6 text-white hover:text-pink-400 cursor-pointer" />
          <Linkedin className="w-6 h-6 text-white hover:text-blue-500 cursor-pointer" />
          <Twitter className="w-6 h-6 text-white hover:text-blue-400 cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;