const Manager = require('../lib/Manager.js')

describe('Manager properties', () => {
    test('Should have the properties of, name, id, email and office number', () => {
        
        const name = 'Andrew'
        const email = 'andrew@email.com'
        const officeNumber = 'L2-07'

        const person = new Manager(name, email, officeNumber)
        person.id = '45'

        expect(person._name).toBe(name)
        expect(person._id).toBe(45)
        expect(person._email).toBe(email)
        expect(person._officeNumber).toBe(officeNumber)

    })

})

describe('Manager methods', () => {
    test('When getName() is called it should return with the persons name', () => {

        const person = new Manager('Will', 'will@email.com', 'L4-01')
        expect(person.getName()).toBe('Will')
    })

    test('When getId() is called it should return with the persons id number', () => {

        const person = new Manager('Will', 'will@email.com', 'L4-01')
        person.id = '52'
        
        expect(person.getId()).toBe(52)
    })

    test('When getEmail() is called it should return with the persons email address', () => {

        const person = new Manager('Will', 'will@email.com', 'L4-01')
        expect(person.getEmail()).toBe('will@email.com')
    })

    test('When getOfficeNumber() is called it should return with the Manager', () => {

        const person = new Manager('Peter', 'peter@email.com', 'L1-21')
        expect(person.getOfficeNumber()).toBe('L1-21')
    })

    test('When getRole() is called it should return with the Manager', () => {

        const person = new Manager('Peter', 'peter@email.com')
        expect(person.getRole()).toBe('Manager')
    })
    
}) 