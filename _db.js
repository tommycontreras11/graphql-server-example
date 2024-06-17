let games = [
  {
    id: '1',
    title: 'The Legend of Zelda: Breath of the Wild',
    platform: ['Nintendo Switch', 'Wii U'],
  },
  {
    id: '2',
    title: 'God of War',
    platform: ['PlayStation 4', 'PlayStation 5'],
  },
  {
    id: '3',
    title: 'Minecraft',
    platform: ['PC', 'Xbox One', 'PlayStation 4', 'Nintendo Switch'],
  },
];

let authors = [
  { id: '1', name: 'Jane Doe', verified: true },
  { id: '2', name: 'John Smith', verified: false },
  { id: '3', name: 'Alice Johnson', verified: true },
];

let reviews = [
  {
    id: '1',
    rating: 9,
    content: 'An amazing open-world adventure!',
    author_id: '1',
    game_id: '1',
  },
  {
    id: '2',
    rating: 9,
    content: 'Incredible graphics and story.',
    author_id: '2',
    game_id: '2',
  },
  {
    id: '3',
    rating: 8,
    content: 'Endless creativity and fun.',
    author_id: '3',
    game_id: '3',
  },
];

export default { games, authors, reviews };
