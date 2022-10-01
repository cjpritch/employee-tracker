const fetch = require('node-fetch');

// get all roles
const getRoles = async (answer) => {
    const response = await fetch('http://localhost:3001/api/roles');
    const data = await response.json(); 
    console.table(data.data);
    };

// add a role
const addRole = async (promptData) => {
    const response = await fetch('http://localhost:3001/api/roles', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(promptData)
    })
    .then(function(res){ return res.json(); })  
    };

module.exports = { getRoles, addRole };