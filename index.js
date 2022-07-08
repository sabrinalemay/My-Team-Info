const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const teamMembers = [];

const render = require("./src/page-template.js");

const promptManager = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'what is your name?',
        validate: name => {
            if (name){
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'please enter your employee ID',
        validate: id => {
            if (id){
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'please enter your email',
        validate: email => {
            if (email){
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'please enter your office number',
        validate: officeNumber => {
            if (officeNumber){
                return true;
            }
        }
    }]).then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    promptSelection();})

};

promptManager();

const promptSelection = () => {
    return inquirer.prompt([{
        type: 'list',
        name: 'selection',
        message: 'please select which employee you would like to add',
        choices: ['add an engineer', 'add an intern', 'my team is complete']
    }
    ]).then(selectedChoice => {
        switch(selectedChoice.selection){
            case "add an engineer":
                promptEngineer();
                break; 
            case "add an intern":
                promptIntern();
                break;
            default:
                createTeam();
        }
    })};

const promptEngineer = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'who is the engineer?',
            validate: nameOfEngineer => {
                if (nameOfEngineer){
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'please enter your employee ID',
            validate: id => {
                if (id){
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'please enter your email',
            validate: email => {
                if (email){
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'please enter your github username',
            validate: github => {
                if (github){
                    return true;
                }
            }
        }]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        promptSelection();})
};

const promptIntern = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'who is the intern?',
            validate: nameOfIntern => {
                if (nameOfIntern){
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'please enter your employee ID',
            validate: id => {
                if (id){
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'please enter your email',
            validate: email => {
                if (email){
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'please enter the name of your school',
            validate: school => {
                if (school){
                    return true;
                }
            }
        }]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.intern);
        teamMembers.push(intern);
        promptSelection();})
};

const createTeam = () => {
    fs.writeFile("./dist/index.html", render(teamMembers), (err) => {
        if (err) throw err
        console.log("success");
    }
    )};


