const fetch = require('node-fetch')
const console = require('console.table');

// get all employees
const getEmployees = async (answer) => {
    const response = await fetch('http://localhost:3001/api/employees');
    const data = await response.json();    
    console.table(data.data);
    };

// add an employee
const addEmployee = async (promptData) => {
    const response = await fetch('http://localhost:3001/api/employees', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(promptData)
  })
  .then(function(res){ return res.json(); })  
};

// update an empployee
const updateEmployee = async (promptData) => {
    const response = await fetch('http://localhost:3001/api/employees', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(promptData)
  })
  .then(function(res){ return res.json(); })  
};

module.exports = { getEmployees, addEmployee, updateEmployee };