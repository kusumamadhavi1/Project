import express from 'express';
import connectDB from './config/db.js';
import userRoutes from './routes/user.routes.js';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
