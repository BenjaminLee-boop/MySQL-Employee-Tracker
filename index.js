require("dotenv").config();
const inquirer = require("inquirer");
const dbStuff = require("./utils/dbStuff");
const department = require("./department/index");
const employee = require("./employee");
const role = require("./role/index");
const cTable = require("console.table");

const inquirerMenu = require("./utils/inquier");
function mainMenu() {
  inquirer
    .prompt([
      {
        name: "mainMenuOptions",
        type: "list",
        message: "What would you like to do?:",
        choices: [
          "View All employees", //Done
          "View All employees by department", // Done
          "View All employees by manager", // Future Realese
          "Add Employee", //Done
          "Remove Employee", //Done
          "Update Employee role", //Done
          "Update Employee Manager", //Future Realese
          "Add Role", // Done
          "View Role", //Done
          "Remove Role", //Done
          "View Departments", //Done
          "Add Department", //Done
          "Remove Department", //Done
          "Exit", //Done
        ],
      },
    ])
    .then((answer) => {
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
        case "View Role":
          roleView();
          break;
        case "Add Role":
          addRole();
          break;
        case "Remove Role":
          removeRole();
          break;
        case "Update Employee role":
          updateEmployeeRole();
          break;
        case "View All employees by department":
          viewByDepartment();
          break;
        case "Exit":
          process.exit(1);
      }
    });
}
async function departmentView() {
  const data = await department.departmentList();
  console.table(data);
  mainMenu();
}
async function addDepartment() {
  const answers = await inquirer.prompt([
    {
      name: "Department",
      message: "Name of Department you would like to add",
    },
  ]);
  department.addDepartment(answers.Department);
  mainMenu();
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
      department.removeDepartments(e.mainMenuOptions);
      mainMenu();
    });
}
async function employeeView() {
  const data = await employee.employeeList();
  console.table(data);
  mainMenu();
}
async function addEmployee() {
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
async function roleView() {
  const data = await role.roleList();
  console.table(data);
  mainMenu();
}
async function addRole() {
  const data = await department.departmentList();
  const answers = await inquirer.prompt([
    {
      name: "title",
      message: "Enter your Role name.",
    },
    {
      name: "salary",
      message: "Enter Role Salary",
      type: "number",
    },
    {
      name: "departmentList",
      type: "list",
      message: "Department List",
      choices: data,
    },
  ]);
  const p = await department.getDepartmentID(answers.departmentList);
  role.addRole(answers.title, answers.salary, p[0]);
  mainMenu();
}
async function removeRole() {
  const data = await role.roleList();
  let arr = [];
  data.forEach((e) => {
    arr.push(e.title);
  });
  const answers = await inquirer.prompt([
    {
      name: "departmentList",
      type: "list",
      message: "Role to Remove?",
      choices: arr,
    },
  ]);
  role.removeRole(answers.departmentList);

  mainMenu();
}
async function updateEmployeeRole() {
  const rl = await role.roleList();
  const el = await employee.employeeList();
  let elarr = [];
  let rlarr = [];
  el.forEach((e) => {
    elarr.push(e["fullName"]);
  });
  rl.forEach((e) => {
    rlarr.push(e["title"]);
  });
  const answers = await inquirer.prompt([
    {
      name: "employeeList",
      type: "list",
      message: "Emplyee to add Role to?",
      choices: elarr,
    },
    {
      name: "roleList",
      type: "list",
      message: "Emplyee to add Role to?",
      choices: rlarr,
    },
  ]);
  let arrFound = rl.filter(function (item) {
    if (item["title"] == answers.roleList) {
      return item;
    }
  });
  employee.updateEmplyee(answers.employeeList, arrFound[0]["id"]);
  mainMenu();
}
async function viewByDepartment() {
  let arry = [];
  const departmentList = await department.departmentList();
  departmentList.forEach((e) => arry.push(e["name"]));
  const answear = await inquirer.prompt([
    {
      name: "mainMenuOptions",
      type: "list",
      message: "Department List",
      choices: arry,
    },
  ]);

  const id = await department.getDepartmentID(answear.mainMenuOptions);
  const p = await role.viewRoleByDepartmentId(id);
  try {
    const employeeListByRole = await employee.employeById(p["0"]["id"]);
    console.table(employeeListByRole);
  } catch (error) {
    mainMenu();
  }
  mainMenu();
}
mainMenu();
