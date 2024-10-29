// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

const inquire = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "questionONe",
      name: "var1",
    },
    {
      type: "input",
      message: "question2?",
      name: "var2",
    },
    {
      type: "list",
      message: "question3?",
      name: "var3",
      choices: ["x", "y", "z"],
    },
    {
      type: "input",
      message: "question4?",
      name: "var4",
    },
  ])
  .then((response) => {
    console.log(
      "Your logo will be ",
      response.text,
      response.textColor,
      response.shape,
      response.shapeColor,
      "!"
    );
    writeToFile(response);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
