import { useState } from "react";
import { FiSearch, FiGlobe, FiMenu } from "react-icons/fi";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white w-full px-8 py-4 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-25" />
        </div>
      </div>

      {/* Center: Nav Links */}
      <ul className="hidden md:flex space-x-10 text-sm">
        <li className="hover:text-gray-400 cursor-pointer">Company</li>
        <li className="hover:text-gray-400 cursor-pointer">Capabilities</li>
        <li className="hover:text-gray-400 cursor-pointer">Industries</li>
        <li className="hover:text-gray-400 cursor-pointer">Insight</li>
        <li className="hover:text-gray-400 cursor-pointer">Career</li>
      </ul>

      {/* Right: Icons */}
      <div className="flex items-center space-x-5">
        <FiSearch className="text-lg cursor-pointer hover:text-gray-400" />
        <FiGlobe className="text-lg cursor-pointer hover:text-gray-400" />
        <FiMenu
          className="text-2xl cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black md:hidden border-t border-gray-800">
          <ul className="flex flex-col items-center py-4 space-y-3">
            <li className="hover:text-gray-400 cursor-pointer">Company</li>
            <li className="hover:text-gray-400 cursor-pointer">Capabilities</li>
            <li className="hover:text-gray-400 cursor-pointer">Industries</li>
            <li className="hover:text-gray-400 cursor-pointer">Insight</li>
            <li className="hover:text-gray-400 cursor-pointer">Career</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
