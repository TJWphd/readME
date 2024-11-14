// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown.js");

// Creates an array of questions for user input
const questions = [
  {
    type: "input",
    message: "what is your project's title?",
    name: "title",
  },
  {
    type: "input",
    message: "please describe your project",
    name: "description",
  },
  {
    type: "input",
    message: "what are the installation instructions?",
    name: "installation",
  },
  {
    type: "list",
    message: "what is the license information?",
    name: "badges",
    choices: ["MIT", "Apache 2.0", "Creative Commons"],
  },
  {
    type: "input",
    message: "what are the contribution guidelines?",
    name: "guidelines",
  },
  {
    type: "input",
    message: "what are the test instructions?",
    name: "testing",
  },
  {
    type: "input",
    message: "what is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "what is your email address?",
    name: "email",
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("Error writing to file", err);
    } else {
      console.log("README file has been created successfully!");
    }
  });
}

// function to initialize app
function init() {
  inquirer.prompt(questions).then(function (response) {
    console.log("Responses from Inquirer:", response);
    const generated = markdown(response);
    console.log("Generated Markdown:", generated);
    writeToFile("./output/README.md", generated);
  });
}
// Function call to initialize app
init();
