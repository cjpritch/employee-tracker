const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// get all roles
router.get('/roles', (req, res) => {
    const sql = `Select roles.job_title, roles.salary, departments.department
                 FROM roles                  
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

// add a role
router.post('/roles', ({ body},res) => {
    const sql = `INSERT INTO roles (job_title, salary, dept_id ) VALUES (?,?,?)`;
    const params = [body.job_title, body.salary, body.dept_id];
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

module.exports = router;