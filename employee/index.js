require("dotenv").config();
const Employee = require("./employee.model");

async function employeeList() {
  let x = [];
  const Employees = await Employee.query();
  return Employees;
}
async function addEmployeet(x, y) {
  return await Employee.query().insert({
    firstName: x,
    lastName: y,
    fullName: x + " " + y,
  });
}
async function removeEmplyees(x) {
  return await Employee.query().delete().where({ fullName: x });
}
module.exports = {
  employeeList: employeeList,
  addEmployeet: addEmployeet,
  removeEmplyees: removeEmplyees,
};
