const inquirer = require('inquirer');
 
const initialPrompt = answer => {   
    return inquirer.prompt([
        {
            type: 'list',
            message: "Welcome to the Employee Tracker App! What would you like to do?",
            name: 'initialList',                
            choices: ["View Departments", "View Roles", "View Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"]
        }
    ]);
};

const addDeptPrompt = answer => {
           return inquirer.prompt(
            {
                type: 'input',
                name: 'department',
                message: "What is the name of the department?",
                validate: departmentInput => {
                    if (departmentInput) {
                    return true;
                    } else {
                    console.log('Please enter a department name!');
                    return false;
                    }
                }
            },
        )};

const addRolePrompt = answer => {
        return inquirer.prompt([
        {
            type: 'input',
            name: 'job_title',
            message: "What is the job title for this role?",
            validate: job_titleInput => {
                if (job_titleInput) {
                return true;
                } else {
                console.log('Please enter the a role!');
                }
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: "What is the salary for this role?",
            validate: salaryInput => {
                if (salaryInput) {
                return true;
                } else {
                console.log('Please enter a salary');
                return false;
                }
            }
        },      
        {
            type: 'input',
            name: 'dept_id',
            message: "What is the department id?",
            validate: dept_idInput => {
                if (dept_idInput) {
                return true;
                } else {
                console.log('Please enter a dept_id!');
                return false;
                }
            }
        },
    
    ])
};

const addEmployeePrompt = answer => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'first_name',
        message: "What is the employee's first name?",
        validate: first_nameInput => {
            if (first_nameInput) {
            return true;
            } else {
            console.log('Please enter the first name!');
            }
        }
    },
    {
        type: 'input',
        name: 'last_name',
        message: "What is the employee's last name?",
        validate: last_nameInput => {
            if (last_nameInput) {
            return true;
            } else {
            console.log('Please enter the last name!');
            return false;
            }
        }
    },      
    {
        type: 'input',
        name: 'role_',
        message: "What is the employees role?",
        validate: role_Input => {
            if (role_Input) {
            return true;
            } else {
            console.log('Please enter a role!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'manager',
        message: "Who is the employee's manager?",
        validate: managerInput => {
            if (managerInput) {
            return true;
            } else {
            console.log('Please enter a manager name!');
            return false;
            }
        }
    },
  ])
};

const updateEmployeePrompt = answer => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's id number?",
        validate: idInput => {
            if (idInput) {
            return true;
            } else {
            console.log('Please enter the employee id number!');
            }
        }
    },
    {
        type: 'input',
        name: 'role_',
        message: "What is the employee's new role?",
        validate: role_Input => {
            if (role_Input) {
            return true;
            } else {
            console.log('Please enter a role!');
            }
        }
    },
  ])
};

module.exports = { initialPrompt, addDeptPrompt, addEmployeePrompt, updateEmployeePrompt, addRolePrompt };