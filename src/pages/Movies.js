import React, { useState, useEffect } from 'react';
import axios from 'axios';

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const partialStar = rating - fullStars;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`full-${i}`} style={{ color: 'gold' }}>★</span>);
  }

  if (partialStar > 0) {
    stars.push(<span key="partial" style={{ color: 'gold' }}>★</span>);
  }

  return stars;
};

const Movies = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }

    axios.get('http://localhost:5000/api/reviews')
      .then(response => {
        setMovies(response.data);
        setFilteredMovies(response.data);
      })
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter(movie =>
        movie.movie_title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [searchTerm, movies]);

  const handleWatchlist = (movie) => {
    if (!isLoggedIn) {
      alert('Please login first to add to watchlist');
      return;
    }

    axios.post(
      'http://localhost:5000/api/watchlist',
      { movie_title: movie.movie_title, poster: movie.poster },
      { headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` } }
    )
    .then(response => {
      alert('Movie added to watchlist');
    })
    .catch(error => {
      console.error('Error adding to watchlist:', error);
      alert(error.response?.data?.message || 'Error adding to watchlist');
    });
  };

  const handleWatched = (movie) => {
    if (!isLoggedIn) {
      alert('Please login first to mark as watched');
      return;
    }

    axios.post(
      'http://localhost:5000/api/watched',
      { movie_title: movie.movie_title, poster: movie.poster },
      { headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` } }
    )
    .then(response => {
      alert('Movie marked as watched');
    })
    .catch(error => {
      console.error('Error marking movie as watched:', error);
      alert(error.response?.data?.message || 'Error marking movie as watched');
    });
  };

  // Split the movies into rows (5 columns per row)
  const rows = [];
  for (let i = 0; i < filteredMovies.length; i += 5) {
    rows.push(filteredMovies.slice(i, i + 5));
  }

  return (
    <div>
      <center><h1 style={{ color: 'red',marginTop:'-10px', marginBottom: '10px', animation: 'fadeInUp 1s' }}>Movies</h1></center>
      <div>
        {rows.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '10px',
              padding: '10px',
              boxSizing: 'border-box',
              animation: `jumpRow 1s ease ${rowIndex * 0.5}s both`
            }}
          >
            {row.map((movie, index) => (
              <div key={movie._id} style={{
                padding: '10px',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                position: 'relative',
                transform: 'translateY(30px)',
              }} className="movie-card">
                {movie.poster && <img src={movie.poster} alt={movie.movie_title} style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '250px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }} />}
                <h3 style={{ fontSize: '1.2em', margin: '10px 0', color: 'white' }}>{movie.movie_title}</h3>
                <p style={{ fontSize: '0.9em', color: '#666', marginBottom: '10px' }}>
                  {movie.release_date} | {movie.runtime} | {movie.certification}
                </p>
                <div style={{ fontSize: '0.9em', color: 'orange', marginBottom: '10px' }}>
                  {movie.genres.join(' | ')}
                </div>
                <div style={{ marginTop: '10px' }}>
                  {renderStars(movie.rating)}
                </div>
                {isLoggedIn ? (
                  <>
                    <button
                      onClick={() => handleWatchlist(movie)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'gold',
                        fontSize: '1.5em',
                        cursor: 'pointer',
                        position: 'relative',
                        margin: '0 5px',
                        animation: 'pulse 1.5s infinite ease-in-out',
                      }}>
                      ❤️
                    </button>
                    <button
                      onClick={() => handleWatched(movie)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'gold',
                        fontSize: '1.5em',
                        cursor: 'pointer',
                        position: 'relative',
                        margin: '0 5px',
                        animation: 'pulse 1.5s infinite ease-in-out 0.5s',
                      }}>
                      ✔️
                    </button>
                  </>
                ) : (
                  <p style={{ color: 'red' }}>Please log in to add movies to watchlist or mark as watched.</p>
                )}
              </div>
            ))}
          </div>
        ))}
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
          @keyframes jumpRow {
            0% {
              transform: translateY(30px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }

          /* Footer styles */
          .footer {
            text-align: center;
            margin-top: 80px;
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
        `}
      </style>
    </div>
  );
};

export default Movies;
