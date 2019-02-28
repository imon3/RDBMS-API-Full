
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        { Name: 'WEB16' },
        { Name: 'WEB15' },
        { Name: 'WEB14' }
      ]);
    });
};
