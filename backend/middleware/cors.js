// CORS and error handling middleware for SriSamskruthi
const cors = require('cors');

// Read allowed origins from environment variable (comma-separated)
// Example: ALLOWED_ORIGINS=https://srisamskruthi.com,https://www.srisamskruthi.com
const rawOrigins = process.env.ALLOWED_ORIGINS || '';
const allowedOrigins = rawOrigins
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    // If no origin (e.g., server-to-server or same-origin), allow it
    if (!origin) return callback(null, true);

    // Development mode: allow all origins
    if (process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }

    // Production mode: strict origin checking
    if (allowedOrigins.length === 0) {
      return callback(new Error('CORS: No allowed origins configured'), false);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error('CORS policy: This origin is not allowed - ' + origin), false);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

module.exports = {
  corsMiddleware: cors(corsOptions),

  // Error handling middleware
  errorHandler: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
  }
};
