
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: 'Overwatch', rating: '9', description: 'A cartoon first person shooter, extremely competitive, has 21 characters!'},
        {title: 'Fortnite', rating: '8', description: 'Third person shooting game, it is a Battle Royale styled.'},
        {title: 'Skate 3', rating: '9', description: 'A third person skateboarding game that includes many different real life locations. Skate it up on Skate 3!'},
        {title: 'Call of duty: Black Ops', rating: '10', description: 'A modernized first person shooting game, that includes multi-player play, and Zombies!'},
        {title: 'Red Dead Redemption', rating: '10', description: 'Take it back to the Wild Wild West, living near limitlessly. Explore various areas that existed in 1911! '},
      ]);
    });
};
