import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Tagline */}
        <div>
          <div className="flex items-center space-x-2">
            {/* Replace with your own logo */}
            <img src={logo} alt="Logo" className="h-12 w-35" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Top IT Consulting Delivering <br />
            Custom Innovation Solutions
          </p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-white font-semibold mb-4">About us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Company</a></li>
            <li><a href="#" className="hover:text-white">Capabilities</a></li>
            <li><a href="#" className="hover:text-white">Industries</a></li>
            <li><a href="#" className="hover:text-white">Insights</a></li>
            <li>
              <a href="#" className="hover:text-white flex items-center gap-2">
                Careers
                <span className="bg-blue-700 text-white text-xs px-2 py-0.5 rounded-full">
                  We're hiring
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Cookies</a></li>
            <li><a href="#" className="hover:text-white">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white">Suppliers</a></li>
            <li><a href="#" className="hover:text-white">EEO</a></li>
            <li><a href="#" className="hover:text-white">Sitemap</a></li>
            <li><a href="#" className="hover:text-white">Employee Tools</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4">Social Media</h3>
          <p className="text-sm mb-4 text-gray-400">
            Don’t miss to follow us on our <br /> social network accounts
          </p>
          <div className="flex space-x-3">
            <a href="#" className="p-2 border border-gray-600 hover:border-white rounded-md">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 border border-gray-600 hover:border-white rounded-md">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 border border-gray-600 hover:border-white rounded-md">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 border border-gray-600 hover:border-white rounded-md">
              <FaYoutube />
            </a>
            <a href="#" className="p-2 border border-gray-600 hover:border-white rounded-md">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2024 HighPoint Information Technology
      </div>
    </footer>
  );
}
