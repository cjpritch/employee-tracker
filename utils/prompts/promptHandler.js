const { addDeptPrompt, addEmployeePrompt, updateEmployeePrompt, addRolePrompt, initialPrompt } = require('./prompts')
const { getDepts, addDept } = require('../fetch/departments')
const { getRoles, addRole } = require('../fetch/roles')
const { getEmployees, addEmployee, updateEmployee } = require('../fetch/employees')

const prompt = () => {
    initialPrompt().then(promptHandler)
};

const promptHandler = answer => {
    if(answer.initialList == 'View Departments') {        
        getDepts().then(prompt);

    } else if ( answer.initialList === 'View Roles') {
        getRoles().then(prompt);

    } else if( answer.initialList === 'View Employees') {
        getEmployees().then(prompt);

    } else if( answer.initialList === 'Add a Department') {
        addDeptPrompt().then(addDept).then(prompt);

    } else if (answer.initialList === 'Add a Role') {
       addRolePrompt().then(addRole).then(prompt);

    } else if (answer.initialList === 'Add an Employee') {
        addEmployeePrompt().then(addEmployee).then(prompt)

    } else if (answer.initialList === 'Update an Employee Role') {
        updateEmployeePrompt().then(updateEmployee).then(prompt)
    } else {
        console.log("Input not valid!")
    }
};

module.exports = { prompt };