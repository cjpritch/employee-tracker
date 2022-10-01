const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// get all departments
router.get('/departments', (req, res) => {
    const sql = 'SELECT * from departments';
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

// add a department
router.post('/departments', (req,res) => {
    const sql = `INSERT INTO departments (department) VALUES (?)`; 
    const param = req.body.department 
        db.query(sql, param, (err, result) => {
        if (err) {
        res.status(400).json({ error: err.message });
        return;
        }
        res.json({
            message: 'Success!',
            data: result
        });
    });
});
    
module.exports = router;