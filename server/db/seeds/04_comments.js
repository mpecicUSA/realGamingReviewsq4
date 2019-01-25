
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {review_id: 1, user_id: 3, comment_title: 'Hell Ya Brother!', comment: 'I could not agree more about this statement! You would be a formidible opponent...'},
        {review_id: 2, user_id: 1, comment_title: 'You Cray', comment: 'I think that you are mad at this game because you are identifying as Spyro but want to be bigger like a real man...I mean dragon....'},
        {review_id: 3, user_id: 2, comment_title: 'I am convinced', comment: 'Okay okay I guess I will try out Zelda.'}
      ]);
    });
};
