#! /usr/bin/env node

import inquirer from "inquirer";

//use inquirer to ask a numbers
const answer = await inquirer.prompt(
  [
  { message: "enter your first number",
   type: "number",
    name: "firstnumber"
  },

  { message: "enter second number",
   type: "number",
    name: "secondnumber" 
  },

  {
    message: "select one of the oprator",
    type: "list",
    name: "oprator",
    choices: ["Addition ( + )", "subtraction ( - )", "multiplication ( * )", "division ( / )", "moduleous ( % )"]
  },
]);
const addition = async () => {
  console.log(`Answer is: ${answer.firstnumber + answer.secondnumber}`)
}

const subtraction = async () => {
  console.log(`Answer is :${answer.firstnumber - answer.secondnumber}`)
}
 
const multiplication = async () => {
  console.log(`Answer is :${answer.firstnumber * answer.secondnumber}`)
}

const division = async () => {
  console.log(`Answer is :${answer.firstnumber / answer.secondnumber}`)
}

const modulo = async () => {
  console.log(`Answer is :${answer.firstnumber % answer.secondnumber}`)
}


switch (answer.oprator) {
  case "Addition":
    addition();
    break;
  case "subtraction":
    subtraction();
    break;
  case "multiplication":
    multiplication();
    break;
  case "division":
    division();
    break;
  case "modulo":
    modulo();
    break;
  default:
    console.log("invalid oprator");
    break;
}
