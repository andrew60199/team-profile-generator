const inquirer = require('inquirer')
const { managerQuestions, employeeQuestions } = require('./src/questions.js')
// const { writeFile } = require('fs').promises

const responses = []

const addemployee = () => {
    inquirer.prompt(employeeQuestions)
        .then(data => {
 
            responses.push(data)

            // If they entered yes to add another employee we will then loop over the questions again
            if (data.addAnotherEmployee) {
                addemployee()
            } else {
                // Once they have entered enough team members we can then do something with the data!
                console.log(responses)
                console.log(`I ran on the way back!`)


            }
        })
}

const collectData = () => {

    inquirer.prompt(managerQuestions)
        .then(data => {

            responses.push(data)

            // Create a function that creates HTML card

            addemployee()
                
        })
        .catch((err) => console.error(err));

}

const init = () => {
    
    collectData()

}

init()