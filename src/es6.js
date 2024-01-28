const {Manager} = require("../lib/Manager")
console.log(Manager)


const team = [new Manager("Mikael", 1, "mike@mike.com", 900), new Manager("Alex", 2, "alex@email.com", 0003)]

team.forEach(manager => console.log(manager))

const logValue = (value,value2) => {
    console.log(value, value2)
}


logValue("Alex", "Mikael")


