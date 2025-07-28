import { Link } from "react-router-dom";
import footerLogo from "../assets/footer.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <footer className="container mx-auto pb-12">
      <div className="rounded-xl bg-[#002B55] text-white relative overflow-hidden px-4 md:px-12 lg:px-20 py-28">
        {/* Background blur shape */}
        <div className="absolute w-[741px] h-[741px] bg-[#1B7FE166] rounded-full blur-3xl -bottom-[500px] -left-[150px] z-0"></div>

        {/* Content container */}
        <div className="w-full space-y-10 md:flex gap-10 md:justify-between z-40">
          {/* Newsletter section */}
          <div className="w-full md:w-[500px] flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Join Our JF Products</h2>
            <p className="text-sm text-gray-300">
              We’ll tell you about store updates and discounts
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#1c4063] text-white p-4 rounded-full outline-none"
            />

            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input type="checkbox" className="accent-green-500" />
              <span>Yes, subscribe me to your newsletter.</span>
            </label>

            <button
              type="submit"
              className=" bg-white text-[#002B55] font-semibold px-8 py-3 rounded-full hover:opacity-90 transition w-full cursor-pointer"
            >
              Join Now
            </button>
          </div>

          {/* Links section */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Information</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Home</li>
              <li>Shop</li>
              <li>Our Story</li>
              <li>Blogs</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Helpful</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>FAQs</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>My Account</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="w-full relative z-10 mt-12 flex flex-col lg:flex-row justify-between items-center gap-6 ">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <img
              src={footerLogo}
              alt="JF Logo"
              className="w-20 h-20 object-contain"
            />
            <div>
              <p className="font-semibold text-sm">Our Branches</p>
              <p className="text-sm text-gray-300">
                Coimbatore, Chennai, Hyderabad, Goa, Kochi
              </p>
            </div>
          </div>
          <button className="bg-lime-400 text-[#002B55] cursor-pointer font-semibold px-6 py-2 rounded-full hover:bg-lime-300 ">
            Contact Us
          </button>
        </div>
      </div>
      {/* Footer bottom */}
      <div className="w-[1080px] mx-auto mt-12 border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 ">
        <p>Copyright © 2025 JF Products. All rights reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link
            to="/facebook"
            className="bg-white text-[#002B55] p-2 rounded-full hover:bg-gray-200 transition"
          >
            <FaFacebookF size={18} />
          </Link>
          <Link
            to="/instagram"
            className="bg-white text-[#002B55] p-2 rounded-full hover:bg-gray-200 transition"
          >
            <FaInstagram size={18} />
          </Link>
          <Link
            to="/youtube"
            className="bg-white text-[#002B55] p-2 rounded-full hover:bg-gray-200 transition"
          >
            <FaYoutube size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
