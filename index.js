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

function managerQuestions(teamAnswers) {
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
            const newManager = new Manager(teamAnswers.name, teamAnswers.id, teamAnswers.email, answers.officeNumber);
            teamArray.push(newManager);
            if (answers.addAnother === true) {
                employeeQuestions()
            } else {
                buildTeam();
                console.log("Employee added!")
            }
        })
};

function engineerQuestions(teamAnswers) {
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
            const newEngineer = new Engineer(teamAnswers.name, teamAnswers.id, teamAnswers.email, answers.github);
            teamArray.push(newEngineer);
            if (answers.addAnother === true) {
                employeeQuestions()
            } else {
                buildTeam();
                console.log("Employee added!")
            }
        })
};

function internQuestions(teamAnswers) {
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
            const newIntern = new Intern(teamAnswers.name, teamAnswers.id, teamAnswers.email, answers.school);
            teamArray.push(newIntern);
            if (answers.addAnother === true) {
                employeeQuestions()
            } else {
                buildTeam();
                console.log("Employee added!")
            }
        })
};

employeeQuestions();

// This needs to be fixed not working need a build team function

// buildTeam() = data => {
//     fs.writeFile('./dist/index.html', data, err => {
//         if (err) {
//             console.log(err);
//             return;
//         } else {
//             console.log("Your team profile has been created in dist/index.html")
//         }
//     })
// };


// buildTeam()
//     .then(addEmployee)
//     .then(teamArray => {
//         return templatePage(teamArray);
//     })
//     .then(pageHTML => {
//         return writeFile(pageHTML);
//     })
//     .catch(err => {
//         console.log(err);
//     });


