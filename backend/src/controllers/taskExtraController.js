const Task = require('../models/task');

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, due_date, priority, status } = req.body;
  Task.update(id, { title, description, due_date, priority, status }, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error updating task.' });
    res.json({ message: 'Task updated successfully.' });
  });
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  Task.delete(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error deleting task.' });
    res.json({ message: 'Task deleted successfully.' });
  });
};
