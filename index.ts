#! /usr/bin/env node

import inquirer from "inquirer";

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
    choices: ["Addition", "subtraction", "multiplication", "division"],
  },
]);
if(answer.oprator === "Addition"){
  console.log("your value is" + answer.firstnumber + answer.secondnumber);
}
else if(answer.oprator === "subtraction"){
  console.log(answer.firstnumber - answer.secondnumber);
}
else if(answer.oprator === "multiplication"){
  console.log(answer.firstnumber * answer.secondnumber);
}

else if(answer.oprator === "division"){
  console.log(answer.firstnumber / answer.secondnumber);
}
else{
  console.log("your number is invalid");
}
console.log(`the code is end`);