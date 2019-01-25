
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments',(table)=>{
        table.increments();
        table.integer("review_id")
          .references("id")
          .inTable("reviews")
          .onDelete("CASCADE")
          .notNullable()
          .index();
        table.integer("user_id")
          .references("id")
          .inTable("users")
          .onDelete("CASCADE")
          .notNullable()
          .index();
        table.string('comment_title');
        table.string('comment');
        table.timestamps(true,true)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};
