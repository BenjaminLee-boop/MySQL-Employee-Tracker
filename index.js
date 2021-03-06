require("dotenv").config();
const inquirer = require("inquirer");
const dbStuff = require("./utils/dbStuff");

const inquirerMenu = require("./utils/inquier");
function mainMenu() {
  console.clear();
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
          let data = dbStuff.getListOfAllDepartments();
          let dataArray = [];
          data.then((r) => {
            r.forEach((element) => {
              dataArray.push(element["name"]);
            });
            departmentView(dataArray);
          });

          break;
        case "View All employees":
          //View ALl Employees In the database
          break;
        case "Update Employee Manager":
          console.log("Update Employee Manager");
          break;
        case "Add Department":
          addDepartment();
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
}
function departmentView(arr) {
  console.clear();
  inquirer
    .prompt([
      {
        name: "mainMenuOptions",
        type: "list",
        message: "Department List",
        choices: arr,
      },
    ])
    .then((e) => {
      mainMenu();
    });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "departmentName",
        message: "Enter the department you would like to add?",
      },
    ])
    .then((e) => {
      dbStuff.addDepartment(e.departmentName);
      mainMenu();
    });
}

function removeDepartment(arr) {}

mainMenu();
