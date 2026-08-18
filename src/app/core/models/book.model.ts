export interface Book {
  id: number;
  title: string;
  author: string;
  slug: string;
  description: string;
  synopsis: string;
  price: number | null;
  coverImage: string;
  publishedYear: string;
  category: string;
  status: 'Available' | 'Coming Soon';
}
