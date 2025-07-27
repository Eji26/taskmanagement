// Task model for MySQL
const db = require('../config/db');

const Task = {
  create: (task, callback) => {
    const sql = 'INSERT INTO tasks (user_id, title, description, due_date, priority, status) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [task.user_id, task.title, task.description, task.due_date, task.priority, task.status], callback);
  },
  findByUserId: (user_id, callback) => {
    const sql = 'SELECT * FROM tasks WHERE user_id = ? ORDER BY created_at DESC';
    db.query(sql, [user_id], callback);
  },
  findById: (id, callback) => {
    const sql = 'SELECT * FROM tasks WHERE id = ?';
    db.query(sql, [id], callback);
  },
  update: (id, task, callback) => {
    const sql = 'UPDATE tasks SET title = ?, description = ?, due_date = ?, priority = ?, status = ? WHERE id = ?';
    db.query(sql, [task.title, task.description, task.due_date, task.priority, task.status, id], callback);
  },
  delete: (id, callback) => {
    const sql = 'DELETE FROM tasks WHERE id = ?';
    db.query(sql, [id], callback);
  }
};

module.exports = Task;
