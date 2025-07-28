import { useState } from "react";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import navlogo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-[#b0dd1d] font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#b0dd1d] font-medium transition-colors"
            >
              Shop
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#b0dd1d] font-medium transition-colors"
            >
              Blogs
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#b0dd1d] font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Center - Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-22 h-22 rounded-full flex items-center justify-center">
              {/* Replace this div with your logo image */}
              <img src={navlogo} alt="Logo" className="w-full object-contain" />
            </div>
          </div>

          {/* Right side - */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-[#b0dd1d] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-[#b0dd1d] cursor-pointer transition-colors">
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">Login</span>
            </div>
            <button className="relative text-gray-600 hover:text-[#b0dd1d] transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile cart and search icons */}
            <button className="text-gray-600 hover:text-[#b0dd1d] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative text-gray-600 hover:text-[#b0dd1d] transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-[#b0dd1d] transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={toggleMenu}
          ></div>

          {/* Sidebar Menu */}
          <div
            className={`absolute left-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <img src={navlogo} alt="" />
                </div>
                <span className="text-gray-800 font-semibold text-lg">
                  Menu
                </span>
              </div>
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="p-4 space-y-2">
              <a
                href="#"
                className="flex items-center px-4 py-3 text-gray-700 hover:text-[#b0dd1d] hover:bg-blue-50 rounded-lg font-medium transition-all duration-200 transform hover:translate-x-1"
                onClick={toggleMenu}
              >
                <span className="text-lg">🏠</span>
                <span className="ml-3">Home</span>
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-3 text-gray-700 hover:text-[#b0dd1d] hover:bg-blue-50 rounded-lg font-medium transition-all duration-200 transform hover:translate-x-1"
                onClick={toggleMenu}
              >
                <span className="text-lg">🛍️</span>
                <span className="ml-3">Shop</span>
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-3 text-gray-700 hover:text-[#b0dd1d] hover:bg-blue-50 rounded-lg font-medium transition-all duration-200 transform hover:translate-x-1"
                onClick={toggleMenu}
              >
                <span className="text-lg">📝</span>
                <span className="ml-3">Blogs</span>
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-3 text-gray-700 hover:text-[#b0dd1d] hover:bg-blue-50 rounded-lg font-medium transition-all duration-200 transform hover:translate-x-1"
                onClick={toggleMenu}
              >
                <span className="text-lg">📞</span>
                <span className="ml-3">Contact</span>
              </a>

              {/* Divider */}
              <div className="border-t border-gray-200 my-4"></div>

              {/* User Section */}
              <div className="flex items-center px-4 py-3 text-gray-700 hover:text-[#b0dd1d] hover:bg-blue-50 rounded-lg cursor-pointer transition-all duration-200 transform hover:translate-x-1">
                <User className="w-6 h-6" />
                <span className="ml-3 font-medium">Login</span>
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
              <p className="text-gray-500 text-sm text-center">
                © 2024 Your Company
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
