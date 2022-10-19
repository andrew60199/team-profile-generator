class Employee {
    constructor(name, id, email) {
        this._name = name
        this._id = id
        this._email = email
        this._role = 'Employee'
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