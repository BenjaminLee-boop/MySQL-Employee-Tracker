exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("employee")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("employee").insert([
        {
          firstName: "benjamin",
          lastName: "Lee",
          fullName: "benjamin lee",
          role_id: 1,
        },
        {
          firstName: "John",
          lastName: "Doe",
          fullName: "John Doe",
          role_id: 2,
          manager_id: 1,
        },
        {
          firstName: "Taylor",
          lastName: "Swift",
          fullName: "Taylor Swift",
          role_id: 2,
          manager_id: 1,
        },
        {
          firstName: "Bill",
          lastName: "Gates",
          fullName: "Bill Gates",
          role_id: 2,
          manager_id: 1,
        },
      ]);
    });
};
