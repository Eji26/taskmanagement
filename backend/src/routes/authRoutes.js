
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const db = require('../config/db');

router.post('/register', authController.register);
router.post('/login', authController.login);

// DB connection test endpoint
router.get('/db-test', (req, res) => {
  db.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'DB connection failed', error: err.message });
    }
    connection.ping((pingErr) => {
      connection.release();
      if (pingErr) {
        return res.status(500).json({ success: false, message: 'DB ping failed', error: pingErr.message });
      }
      res.json({ success: true, message: 'DB connection successful' });
    });
  });
});

module.exports = router;
