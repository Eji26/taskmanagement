const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/config');

exports.register = (req, res) => {
  // Accept either 'name' or 'username' from the request body
  const name = req.body.name || req.body.username;
  const { email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  // Check for duplicate email
  User.findByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error checking email.' });
    if (results && results.length > 0) {
      return res.status(409).json({ message: 'Email already exists.' });
    }
    // Proceed to hash and create user
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return res.status(500).json({ message: 'Error hashing password.' });
      User.create({ name, email, password: hash }, (err, result) => {
        if (err) {
          console.log('Error creating user:', err);
          return res.status(500).json({ message: 'Error creating user.' });
        }
        res.status(201).json({ message: 'User registered successfully.' });
      });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required.' });
  }
  User.findByEmail(email, (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }
    const user = results[0];
    bcrypt.compare(password, user.password, (err, match) => {
      if (err || !match) {
        return res.status(401).json({ message: 'Invalid credentials.' });
      }
      const token = jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, { expiresIn: '1d' });
      res.json({ token });
    });
  });
};
