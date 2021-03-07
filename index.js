require("dotenv").config();
const inquirer = require("inquirer");
const dbStuff = require("./utils/dbStuff");
const department = require("./department/index");
const employee = require("./employee");

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
          departmentView();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Remove Department":
          removeDepartment();
          break;
        case "View All employees":
          employeeView();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Remove Employee":
          removeEmployee();
          break;
        case "Exit":
          process.exit(1);
      }
    });
}
async function departmentView() {
  const data = await department.departmentList();
  inquirer
    .prompt([
      {
        name: "mainMenuOptions",
        type: "list",
        message: "Department List",
        choices: data,
      },
    ])
    .then((e) => {
      mainMenu();
    });
}
async function addDepartment() {
  inquirer
    .prompt([
      {
        name: "Department",
        message: "Name of Department you would like to add",
      },
    ])
    .then((answers) => {
      department.addDepartment(answers.Department);
      mainMenu();
    });
}
async function removeDepartment() {
  const data = await department.departmentList();
  inquirer
    .prompt([
      {
        name: "mainMenuOptions",
        type: "list",
        message: "Department List",
        choices: data,
      },
    ])
    .then((e) => {
      console.log(e.mainMenuOptions);
      department.removeDepartments(e.mainMenuOptions);
      mainMenu();
    });
}

async function employeeView() {
  const data = await employee.employeeList();
  let arr = [];
  data.forEach((e) => {
    arr.push(e["firstName"] + " " + e["LastName"]);
  });
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

async function addEmployee(params) {
  inquirer
    .prompt([
      {
        name: "FirstName",
        message: "Enter the first name for employee",
      },
      {
        name: "lastName",
        message: "Enter the Last name for employee",
      },
    ])
    .then((answers) => {
      employee.addEmployeet(answers.FirstName, answers.lastName);
      mainMenu();
    });
}
async function removeEmployee() {
  const data = await employee.employeeList();
  let arr = [];
  data.forEach((e) => {
    arr.push(e["firstName"] + " " + e["LastName"]);
  });
  inquirer
    .prompt([
      {
        name: "mainMenuOptions",
        type: "list",
        message: "Emplyee list",
        choices: arr,
      },
    ])
    .then((e) => {
      let res = e.mainMenuOptions;
      employee.removeEmplyees(res);
      mainMenu();
    });
}
mainMenu();
