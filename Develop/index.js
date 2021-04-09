// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// ARRAY DATA
// let data = [
//     {
//         projectTitle: ${projectTitle}
//     }
// ];

// TODO: Create an array of questions for user input
const questions = [
    {
     type: 'input',
     name: 'projectTitle',
     message: 'What is the name of your project? (Required)',
     validate : projectTitleInput => {
        if (projectTitleInput) {
            return true;
        } else {
            console.log('You need to enter a project name!');
            return false;
        }
     }
    },
    {
     type: 'input',
     name: 'description',
     message: 'Provide a description of the project (Required)',
     validate : descriptionInput => {
        if (projectTitleInput) {
            return true;
        } else {
            console.log('You need to enter a project description!');
            return false;
        }
     }  
    },
    {
     type: 'input',
     name: 'installation',
     message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)',
     validate : installationInput => {
        if (installationInput) {
            return true;
        } else {
            console.log('You need to enter installation information!');
            return false;
        }
     }  
    },
    {
     type: 'input',
     name: 'usage',
     message: 'Provide instructions and examples for use. (Required)',
     validate : usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('You need to enter usage information!');
            return false;
        }
     }  
    },
    {
     type: 'input',
     name: 'contributing',
     message: 'Provide contributors of the project. (Required)',
     validate : contributingInput => {
        if (contributingInput) {
            return true;
        } else {
            console.log('You need to enter contribution information!');
            return false;
        }
     }  
    },
    {
     type: 'input',
     name: 'tests',
     message: 'Provide tests for your application. Then provide examples on how to run them. (Required)',
     validate : testsInput => {
        if (testsInput) {
            return true;
        } else {
            console.log('You need to enter tests information!');
            return false;
        }
     }  
    },
    {
     type: 'checkbox',
     name: 'license',
     message: 'Select the license you use for this project.',
     choices: ['MIT', 'GPLv2', 'GPLv3', 'mpl-2.0', 'BSD', 'mpl-2.0', 'afl-3.0', 'Apache License 2.0'], 
    },
    {
     type: 'input',
     name: 'github',
     message: 'Enter your GitHub Username. (Required)',
     validate : githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Please enter your GitHub username!');
            return false;
        }
     }  
    },
    {
     type: 'input',
     name: 'emailAddress',
     message: 'Enter your email address. (Required)',
     validate : emailAddressInput => {
        if (emailAddressInput) {
            return true;
        } else {
            console.log('Please enter your email address!');
            return false;
        }
     }  
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// const pageMd = generateMarkdown();
// const pageMd = generateMarkdown(data);

fs.writeFile('index.md', generateMarkdown(), err => {
    if (err) throw new Error(err);
    console.log('Page created! Check out index.html in this directory to see it!');
});

// TODO: Create a function to initialize app
function init() {};

// Function call to initialize app
init();
