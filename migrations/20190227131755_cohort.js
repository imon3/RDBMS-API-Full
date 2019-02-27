// changes to be applied to the database
exports.up = function (knex, Promise) {
    return knex.schema.createTable('cohorts', function (tbl) {
        tbl
            .increments()

        tbl
            .string('name', 128)
            .notNullable()
    })
};

// undo the changes of the structure
exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExist('cohorts')
};
