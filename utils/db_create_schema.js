module.exports.genDepartment = (knex) => {
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
};
