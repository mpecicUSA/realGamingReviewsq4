
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {id: 1, game_id: 1, user_id: 1, hours_played: 500, rating: 9, platform: 'Xbox', review_title: 'Purple Death Storm', review: 'Halo 2 has brought us the greatest dual weapon combo...the double needler.  Nothing is more satifying than unleashing a barrage of lethal alien needles at your opponent, watching them lock on and explode.  Highly reccommend playing.'},
        {id: 1, game_id: 2, user_id: 2, hours_played: 2, rating: 1, platform: 'Playstation', review_title: '#boring', review: 'Lame game. Dragons do not exist and if they did then they would not be as small as Spyro.  They should be super swol and huge.'},
        {id: 1, game_id: 3, user_id: 3, hours_played: 10000, rating: 10, platform: 'Nintendo', review_title: 'The GOAT of Games', review: 'Officially the greatest game of all time and the root of my childhood happiness.  I have spent thousands of hours playing and it is still entertaining and enjoyable to play.  Everytime I play I challenge myself to be more efficient and complete the game faster.  Some times doing things out of order is the best way to get through the game.'}
      ]);
    });
};
