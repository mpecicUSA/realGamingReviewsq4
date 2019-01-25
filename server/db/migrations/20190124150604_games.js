
exports.up = function(knex, Promise) {
    return knex.schema.createTable('games', (table) => {
        table.increments();
        table.string('title');
        table.integer('rating');
        table.text('description');
        table.timestapms(true, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('games')
};
