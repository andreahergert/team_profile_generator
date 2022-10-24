const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const templatePage = require('./src/template');

const teamArray = []

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

function managerQuestions(managerAnswers) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is their office number?',
            },
            {
                type: 'confirm',
                name: 'addAnother',
                message: 'Would you like to add another employee?',
            }
        ])
        .then(function (answers) {
            const newManager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
            teamArray.push(newManager);
            if (answers.addAnother === true) {
                console.log("Employee added!")
                employeeQuestions()
            } else {
                buildTeam();
                console.log("Employee added!")
            }
        })
};

function engineerQuestions(engineerAnswers) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: 'What is their GitHub username?',
            },
            {
                type: 'confirm',
                name: 'addAnother',
                message: 'Would you like to add another employee?',
            }
        ])
        .then(function (answers) {
            const newEngineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
            teamArray.push(newEngineer);
            if (answers.addAnother === true) {
                console.log("Employee added!")
                employeeQuestions()
            } else {
                buildTeam();
                console.log("Employee added!")
            }
        })
};

function internQuestions(internAnswers) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'school',
                message: 'Where do/did they go to school?',
            },
            {
                type: 'confirm',
                name: 'addAnother',
                message: 'Would you like to add another employee?',
            }
        ])
        .then(function (answers) {
            const newIntern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
            teamArray.push(newIntern);
            if (answers.addAnother === true) {
                console.log("Employee added!")
                employeeQuestions()
            } else {
                buildTeam();
                console.log("Employee added!")
            }
        })
};

function buildTeam() {
    fs.writeFile('./dist/index.html', templatePage(teamArray), err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been created in dist/index.html")
        }
    })
};

employeeQuestions();