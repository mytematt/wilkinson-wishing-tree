export interface Book {
  id: number;
  title: string;
  author: string;
  slug: string;
  description: string;
  price: number | null;
  coverImage: string;
  publishedYear: number;
  category: string;
  status: 'Available' | 'Coming Soon';
}
