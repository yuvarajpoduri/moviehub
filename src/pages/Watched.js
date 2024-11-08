import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Watched = () => {
  const [watched, setWatched] = useState([]);
  const token = localStorage.getItem('authToken'); // Get token from local storage

  useEffect(() => {
    if (token) {
      axios
        .get('http://localhost:5000/api/watched', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setWatched(response.data);
        })
        .catch((error) => {
          console.error('Error fetching watched movies:', error);
        });
    }
  }, [token]);

  const removeFromWatched = (movieId) => {
    axios
      .delete(`http://localhost:5000/api/watched/${movieId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setWatched(watched.filter((movie) => movie._id !== movieId));
      })
      .catch((error) => {
        console.error('Error removing movie from watched list:', error);
      });
  };

  if (!token) {
    return <div>Please log in to view your watched movies.</div>;
  }

  return (
    <div className="watched-container">
      <header className="watched-header animate__animated animate__fadeInDown">
        <h1>Watched Movies</h1>
      </header>
      
      <div className="movie-grid">
        {watched.map((movie) => (
          <div key={movie._id} className="movie-card animate__animated animate__fadeInUp">
            <img src={movie.poster} alt={movie.movie_title} className="movie-poster" />
            <h3>{movie.movie_title}</h3>
            <span
              className="close-icon"
              onClick={() => removeFromWatched(movie._id)}
            >
              &#10005;
            </span>
          </div>
        ))}
      </div>

      <footer className="footer animate__animated animate__fadeInUp">
        <h3>Movie Hub</h3>
        <p>&copy; 2024 All Rights Reserved.</p>
        <div className="social-links">
          <a href="#facebook.com" className="social-icon">Facebook</a>
          <a href="#x.com" className="social-icon">Twitter</a>
          <a href="#instagram.com" className="social-icon">Instagram</a>
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

          .watched-container {
            padding: 40px;
            max-width: 1000px;
            margin: auto;
          }

          .watched-header {
            text-align: center;
            margin-bottom: 40px;
          }

          .watched-header h1 {
            font-size: 2.5rem;
            color: #FF3333;
          }

          .movie-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
          }

          .movie-card {
            position: relative;
            background-color: #222;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease;
            width: 160px;
            text-align: center;
          }

          .movie-card:hover {
            transform: translateY(-5px);
          }

          .movie-poster {
            width: 100%;
            height: 225px;
            object-fit: cover;
            transition: opacity 0.3s ease;
          }

          .movie-card h3 {
            margin: 10px 0;
            font-size: 1.1rem;
            color: #fff;
          }

          .movie-card:hover .close-icon {
            opacity: 1;
            visibility: visible;
          }

          .close-icon {
            position: absolute;
            top: 5px;
            right: 5px;
            font-size: 24px;
            color: #FF3333;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
          }

          .footer {
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            background-color: #222;
          }

          .footer h3 {
            color: #fff;
            font-size: 1.5rem;
          }

          .footer p {
            color: #bbb;
            margin-top: 10px;
          }

          .social-links {
            margin-top: 15px;
          }

          .social-icon {
            color: #fff;
            margin: 0 10px;
            font-size: 1.1rem;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .social-icon:hover {
            color: #00bcd4;
          }

          @media (max-width: 768px) {
            .movie-grid {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Watched;
