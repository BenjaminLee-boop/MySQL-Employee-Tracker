require("dotenv").config();

const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: process.env.DB_UNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});

knex.schema
  .createTable("department", (table) => {
    table.increments("id").primary();
    table.string("name");
  })
  .then(() => console.log("table created"))
  .catch((err) => {
    console.log(err);
    throw err;
  });

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
  })
  .finally(() => {
    knex.destroy();
  });
