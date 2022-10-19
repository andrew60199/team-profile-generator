const Intern = require('../lib/Intern.js')

describe('Intern properties', () => {
    test('Should have the properties of, name, id, email and school', () => {
        
        const name = 'Andrew'
        const email = 'andrew@email.com'
        const school = 'Monash University'

        const person = new Intern(name, email, school)
        person.id = '99'

        expect(person._name).toBe(name)
        expect(person._id).toBe(99)
        expect(person._email).toBe(email)
        expect(person._school).toBe(school)

    })

})

describe('Intern methods', () => {
    test('When getName() is called it should return with the persons name', () => {

        const person = new Intern('Max', 'max@email.com', 'Swinburne University')
        expect(person.getName()).toBe('Max')
    })

    test('When getId() is called it should return with the persons id number', () => {

        const person = new Intern('Max', 'max@email.com', 'Swinburne University')
        person.id = '5'

        expect(person.getId()).toBe(5)
    })

    test('When getEmail() is called it should return with the persons email address', () => {

        const person = new Intern('Max', 'max@email.com', 'Swinburne University')
        expect(person.getEmail()).toBe('max@email.com')
    })

    test('When getSchool() is called it should return with the Intern', () => {

        const person = new Intern('Jasmine', 'jasmine@email.com', 'Melbourne University')
        expect(person.getSchool()).toBe('Melbourne University')
    })

    test('When getRole() is called it should return with the Intern', () => {

        const person = new Intern('Jasmine', 'jasmine@email.com')
        expect(person.getRole()).toBe('Intern')
    })
    
}) 