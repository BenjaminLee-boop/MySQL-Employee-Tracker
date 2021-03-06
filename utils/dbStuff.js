const knex = require("./db_connect");

module.exports.createRole = (knex, role, sallary) => {};
module.exports.updateRole = (knex, id, data) => {};
module.exports.asignRole = (knex, user_id) => {};

module.exports.getListOfAllDepartments = () => {
  let x = [];
  knex("department").then((rows) => {
    console.table(rows);
    knex.destroy();
  });
};
