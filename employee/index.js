require("dotenv").config();
const Employee = require("./employee.model");

async function employeeList() {
  const Employees = await Employee.query();
  return Employees;
}
async function employeById(x) {
  const Employees = await Employee.query().where({ role_id: x });
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

async function updateEmplyee(x, y) {
  return await Employee.query().patch({ role_id: y }).where({ fullName: x });
}
module.exports = {
  employeeList: employeeList,
  addEmployeet: addEmployeet,
  removeEmplyees: removeEmplyees,
  updateEmplyee: updateEmplyee,
  employeById: employeById,
};
