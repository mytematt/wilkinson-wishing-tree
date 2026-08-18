import { Book } from '../core/models/book.model';

export const books: Book[] = [
  {
    id: 1,
    title: 'The Legend of the Great Pumpkin',
    author: 'Lani Wilkinson',
    slug: 'the-legend-of-the-great-pumpkin',
    description:
      'A timeless story celebrating kindness, imagination, and the magic of Halloween.',
    synopsis:
      'Every Halloween has its magic...\n\nLong ago, in the peaceful fields of Pumpkin Hollow, one imperfect pumpkin was chosen for an extraordinary purpose. Through the kindness of a humble farmer and a touch of Halloween magic, the Great Pumpkin was born—a joyful guardian whose greatest wish is to spread kindness, wonder, and Halloween happiness.\n\nNow, each Halloween, as costumes twirl, laughter fills the air, and candy baskets overflow, the Great Pumpkin listens for heartfelt wishes. Legend says that children who leave their Halloween candy behind and make a sincere wish may awaken to a magical surprise.',
    price: null,
    coverImage: '/assets/images/books/Cover.png',
    publishedYear: '2026',
    category: 'Children\'s Fiction',
    status: 'Available'
  },
  {
    id: 2,
    title: 'The Legend of the Great Snowman',
    author: 'Lani Wilkinson',
    slug: 'the-legend-of-the-great-snowman',
    description:
      'A timeless story celebrating kindness, imagination, and the magic of winter.',
    synopsis:
      'A snowy adventure full of warmth, play, and family tradition, reminding readers that the joy of the season is found in the stories shared together and the memories made along the way.',
    price: null,
    coverImage: '/assets/images/books/GreatSnomanCover-comingsoon.png',
    publishedYear: 'TBD',
    category: 'Children\'s Fiction',
    status: 'Coming Soon'
  }
];
