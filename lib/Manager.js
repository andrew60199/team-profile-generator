const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, email, officeNumber) {
        super(name, email)
        this._officeNumber = officeNumber
        this._role = 'Manager'
    }

    getOfficeNumber() {
        return this._officeNumber
    }
}

module.exports = Manager