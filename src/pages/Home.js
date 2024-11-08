import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header animate__animated animate__fadeInUp">
        <h1>Discover the Best Movies</h1>
        <p>Your one-stop platform for trending movies, reviews, and more!</p>
      </header>

      {/* Featured Movies Section */}
      <div className="featured-movies animate__animated animate__fadeInUp animate__delay-1s">
        <h2>Featured Movies</h2>
        <div className="movie-cards">
          <div className="movie-card">
            <img src="https://resizing.flixster.com/gPU2UjZEpT0zb0aZ3ay2FtYWAu4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23439761_v_h8_ah.jpg" alt="Action Movie" />
            <div className="movie-info">
              <h3>Action Movie</h3>
              <p>A gripping action film that will keep you on the edge of your seat.</p>
            </div>
          </div>

          <div className="movie-card">
            <img src="https://m.creativenewsexpress.com/sortd-service/imaginary/v22-01/jpg/large/high?url=Y3JlYXRpdmVuZXdzZXhwcmVzcy1jb20tcHJvZC1zb3J0ZC9tZWRpYTk3MWZiOWUwLWIxMjEtMTFlZS1iYzQxLTc5NTg2ZGZlZTZkZS5qcGc=" alt="Adventure Movie" />
            <div className="movie-info">
              <h3>Adventure Movie</h3>
              <p>Embark on an adventure filled with breathtaking moments.</p>
            </div>
          </div>

          <div className="movie-card">
            <img src="https://thesouloftheplot.wordpress.com/wp-content/uploads/2013/08/poster_theprestige.jpg?w=470&h=376" alt="Thriller Movie" />
            <div className="movie-info">
              <h3>Thriller Movie</h3>
              <p>Brace yourself for a suspense-filled thriller.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Now Section */}
      <div className="trending-now animate__animated animate__fadeInUp animate__delay-2s">
        <h2>Trending Now</h2>
        <div className="trending-cards">
          <div className="trending-card">
            <h3>New Releases</h3>
            <p>Stay updated with the latest movie releases and reviews!</p>
          </div>

          <div className="trending-card">
            <h3>Top Picks</h3>
            <p>Check out the top-rated movies this month!</p>
          </div>

          <div className="trending-card">
            <h3>Box Office Hits</h3>
            <p>See what's trending in theaters right now!</p>
          </div>
        </div>
      </div>

      {/* User Reviews Section */}
      <div className="reviews-container animate__animated animate__fadeInUp animate__delay-3s">
        <h2>User Reviews</h2>
        <div className="review-card">
          <p className="review-text">"This app has the best movie recommendations. Love the design and features!"</p>
          <span className="review-author">- John Doe</span>
        </div>

        <div className="review-card">
          <p className="review-text">"A fantastic place to find new movies. Easy to navigate and enjoy."</p>
          <span className="review-author">- Jane Smith</span>
        </div>

        <div className="review-card">
          <p className="review-text">"Great UI, and I really appreciate the categories and movie suggestions."</p>
          <span className="review-author">- Michael Johnson</span>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer animate__animated animate__fadeInUp animate__delay-4s">
        <div className="footer-content">
          <h3>Movie Hub</h3>
          <p>&copy; 2024 All Rights Reserved.</p>
          <p>Follow us on:</p>
          <div className="social-links">
            <a href="facebook.com" className="social-icon">Facebook</a>
            <a href="x.com" className="social-icon">Twitter</a>
            <a href="instagram.com" className="social-icon">Instagram</a>
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

          .home-container {
            width: 100%;
            height: 100%;
            padding: 40px;
            background-color: #121212;
          }

          .header {
            text-align: center;
            padding-bottom: 40px;
          }

          .header h1 {
            font-size: 3rem;
            margin-bottom: 10px;
            color: #fff;
          }

          .header p {
            font-size: 1.2rem;
            color: #aaa;
          }

          /* Featured Movies */
          .featured-movies {
            margin-top: 60px;
            text-align: center;
          }

          .featured-movies h2 {
            font-size: 2rem;
            margin-bottom: 20px;
            color: #fff;
          }

          .movie-cards {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .movie-card {
            background-color: #222;
            width: 300px;
            height: 450px;
            border-radius: 12px;
            overflow: hidden;
            position: relative;
            transition: transform 0.3s ease;
          }

          .movie-card:hover {
            transform: scale(1.05);
          }

          .movie-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }

          .movie-info {
            padding: 20px;
            text-align: center;
          }

          .movie-info h3 {
            font-size: 1.6rem;
            color: #fff;
          }

          .movie-info p {
            color: #ccc;
          }

          /* Trending Now Section */
          .trending-now {
            margin-top: 60px;
            text-align: center;
          }

          .trending-now h2 {
            font-size: 2rem;
            margin-bottom: 20px;
            color: #fff;
          }

          .trending-cards {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .trending-card {
            background-color: #333;
            padding: 25px;
            width: 250px;
            text-align: center;
            border-radius: 8px;
            transition: background-color 0.3s ease;
          }

          .trending-card:hover {
            background-color: #444;
          }

          .trending-card h3 {
            font-size: 1.5rem;
            color: #fff;
          }

          .trending-card p {
            color: #aaa;
          }

          /* User Reviews */
          .reviews-container {
            margin-top: 80px;
            text-align: center;
          }

          .review-card {
            background-color: #222;
            padding: 20px;
            margin: 15px 0;
            border-radius: 8px;
            width: 80%;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
          }

          .review-text {
            color: #fff;
            font-size: 1.2rem;
            font-style: italic;
          }

          .review-author {
            display: block;
            margin-top: 10px;
            color: #ccc;
          }

          /* Footer */
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

          /* Responsive Design */
          @media (max-width: 768px) {
            .movie-cards, .trending-cards {
              flex-direction: column;
              align-items: center;
            }

            .movie-card, .trending-card {
              width: 90%;
              margin-bottom: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
