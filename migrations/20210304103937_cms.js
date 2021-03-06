exports.up = function (knex) {
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
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("employee")
    .dropTable("role")

    .dropTable("department");
};
