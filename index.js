const inquirer = require('inquirer')
const { managerQuestions, employeeQuestions } = require('./src/questions.js')
const generateCards = require('./src/generateCards.js')

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
                generateCards(responses)
            }
        })
}

const collectData = () => {

    inquirer.prompt(managerQuestions)
        .then(data => {
            responses.push(data)
            addemployee()
        })
        .catch((err) => console.error(err));

}

collectData()
