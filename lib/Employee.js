class Employee {
    constructor(name, email) {
        this._name = name
        this._email = email
        this._role = 'Employee'
    }

    set id(value) {
        this._id = Number.parseInt(value, 10)
    }

    getName() {
        return this._name
    }

    getId() {
        // Number.parseInt(this._id, 10) or should I change it to this?
        return this._id
    }

    getEmail() {
        return this._email
    }

    getRole() {
        return this._role
    }
}

// Don't forget to export the class otherwise the test will fail
module.exports = Employee;