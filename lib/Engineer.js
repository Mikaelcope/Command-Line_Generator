const Employee = require('./Employee')
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, ID, email, github){
        super(name, ID, email, github)
        this.github = github
    }
    getGithub () {return this.github}
    getRole (){return "Engineer"}
}

module.exports = Engineer;