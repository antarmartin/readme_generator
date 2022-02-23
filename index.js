const inquirer = require('inquirer');
const fs = require('fs');
const generate = require();
const path = require('path');

inquirer 
    .prompt([
        {
            type: "input",
            message: "What is the name of your project title?",
            name: "title",

            type: "input",
            message: "What is the the description for your project?",
            name: "description"
        }
    ])
