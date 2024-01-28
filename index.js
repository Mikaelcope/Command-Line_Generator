const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const managerQuestions = [{
    type: "input", 
    message: "What is the manager name",
    name: "name"
},
//id, email, officeNumber questions

]

const menuQuestions = [{
    type: "list",
    message: "What next",
    name: "nextAction",
    choices: ["Add engineer", "Add Intern", "Finish team"]
}]


// TODO: Write Code to gather information about the development team members, and render the HTML file.

var team = []
//enter information from command line
// inquirer -> library
inquirer.prompt(managerQuestions).then(answers => {
    team.push(new Manager(answers.name))
    mainMenu()
})

const mainMenu = () => {
    inquirer.prompt(menuQuestions).then(answers => {
        //analysis and depending on choice you either generateHTML(), addIntern(), or addEngineer()
    })
}

//this is a string
const htmlContent = render(team)