import { Book } from '../core/models/book.model';

export const books: Book[] = [
  {
    id: 1,
    title: 'The Legend of the Great Pumpkin',
    author: 'Lani Wilkinson',
    slug: 'the-legend-of-the-great-pumpkin',
    description:
      'A timeless story celebrating kindness, imagination, and the magic of believing.',
    price: null,
    coverImage: '/assets/images/books/Cover.png',
    publishedYear: 2026,
    category: 'Children\'s Fiction',
    status: 'Available'
  },
  {
    id: 2,
    title: 'Wildflower Letters',
    author: 'Wilkinson Wishing Tree Publishing',
    slug: 'wildflower-letters',
    description:
      'A lyrical collection of heartfelt notes and reflections exploring resilience, belonging, and renewal.',
    price: null,
    coverImage: '/assets/images/books/GreatSnomanCover-comingsoon.png',
    publishedYear: 2027,
    category: 'Poetry',
    status: 'Available'
  }
];
