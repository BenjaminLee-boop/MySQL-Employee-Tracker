const Department = require("./Department.model");

require("dotenv").config();

async function departmentList() {
  let x = [];
  const Departments = await Department.query();
  Departments.forEach((d) => {
    x.push(d["name"]);
  });
  return x;
}
async function addDepartment(x) {
  return await Department.query().insert({ name: x });
}

async function removeDepartments(x) {
  return await Department.query().delete().where({ name: x });
}
departmentList();
module.exports = {
  departmentList: departmentList,
  addDepartment: addDepartment,
  removeDepartments: removeDepartments,
};
