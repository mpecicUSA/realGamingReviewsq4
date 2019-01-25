
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {userName: 'mpecic', email: "mpecic@me.com", password: "asdf"},
        {userName: 'lromero', email: "lromero@me.com", password: "asdf"},
        {userName: 'nugman', email: "nugman@me.com", password: "asdf"}
      ]);
    });
};
