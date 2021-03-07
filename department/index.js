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

async function getDepartmentID(x) {
  let p = [];
  const Departments = await Department.query().where({ name: x });
  Departments.forEach((d) => {
    p.push(d["id"]);
  });
  return p;
}
async function addDepartment(x) {
  return await Department.query().insert({ name: x });
}

async function removeDepartments(b) {
  return await Department.query().delete().where({ name: b });
}
departmentList();
module.exports = {
  departmentList: departmentList,
  addDepartment: addDepartment,
  removeDepartments: removeDepartments,
  getDepartmentID: getDepartmentID,
};
