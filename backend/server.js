require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Import middleware
const { corsMiddleware, errorHandler } = require('./middleware/cors');

// Import routes
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');

// Basic Express middleware
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Validate MONGO_URI is provided — fail fast with a clear message
if (!process.env.MONGO_URI) {
  console.error('\n✗ MONGO_URI is not defined in environment variables.');
  console.error('  Please set MONGO_URI to your MongoDB Atlas connection string in backend/.env');
  console.error('  Example: MONGO_URI="mongodb+srv://<user>:<password>@cluster0.mongodb.net/mydb?retryWrites=true&w=majority"\n');
  // Exit with non-zero code so process managers / nodemon will know startup failed
  process.exit(1);
}

// MongoDB Connection function
const connectDB = async () => {
  try {
    // Use only the connection string provided via environment variable
    const mongoUri = process.env.MONGO_URI;

    // Optional: set Mongoose strictQuery to avoid deprecation warnings
    mongoose.set('strictQuery', true);

    // Connect to MongoDB Atlas
    await mongoose.connect(mongoUri, {
      // These options are safe defaults; Mongoose 7+ doesn't require them but they are harmless
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✓ MongoDB connected successfully');

    // Log connection events for visibility in production
    mongoose.connection.on('disconnected', () => {
      console.warn('⚠ MongoDB disconnected');
    });

    mongoose.connection.on('reconnected', () => {
      console.log('✓ MongoDB reconnected');
    });

  } catch (error) {
    // Detailed error logging for easier debugging (do not expose sensitive info)
    console.error('\n✗ MongoDB connection failed');
    console.error('  Error message:', error.message);
    if (error.stack) console.error('  Stack:', error.stack);

    // Exit so that process managers (or nodemon) can restart and you can fix configuration
    process.exit(1);
  }
};

// Register routes and middleware AFTER environment validation and before starting the server
app.use('/api', productRoutes);
app.use('/api', orderRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'SriSamskruthi API is running',
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Error handling middleware
app.use(errorHandler);

// Start the server only after MongoDB successfully connects
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`\n╔════════════════════════════════════════╗`);
      console.log(`║   SriSamskruthi Backend Server         ║`);
      console.log(`║   Running on port ${PORT}              ║`);
      console.log(`║   Handcrafted Traditional Jewellery    ║`);
      console.log(`╚════════════════════════════════════════╝\n`);
    });
  })
  .catch((err) => {
    // connectDB already logs errors and exits, but this is defensive
    console.error('Failed to start server due to DB connection error:', err && err.message);
    process.exit(1);
  });

module.exports = app;
