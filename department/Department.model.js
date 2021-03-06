const { Model } = require("objection");
const db = require("../utils/db_connect");
require("dotenv").config();

Model.knex(db);

class Department extends Model {
  static get tableName() {
    return "department";
  }
}

module.exports = Department;
