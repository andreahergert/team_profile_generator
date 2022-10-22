const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const templatePage = require('./src/template');

function employeeQuestions() {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id number of the employee?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of the employee?',
        },
        {
            type: 'list',
            name: 'role',
            message: 'Which is the role of this employee?',
            choices: ["Manager", "Engineer", "Intern",],
        },
    ])
    .then(function (answers) {
        if (answers.role === "Manager") {
            managerQuestions(answers);
        } else if (answers.role === "Engineer") {
            engineerQuestions(answers);
        } else {
            internQuestions(answers);
        }
    })
};
// Finish function for managerQuestions engineerQuestions internQuestions
employeeQuestions();