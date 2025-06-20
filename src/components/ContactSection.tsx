
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const ContactSection = () => {
  return (
    <section className="bg-black py-8 px-4 sm:px-6 md:py-12 lg:py-16" id="contact">
      <div className="mx-auto ml-2 max-md:ml-0 relative">
        <div className="ml-[100px] max-md:ml-0 flex mx-auto flex-col md:flex-row gap-10 md:gap-12">
          {/* Left Section: Heading and Button */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight flex flex-col gap-4">
              GOT AN IDEA? LET'S HAVE A CONVERSATION
              <button className="bg-white text-gray-900 text-[16px] sm:text-lg md:text-xl px-4 py-4 sm:px-6 sm:py-3 w-full md:w-80 h-auto rounded-full hover:bg-gray-200 transition-colors">
                Copy our Email Address
              </button>
            </h2>
          </div>

          {/* Right Section: Contact Links */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl text-white font-bold mb-6">CONTACT</h2>
            <div className="space-y-4">
              <a



                href="https://www.facebook.com/Freshtechltd01"

                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center text-lg sm:text-xl md:text-2xl space-x-3 cursor-pointer hover:text-blue-400 transition-colors"
              >
                <img src="https://cdn-icons-png.flaticon.com/256/124/124010.png" className="w-10 h-10 sm:w-6 sm:h-6 bg-white" />
                <span>Facebook</span>
                <LuSquareArrowOutUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-auto" />
              </a>
              <a



                href="https://Instagram.com/freshtechltd"

                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center text-lg sm:text-xl md:text-2xl space-x-3 cursor-pointer hover:text-pink-400 transition-colors"
              >
                <img src="https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_1280.png" className="w-10 h-10 sm:w-6 sm:h-6 rounded-sm" />
                <span>Instagram</span>
                <LuSquareArrowOutUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-auto" />
              </a>
              <a
                href="https://www.linkedin.com/company/freshtech-innovations-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center text-lg sm:text-xl md:text-2xl space-x-3 cursor-pointer hover:text-blue-500 transition-colors"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" className="w-10 h-10 sm:w-6 sm:h-6" />
                <span>LinkedIn</span>
                <LuSquareArrowOutUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-auto" />
              </a>
              <a



                href="https://x.com/freshtechltd01"

                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center text-lg sm:text-xl md:text-2xl space-x-3 cursor-pointer hover:text-blue-400 transition-colors"
              >
                <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg" className="w-10 h-10 sm:w-6 sm:h-6" />
                <span>X </span>
                <LuSquareArrowOutUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-auto" />
              </a>
            </div>
          </div>
        </div>

        <div className="">

        </div>

      </div>
    </section>
  );
};

export default ContactSection;