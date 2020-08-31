

const fs = require("fs");
const inquirer = require("inquirer");
let generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your Guthub username?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of you project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please fill in a description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "How does a user install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How would a user use your project?",
  },
  {
    type: "list",
    choices: ["MIT", "GNU-GPLv3", "GNU AGPLv3", "GNU LGPLv3", "Unilicense", "Boost Software License 1.0", "Apache Lincense 2.0", "Mozilla Public License 2.0"],
    name: "licensing",
  },
  {
    type: "input",
    name: "contributions",
    message: "Please give guidelines for contributors.",
  },
  {
    type: "input",
    name: "testing",
    message: "Describe any testing used on your project.",
  },
  {
    type: "input",
    name: "githubpic",
    message: "Please provide the url for your profile picture.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your github email address.",
  },
];

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName + '.md', data, error => error ? console.error(error) : console.log(`${fileName + '.md'} generated!`))
}

function promptUser() {
  return inquirer.prompt(questions).then(function (answers) {
    fs.writeFile("README.md", generateMarkdown(answers), function (err) {
      if (err) {
        console.log(err);
      }
      console.log("You've created a readme!");
    });
  });
}

promptUser();