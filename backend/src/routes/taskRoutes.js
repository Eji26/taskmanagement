const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const taskExtraController = require('../controllers/taskExtraController');

// Create a new task
router.post('/', taskController.createTask);

// Get all tasks for a user
router.get('/user/:user_id', taskController.getTasksByUser);

// Update a task
router.put('/:id', taskExtraController.updateTask);

// Delete a task
router.delete('/:id', taskExtraController.deleteTask);

module.exports = router;
