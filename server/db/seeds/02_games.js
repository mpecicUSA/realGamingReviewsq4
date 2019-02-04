
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: 'Overwatch', rating: '9', description: 'A cartoon first person shooter, extremely competitive, has 21 characters!', img: 'https://blznav.akamaized.net/img/games/cards/card-overwatch-7eff92e1257149aa.jpg'},
        {title: 'Fortnite', rating: '8', description: 'Third person shooting game, it is Battle Royale styled.', img: 'https://static-assets-prod.epicgames.com/fortnite/static/webpack/8704d4d5ffd1c315ac8e2c805a585764.jpg'},
        {title: 'Skate 3', rating: '9', description: 'A third person skateboarding game that includes many different real life locations. Skate it up on Skate 3!', img: 'https://naufaltrijaya.files.wordpress.com/2011/02/skate-3-logo.jpg'},
        {title: 'Call of duty: Black Ops', rating: '10', description: 'A modernized first person shooting game, that includes multi-player play, and Zombies!', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/CoD_Black_Ops_cover.png/220px-CoD_Black_Ops_cover.png'},
        {title: 'Red Dead Redemption', rating: '10', description: 'Take it back to the Wild Wild West, living near limitlessly. Explore various areas that existed in 1911!', img:'https://media.rockstargames.com/rockstargames-newsite/uploads/c28d2de88645853f1b9c6e72e68ec72325aa8ac0.jpg'},
      ]);
    });
};
