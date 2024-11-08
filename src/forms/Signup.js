import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match!");
      return;
    }

    try {
      // Send POST request to the backend
      const response = await axios.post('http://localhost:5000/api/signup', { username, password });

      // If successful, navigate to login page
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      // Log the error to the console for better debugging
      console.error(error.response || error.message);
      setErrorMessage('Error during signup: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container animate__animated animate__fadeIn">
        <h2>Signup</h2>
        <form onSubmit={handleSignup} className="signup-form">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="submit-button">Signup</button>
        </form>
      </div>

      <footer className="footer animate__animated animate__fadeInUp">
        <h3>Movie Hub</h3>
        <p>&copy; 2024 All Rights Reserved.</p>
        <div className="social-links">
          <a href="#facebook" className="social-icon">Facebook</a>
          <a href="#x" className="social-icon">Twitter</a>
          <a href="#instagram" className="social-icon">Instagram</a>
        </div>
      </footer>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Roboto', sans-serif;
            background-color: #121212;
            color: #fff;
          }

          .signup-page {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            padding: 40px 20px;
          }

          .signup-container {
            width: 100%;
            max-width: 400px;
            background-color: #222;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
            text-align: center;
          }

          h2 {
            color: #FF3333;
            margin-bottom: 20px;
            font-size: 1.8rem;
          }

          .signup-form .form-group {
            margin-bottom: 20px;
            text-align: left;
          }

          .signup-form label {
            display: block;
            color: #bbb;
            font-weight: 600;
            margin-bottom: 8px;
          }

          .signup-form input {
            width: 100%;
            padding: 10px;
            font-size: 1rem;
            border: 1px solid #444;
            border-radius: 4px;
            background-color: #333;
            color: #fff;
          }

          .signup-form input:focus {
            border-color: #FF3333;
            outline: none;
          }

          .submit-button {
            width: 100%;
            padding: 10px;
            font-size: 1.1rem;
            color: #fff;
            background-color: #FF3333;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .submit-button:hover {
            background-color: #d62b2b;
          }

          .error-message {
            margin-top: 20px;
            font-size: 0.9rem;
            color: #FF3333;
          }

          .footer {
            text-align: center;
            padding: 20px;
            background-color: #222;
            width: 100%;
            margin-top: auto;
          }

          .footer h3 {
            font-size: 1.5rem;
            color: #fff;
          }

          .footer p {
            color: #bbb;
            margin-top: 5px;
          }

          .social-links {
            margin-top: 10px;
          }

          .social-icon {
            color: #fff;
            margin: 0 10px;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .social-icon:hover {
            color: #00bcd4;
          }
        `}
      </style>
    </div>
  );
};

export default Signup;
