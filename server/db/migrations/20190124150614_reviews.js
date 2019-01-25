exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews',(table)=>{
        table.increments();
        table.integer("game_id")
          .references("id")
          .inTable("games")
          .onDelete("CASCADE")
          .notNullable()
          .index();
        table.integer("user_id")
          .references("id")
          .inTable("users")
          .onDelete("CASCADE")
          .notNullable()
          .index();
        table.string('hours_played');
        table.string('rating');
        table.string('platform');
        table.string('review_title');
        table.text('review');
        table.timestamps(true,true)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews')
};
