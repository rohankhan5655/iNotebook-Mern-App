import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ activeLink }) => {
  return (
    <footer className="bg-white rounded-lg shadow mx-2 mb-2">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">© 2024 iNotebook. All Rights Reserved.</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <Link 
              to="/" 
              className={`hover:underline me-4 md:me-6 ${activeLink === '/' ? 'font-bold text-blue-600' : 'text-gray-400'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`hover:underline me-4 md:me-6 ${activeLink === '/about' ? 'font-bold text-blue-600' : 'text-gray-400'}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`hover:underline me-4 md:me-6 ${activeLink === '/contact' ? 'font-bold text-blue-600' : 'text-gray-400'}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
