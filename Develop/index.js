// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "Description",
        message: "Please describe your application",
    },
    {
        type: "input",
        name: "Installation",
        message: "How is your application accessed?",
    },
    {
        type: "input",
        name: "Usage",
        message: "What languages were used to create this project?",
    },
    {
        type: "checkbox",
        name: "License",
        message: "Please select a license",
        choices: ["MIT", "APACHE2.0", "N/A"],
    },
    {
        type: "input",
        name: "Contributors",
        message: "Please complete all test during demo"
    },
    {
        type: "input",
        name: "Test",
        message: "N/A"
    },
    {
        type: "input",
        name: "GitHub",
        message: "Please provide your GitHub username",
    },
    {
        type: "input",
        name: "Email",
        message: "Please provide your email address",
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.promt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();
