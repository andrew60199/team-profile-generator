const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(name, email, school) {
        super(name, email)
        this._school = school
        this._role = 'Intern'
    }

    getSchool() {
        return this._school
    }
}

module.exports = Intern