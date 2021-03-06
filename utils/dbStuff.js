const knex = require("./db_connect");

module.exports.createRole = (knex, role, sallary) => {};
module.exports.updateRole = (knex, id, data) => {};
module.exports.asignRole = (knex, user_id) => {};

function getListOfAllDepartments() {
  return knex("department").then();
}

function addDepartment(x) {
  console.log(x);
  knex("department")
    .insert({ name: x })
    .then(() => {});
}

module.exports = {
  getListOfAllDepartments: getListOfAllDepartments,
  addDepartment: addDepartment,
};
