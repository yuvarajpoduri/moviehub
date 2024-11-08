// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Login from './forms/Login';
import Signup from './forms/Signup';
import Logout from './forms/Logout';
import Watchlist from './pages/Watchlist';
import Watched from './pages/Watched';
import ContactUs from './pages/Contactus';
import './Navbar.css';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [, setUsername] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('username');

    if (token && user) {
      setIsLoggedIn(true);
      setUsername(user);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul className='navbarc'>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>

            {/* Search Bar */}
            <div style={{ padding: '0 20px', display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search movies by title"
                style={{
                  padding: '8px',
                  fontSize: '16px',
                  width: '100%',
                  maxWidth: '400px',
                  marginTop:'-10px',
                  marginLeft:'-30px'
                }}
              />
              
              {/* Menu Button */}
              <button onClick={toggleMenu} style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '30px',
                marginLeft: '10px',
                marginTop:'-15px'
              }}>
                ☰
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div style={{
                  position: 'absolute',
                  top: '80px',
                  right: '5px',
                  zIndex: 1000,
                }}>
                  <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                    {isLoggedIn ? (
                      <>
                        <li><Link to="/watchlist">Watchlist</Link></li>
                        <li><Link to="/watched">Watched</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                      </>
                    ) : (
                      <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                      </>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movies" element={<Movies searchTerm={searchTerm} />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
