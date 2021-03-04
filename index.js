require("dotenv").config();

const dbUtil = require("./utils/db_create_schema");

const knex = require("./utils/db_connect");

dbUtil.genDepartment(knex);

knex.schema
  .createTable("role", (table) => {
    table.increments("id").primary();
    table.string("title");
    table.decimal("salary", 8, 4);
    table.integer("department_id").unsigned().references("department.id");
  })
  .then(() => console.log("table created"))
  .catch((err) => {
    console.log(err);
    throw err;
  });
knex.schema
  .createTable("employee", (table) => {
    table.increments("id").primary();
    table.string("firstName");
    table.string("LastName");
    table.integer("role_id").unsigned().references("role.id");
    table.integer("manager_id").unsigned();
  })
  .then(() => console.log("table created"))
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });
