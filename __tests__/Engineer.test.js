const Engineer = require('../lib/Engineer.js')

describe('Engineer properties', () => {
    test('Should have the properties of, name, id, email and github', () => {
        
        const name = 'Andrew'
        const id = '45'
        const email = 'andrew@email.com'
        const github = 'Devv'

        const person = new Engineer(name, id, email, github)

        expect(person._name).toBe(name)
        expect(person._id).toBe('45')
        expect(person._email).toBe(email)
        expect(person._github).toBe(github)

    })

})

describe('Engineer methods', () => {
    test('When getName() is called it should return with the persons name', () => {

        const person = new Engineer('Max', '95', 'max@email.com', 'De-max')
        expect(person.getName()).toBe('Max')
    })

    test('When getId() is called it should return with the persons id number', () => {

        const person = new Engineer('Max', '95', 'max@email.com', 'De-max')
        expect(person.getId()).toBe('95')
    })

    test('When getEmail() is called it should return with the persons email address', () => {

        const person = new Engineer('Max', '95', 'max@email.com', 'De-max')
        expect(person.getEmail()).toBe('max@email.com')
    })

    test('When getGithub() is called it should return with the Engineer', () => {

        const person = new Engineer('Jasmine', '8', 'jasmine@email.com', 'jasDev')
        expect(person.getGithub()).toBe('jasDev')
    })

    test('When getRole() is called it should return with the Engineer', () => {

        const person = new Engineer('Jasmine', '8', 'jasmine@email.com', 'jasDev')
        expect(person.getRole()).toBe('Engineer')
    })
    
}) 
