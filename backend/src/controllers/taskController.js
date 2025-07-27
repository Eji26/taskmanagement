const Task = require('../models/task');

exports.createTask = (req, res) => {
  const { title, description, due_date, priority, status } = req.body;
  const user_id = req.user && req.user.id ? req.user.id : req.body.user_id; // fallback for testing
  if (!user_id || !title) {
    return res.status(400).json({ message: 'User and title are required.' });
  }
  Task.create({ user_id, title, description, due_date, priority, status }, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error creating task.' });
    }
    res.status(201).json({ message: 'Task created successfully.', taskId: result.insertId });
  });
};

exports.getTasksByUser = (req, res) => {
  const user_id = req.user && req.user.id ? req.user.id : req.params.user_id;
  if (!user_id) {
    return res.status(400).json({ message: 'User ID is required.' });
  }
  Task.findByUserId(user_id, (err, tasks) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching tasks.' });
    }
    res.json(tasks);
  });
};
