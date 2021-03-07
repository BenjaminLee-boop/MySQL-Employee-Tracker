const { Model } = require("objection");
const db = require("../utils/db_connect");
require("dotenv").config();

Model.knex(db);

class Employee extends Model {
  static get tableName() {
    return "employee";
  }
}

module.exports = Employee;
