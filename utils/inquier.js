const inquirer = require("inquirer");
const dbStuff = require("./dbStuff");

module.exports.mainMenu = () => {
  inquirer
    .prompt([
      {
        name: "mainMenuOptions",
        type: "list",
        message: "What would you like to do?:",
        choices: [
          "View All employees",
          "View All employees by department",
          "View All employees by manager",
          "Add Employee",
          "Remove Employee",
          "Update Employee role",
          "Update Employee Manager",
          "Add Role",
          "Remove Role",
          "View Departments",
          "Add Department",
          "Remove Department",
          "Exit",
        ],
      },
    ])
    .then((answer) => {
      console.log(answer.mainMenuOptions);
      switch (answer.mainMenuOptions) {
        case "View Departments":
          dbStuff.getListOfAllDepartments();
          console.log("View Departments");
          break;
        case "View All employees":
          //View ALl Employees In the database
          break;
        case "Update Employee Manager":
          console.log("Update Employee Manager");
          break;
        case "View All employees by manager":
          console.log("View All employees by manager");
          break;
        case "Add Employee":
          console.log("Add Employee");
          break;
        case "Remove Employee":
          console.log("Remove Employee");
          break;
        case "Update Employee role":
          console.log("Update Employee role");
          break;
      }
    });
};
