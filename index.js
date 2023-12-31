const fs = require('fs');
const inquirer = require('inquirer');

// const { Triangle, Circle, Square } = require('')

inquirer.prompt([
    {
        name: "Letters",
        message: "Enter three letters!",
        type: "input",
        validate: function(input){
           if(input.length==3){
            return true
           }
           return "three characters only" 
        }
    },
    {
        name: "Color",
        message: "Which color would you like?",
        type: "input",
    }, 
    {
        name: "ShapeClass",
        message: "What shape would you like to use ?",
        type: "list",
        choices: ["Triangle", "Circle", "Square"],
    },
    {
        name: "ShapeColor",
        message: "What color is the shape ?",
        type: "input",
    },
])
fs.writeFile('logo.svg', '', function (err) {
    if (err) throw err;
    // console.log('Saved!');
  });
  init();