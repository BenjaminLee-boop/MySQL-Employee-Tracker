const inquirer = require("inquirer");
const department = require("./Department.model");
const { Model } = require("objection");
const db = require("../utils/db_connect");
require("dotenv").config();

Model.knex(db);

class Department extends Model {
  // Tells objection what the db
  // table is for the model
  static get tableName() {
    return "department";
  }
}

module.exports = Department;
