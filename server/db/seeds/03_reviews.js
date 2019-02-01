
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {game_id: 1, user_id: 1, hours_played: 500, rating: 9, platform: 'Xbox', review_title: 'Purple Death Storm', review: 'Halo 2 has brought us the greatest dual weapon combo...the double needler.  Nothing is more satifying than unleashing a barrage of lethal alien needles at your opponent, watching them lock on and explode.  Highly reccommend playing.'},
        {game_id: 1, user_id: 2, hours_played: 2, rating: 1, platform: 'Playstation', review_title: '#boring', review: 'Lame game. Dragons do not exist and if they did then they would not be as small as Spyro.  They should be super swol and huge.'},
        {game_id: 2, user_id: 3, hours_played: 10000, rating: 10, platform: 'Nintendo', review_title: 'The GOAT of Games', review: 'Officially the greatest game of all time and the root of my childhood happiness.  I have spent thousands of hours playing and it is still entertaining and enjoyable to play.  Everytime I play I challenge myself to be more efficient and complete the game faster.  Some times doing things out of order is the best way to get through the game.'},
        {game_id: 2, user_id: 1, hours_played: 45, rating: 4, platform: 'Xbox', review_title: 'Somewhat Fun', review: 'I would definitely not recommend that you play this if you are expecting an amazing game!' },
        {game_id: 3, user_id: 2, hours_played: 2, rating: 6, platform: 'Xbox', review_title: 'This was pretty exciting!', review: 'This was an amazing experience! I might spend another 4,000 hours playing.'},
        {game_id: 3, user_id: 3, hours_played: 233, rating: 7, platform: 'Xbox', review_title: "Words Can't Explain!", review: 'Have not had this much fun since my cousins baby shower.'},
        {game_id: 4, user_id: 1, hours_played: 67, rating: 8, platform: 'Xbox', review_title: 'The Most Fun Ever!', review: 'Talk about fun? You do not know it until you play this!'},
        {game_id: 4, user_id: 2, hours_played: 234, rating: 2, platform: 'Playstation', review_title: '#thissucked', review: 'I think this is easily the worst way to invest your time.'},
        {game_id: 5, user_id: 3, hours_played: 999, rating: 5, platform: 'Playstation', review_title: '#average', review: 'Not the worst thing i have ever dedicated my time to.'},
        {game_id: 5, user_id: 1, hours_played: 345, rating: 5, platform: 'Nintendo', review_title: '#average', review: 'Its whatever'},
        {game_id: 1, user_id: 2, hours_played: 2, rating: 6, platform: 'Nintendo', review_title: 'Havent Played Nintendo Since 2004', review: 'What a trip. Might have to invest into a Playstation.'},
        {game_id: 1, user_id: 3, hours_played: 234, rating: 8, platform: 'Nintendo', review_title: 'Truthfully Exciting', review: 'This was actually a lot of fun! Highly recommended!'},
        {game_id: 2, user_id: 1, hours_played: 126, rating: 10, platform: 'Playstation', review_title: 'Ecstatic!', review: 'This was easily the most fun i have ever had in my life.'},
        {game_id: 3, user_id: 2, hours_played: 4, rating: 10, platform: 'Xbox', review_title: '#wow', review: 'I have no words. Do i have to write a review?'},
        {game_id: 4, user_id: 3, hours_played: 5, rating: 10, platform: 'Xbox', review_title: 'WOAHHHHHH', review: 'Find out for yourself!!'}
      ]);
    });
};
