import { Injectable } from '@angular/core';

import { books } from '../../data/books';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks(): Book[] {
    return books;
  }

  getBookBySlug(slug: string): Book | undefined {
    return books.find((book: Book) => book.slug === slug);
  }
}
