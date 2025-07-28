import { Link } from "react-router-dom";
import footerLogo from "../assets/footer.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <footer className="container mx-auto pb-12 px-4">
      <div className="rounded-xl bg-[#002B55] text-white relative overflow-hidden px-4 md:px-8 lg:px-20 py-16 md:py-20 lg:py-28">
        {/* Background blur shape */}
        <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[741px] lg:h-[741px] bg-[#1b7ee14f] rounded-full blur-3xl -bottom-[200px] md:-bottom-[350px] lg:-bottom-[500px] -left-[100px] md:-left-[125px] lg:-left-[150px] z-0"></div>

        {/* Content container */}
        <div className="relative z-10 space-y-8 md:space-y-10 lg:flex lg:space-y-0 lg:gap-10 lg:justify-between">
          {/* Newsletter section */}
          <div className="w-full lg:w-[500px] flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              Join Our JF Products
            </h2>
            <p className="text-sm text-gray-300">
              We'll tell you about store updates and discounts
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#1c4063] text-white p-3 md:p-4 rounded-full outline-none placeholder:text-gray-400"
            />

            <label className="flex items-start space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                className="accent-green-500 mt-1 flex-shrink-0"
              />
              <span>Yes, subscribe me to your newsletter.</span>
            </label>

            <button
              type="submit"
              className="bg-white text-[#002B55] font-semibold px-6 md:px-8 py-3 rounded-full hover:opacity-90 transition w-full cursor-pointer"
            >
              Join Now
            </button>
          </div>

          {/* Links section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:gap-12 xl:gap-16 gap-6 lg:gap-y-0">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Information</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-white transition cursor-pointer">
                  Home
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  Shop
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  Our Story
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  Blogs
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Helpful</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-white transition cursor-pointer">
                  FAQs
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  Terms & Conditions
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  Shipping Policy
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  My Account
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="relative z-10 mt-8 md:mt-12 flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 text-center sm:text-left">
            {/* Logo */}
            <img
              src={footerLogo}
              alt="JF Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
            />
            <div>
              <p className="font-semibold text-sm">Our Branches</p>
              <p className="text-xs md:text-sm text-gray-300">
                Coimbatore, Chennai, Hyderabad, Goa, Kochi
              </p>
            </div>
          </div>
          <button className="bg-lime-400 text-[#002B55] cursor-pointer font-semibold px-4 md:px-6 py-2 rounded-full hover:bg-lime-300 transition text-sm md:text-base w-full sm:w-auto max-w-[200px]">
            Contact Us
          </button>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="max-w-full lg:max-w-[1080px] mx-auto mt-8 md:mt-12 border-t border-gray-600 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
        <p className="text-center md:text-left">
          Copyright © 2025 JF Products. All rights reserved
        </p>
        <div className="flex space-x-3 md:space-x-4">
          <Link
            to="/facebook"
            className="bg-white text-[#002B55] p-2 rounded-full hover:bg-gray-200 transition"
          >
            <FaFacebookF size={16} className="md:w-[18px] md:h-[18px]" />
          </Link>
          <Link
            to="/instagram"
            className="bg-white text-[#002B55] p-2 rounded-full hover:bg-gray-200 transition"
          >
            <FaInstagram size={16} className="md:w-[18px] md:h-[18px]" />
          </Link>
          <Link
            to="/youtube"
            className="bg-white text-[#002B55] p-2 rounded-full hover:bg-gray-200 transition"
          >
            <FaYoutube size={16} className="md:w-[18px] md:h-[18px]" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
