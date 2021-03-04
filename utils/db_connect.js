module.exports = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: process.env.DB_UNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});
