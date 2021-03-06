exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("department")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("department").insert([
        { name: "Production" },
        { name: "Research and Development" },
        { name: "Human Resource Management" },
        { name: "Accounting and Finance" },
        { name: "Purchasing" },
      ]);
    });
};
