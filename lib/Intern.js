const Employee = require('./Employee')
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(name, ID, email, school){
        super(name, ID, email)
        this.school = school
    }
    getSchool () {return this.school}
    getRole (){return "Intern"}
}

module.exports = Intern;