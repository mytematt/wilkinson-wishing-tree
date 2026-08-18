import { Book } from '../core/models/book.model';

export const books: Book[] = [
  {
    id: 1,
    title: 'The Lantern Keeper',
    author: 'Wilkinson Wishing Tree Publishing',
    slug: 'the-lantern-keeper',
    description:
      'A warm and uplifting story about hope, community, and the light we carry for one another.',
    price: 18.99,
    coverImage: '/assets/images/books/lantern-keeper.jpg',
    publishedYear: 2024,
    category: 'Fiction',
    status: 'Available'
  },
  {
    id: 2,
    title: 'Wildflower Letters',
    author: 'Wilkinson Wishing Tree Publishing',
    slug: 'wildflower-letters',
    description:
      'A lyrical collection of heartfelt notes and reflections exploring resilience, belonging, and renewal.',
    price: 16.5,
    coverImage: '/assets/images/books/wildflower-letters.jpg',
    publishedYear: 2023,
    category: 'Poetry',
    status: 'Available'
  },
  {
    id: 3,
    title: 'The Orchard at Dusk',
    author: 'Wilkinson Wishing Tree Publishing',
    slug: 'the-orchard-at-dusk',
    description:
      'A gentle, beautifully told journey into memory, family, and the quiet wisdom of place.',
    price: 21.0,
    coverImage: '/assets/images/books/orchard-at-dusk.jpg',
    publishedYear: 2025,
    category: 'Novel',
    status: 'Coming Soon'
  }
];
