const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "number",
      name: "text",
      message:
        "How many characters do you want into your logo? (cannot be more than three characters)",
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
    let filename = "logo.svg";

    fs.writeFile(filename, `hi`, (err) => {
        if(err){
            console.log(err)
        }else {
            console.log('Generated logo.svg')
        }
    });
  });
