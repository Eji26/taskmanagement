require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/db');
const cors = require('cors');

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:8080', // your frontend address
  credentials: true
}));

// Example route
app.get('/', (req, res) => {
  res.send('Task Management Backend is running');
});

// Auth routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
