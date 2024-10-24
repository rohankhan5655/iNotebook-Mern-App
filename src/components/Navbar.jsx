import React, { useState, useEffect } from "react";
import 'animate.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ onLogout, isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState('animate__animated animate__fadeInLeft animate__faster');
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setAnimationClass('animate__animated animate__fadeOutLeft animate__faster');
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 400);
    } else {
      setIsMenuOpen(true);
      setAnimationClass('animate__animated animate__fadeInLeft animate__faster');
    }
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setAnimationClass('animate__animated animate__fadeOutLeft animate__faster');
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 400);
    }
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 px-4 py-4 flex justify-between items-center transition-all duration-300 animate__animated animate__fadeInDown ${isSticky ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <Link className="text-3xl font-bold leading-none" to="#">
          <h2>𝗂𝖭𝗈𝗍𝖾𝖻𝗈𝗈𝗸</h2>
        </Link>
        {/* Mobile Toggle Button */}
        <div className="lg:hidden absolute right-4 top-4">
          <button
            onClick={toggleMenu}
            className="navbar-burger flex items-center text-blue-600 p-3"
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-md text-blue-600 font-bold"
                  : "text-md text-gray-400 hover:text-gray-500"
              }
              to={localStorage.getItem('token') ? "/user-home" : "/"} // Redirect based on login status
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-sm text-blue-600 font-bold"
                  : "text-sm text-gray-400 hover:text-gray-500"
              }
              to="/about"
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li className="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-sm text-blue-600 font-bold"
                  : "text-sm text-gray-400 hover:text-gray-500"
              }
              to="/contact"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Authentication Links */}
        { !isLoggedIn ? (
          <form>
            <Link
              className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
              to="/sign-in" 
              role="button"
            >
              Sign In
            </Link>
            <Link
              className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
              to="/sign-up"
              role="button"
            >
              Sign Up
            </Link>
          </form>
        ) : (
          <Link
            className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
            to="/sign-in"
            onClick={() => {
              onLogout(); // Call the logout function passed from App
              closeMenu();
            }}
          >
            <span className="flex items-center justify-center">
              Log Out
              <svg
                className="w-4 h-4 text-white ml-2"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
              </svg>
            </span>
          </Link>
        )}
      </nav>

      {/* Mobile Menu */}
      <div className={`navbar-menu relative z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className={`fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto ${animationClass}`}>
          <div className="flex items-center mb-8">
            <Link className="mr-auto text-3xl font-bold leading-none" to="#">
              <h2>𝗂𝖭𝗈𝗍𝖾𝖻𝗈𝗈𝗸 📘</h2>
            </Link>
            <button className="navbar-close" onClick={toggleMenu}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <NavLink
                  className={({ isActive }) =>
                    isActive 
                      ? "block p-4 text-sm font-semibold text-blue-600 bg-blue-50 rounded"
                      : "block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  }
                  to={localStorage.getItem('token') ? "/user-home" : "/"}
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "block p-4 text-sm font-semibold text-blue-600 bg-blue-50 rounded"
                      : "block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  }
                  to="/about"
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "block p-4 text-sm font-semibold text-blue-600 bg-blue-50 rounded"
                      : "block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  }
                  to="/contact"
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Authentication Links in Mobile Menu */}
          { !isLoggedIn ? (
            <div className="mt-6">
              <Link
                to="/sign-in"
                className="block py-2 px-4 text-sm text-gray-900 hover:bg-gray-100 font-bold rounded transition duration-200"
                onClick={closeMenu}
              >
                Sign In
              </Link>
              <Link
                to="/sign-up"
                className="block py-2 px-4 mt-2 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded transition duration-200"
                onClick={closeMenu}
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <Link
              to="/sign-in"
              className="block py-2 px-4 mt-2 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded transition duration-200"
              onClick={() => {
                onLogout(); // Call the logout function passed from App
                closeMenu();
              }}
            >
              Log Out
            </Link>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
