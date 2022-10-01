const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// get all employees
router.get('/employees', (req, res) => {
    const sql = `Select employees.*, roles.salary, departments.department
                 FROM employees 
                 INNER JOIN roles on employees.role_=roles.job_title 
                 INNER JOIN departments on roles.dept_id=departments.id;`
    db.query(sql, (err, rows) => {
        if (err) {
          res.status(500).json({ error: err.message });
          return;
        }
        res.json({
          message: 'Success!',
          data: rows
        });
      });
    });

// create new employee
router.post('/employees', ({ body},res) => {
  const sql = `INSERT INTO employees (first_name, last_name, role_, manager ) VALUES (?,?,?,?)`;
  const params = [body.first_name, body.last_name, body.role_, body.manager];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'Success!',
      data: body
    });
  });
});

// update an employee
router.put('/employees/', (req, res) => {
    const sql = `UPDATE employees SET role_ = ? WHERE id = ?`;
    const params = [req.body.role_, req.body.id];
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }  else {
        res.json({
          message: 'Success!',
          data: JSON.stringify(req.body),
          changes: result
        });
      }
    });
});

module.exports = router;