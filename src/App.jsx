import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import SignIn from './components/Signin&Signup/SignIn';
import Signup from './components/Signin&Signup/Signup';
import PrivateHome from './components/PrivateHome';
import NoteState from './context/notes/NoteState';
import Noteform from './components/NoteForm/Noteform';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeLink, setActiveLink] = useState('/');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  // Check token on initial load and refresh
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set loggedIn state based on token presence
    setLoading(false); // End loading once check is complete
  }, []);

  // Handle loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Shorter loading duration for testing
    return () => clearTimeout(timer);
  }, []);

  // Listen for changes in location to set active link
  const location = useLocation();
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  // Handle login and save token in localStorage
  const handleLogin = async (email, password) => {
    try {
      const response = await fetch(`http://192.168.100.4:3000/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email: Email, Password: Password }),
      });

      const json = await response.json(); // Parse JSON response

      if (json.success) {
        localStorage.setItem('token', json.authtoken); // Save token to localStorage
        setIsLoggedIn(true); // Set login state
        navigate('/user-home'); // Redirect after login
      } else {
        console.error(json.error || 'Login failed'); // Log any error messages from the response
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  // Handle logout and remove token
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false); // Clear login state
    navigate('/'); // Redirect to home page after logout
  };

  // Wait for loading to finish
  if (loading) {
    return <Loader />;
  }

  return (
    <NoteState>
      <div className="flex flex-col min-h-screen">
        <Navbar activeLink={activeLink} onLogout={handleLogout} isLoggedIn={isLoggedIn} />
        <Routes>
          {/* Home route, redirect if logged in */}
          <Route path="/" element={isLoggedIn ? <Navigate to="/user-home" /> : <Home />} />

          {/* Private home route, redirect to home if not logged in */}
          <Route path="/user-home" element={isLoggedIn ? <PrivateHome /> : <Navigate to="/" />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Sign-in route */}
          <Route path="/sign-in" element={<SignIn onLogin={handleLogin} />} />

          {/* Sign-up route */}
          <Route path="/sign-up" element={<Signup />} />

          {/* Add note form, redirect to sign-in if not logged in */}
          <Route path="/add-note" element={isLoggedIn ? <Noteform /> : <Navigate to="/user-home" />} />
        </Routes>
        <Footer activeLink={activeLink} />
      </div>
    </NoteState>
  );
}

// Wrap App in Router
const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
