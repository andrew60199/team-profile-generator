const Manager = require('../lib/Manager.js')

describe('Manager properties', () => {
    test('Should have the properties of, name, id, email and office number', () => {
        
        const name = 'Andrew'
        const id = '432'
        const email = 'andrew@email.com'
        const officeNumber = '207'

        const person = new Manager(name, id, email, officeNumber)

        expect(person._name).toBe(name)
        expect(person._id).toBe('432')
        expect(person._email).toBe(email)
        expect(person._officeNumber).toBe(officeNumber)

    })

})

describe('Manager methods', () => {
    test('When getName() is called it should return with the persons name', () => {

        const person = new Manager('Will', '5100', 'will@email.com', '401')
        expect(person.getName()).toBe('Will')
    })

    test('When getId() is called it should return with the persons id number', () => {

        const person = new Manager('Will', '5100', 'will@email.com', '401')        
        expect(person.getId()).toBe('5100')
    })

    test('When getEmail() is called it should return with the persons email address', () => {

        const person = new Manager('Will', '5100', 'will@email.com', '401')
        expect(person.getEmail()).toBe('will@email.com')
    })

    test('When getOfficeNumber() is called it should return with the Manager', () => {

        const person = new Manager('Will', '5100', 'will@email.com', '401')
        expect(person.getOfficeNumber()).toBe('401')
    })

    test('When getRole() is called it should return with the Manager', () => {

        const person = new Manager('Peter', '345', 'peter@email.com', '404')
        expect(person.getRole()).toBe('Manager')
    })
    
}) 