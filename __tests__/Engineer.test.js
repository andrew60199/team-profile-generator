const Engineer = require('../lib/Engineer.js')

describe('Engineer properties', () => {
    test('Should have the properties of, name, id, email and github', () => {
        
        const name = 'Andrew'
        const email = 'andrew@email.com'
        const github = 'Devv'

        const person = new Engineer(name, email, github)
        person.id = '45'

        expect(person._name).toBe(name)
        expect(person._id).toBe(45)
        expect(person._email).toBe(email)
        expect(person._github).toBe(github)

    })

})

describe('Engineer methods', () => {
    test('When getName() is called it should return with the persons name', () => {

        const person = new Engineer('Max', 'max@email.com', 'De-max')
        expect(person.getName()).toBe('Max')
    })

    test('When getId() is called it should return with the persons id number', () => {

        const person = new Engineer('Max', 'max@email.com', 'De-max')
        person.id = '5'

        expect(person.getId()).toBe(5)
    })

    test('When getEmail() is called it should return with the persons email address', () => {

        const person = new Engineer('Max', 'max@email.com', 'De-max')
        expect(person.getEmail()).toBe('max@email.com')
    })

    test('When getGithub() is called it should return with the Engineer', () => {

        const person = new Engineer('Jasmine', 'jasmine@email.com', 'jasDev')
        expect(person.getGithub()).toBe('jasDev')
    })

    test('When getRole() is called it should return with the Engineer', () => {

        const person = new Engineer('Jasmine', 'jasmine@email.com')
        expect(person.getRole()).toBe('Engineer')
    })
    
}) 
