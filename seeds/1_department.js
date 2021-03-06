exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("department")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("department").insert([
        { name: "front-end" },
        { name: "back-end" },
      ]);
    });
};
