const Engineer = require('../lib/Engineer.js')
const Intern = require('../lib/Intern.js')
const Manager = require('../lib/Manager.js')
const generateHtml = require('./generateHtml.js')
const { writeFile } = require('fs').promises

// Call upon each special aspect of the classes with their unique data
const getSpecialData = employee => {
    if (employee.hasOwnProperty('_officeNumber')) {
        return `
        <p>Office Number: <span class="bold">${employee.getOfficeNumber()}</span></p>`

    } else if (employee.hasOwnProperty('_github')) {
        return `
        <p>Github: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></p>`

    } else if (employee.hasOwnProperty('_school')) {
        return `
        <p>School: <span class="bold">${employee.getSchool()}</span></p>`

    } else {
        return ``
    }
}

const cardTemplate = employee => {

    return `
    <div class="card">
        <h2>${employee.getName()}</h2>
        <h3>${employee.getRole()}</h3>
        <div class="content">
            <p>ID: <span class="bold">${employee.getId()}</span></p>
            <p>Email: <a href="mailto:${employee.getEmail()}" target="_blank">${employee.getEmail()}</a></p>
            ${getSpecialData(employee)}
        </div>
    </div>`

}


const generateCards = userInput => {
    
    // Loop through the array and generate correct class for each employee
    // We don't know how many employees the user entered so we need to ensure it is dynamic

    const cardHolder = {html: ''}

    userInput.forEach(employee => {

        // Note: If we were to include more employee types this would break!
        if (employee.employeeType === 'Engineer') {

            // create an instance 
            // creates a card
            // which will then be used into the template
            const { employeesName, employeesId, employeesEmail, engineersGithub } = employee
            const engineer = new Engineer(employeesName, employeesId, employeesEmail, engineersGithub)

            cardHolder.html += cardTemplate(engineer)


        } else if (employee.employeeType === 'Intern') {

            const { employeesName, employeesId, employeesEmail, internsSchool } = employee
            const intern = new Intern(employeesName, employeesId, employeesEmail, internsSchool)

            cardHolder.html += cardTemplate(intern)

        } else {

            // Create managers class
            const { managersName, managersId, managersEmail, managersOfficeNumber } = employee
            const manager = new Manager(managersName, managersId, managersEmail, managersOfficeNumber)

            cardHolder.html += cardTemplate(manager)

        }
    })

    return writeToFile('./dist/team.html', cardHolder)
}

// Small function to help achieve the file creation
const writeToFile = (fileName, data) => {
    writeFile(fileName, generateHtml(data))
}

module.exports = generateCards