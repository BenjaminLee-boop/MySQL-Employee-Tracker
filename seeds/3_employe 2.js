exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("employee")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("employee").insert([
        { firstName: "benjamin", lastName: "Lee", role_id: 1 },
        { firstName: "John", lastName: "Doe", role_id: 2, manager_id: 1 },
        { firstName: "Taylor", lastName: "Swift", role_id: 2, manager_id: 1 },
        { firstName: "Bill", lastName: "Gates", role_id: 2, manager_id: 1 },
      ]);
    });
};
