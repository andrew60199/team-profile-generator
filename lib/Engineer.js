const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name, email, github) {
        super(name, email)
        this._github = github
        this._role = 'Engineer'
    }

    getGithub() {
        return this._github
    }
}

module.exports = Engineer