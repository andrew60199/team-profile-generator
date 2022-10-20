// Begin by defining the questions we will ask

const managerQuestions = [
    {
        type: 'input',
        name: 'managersName',
        message: 'Welcome to the team profile generator. Let\'s begin by entering the manager\'s name: ',
    },
    {
        type: 'number',
        name: 'managersId',
        message: 'What is the manager\'s employee ID? ',
    },
    {
        type: 'input',
        name: 'managersEmail',
        message: 'Thank you, please enter the manager\'s email address:'
    },
    {
        type: 'number',
        name: 'managersOfficeNumber',
        message: 'Finally, what is their office number? '
    }
];

const employeeQuestions = [
    {
        type: 'list',
        name: 'employeeType',
        message: 'Who would you like to add to the team? ',
        choices: [
            'Engineer',
            'Intern'
        ]
    },
    {
        type: 'input',
        name: 'employeesName',
        message: 'Please enter the employee\'s name: ',
    },
    {
        type: 'number',
        name: 'employeesId',
        message: 'What is the employee\'s employee ID? ',
    },
    {
        type: 'input',
        name: 'employeesEmail',
        message: 'Thank you, please enter the employee\'s email address:'
    },
    {
        type: 'input',
        name: 'engineersGithub',
        message: 'What is the engineer\'s github? ',
        when(answers){
            if (answers.employeeType === 'Engineer') {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'internsSchool',
        message: 'What school did/is the intern graduating from? ',
        when(answers){
            if (answers.employeeType === 'Intern') {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: 'confirm',
        name: 'addAnotherEmployee',
        message: 'Would you like to enter in the details of another employee?'
    }
]

module.exports = { managerQuestions, employeeQuestions}