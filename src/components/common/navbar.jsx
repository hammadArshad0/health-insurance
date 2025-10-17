import { useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { Link } from "react-router-dom"; // ✅ Add this

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="shadow-md relative">
      {/* Top Section */}
      <div className="flex items-center justify-between bg-green-700 text-white px-6 py-4">
        {/* Mobile Menu Toggle */}
        <div
          className="text-2xl cursor-pointer hover:text-yellow-400 transition md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Blog Title */}
        <h1 className="text-3xl font-bold tracking-wide text-center flex-1">
          Quality Health Insurance
        </h1>

        {/* Search Icon (mobile) */}
        <div className="text-2xl cursor-pointer hover:text-yellow-400 transition md:hidden">
          <FiSearch />
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center justify-between border-t border-gray-300 py-3 px-6">
        <div className="text-2xl cursor-pointer hover:text-green-400 transition">
          <FiMenu />
        </div>

        {/* ✅ Use React Router Links */}
        <ul className="flex space-x-8 text-lg font-medium text-gray-700">
          <li className="hover:text-green-400 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-green-400 transition">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-green-400 transition">
            <Link to="/insurance">insurance</Link>
          </li>
          <li className="hover:text-green-400 transition">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="text-2xl cursor-pointer hover:text-green-700 transition">
          <FiSearch />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-green-700 text-white shadow-lg z-10 md:hidden animate-slideDown">
          <ul className="flex flex-col space-y-4 p-6 text-lg font-medium">
            <li onClick={toggleMenu}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/categories">Categories</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
