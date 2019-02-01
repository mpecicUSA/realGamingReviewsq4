
exports.up = function(knex, Promise) {
    return knex.schema.createTable('games', (table) => {
        table.increments();
        table.string('title');
        table.integer('rating');
        table.text('description');
        table.text('img');
        table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('games')
};
