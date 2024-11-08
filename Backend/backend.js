const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Define User schema and model
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

// Define Review schema and model
const reviewSchema = new mongoose.Schema({
  movie_title: String,
  user_name: String,
  rating: Number,
  poster: String,
  release_date: String,   // New field for release date
  genres: [String],       // New field for genres (Array of strings)
  runtime: String,        // New field for runtime (e.g., '1hr 40m')
  certification: String,  // New field for certification (e.g., 'PG-13')
});
const Review = mongoose.model('Review', reviewSchema);


// Define Actor schema and model
const actorSchema = new mongoose.Schema({
  actor_name: String,
  poster: String,
});
const Actor = mongoose.model('Actor', actorSchema);

// Define Watchlist schema and model
const watchlistSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  movie_title: String,
  poster: String,
});
const Watchlist = mongoose.model('Watchlist', watchlistSchema);

// Define Watched schema and model
const watchedSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  movie_title: String,
  poster: String,
});
const Watched = mongoose.model('Watched', watchedSchema);

// Middleware for authenticating JWT tokens
function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token missing' });

  jwt.verify(token, 'secret_key', (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
}

// Route to register a new user
app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
});

// Route to login user
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, 'secret_key', { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Error during login' });
  }
});

// Route to fetch all reviews
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews' });
  }
});

// Route to fetch all actors
app.get('/api/actors', async (req, res) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching actors' });
  }
});

// Route to add a movie to the watchlist
app.post('/api/watchlist', authenticateToken, async (req, res) => {
  const { movie_title, poster } = req.body;
  try {
    // Check if the movie is already in the watchlist for this user
    const existingMovie = await Watchlist.findOne({ user_id: req.user.userId, movie_title });
    if (existingMovie) {
      return res.status(400).json({ message: 'Movie is already in your watchlist' });
    }

    // Create a new item and save it
    const newItem = new Watchlist({
      user_id: req.user.userId, // Use userId from token
      movie_title,
      poster,
    });
    await newItem.save();
    res.json({ message: 'Added to watchlist' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding to watchlist' });
  }
});

// Route to add a movie to the watched list
app.post('/api/watched', authenticateToken, async (req, res) => {
  const { movie_title, poster } = req.body;
  try {
    // Check if the movie is already in the watched list for this user
    const existingMovie = await Watched.findOne({ user_id: req.user.userId, movie_title });
    if (existingMovie) {
      return res.status(400).json({ message: 'Movie is already marked as watched' });
    }

    // Create a new item and save it
    const newItem = new Watched({
      user_id: req.user.userId, // Use userId from token
      movie_title,
      poster,
    });
    await newItem.save();
    res.json({ message: 'Marked as watched' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error marking as watched' });
  }
});

// Route to fetch user's watchlist
app.get('/api/watchlist', authenticateToken, async (req, res) => {
  try {
    const watchlist = await Watchlist.find({ user_id: req.user.userId });
    res.json(watchlist);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching watchlist' });
  }
});

// Route to fetch user's watched list
app.get('/api/watched', authenticateToken, async (req, res) => {
  try {
    const watchedList = await Watched.find({ user_id: req.user.userId });
    res.json(watchedList);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching watched list' });
  }
});

// Route to delete a movie from the watchlist
app.delete('/api/watchlist/:movieId', authenticateToken, async (req, res) => {
  const { movieId } = req.params;
  try {
    // Delete the movie from the Watchlist collection
    await Watchlist.findByIdAndDelete(movieId);
    res.status(200).json({ message: 'Movie removed from watchlist' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing movie from watchlist' });
  }
});

// Route to delete a movie from the watched list
app.delete('/api/watched/:movieId', authenticateToken, async (req, res) => {
  const { movieId } = req.params;
  try {
    // Delete the movie from the Watched collection
    await Watched.findByIdAndDelete(movieId);
    res.status(200).json({ message: 'Movie removed from watched list' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing movie from watched list' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
