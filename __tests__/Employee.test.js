const Employee = require('../lib/Employee.js')

describe('Employee properties', () => {
    test('Should have the properties of, name and email', () => {
        // setup(arrange)
        
        const name = 'Andrew'
        const email = 'andrew@email.com'

        // exercise(action) 

        const person = new Employee(name, email)

        // verification(assertion)

        expect(person._name).toBe(name)
        expect(person._email).toBe(email)

    })

    test('ID should be a number', () => {

        const person = new Employee('Andrew', 'andrew@gmail.com')

        person.id = '10'

        expect(person._id).toBe(10)

    })

    test('ID shouldn\'t be a string', () => {

        const person = new Employee('Andrew', 'andrew@gmail.com')

        person.id = '10'

        expect(person._id).not.toBe('10')

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

        const person = new Employee('Max', 'max@email.com')

        expect(person.getName()).toBe('Max')
    })

    test('When getId() is called it should return with the persons id number', () => {

        const person = new Employee('Max', 'max@email.com')
        person.id = '5'

        expect(person.getId()).toBe(5)
    })

    test('When getEmail() is called it should return with the persons email address', () => {

        const person = new Employee('Max', 'max@email.com')

        expect(person.getEmail()).toBe('max@email.com')
    })

    test('When getRole() is called it should return with the Employee', () => {

        const person = new Employee('Jasmine', 'jasmine@email.com')

        expect(person.getRole()).toBe('Employee')
    })
    
}) 
