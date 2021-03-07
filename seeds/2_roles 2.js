exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("role")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("role").insert([
        { title: "Lead Dev", salary: 120000.0, department_id: 1 },
        { title: "New Dev", salary: 80000.0, department_id: 2 },
      ]);
    });
};
