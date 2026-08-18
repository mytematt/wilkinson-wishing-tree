export interface Book {
  id: number;
  title: string;
  author: string;
  slug: string;
  description: string;
  synopsis: string;
  hardcover?: string | null;
  paperback?: string | null;
  price: number | null;
  coverImage: string;
  publishedYear: string;
  category: string;
  status: 'Available' | 'Coming Soon';
}
