const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const managerQuestions = [
    {
        type: "input",
        message: "What is the manager's name",
        name: "manager_name"
    },
    {
        type: "input",
        message: "What is the manager's ID",
        name: "manager_ID"
    },
    {
        type: "input",
        message: "What is the manager's email",
        name: "manager_email"
    },
    {
        type: "input",
        message: "What is the manager's office number",
        name: "manager_office_number"
    },

]

const menuQuestions = [{
    type: "list",
    message: "What next",
    name: "nextAction",
    choices: ["Add engineer", "Add Intern", "Finish team"]
}]

const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name",
        name: "engineer_name"
    },
    {
        type: "input",
        message: "What is the engineer's ID",
        name: "engineer_ID"
    },
    {
        type: "input",
        message: "What is the engineer's email",
        name: "engineer_email"
    },
    {
        type: "input",
        message: "What is the engineer's github username",
        name: "engineer_gitHub"
    },

]

const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name",
        name: "intern_name"
    },
    {
        type: "input",
        message: "What is the intern's ID",
        name: "intern_ID"
    },
    {
        type: "input",
        message: "What is the intern's email",
        name: "intern_email"
    },
    {
        type: "input",
        message: "What is the intern's school",
        name: "intern_school"
    },

]
// TODO: Write Code to gather information about the development team members, and render the HTML file.

var team = []
//enter information from command line
// inquirer -> library
inquirer.prompt(managerQuestions).then(answers => {
    let {manager_name, manager_ID, manager_email, manager_office_number}   = answers
    let managerOBJ = new Manager(manager_name, manager_ID, manager_email, manager_office_number)
    team.push(managerOBJ)
    mainMenu()
})

const mainMenu = () => {
    inquirer.prompt(menuQuestions).then(answers => {
        if(answers.nextAction === 'Add engineer'){
            const engineerOBJ = engineer()
            team.push(engineerOBJ)
            mainMenu()
        }   
        else if(answers.nextAction === 'Add intern') {
            const internOBJ = intern()
            team.push(internOBJ)
            mainMenu()
        }   
        else if(answers.nextAction === 'Finish team'){
            let teamHTML = render(team)
            writeToFile(teamHTML)
            // console.log(teamHTML)
            // process.exit()
        } //analysis and depending on choice you either generateHTML(), addIntern(), or addEngineer()
    })
}

const writeToFile = (html) => {
    fs.writeFile('team.html', html,)
}

const engineer = () => {
    inquirer.prompt(engineerQuestions).then(answers => {
        let {engineer_name, engineer_ID, engineer_email, engineer_gitHub}   = answers
        let engineerOBJ = new Engineer(engineer_name, engineer_ID, engineer_email, engineer_gitHub)
        return engineerOBJ
    })
}

const intern = () => {
    inquirer.prompt(internQuestions).then(answers => {
        let {intern_name, intern_ID, intern_email, intern_school}   = answers
        let internOBJ = new Intern(intern_name, intern_ID, intern_email, intern_school)
        return internOBJ
    })
}


//this is a string
const htmlContent = render(team)