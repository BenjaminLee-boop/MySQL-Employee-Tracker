const { Model } = require("objection");
const db = require("../utils/db_connect");
require("dotenv").config();

Model.knex(db);

class Role extends Model {
  static get tableName() {
    return "role";
  }
}

module.exports = Role;
