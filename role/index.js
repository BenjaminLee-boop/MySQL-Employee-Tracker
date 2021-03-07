const role = require("./Role");

require("dotenv").config();

async function roleList() {
  let x = [];
  const Roles = await role.query();
  return Roles;
}
async function addRole(x, y, b) {
  return await role.query().insert({ title: x, salary: y, department_id: b });
}

async function removeRole(x) {
  return await role.query().delete().where({ title: x });
}
module.exports = {
  roleList: roleList,
  addRole: addRole,
  removeRole: removeRole,
};
