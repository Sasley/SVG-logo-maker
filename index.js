const fs = require('fs');
const inquirer = require('inquirer');
const generateLogo = require(logo.svg)
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
    console.log('Saved!');
  });

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered