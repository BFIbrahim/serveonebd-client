import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <ul className="flex flex-col md:flex-row gap-4 text-center md:text-left">
          <li>
            <Link href="/about" className="hover:text-green-400 transition-colors">About</Link>
          </li>
          <li>
            <a href="/contact" className="hover:text-green-400 transition-colors">Contact</a>
          </li>
          <li>
            <Link href="/privacy-policy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
            <FaFacebookF size={20} />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
            <FaTwitter size={20} />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
            <FaInstagram size={20} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
            <FaLinkedinIn size={20} />
          </Link>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-6">
        © 2025 SERVEONEBD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
