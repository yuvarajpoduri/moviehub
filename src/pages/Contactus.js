// Import necessary dependencies
import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-container">
      {/* Contact Header */}
      <header className="contact-header animate__animated animate__fadeInDown">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out with any questions, feedback, or suggestions.</p>
      </header>

      {/* Extra Contact Information */}
      <div className="extra-info animate__animated animate__fadeIn animate__delay-1s">
        <div className="info-item">
          <h3>Address</h3>
          <p>JVLN Nagar, Penugonds, Andhra Pradesh</p>
        </div>
        <div className="info-item">
          <h3>Phone</h3>
          <p>+91 8954976145</p>
        </div>
        <div className="info-item">
          <h3>Email</h3>
          <p>moviehub@gmail.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form animate__animated animate__fadeIn animate__delay-1s">
        <form>
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" className="form-input" placeholder="Your Name" />

          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-input" placeholder="Your Email" />

          <label htmlFor="message" className="form-label">Message</label>
          <textarea id="message" className="form-input" placeholder="Your Message" rows="5"></textarea>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="footer animate__animated animate__fadeInUp animate__delay-2s">
        <div className="footer-content">
          <h3>Movie Hub</h3>
          <p>&copy; 2024 All Rights Reserved.</p>
          <p>Follow us on:</p>
          <div className="social-links">
            <a href="#facebook.com" className="social-icon">Facebook</a>
            <a href="#x.com" className="social-icon">Twitter</a>
            <a href="#instagram.com" className="social-icon">Instagram</a>
          </div>
        </div>
      </footer>

      {/* External Animations and Style */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      <style>
        {`
          /* Global Styles */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Roboto', sans-serif;
            background-color: #121212;
            color: #fff;
            line-height: 1.6;
          }

          h1, h2, h3 {
            color: #fff;
            text-transform: uppercase;
          }

          p {
            color: #bbb;
          }

          .contact-container {
            padding: 40px;
            max-width: 800px;
            margin: auto;
          }

          /* Header Styles */
          .contact-header {
            text-align: center;
            margin-bottom: 40px;
          }

          .contact-header h1 {
            font-size: 3rem;
            color: #FF3333;
          }

          .contact-header p {
            font-size: 1.2rem;
            color: #aaa;
          }

          /* Extra Contact Information */
          .extra-info {
            display: flex;
            justify-content: space-around;
            margin-bottom: 40px;
          }

          .info-item {
            background-color: #222;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            width: 30%;
          }

          .info-item h3 {
            color: #FF3333;
            margin-bottom: 10px;
          }

          .info-item p {
            color: #ccc;
          }

          /* Contact Form Styles */
          .contact-form {
            background-color: #222;
            padding: 30px;
            border-radius: 12px;
          }

          .form-label {
            font-size: 1.1rem;
            color: #FF3333;
            margin-bottom: 8px;
            display: block;
          }

          .form-input {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: none;
            border-radius: 8px;
            background-color: #333;
            color: #fff;
            font-size: 1rem;
          }

          .form-input::placeholder {
            color: #888;
          }

          .submit-button {
            display: block;
            width: 100%;
            padding: 15px;
            font-size: 1.2rem;
            color: #fff;
            background-color: #FF3333;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .submit-button:hover {
            background-color: #FF6666;
          }

          /* Footer Styles */
          .footer {
            text-align: center;
            margin-top: 40px;
            padding: 40px 20px;
            background-color: #222;
          }

          .footer-content h3 {
            color: #fff;
            font-size: 2rem;
          }

          .footer-content p {
            color: #bbb;
            margin-top: 10px;
          }

          .social-links {
            margin-top: 15px;
          }

          .social-icon {
            color: #fff;
            margin: 0 15px;
            font-size: 1.1rem;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .social-icon:hover {
            color: #00bcd4;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .contact-container {
              padding: 20px;
            }

            .contact-header h1 {
              font-size: 2rem;
            }

            .extra-info {
              flex-direction: column;
              align-items: center;
            }

            .info-item {
              width: 100%;
              margin-bottom: 20px;
            }

            .submit-button {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ContactUs;
