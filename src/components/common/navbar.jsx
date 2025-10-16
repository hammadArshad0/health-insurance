// src/Navbarproject.jsx
import { useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi"; // FiX for close icon

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow-md relative">
      {/* Top Section - Blog name + Icons for mobile */}
      <div className="flex items-center justify-between bg-green-700 text-white px-6 py-4">
        {/* Left - Hamburger Icon (visible on mobile only) */}
        <div
          className="text-2xl cursor-pointer hover:text-yellow-400 transition md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Center - Blog Name */}
        <h1 className="text-3xl font-bold tracking-wide text-center flex-1">
        Quality Health Insurance
        </h1>

        {/* Right - Search Icon (visible on mobile only) */}
        <div className="text-2xl cursor-pointer hover:text-yellow-400 transition md:hidden">
          <FiSearch />
        </div>
      </div>

      {/* Bottom Section - Navbar (hidden on small screens) */}
      <nav className="hidden md:flex items-center justify-between border-t border-gray-300 py-3 px-6">
        {/* Left - Hamburger Icon (desktop) */}
        <div className="text-2xl cursor-pointer hover:text-green-400 transition">
          <FiMenu />
        </div>

        {/* Center - Nav Items */}
        <ul className="flex space-x-8 text-lg font-medium text-gray-700">
          <li className="hover:text-green-400 cursor-pointer transition">Home</li>
          <li className="hover:text-green-400 cursor-pointer transition">About</li>
          <li className="hover:text-green-400 cursor-pointer transition">Categories</li>
          <li className="hover:text-green-400 cursor-pointer transition">Contact</li>
        </ul>

        {/* Right - Search Icon (desktop) */}
        <div className="text-2xl cursor-pointer hover:text-green-700 transition">
          <FiSearch />
        </div>
      </nav>

      {/* Mobile Slide-out Menu */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-green-700 text-white shadow-lg z-10 md:hidden animate-slideDown">
          <ul className="flex flex-col space-y-4 p-6 text-lg font-medium">
            <li
              className="hover:text-green-400 cursor-pointer transition"
              onClick={toggleMenu}
            >
              Home
            </li>
            <li
              className="hover:text-green-400cursor-pointer transition"
              onClick={toggleMenu}
            >
              About
            </li>
            <li
              className="hover:text-green-400 cursor-pointer transition"
              onClick={toggleMenu}
            >
              Categories
            </li>
            <li
              className="hover:text-green-400 cursor-pointer transition"
              onClick={toggleMenu}
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;