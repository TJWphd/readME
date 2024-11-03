// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input
const questions = [];

const inquire = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown.js");

inquire
  .prompt([
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
  ])
  .then((response) => {
    writeToFile(response);
  });

// TODO: Create a function to write README file
function writeToFile(data) {
  console.log(markdown(data));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
