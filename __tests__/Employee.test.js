const Employee = require('../lib/Employee.js')

describe('Employee properties', () => {
    test('Should have the properties of, name, id and email', () => {
        // setup(arrange)
        
        const name = 'Andrew'
        const id = '10'
        const email = 'andrew@email.com'

        // exercise(action) 

        const person = new Employee(name, id, email)

        // verification(assertion)

        expect(person._name).toBe(name)
        expect(person._id).toBe(id)
        expect(person._email).toBe(email)

    })

    
    /*

    Not sure about this test

    test('Email should have an @ symbol within it', () => {

        const email = 'andrew@email.com' 

        const person = new Employee('Andrew', email)

        expect(person._email).toMatch(/@/)
    })

    Come back to this one! Since it is a valid test we should have

    test('Email that doesn\'t have an @ symbol should throw an error', () => {

        const email = 'andrew.email.com' 

        const person = new Employee('Andrew', email)

        expect(person._email).toThrowError('Invalid email format')
    })
    */

    // test email to be converted to lowercase?

})

describe('Employee methods', () => {
    test('When getName() is called it should return with the persons name', () => {

        const person = new Employee('Max', '5', 'max@email.com')
        expect(person.getName()).toBe('Max')
    })

    test('When getId() is called it should return with the persons id number', () => {

        const person = new Employee('Max', '5', 'max@email.com')
        expect(person.getId()).toBe('5')
    })

    test('When getEmail() is called it should return with the persons email address', () => {

        const person = new Employee('Max', '5', 'max@email.com')
        expect(person.getEmail()).toBe('max@email.com')
    })

    test('When getRole() is called it should return with the Employee', () => {

        const person = new Employee('Jasmine', '13', 'jasmine@email.com')
        expect(person.getRole()).toBe('Employee')
    })
    
}) 
