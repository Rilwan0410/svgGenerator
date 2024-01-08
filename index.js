const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes");
const { triangle, circle, square } = shapes;

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message:
        "What text do you want insider your Logo? (Cannot be more than 3 characters)",
    },
    {
      type: "list",
      name: "shape",
      message: "What do you want the shape of your logo to be?",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: (values) => {
        let { shape } = values;
        switch (shape) {
          case "Circle":
            return "What color do you want your circle to be?";
            break;
          case "Triangle":
            return "What color do you want your triangle to be?";
            break;
          case "Square":
            return "What color do you want your square to be?";
            break;
        }
      },
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "list",
      name: "textColorCode",
      message:
        "Do you want the color of your text to be a color keyword or a hexidecimal number?",
      choices: ["Color Keyword", "Hexidecimal Number"],
    },
    {
      type: "input",
      name: "textColorValue",
      message: (values) => {
        let { textColorCode } = values;
        if (textColorCode == "Color Keyword") {
          return `Enter the Color:`;
        } else {
          return `Enter the Hexidecimal: #`;
        }
      },
    },
  ])
  .then((data) => {
    let { textColorValue, textColorCode } = data;
    if (textColorCode == "Hexidecimal Number") {
      console.log("yes");
      console.log(textColorValue.split(""));
      data.textColorValue = data.textColorValue.split("");
      data.textColorValue.unshift("#");
      data.textColorValue = data.textColorValue.join("");
    } else {
      return data;
    }
    return data;
  })
  .then((data) => {
    console.log(data);
    let { shape, text, shapeColor, textColorValue } = data;

    switch (shape) {
      case "Triangle":
        fs.writeFile(
          "logo.svg",
          new triangle(shapeColor, text.slice(0,3), textColorValue).createTriangle(),
          (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Generated logo.svg");
            }
          }
        );
        break;
      case "Square":
        fs.writeFile(
          "logo.svg",
          new square(shapeColor, text.slice(0,3), textColorValue).createSquare(),
          (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Generated logo.svg");
            }
          }
        );
        break;
      case "Circle":
        fs.writeFile(
          "logo.svg",
          new circle(shapeColor,text.slice(0,3), textColorValue).createCircle(),
          (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Generated logo.svg");
            }
          }
        );
        break;
    }
  });
