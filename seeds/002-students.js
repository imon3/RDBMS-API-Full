
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { Name: 'Johnny', cohort_id: 1 },
        { Name: 'Jack', cohort_id: 2 },
        { Name: 'Jill', cohort_id: 3 },
        { Name: 'Mike', cohort_id: 1 },
        { Name: 'Tommy', cohort_id: 2 },
        { Name: 'Tammy', cohort_id: 3 }
      ]);
    });
};
